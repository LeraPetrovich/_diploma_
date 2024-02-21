import React, { FunctionComponent, useEffect } from "react";
import {
  UserItemBox,
  UserInformationContent,
  UserInformationBox,
  ImageStyled,
  Icon,
  ActualInformationItem,
  UserId,
  NameStyled,
  GeneralStateBox,
  HealthBox,
  ActualInformation,
  ActualInformationBox,
  ButtonDetails,
  GeneralStateTextBlock,
  GeneralStatePecent,
  GeneralStateText,
  RowState,
} from "./UserItem.styles";
import { UserItemProps } from "./types";
import { HealThStatusBlock } from "../healthStatusBlock/HealthStatusBlock";
import { useSelector } from "react-redux";
import { IRootState } from "src/store";
import iconDate from "../../assets/Vector (1).svg";
import iconPlaсe from "../../assets/Vector (2).svg";

export const UserItem: FunctionComponent<UserItemProps> = ({
  name,
  image,
  id,
  date,
  place,
  onClick,
  generalState,
}) => {
  const informationItems = [
    { icon: iconDate, content: date },
    { icon: iconPlaсe, content: place },
  ];

  const useItems = useSelector(
    (state: IRootState) => state.paramItemsReducer.paramItem
  );

  return (
    <UserItemBox onClick={onClick}>
      <UserInformationContent>
        <UserInformationBox>
          {id && <UserId>{id}</UserId>}
          <NameStyled>{name}</NameStyled>
          <ActualInformationBox>
            {informationItems.map(({ icon, content }, index) => (
              <ActualInformationItem key={index}>
                <Icon src={icon} />
                <ActualInformation>{content}</ActualInformation>
              </ActualInformationItem>
            ))}
          </ActualInformationBox>
        </UserInformationBox>
        <HealthBox>
          {useItems.map((el, index) => {
            if (el.id === id) {
              return (
                <React.Fragment key={index}>
                  {Object.values(el).map((criteria, innerIndex) => {
                    if (typeof criteria === "object" && criteria !== null) {
                      return (
                        <HealThStatusBlock
                          key={`${index}-${innerIndex}`}
                          title={criteria.title}
                          // status={criteria.status}
                          params={criteria.params}
                        />
                      );
                    }
                    return null;
                  })}
                </React.Fragment>
              );
            }
            return null;
          })}
        </HealthBox>
      </UserInformationContent>
      <GeneralStateBox>
        <GeneralStateTextBlock>
          <GeneralStateText> Состояние водителя</GeneralStateText>
          {generalState && (
            <GeneralStatePecent>{generalState} %</GeneralStatePecent>
          )}
        </GeneralStateTextBlock>
        <RowState state={generalState}></RowState>
      </GeneralStateBox>
      <ButtonDetails style={{ textDecoration: "none" }} to={`${id}`} key={id}>
        Подробнее
      </ButtonDetails>
    </UserItemBox>
  );
};
