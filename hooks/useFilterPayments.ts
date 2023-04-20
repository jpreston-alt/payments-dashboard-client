import React, { useState, useEffect, useCallback } from "react";
import { payments } from "@/types";

interface IArgs {
  payments: payments;
}

const useFilterPayments = ({ payments }: IArgs) => {
  const [filteredPayments, setFilteredPayments] = useState<payments>([]);
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

  useEffect(() => {
    const filtered = handleFilterPayments(searchValue);
    setFilteredPayments(filtered);
  }, [searchValue, handleFilterPayments]);

  const handleOnSearch = (event: React.ChangeEvent<HTMLInputElement>) =>
    setSearchValue(event.target.value);

  return { filteredPayments, searchValue, handleOnSearch };
};

export default useFilterPayments;
