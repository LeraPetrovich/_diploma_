import { FunctionComponent } from "react";
import {
  UserItemBox,
  UserInformationBox,
  ImageStyled,
  NameStyled,
  HealthBox,
} from "./UserItem.styles";
import { UserItemPropsWithContext } from "./types";
import userIcon from "./assets/icons8-пользователь-50.png";
import { HealThStatusBlock } from "../healthStatusBlock/HealthStatusBlock";

export const UserItem: FunctionComponent<UserItemPropsWithContext> = ({
  name,
  image,
  temperature,
  pressure,
  onHead,
}) => {
  return (
    <UserItemBox>
      <UserInformationBox>
        <ImageStyled src={image ? image : userIcon}></ImageStyled>
        <NameStyled>{name}</NameStyled>
      </UserInformationBox>
      <HealthBox>
        {Object.entries({
          temperature,
          pressure,
          onHead,
        }).map(([key, { status, params, title }]) => (
          <HealThStatusBlock
            key={key}
            title={title}
            status={status}
            params={params}
          />
        ))}
      </HealthBox>
    </UserItemBox>
  );
};
