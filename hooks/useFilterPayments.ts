import React, { useState, useCallback } from "react";
import { payments } from "@/types";

interface IArgs {
  payments: payments;
}

// TODO maybe this can be a utilty function instead of a custom hook
const useFilterPayments = ({ payments }: IArgs) => {
  const [searchValue, setSearchValue] = useState("");

  const handleFilterPayments = useCallback(
    (val: string) => {
      if (!val) return payments;

      val = val.toLowerCase();

      const filteredBySearch = payments.filter((payment) => {
        const values = Object.values(payment);
        let isSearchedFor = false;

        // TODO refactor to use recursion
        values.forEach((v) => {
          if (typeof v === "object") {
            const objectValues = Object.values(v);
            objectValues.forEach((ov: any) => {
              ov = ov.toString().toLowerCase();
              if (ov.includes(val)) isSearchedFor = true;
            });
          } else {
            v = v.toString().toLowerCase();
            if (v.includes(val)) isSearchedFor = true;
          }
        });

        return isSearchedFor;
      });

      return filteredBySearch;
    },
    [payments]
  );

  const handleOnSearch = (event: React.ChangeEvent<HTMLInputElement>) =>
    setSearchValue(event.target.value);

  const filteredPayments = handleFilterPayments(searchValue);

  return { filteredPayments, searchValue, handleOnSearch };
};

export default useFilterPayments;
