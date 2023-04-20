import { useState, useEffect } from "react";
import { payments } from "@/types";

const useGetPayments = () => {
  const [payments, setPayments] = useState<payments>([]);

  useEffect(() => {
    const timer = setInterval(() => {
      handleGetPayments();
    }, 1000);
    if (payments.length >= 25) return clearInterval(timer);
    return () => clearInterval(timer);
  }, [payments]);

  const handleGetPayments = async () => {
    const res = await fetch("http://localhost:8080/payments");
    const resJson = await res.json();
    setPayments((payments) => [...payments, resJson.data]);
  };

  return payments;
};

export default useGetPayments;
