import styled from "styled-components";

export const SearchPanelBox = styled.div`
  background-color: #f9fdff;
  padding: 20px;
  width: 100%;
  box-sizing: border-box;
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const AdminSettingsBox = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;
`;

export const SearchBox = styled.div`
  display: flex;
  align-items: center;
  background-color: #ffffff;
  padding-left: 10px;
  border-radius: 20px;
  height: 63px;
  gap: 10px;
  width: 100%;
  max-width: 621px;
  border: 1px solid #d3e3e8;
  &:focus-within {
    border: 1px solid #4f8ea0;
  }
`;

export const AdminImage = styled.img`
  width: 99px;
  height: 99px;
  border-radius: 100px;
`;
export const SettingIcon = styled.img`
  width: 50px;
  height: 50px;
`;
