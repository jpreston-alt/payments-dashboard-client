import { IFormFieldProps, IFormFields } from "@/types";

interface IArgs {
  fields: IFormFieldProps[];
  formState: IFormFields;
}

export const validateFormFields = ({ fields, formState }: IArgs) => {
  let isValid = true;
  const errors = [] as any;

  fields.forEach((field) => {
    if (field.required && !formState[field.name]) {
      isValid = false;
      errors.push(field.name);
    }
  });

  return { isValid, errors };
};
