import { FunctionComponent, useEffect, useState } from "react";
//store
import { useDispatch } from "react-redux";
import { setSearchSlice } from "src/store/reduser/searchReduserSlice";
import { setUserItemSlice } from "src/store/reduser/setUsersSlice";
//components
import {
  MainContainer,
  UserItemBox,
  ContentContainer,
  SortBox,
  SortDate,
  SortDateText,
} from "./Main.styles";
import { Search, UserItem } from "../../components";
import { Icon } from "src/components/user-item/UserItem.styles";
import icoSort from "../../assets/fluent_filter-20-regular.svg";
import iconCalendar from "../../assets/Vector (1).svg";
//hooks
import useParams from "../../hooks/useParams";
import { debounce } from "lodash";
import useSearchUsers from "src/hooks/useSearhUsers";

//type
import type { UserItemType } from "src/store/reduser/setUsersSlice";

export const Main: FunctionComponent = () => {
  const { getParams } = useParams();
  const dispatch = useDispatch();
  const { filtUsers } = useSearchUsers();

  const [nameUser, setNameUser] = useState<string>("");

  useEffect(() => {
    getParams();
  }, []);

  useEffect(() => {
    dispatch(setSearchSlice(nameUser));
  }, [nameUser]);

  const handleInput = debounce((e) => setNameUser(e.target.value), 500);

  const getUserItemInf = (data: UserItemType) => {
    dispatch(setUserItemSlice(data));
  };

  return (
    <MainContainer>
      <Search onChange={handleInput} />
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
