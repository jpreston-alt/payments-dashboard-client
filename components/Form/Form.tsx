import { Button, Box } from "@mui/material";
import { IProps } from "./Form.d";
import { FormFieldMap } from "@/components";
import { formFieldName, IError, IFormFieldProps } from "@/types";
import { useForm } from "@/hooks";

const Form = ({ handleSubmit, handleClose, fields }: IProps) => {
  const { onSubmit, formState, handleOnChange, errors } = useForm({
    fields,
    handleSubmit,
  });

  return (
    <Box>
      <form onSubmit={onSubmit}>
        {fields.map((field: IFormFieldProps) => (
          <Box mb={1} key={`form-field-${field.name}`}>
            <FormFieldMap
              {...field}
              value={formState[field.name as formFieldName] as string | number}
              handleOnChange={handleOnChange}
              error={errors.find((e: IError) => e.name === field.name)}
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
