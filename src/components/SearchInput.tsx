import * as React from "react";
import { debounce } from "lodash";
import TextField from "@material-ui/core/TextField";
import "./SearchInput.css";
import { SearchInputProps } from "../types";
import { useHotkeys } from "react-hotkeys-hook";
import { useIssuesDispatch } from "../hooks";

const SearchInput = ({ setSearchText }: SearchInputProps) => {
  const { getIssues } = useIssuesDispatch();
  const searchInputRef = React.useRef<HTMLInputElement>();

  useHotkeys("/", (event) => {
    event.preventDefault();
    event.stopPropagation();
    if (searchInputRef.current) {
      searchInputRef.current.focus();
    }
  });
  const handleChange = debounce((text: string) => {
    getIssues(text, 1);
    setSearchText(text);
  }, 500);

  return (
    <TextField
      inputRef={searchInputRef}
      autoFocus
      className="input-search"
      id="search-issues-input"
      label="Search Issues"
      type="search"
      variant="filled"
      inputProps={{
        onKeyPress: (event) => {
          console.log(event.key);
          if (event.key === "Enter" || event.key === "Escape") {
            event.preventDefault();
            event.stopPropagation();
            searchInputRef.current?.blur();
          }
        },
      }}
      onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
        handleChange(event.target.value)
      }
    />
  );
};

export default SearchInput;
