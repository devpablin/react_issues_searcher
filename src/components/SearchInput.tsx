import * as React from "react";
import { useDispatch } from "react-redux";
import { debounce } from 'lodash';
import TextField from "@material-ui/core/TextField";
import "./SearchInput.css";
import { getIssues, clearIssues, stopLoading } from "../store/actions";
import { SearchInputProps } from "../types";
import { useHotkeys } from "react-hotkeys-hook";

const SearchInput = ({setSearchText}:SearchInputProps ) => {
  const dispatch = useDispatch();
  const searchInputRef = React.useRef<HTMLInputElement>();
  useHotkeys('/', ()=>{
    if(searchInputRef.current){
      searchInputRef.current.focus();
    }
  })
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
      inputRef={searchInputRef}
      autoFocus
      className="input-search"
      id="search-issues-input"
      label="Search Issues"
      type="search"
      variant="filled"
      onChange={(event: React.ChangeEvent<HTMLInputElement>) => handleChange(event.target.value)}
    />
  );
};

export default SearchInput;
