import { IFormFieldProps } from "@/types";

export interface IProps extends IFormFieldProps {
  value: string | number;
  handleOnChange: (
    event:
      | React.ChangeEvent<HTMLInputElement>
      | SelectChangeEvent<string | number>
  ) => void;
}
