import * as React from "react";
import { useDispatch } from "react-redux";
import { debounce } from 'lodash';
import TextField from "@material-ui/core/TextField";
import "./SearchInput.css";
import { getIssues, clearIssues, stopLoading } from "../store/actions";
import { SearchInputProps } from "../types";

const SearchInput = ({setSearchText}:SearchInputProps ) => {
  const dispatch = useDispatch();
  const handleChange = debounce((text:string) => {
    if(text===''){
      dispatch(clearIssues());
      dispatch(stopLoading(''));
    } else {
      dispatch(getIssues(text, 1));
    }
    setSearchText(text);
  },500);
  return (
    <TextField
      className="input-search"
      id="standard-search"
      label="Search Issues"
      type="search"
      variant="filled"
      onChange={(event: React.ChangeEvent<HTMLInputElement>) => handleChange(event.target.value)}
    />
  );
};

export default SearchInput;
