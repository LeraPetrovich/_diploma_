import styled from "styled-components";
import { UserCardInformationBox } from "../userCardInformation/UserCardInformation.styles";

export const FlightCardInformationBox = styled(UserCardInformationBox)`
  max-width: none;
  box-sizing: border-box;
  flex-direction: column;
  justify-content: normal;
  max-height: 262px;
  height: 100%;
`;
export const FlightInfBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 22px;
`;
export const CarInfBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
export const DotsBox = styled.div`
  position: relative;
  .dispatchPoint,
  .destination {
    position: absolute;
    top: 20px;
  }
  .dispatchPoint {
    left: 0;
  }
  .destination {
    right: 0;
  }
`;

export const PathBlock = styled.div`
  min-width: 249px;
  width: 100%;
  height: 3px;
  align-self: self-end;
  background-color: #d9d9d9;
  position: relative;
  &::before,
  &&::after {
    content: "";
    position: absolute;
    width: 16px;
    height: 16px;
    background-color: #4f8ea0;
    top: -6px;
    z-index: 2;
  }
  &::before {
    left: 0;
  }
  &&::after {
    right: 0;
  }
`;

export const InterestBlock = styled.div<{ distanceTraveled: string }>`
  position: absolute;
  width: ${(props) => props.distanceTraveled}%;
  height: 3px;
  background-color: #4f8ea0;
  left: 0;
  top: 0;
`;

export const MapInformation = styled.div`
  margin-top: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;

  div {
    &:last-child {
      gap: 6px;
    }
    img {
      cursor: pointer;
    }
  }
`;
