import React from "react";
import {
  Select,
  TextField,
  MenuItem,
  InputLabel,
  FormControl,
  FormHelperText,
} from "@mui/material";
import { IProps } from "./FormFieldMap.d";

const FormFieldMap = ({
  name,
  component,
  type,
  options,
  value,
  handleOnChange,
  error,
  helperText = "This field is required",
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
        error={error}
        helperText={error && helperText}
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
          error={error}
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
        <FormHelperText error={error}>{error && helperText}</FormHelperText>
      </FormControl>
    ),
  };

  return renderField[component];
};

export default FormFieldMap;
