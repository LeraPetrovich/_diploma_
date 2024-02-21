import React from "react";
import {
  UserCardInformationBox,
  ImageStyled,
  UserInfContainer,
  Title,
  MainInformationBlock,
  ContentBox,
  TitleContent,
  InformationText,
} from "./UserCardInformation.styles";
import { UserInformationCardProps } from "./types";
import userIcon from "../../assets/user.jpeg";

export const UserCardInformation: React.FC<UserInformationCardProps> = ({
  name,
  serialNumber,
  licenseNumber,
  categories,
  dateBirth,
  image,
}) => {
  const informationMap = [
    {
      title: "Серийный номер",
      inf: serialNumber,
    },
    {
      title: "ФИO",
      inf: name,
    },
    {
      title: "Номер водительских прав",
      inf: licenseNumber,
    },
    {
      title: "Категории",
      inf: categories,
    },
    {
      title: "Дата рождения",
      inf: dateBirth,
    },
  ];
  return (
    <UserCardInformationBox>
      <ImageStyled src={image ? image : userIcon}></ImageStyled>
      <UserInfContainer>
        <Title>Информация о водителе</Title>
        <MainInformationBlock>
          {informationMap.map((item, index) => {
            return (
              <ContentBox key={index}>
                <TitleContent>{item.title}</TitleContent>
                <InformationText>{item.inf}</InformationText>
              </ContentBox>
            );
          })}
        </MainInformationBlock>
      </UserInfContainer>
    </UserCardInformationBox>
  );
};
