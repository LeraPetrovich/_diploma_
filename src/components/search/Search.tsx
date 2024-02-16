import { FunctionComponent } from "react";
import { StyledSearchComponent } from "./Search.styles";
import { SearchProps } from "./types";

export const Search: FunctionComponent<SearchProps> = ({ onChange }) => {
  return (
    <StyledSearchComponent
      placeholder="Введите имя или серийный номер водителя"
      onChange={onChange}
    />
  );
};
