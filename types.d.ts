interface IUser {
  id: number;
  name: string;
}

export interface IPayment {
  id: string;
  date: string;
  sender: IUser;
  receiver: IUser;
  amount: string;
  currency: string;
  memo: string;
}

export type payments = IPayment[] | [];

export interface User {
  name: string;
  id: number;
}

export type formFieldName =
  | "sender"
  | "receiver"
  | "amount"
  | "currency"
  | "memo";

export interface IFormFieldProps {
  name: formFieldName;
  component: "TextField" | "Select";
  type?: string;
  options?: { name: string; value: string }[];
  required?: boolean;
  helperText?: string;
}

export interface IFormFields {
  sender: string;
  receiver: string;
  amount: number;
  currency: string;
  memo: string;
}
