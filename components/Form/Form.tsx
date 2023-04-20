import { useState } from "react";
import { IUser } from "@/types";
import { Button, Box } from "@mui/material";
import { IProps } from "./Form.d";
import { FormFieldMap } from "@/components";

const getFields = (users: IUser[]) => {
  const userOptions = users.map((user) => ({
    name: user.name,
    value: user.id,
  }));

  const fields = [
    {
      name: "sender",
      component: "Select",
      options: userOptions,
    },
    {
      name: "receiver",
      component: "Select",
      options: userOptions,
    },
    {
      name: "amount",
      component: "TextField",
      type: "number",
    },
    {
      name: "currency",
      component: "Select",
      options: [
        { name: "BTC", value: "BTC" },
        { name: "GBP", value: "GBP" },
        { name: "EUR", value: "EUR" },
        { name: "JPY", value: "JPY" },
        { name: "USD", value: "USD" },
      ],
    },
    {
      name: "memo",
      component: "TextField",
    },
  ] as IFormFieldProps[];

  return fields;
};

const Form = ({ users, handleSubmit, handleClose }: IProps) => {
  const fields = getFields(users);
  const [formState, setFormState] = useState({
    sender: "",
    receiver: "",
    amount: "",
    currency: "",
    memo: "",
  });

  const handleOnChange = (event) => {
    const { name, value } = event.target;
    setFormState({ ...formState, [name]: value });
  };

  return (
    <Box minWidth="500px">
      <form>
        {fields.map((field) => (
          <Box mb={1} key={`form-field-${field.name}`}>
            <FormFieldMap
              {...field}
              value={formState[field.name]}
              handleOnChange={handleOnChange}
            />
          </Box>
        ))}
        <Button onClick={handleClose} variant="outlined">
          Cancel
        </Button>
        <Button onClick={() => handleSubmit(formState)} variant="contained">
          Submit
        </Button>
      </form>
    </Box>
  );
};

export default Form;
