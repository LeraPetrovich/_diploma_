import styled from "styled-components";
import { Link } from "react-router-dom";

export const UserItemBox = styled.div`
  padding: 20px;
  border: 1px solid #d3e3e8;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  color: black;
  border-radius: 20px;
  background-color: #f9fdff;
  box-sizing: border-box;
`;

export const UserInformationContent = styled.div``;
export const UserInformationBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const UserId = styled.p`
  margin: 0;
  padding: 0;
  color: #0b2b34;
  font-size: 22px;
  font-weight: 500;
  line-height: 26.63px;
`;
export const ImageStyled = styled.img`
  border-radius: 100px;
  width: 40px;
  height: 40px;
`;
export const NameStyled = styled.p`
  margin: 0;
  padding: 0;
  color: #0b2b34;
  font-size: 18px;
  font-weight: 400;
  line-height: 21.78px;
`;

export const HealthBox = styled.div`
  display: flex;
  gap: 40px;
  margin-top: 30px;
`;

export const ActualInformationBox = styled.div`
  display: flex;
  gap: 88px;
  align-items: center;
`;

export const ActualInformationItem = styled.div`
  display: flex;
  align-items: center;
`;

export const ActualInformation = styled.p`
  padding: 0;
  margin: 0;
  color: #95c2cf;
  font-weight: 400;
  line-height: 21.78px;
  font-size: 18px;
`;

export const Icon = styled.img``;

export const ButtonDetails = styled(Link)`
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
`;

export const GeneralStateBox = styled.div``;
export const GeneralStateTextBlock = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const GeneralStateText = styled.div`
  font-weight: 400;
  font-size: 18px;
  line-height: 21.78px;
`;
export const GeneralStatePecent = styled(GeneralStateText)`
  font-weight: 900;
`;

export const RowState = styled.div<{ state: string }>`
  width: 261px;
  height: 14px;
  border-radius: 30px;
  border: 1px solid #4f8ea0;
  background: none;
  margin-top: 15px;
  position: relative;
  overflow: hidden;
  &::after {
    content: "";
    position: absolute;
    background-color: #4f8ea0;
    height: 100%;
    width: ${(props) => props.state}%;
  }
`;
