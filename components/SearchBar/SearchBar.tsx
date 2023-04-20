import React from "react";
import {
  InputAdornment,
  FormControl,
  InputLabel,
  FilledInput,
} from "@mui/material";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import { IProps } from "./SearchBar.d";
import { styles } from "./SearchBar.styles";

const SearchBar = ({ handleOnSearch, searchValue }: IProps) => {
  return (
    <FormControl sx={styles.text_field} variant="filled">
      <InputLabel htmlFor="search-adornment" sx={styles.label}>
        Search
      </InputLabel>
      <FilledInput
        onChange={handleOnSearch}
        value={searchValue}
        id="search-adornment"
        sx={styles.input}
        disableUnderline
        startAdornment={
          <InputAdornment position="start">
            <SearchRoundedIcon />
          </InputAdornment>
        }
      />
    </FormControl>
  );
};

export default SearchBar;
