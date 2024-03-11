import { FunctionComponent, useState } from "react";

import { useDispatch } from "react-redux";

//components
import {
  MainContainer,
  ContentContainer,
  SortBox,
  SortDate,
  SortDateText,
} from "./Main.styles";

import { Icon } from "src/components/user-item/UserItem.styles";
import icoSort from "../../assets/fluent_filter-20-regular.svg";
import { SearchPanel } from "../../components";
import iconCalendar from "../../assets/Vector (1).svg";
import DatePicker from "react-datepicker";
import { Pagination } from "src/components/paginateItems/PaginteItems";
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
        <Pagination itemsPerPage={3} items={users} />
      </ContentContainer>
    </MainContainer>
  );
};
