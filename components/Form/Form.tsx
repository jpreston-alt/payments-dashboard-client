import { useState } from "react";
import { Button, Box } from "@mui/material";
import { IProps, IFormState } from "./Form.d";
import { FormFieldMap } from "@/components";
import { formFieldName, IFormFieldProps, IFormFields } from "@/types";

const Form = ({ handleSubmit, handleClose, fields }: IProps) => {
  // TODO can we use refs here instead of state
  const [formState, setFormState] = useState<IFormFields>({
    sender: "",
    receiver: "",
    amount: "",
    currency: 0,
    memo: "",
  });

  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormState({ ...formState, [name]: value });
  };

  return (
    <Box minWidth="500px">
      <form onSubmit={() => handleSubmit(formState)}>
        {fields.map((field: IFormFieldProps) => (
          <Box mb={1} key={`form-field-${field.name}`}>
            <FormFieldMap
              {...field}
              value={formState[field.name as formFieldName]}
              handleOnChange={handleOnChange}
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
