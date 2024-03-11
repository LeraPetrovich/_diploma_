import { FunctionComponent } from "react";
import { StyledSearchComponent } from "./Search.styles";
import { SearchProps } from "./types";

export const Search: FunctionComponent<SearchProps> = ({
  onChange,
  placeholder,
}) => {
  return (
    <StyledSearchComponent placeholder={placeholder} onChange={onChange} />
  );
};
