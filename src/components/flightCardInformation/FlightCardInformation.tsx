import React from "react";
import {
  FlightCardInformationBox,
  MapInformation,
  FlightInfBox,
  CarInfBox,
  DotsBox,
  PathBlock,
  InterestBlock,
} from "./FlightCardInformation.stypes";
import { FlightCardInformationProps } from "./types";
import { Title } from "../userCardInformation/UserCardInformation.styles";
import {
  ContentBox,
  TitleContent,
  InformationText,
} from "../userCardInformation/UserCardInformation.styles";
import { Icon } from "../user-item/UserItem.styles";
import iconLocal from "../../assets/Vector (2).svg";
import iconLog from "../../assets/Vector (4).svg";
import {
  ActualInformationItem,
  ActualInformation,
} from "../user-item/UserItem.styles";

export const FlightCardInformation: React.FC<FlightCardInformationProps> = ({
  carBrand, //марка машины
  carNumber, //номер машины
  startFlight, //начало рейса
  endFlight, //конец рейса
  dispatchPoint, //отправка с
  destination, // прибывает в
  coordinates, //координаты на карте
  recordedTime, //зафиксировано в это время эти координаты
  distanceTraveled,
}) => {
  const mapCarInf = [
    {
      title: "Марка и модель машины",
      inf: carBrand,
    },
    {
      title: "Номер машины",
      inf: carNumber,
    },
  ];

  const flightMap = [
    {
      title: "Начало рейса",
      inf: startFlight,
    },
    {
      title: "Конец рейса",
      inf: endFlight,
    },
  ];

  const informationItems = [
    { icon: iconLocal, content: coordinates },
    { icon: iconLog, content: recordedTime },
  ];

  return (
    <FlightCardInformationBox>
      <Title>Информация о рейсе</Title>
      <FlightInfBox>
        <CarInfBox>
          {mapCarInf.map((item, index) => {
            return (
              <ContentBox key={index}>
                <TitleContent>{item.title}</TitleContent>
                <InformationText>{item.inf}</InformationText>
              </ContentBox>
            );
          })}
        </CarInfBox>
        <DotsBox>
          <PathBlock>
            <InterestBlock distanceTraveled={distanceTraveled} />
          </PathBlock>
          <InformationText className="dispatchPoint">
            {dispatchPoint}
          </InformationText>
          <InformationText className="destination">
            {destination}
          </InformationText>
        </DotsBox>
        <CarInfBox>
          {flightMap.map((item, index) => {
            return (
              <ContentBox key={index}>
                <TitleContent>{item.title}</TitleContent>
                <InformationText>{item.inf}</InformationText>
              </ContentBox>
            );
          })}
        </CarInfBox>
      </FlightInfBox>
      <MapInformation>
        {informationItems.map(({ icon, content }, index) => (
          <ActualInformationItem key={index}>
            <Icon src={icon} />
            <ActualInformation>{content}</ActualInformation>
          </ActualInformationItem>
        ))}
      </MapInformation>
    </FlightCardInformationBox>
  );
};
