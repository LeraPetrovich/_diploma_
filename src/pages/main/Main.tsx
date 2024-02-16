import { FunctionComponent, useEffect } from "react";

import type { UserItemType } from "src/store/reduser/setUsersSlice";
import { setUserItemSlice } from "src/store/reduser/setUsersSlice";
import { useDispatch } from "react-redux";

//components
import {
  MainContainer,
  UserItemBox,
  ContentContainer,
  SortBox,
  SortDate,
  SortDateText,
} from "./Main.styles";
import { UserItem } from "../../components";
import { Icon } from "src/components/user-item/UserItem.styles";
import icoSort from "../../assets/fluent_filter-20-regular.svg";
import { SearchPanel } from "../../components";
import iconCalendar from "../../assets/Vector (1).svg";
//hooks
import useParams from "../../hooks/useParams";
import useSearchUsers from "src/hooks/useSearhUsers";

export const Main: FunctionComponent = () => {
  const { getParams } = useParams();
  const { filtUsers } = useSearchUsers();
  const dispatch = useDispatch();

  useEffect(() => {
    getParams();
  }, []);

  const getUserItemInf = (data: UserItemType) => {
    dispatch(setUserItemSlice(data));
  };

  return (
    <MainContainer>
      <SearchPanel />
      <ContentContainer>
        <SortBox>
          <Icon src={icoSort}></Icon>
          <SortDate>
            <SortDateText>Сегодня</SortDateText>
            <Icon src={iconCalendar}></Icon>
          </SortDate>
        </SortBox>
        <UserItemBox>
          {filtUsers.length > 0 ? (
            filtUsers.map((el) => {
              return (
                <UserItem
                  onClick={() => getUserItemInf(el)}
                  id={el.id}
                  name={el.name}
                  date={el.date}
                  place={el.place}
                  generalState={el.generalState}
                />
              );
            })
          ) : (
            <p>Пользователь не был найден</p>
          )}
        </UserItemBox>
      </ContentContainer>
    </MainContainer>
  );
};
