import { IFormFieldProps, IUser, formFieldName } from "@/types";

export interface IProps {
  users: IUser[];
  handleSubmit: (object: any) => void;
  handleClose: () => void;
  fields: IFormFieldProps[];
}
