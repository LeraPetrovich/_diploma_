import { FunctionComponent } from "react";
import { MainContainer, UserItemBox } from "./Main.styles";
import { Search, UserItem } from "../../components";
import { items } from "./__mocks__/main.mocks";

export const Main: FunctionComponent = () => {
  return (
    <MainContainer>
      <Search />
      <UserItemBox>
        {items.map((el, index) => {
          return (
            <UserItem
              key={index}
              name={el.name}
              temperature={el.temperature}
              pressure={el.pressure}
              onHead={el.onHead}
            />
          );
        })}
      </UserItemBox>
    </MainContainer>
  );
};
