import { useState } from "react";
import { useGetPayments, useFilterPayments } from "@/hooks";

// TODO delete this
const usePaymentDashboard = () => {
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const payments = useGetPayments();
  const { filteredPayments, searchValue, handleOnSearch } = useFilterPayments({
    payments,
  });

  const togglePaymentModal = () => setShowPaymentModal(!showPaymentModal);

  return {
    filteredPayments,
    searchValue,
    handleOnSearch,
    showPaymentModal,
    togglePaymentModal,
  };
};

export default usePaymentDashboard;
