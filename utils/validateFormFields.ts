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
      errors.push({
        name: field.name,
        message: field.helperText || "This field is required",
      });
    }

    if (formState.sender && formState.sender === formState.receiver) {
      isValid = false;
      const message = "Receiver and sender must be different";
      errors.push({ name: "receiver", message });
      errors.push({ name: "sender", message });
    }
  });

  return { isValid, errors };
};
