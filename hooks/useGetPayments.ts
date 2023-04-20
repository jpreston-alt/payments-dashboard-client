import { useState, useEffect } from "react";
import { payments, IFormFields } from "@/types";

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
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/payments`);
    const resJson = await res.json();
    setPayments((payments) => [...payments, resJson.data]);
  };

  const handlePostPayments = (formVals: IFormFields) => {
    console.log(formVals);
  };

  return { payments, handlePostPayments };
};

export default useGetPayments;
