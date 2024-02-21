import styled from "styled-components";
import { HealthItemTitle } from "../healthStatusBlock/HealthStatusBlock.styles";
import { NameStyled } from "../user-item/UserItem.styles";

export const UserCardInformationBox = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 621px;
  width: 100%;
  background-color: #f9fdff;
  border-radius: 20px;
  padding: 20px 30px;
  flex: 1 1 40%;
  border: 1px solid #d3e3e8;
`;
export const ImageStyled = styled.img`
  max-width: 261px;
  max-height: 261px;
  width: 100%;
  border-radius: 1000px;
`;

export const Title = styled(HealthItemTitle)`
  font-weight: 500;
`;

export const UserInfContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const MainInformationBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const ContentBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export const TitleContent = styled(Title)`
  font-weight: 400;
  font-size: 16px;
`;

export const InformationText = styled(NameStyled)``;
