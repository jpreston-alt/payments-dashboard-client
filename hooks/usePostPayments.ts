import { useState } from "react";
import axios from "axios";
import { IFormFields, IUser } from "@/types";

interface IArgs {
  handleUpdatePayments: (object: any) => void;
  handleClose: () => void;
  users: IUser[];
}

const usePostPayments = ({
  handleUpdatePayments,
  handleClose,
  users,
}: IArgs) => {
  const [loading, setLoading] = useState(false);

  const handlePostPayments = async (formVals: IFormFields) => {
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
      handleUpdatePayments(payload);
      handleClose();
    } catch (e) {
      handlePostPayments(formVals);
    }
  };

  return {
    loading,
    handlePostPayments,
  };
};

export default usePostPayments;
