import React, { useState, useEffect } from "react";
import {
  SearchPanelBox,
  AdminSettingsBox,
  AdminImage,
  SettingIcon,
  SearchBox,
} from "./SearchPanel.styles";
import { Search } from "../search/Search";
import { debounce } from "lodash";
import { useDispatch } from "react-redux";
import { setSearchSlice } from "src/store/reduser/searchReduserSlice";
import adminImage from "../../assets/adminImage.png";
import settingsIcon from "../../assets/material-symbols_settings.svg";
import { Icon } from "../user-item/UserItem.styles";
import searchIcon from "../../assets/searchIcon.svg";

export const SearchPanel: React.FC = () => {
  const [nameUser, setNameUser] = useState<string>("");
  const dispatch = useDispatch();
  const handleInput = debounce((e) => setNameUser(e.target.value), 500);

  useEffect(() => {
    dispatch(setSearchSlice(nameUser));
  }, [nameUser]);

  return (
    <SearchPanelBox>
      <SearchBox>
        <Icon src={searchIcon} />
        <Search onChange={handleInput} />
      </SearchBox>
      <AdminSettingsBox>
        <SettingIcon src={settingsIcon} />
        <AdminImage src={adminImage} />
      </AdminSettingsBox>
    </SearchPanelBox>
  );
};
