import styled from "styled-components";
import { UserCardInformationBox } from "../userCardInformation/UserCardInformation.styles";

export const TableBox = styled(UserCardInformationBox)`
  max-width: none;
  flex: 1 1 50%;
`;

export const TableConteiner = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  border: 1px dashed #95c2cf;
  /* height: max-content; */
`;
export const HeaderTable = styled.div`
  display: flex;
  flex: 1 1 20%;
`;
export const HeaderItem = styled.div`
  color: white;
  background-color: #95c2cf;
  padding: 5px 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1 1 25%;
  &:not(:last-child) {
    border-right: 1px solid white;
  }
`;
export const TableBody = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  flex: 1 1 80%;
`;
export const TableContent = styled.div`
  display: flex;
  flex: 1;
  &:not(:last-child) {
    border-bottom: 1px dashed #95c2cf;
  }
`;
export const ContentItem = styled.div`
  color: #95c2cf;
  background-color: none;
  padding: 5px 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1 1 25%;
  &:not(:last-child) {
    border-right: 1px dashed #95c2cf;
  }
`;
