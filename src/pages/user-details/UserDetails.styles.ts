import styled from "styled-components";
import { UserCardInformationBox } from "src/components/userCardInformation/UserCardInformation.styles";

export const UserDetailsBox = styled.div`
  max-width: 1534px;
  width: 100%;
  margin: 80px auto 20px;
`;
export const InformationContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

export const LiaisonBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  max-width: 883px;
  flex: 1 1 60%;
  width: 100%;
  gap: 40px;
  @media (max-width: 1432px) {
    max-width: none;
    margin: 0 20px;
  }
`;

export const ButtonsBox = styled.div`
  display: flex;
  gap: 10px;
  justify-self: flex-end;
`;

export const Button = styled.button`
  flex: 1 1 50%;
  border-radius: 14px;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: 400;
  line-height: 21.78px;
  font-size: 14px;
  background-color: #4f8ea0;
  padding: 12px;
`;

export const UserInfBox = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 30px;
  flex-wrap: nowrap;
  @media (max-width: 1432px) {
    flex-wrap: wrap;
  }
`;

export const InformationChartGraph = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 30px;
  @media (max-width: 1432px) {
    flex-wrap: wrap;
    margin: 0 20px;
  }
`;
