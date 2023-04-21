import { IFormFieldProps, IUser, formFieldName } from "@/types";

export interface IProps {
  handleSubmit: (object: any) => void;
  handleClose: () => void;
  fields: IFormFieldProps[];
}
