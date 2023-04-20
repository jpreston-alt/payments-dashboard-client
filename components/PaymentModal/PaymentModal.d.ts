import React from "react";
import { IUser } from "@/types";

export interface IProps {
  open: boolean;
  handleClose: () => void;
  users: IUser[];
}
