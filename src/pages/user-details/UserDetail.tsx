import React from "react";
import { UserDetailsBox } from "./UserDetails.styles";
import useSearchUsers from "src/hooks/useSearhUsers";
import { useParams } from "react-router-dom";

export const UserDetails: React.FunctionComponent = () => {
  const { filtUsers } = useSearchUsers();
  const { id } = useParams();

  //создать сторю для хранения данных пользователя по запросу

  return (
    <UserDetailsBox>
      {filtUsers.map((item) => {
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
