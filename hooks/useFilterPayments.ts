import React, { useState, useCallback } from "react";
import { payments } from "@/types";
import { handleFilterTable } from "@/utils/handleFilterTable";

interface IArgs {
  payments: payments;
}

// hook to handle search and filtering logic
const useFilterPayments = ({ payments }: IArgs) => {
  const [searchValue, setSearchValue] = useState("");

  const handleOnSearch = (event: React.ChangeEvent<HTMLInputElement>) =>
    setSearchValue(event.target.value);

  const handleFilterPayments = useCallback(handleFilterTable, [payments]);

  const filteredPayments = handleFilterPayments({
    val: searchValue,
    arr: payments,
  });

  return { filteredPayments, searchValue, handleOnSearch };
};

export default useFilterPayments;
