import { useState } from "react";
import { IFormFieldProps, IFormFields, IUser } from "@/types";
import { validateFormFields } from "@/utils/validateFormFields";

interface IArgs {
  fields: IFormFieldProps[];
  handleSubmit: (object: any) => void;
}

const useForm = ({ fields, handleSubmit }: IArgs) => {
  const [errors, setErrors] = useState<{ name: string; message: string }[]>([]);
  // TODO use refs instead of state
  const [formState, setFormState] = useState<IFormFields>({
    sender: "",
    receiver: "",
    amount: "",
    currency: "",
    memo: "",
  });

  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setErrors([]);
    const { name, value } = event.target;
    setFormState({ ...formState, [name]: value });
  };

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    let { isValid, errors } = validateFormFields({ fields, formState });

    if (isValid) {
      handleSubmit(formState);
    } else {
      setErrors(errors);
    }
  };

  return {
    onSubmit,
    formState,
    handleOnChange,
    errors,
  };
};

export default useForm;
