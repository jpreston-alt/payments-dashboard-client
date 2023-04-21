import { useState, useEffect } from "react";
import axios from "axios";
import { payments, IPayment } from "@/types";

const usePayments = () => {
  const [payments, setPayments] = useState<payments>([]);

  const handleUpdatePayments = (newPayment: IPayment) =>
    setPayments((payments) => [newPayment, ...payments]);

  useEffect(() => {
    const handleGetPayments = async () => {
      const res = await axios.get(
        `${process.env.NEXT_PUBLIC_API_URL}/payments`
      );
      handleUpdatePayments(res.data.data);
    };

    const timer = setInterval(() => {
      handleGetPayments();
    }, 1000);

    if (payments.length >= 25) return clearInterval(timer);

    return () => clearInterval(timer);
  }, [payments, handleUpdatePayments]);

  return { payments, handleUpdatePayments };
};

export default usePayments;
