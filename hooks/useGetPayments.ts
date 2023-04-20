import { useState, useEffect } from "react";
import axios from "axios";
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
    const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/payments`);
    setPayments((payments) => [res.data.data, ...payments]);
  };

  return { payments };
};

export default useGetPayments;
