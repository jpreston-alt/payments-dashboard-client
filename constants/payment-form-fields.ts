import { IUser } from "@/types";

export const getFields = (users: IUser[]) => {
  const userOptions = users.map((user) => ({
    name: user.name,
    value: user.id,
  }));

  const fields = [
    {
      name: "sender",
      component: "Select",
      options: userOptions,
      required: true,
      placeholder: "Sender",
    },
    {
      name: "receiver",
      component: "Select",
      options: userOptions,
      required: true,
      placeholder: "Receiver",
    },
    {
      name: "amount",
      component: "TextField",
      type: "number",
      required: true,
      helperText: "Amount must be a number greater than 0",
      placeholder: "Amount",
    },
    {
      name: "currency",
      component: "Select",
      options: [
        { name: "BTC", value: "BTC" },
        { name: "GBP", value: "GBP" },
        { name: "EUR", value: "EUR" },
        { name: "JPY", value: "JPY" },
        { name: "USD", value: "USD" },
      ],
      required: true,
      placeholder: "Currency",
    },
    {
      name: "memo",
      component: "TextField",
      placeholder: "Memo",
    },
  ];

  return fields;
};
