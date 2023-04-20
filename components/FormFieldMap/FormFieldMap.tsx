import React from "react";
import {
  Select,
  TextField,
  MenuItem,
  InputLabel,
  FormControl,
} from "@mui/material";
import { IProps } from "./FormFieldMap.d";

const FormFieldMap = ({
  name,
  component,
  type,
  options,
  value,
  handleOnChange,
}: IProps) => {
  const renderField = {
    TextField: (
      <TextField
        type={type}
        name={name}
        label={name}
        placeholder={name}
        fullWidth
        variant="filled"
        value={value}
        onChange={handleOnChange}
      />
    ),
    Select: (
      // TODO make select it's own component
      <FormControl variant="filled" fullWidth>
        <InputLabel>{name}</InputLabel>
        <Select
          name={name}
          label={name}
          placeholder={name}
          value={value}
          onChange={handleOnChange}
        >
          {options?.map((option) => (
            <MenuItem
              key={`option-${option.name}-${option.value}`}
              value={option.value}
            >
              {option.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    ),
  };

  return renderField[component];
};

export default FormFieldMap;
