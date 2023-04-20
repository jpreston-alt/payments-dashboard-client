import { useState } from "react";
import { Button, Box } from "@mui/material";
import { IProps } from "./Form.d";
import { FormFieldMap } from "@/components";
import { formFieldName, IFormFieldProps, IFormFields } from "@/types";
import { validateFormFields } from "@/utils/validateFormFields";

const Form = ({ handleSubmit, handleClose, fields }: IProps) => {
  const [errors, setErrors] = useState<string[]>([]);
  // TODO use refs instead of state
  const [formState, setFormState] = useState<IFormFields>({
    sender: "",
    receiver: "",
    amount: 0,
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
    const { isValid, errors } = validateFormFields({ fields, formState });
    if (isValid) {
      handleSubmit(formState);
    } else {
      setErrors(errors);
    }
  };

  return (
    <Box minWidth={500}>
      <form onSubmit={onSubmit}>
        {fields.map((field: IFormFieldProps) => (
          <Box mb={1} key={`form-field-${field.name}`}>
            <FormFieldMap
              {...field}
              value={formState[field.name as formFieldName]}
              handleOnChange={handleOnChange}
              error={(errors as string[]).includes(field.name)}
            />
          </Box>
        ))}
        <Button onClick={handleClose} variant="outlined">
          Cancel
        </Button>
        <Button variant="contained" type="submit">
          Submit
        </Button>
      </form>
    </Box>
  );
};

export default Form;
