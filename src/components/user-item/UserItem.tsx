import React, { FunctionComponent, useEffect } from "react";
import {
  UserItemBox,
  UserInformationBox,
  ImageStyled,
  NameStyled,
  HealthBox,
} from "./UserItem.styles";
import { UserItemProps } from "./types";
import userIcon from "./assets/icons8-пользователь-50.png";
import { HealThStatusBlock } from "../healthStatusBlock/HealthStatusBlock";
import { useSelector } from "react-redux";
import { IRootState } from "src/store";

export const UserItem: FunctionComponent<UserItemProps> = ({
  name,
  image,
  id,
  onClick,
}) => {
  const useItems = useSelector(
    (state: IRootState) => state.paramItemsReducer.paramItem
  );

  return (
    <UserItemBox onClick={onClick}>
      <UserInformationBox>
        <ImageStyled src={image ? image : userIcon}></ImageStyled>
        <NameStyled>{name}</NameStyled>
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
                        status={criteria.status}
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
    </UserItemBox>
  );
};
