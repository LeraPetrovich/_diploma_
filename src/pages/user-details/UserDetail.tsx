import React from "react";
import { UserDetailsBox } from "./UserDetails.styles";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { IRootState } from "src/store";

export const UserDetails: React.FunctionComponent = () => {
  const { id } = useParams();
  const users = useSelector((state: IRootState) => state.userItem.userItems);

  //создать сторю для хранения данных пользователя по запросу

  return (
    <UserDetailsBox>
      {users.map((item) => {
        if (item.id === id) {
          return (
            <div key={item.id}>
              <p>ID: {item.id}</p>
              <p>Name: {item.name}</p>
              <p>Temperature:</p>
              <ul>
                <li>Title: {item.temperature.title}</li>
                <li>Status: {item.temperature.status}</li>
                <li>Params: {item.temperature.params}</li>
              </ul>
            </div>
          );
        }
      })}
    </UserDetailsBox>
  );
};
