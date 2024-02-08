import React from "react";
import { UserDetailsBox } from "./UserDetails.styles";
import { IRootState } from "src/store";
import { useSelector } from "react-redux";

export const UserDetails: React.FunctionComponent = () => {
  const userInf = useSelector((state: IRootState) => state.userItem.userItem);

  if (!userInf || !("id" in userInf)) {
    return <UserDetailsBox>Loading...</UserDetailsBox>;
  }

  return (
    <UserDetailsBox>
      <p>ID: {userInf.id}</p>
      <p>Name: {userInf.name}</p>
      <p>Temperature:</p>
      <ul>
        <li>Title: {userInf.temperature.title}</li>
        <li>Status: {userInf.temperature.status}</li>
        <li>Params: {userInf.temperature.params}</li>
      </ul>
    </UserDetailsBox>
  );
};
