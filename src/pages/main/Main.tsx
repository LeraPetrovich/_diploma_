import { FunctionComponent, useEffect } from "react";
import { MainContainer, UserItemBox } from "./Main.styles";
import { Search, UserItem } from "../../components";
import { items } from "../../constants/main.mocks";
import useData from "../../hooks/useData";

export const Main: FunctionComponent = () => {
  const { getData } = useData();
  useEffect(() => {
    getData();
  }, []);

  return (
    <MainContainer>
      <Search />
      <UserItemBox>
        {items.map((el, index) => {
          return <UserItem key={index} name={el.name} />;
        })}
      </UserItemBox>
    </MainContainer>
  );
};
