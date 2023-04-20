import { useState } from "react";
import axios from "axios";
import { payments, IFormFields, IUser } from "@/types";

const usePostPayment = () => {
  const [postedPayments, setPostedPayments] = useState<payments>([]);

  const handlePostPayments = async (formVals: IFormFields, users: IUser[]) => {
    const { amount, currency, memo, receiver, sender } = formVals;
    const payload = {
      id: Math.floor(Math.random() * 100000000).toString(),
      date: new Date().toISOString(),
      amount,
      currency,
      memo,
      receiver: users.find((user) => user.id === receiver),
      sender: users.find((user) => user.id === sender),
    };

    try {
      const res = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/payments`,
        payload
      );
      console.log(res);
    } catch (e) {
      console.log("ERROR", e.response.status);
    }
  };

  return { postedPayments, handlePostPayments };
};

export default usePostPayment;
