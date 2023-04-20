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
    },
    {
      name: "receiver",
      component: "Select",
      options: userOptions,
    },
    {
      name: "amount",
      component: "TextField",
      type: "number",
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
    },
    {
      name: "memo",
      component: "TextField",
    },
  ];

  return fields;
};
