import { FunctionComponent, useEffect } from "react";
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

export const UserItem: FunctionComponent<UserItemProps> = ({ name, image }) => {
  return (
    <UserItemBox>
      <UserInformationBox>
        <ImageStyled src={image ? image : userIcon}></ImageStyled>
        <NameStyled>{name}</NameStyled>
      </UserInformationBox>
      <HealthBox>
        {/* {
          useItems.map((el)=>{
            return(
              <HealThStatusBlock title={el.}/>
            )
          })
        } */}
        {/* {useItems.map(el, key) => (
          <HealThStatusBlock
            key={key}
            title={title}
            status={status}
            params={params}
          />
        ))} */}
      </HealthBox>
    </UserItemBox>
  );
};
