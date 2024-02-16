import { FunctionComponent, useState } from "react";

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
import DatePicker from "react-datepicker";
//hooks
import { useSelector } from "react-redux";
import { IRootState } from "src/store";
import { setUserItemsSlice } from "src/store/reduser/setUsersSlice";

//constant
import { constantsMonths } from "src/constants/main.mocks";

export const Main: FunctionComponent = () => {
  let users = useSelector((state: IRootState) => state.userItem.userItems);
  const dispatch = useDispatch();
  const [startDate, setStartDate] = useState(new Date());

  const getUserItemInf = (data: UserItemType) => {
    dispatch(setUserItemSlice(data));
  };

  const reversUsers = () => {
    const reversedUsers = [...users].reverse();
    dispatch(setUserItemsSlice(reversedUsers));
  };

  const filtDate = (date: Date) => {
    setStartDate(date);
    const day = date.getDate();
    const month = date.getMonth();
    const year = date.getFullYear();

    const formattedDate = `${day} ${constantsMonths[month]} ${year}`;
    const setDte = users.filter((item) => {
      return item.date.toLowerCase().includes(formattedDate);
    });
    dispatch(setUserItemsSlice(setDte));
  };

  return (
    <MainContainer>
      <SearchPanel />
      <ContentContainer>
        <SortBox>
          <Icon onClick={() => reversUsers()} src={icoSort}></Icon>
          <SortDate>
            <SortDateText>
              <DatePicker
                className="dataPiker"
                selected={startDate}
                onChange={(date: Date) => filtDate(date)}
              />
            </SortDateText>
            <Icon src={iconCalendar}></Icon>
          </SortDate>
        </SortBox>
        <UserItemBox>
          {users.length > 0 ? (
            users.map((el) => {
              return (
                <UserItem
                  onClick={() => getUserItemInf(el)}
                  id={el.id}
                  key={el.id}
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
