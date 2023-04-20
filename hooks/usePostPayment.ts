import { useState } from "react";
import axios from "axios";
import { payments, IFormFields, IUser } from "@/types";

const usePostPayment = () => {
  const [postedPayments, setPostedPayments] = useState<payments>([]);
  const [loading, setLoading] = useState(false);

  const handlePostPayments = async (formVals: IFormFields, users: IUser[]) => {
    setLoading(true);
    const { amount, currency, memo, receiver, sender } = formVals;
    const payload = {
      id: Math.floor(Math.random() * 100000000).toString(),
      date: new Date().toISOString(),
      amount,
      currency,
      memo,
      receiver: users.find((user) => user.id === receiver) as IUser,
      sender: users.find((user) => user.id === sender) as IUser,
    };

    try {
      await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/payments`, payload);
      setLoading(false);
      setPostedPayments((postedPayments) => [payload, ...postedPayments]);
    } catch (e) {
      handlePostPayments(formVals, users);
    }
  };

  return { postedPayments, handlePostPayments, loading };
};

export default usePostPayment;
