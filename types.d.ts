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
