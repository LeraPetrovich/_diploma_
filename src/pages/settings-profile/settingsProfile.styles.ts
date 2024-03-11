import styled from "styled-components";
import { NameStyled } from "src/components/user-item/UserItem.styles";

export const SettingsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-items: start;
  gap: 40px;
  width: 60%;
  margin: 0 auto;
  padding-top: 100px;
  flex-wrap: wrap;
`;

export const AdminImage = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 100px;
`;

export const InputsBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  flex: 1 1 60%;
`;

export const LabelStyled = styled(NameStyled)`
  color: #95c2cf;
`;

export const ItemInputs = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const ButtonDetails = styled.button`
  background-color: #4f8ea0;
  padding: 12px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: 400;
  line-height: 21.78px;
  font-size: 14px;
  max-width: 160px;
  width: 100%;
  border-radius: 14px;
  border: none;
  align-self: flex-end;
  cursor: pointer;
`;
