import React, { useState } from "react";
import ReactPaginate from "react-paginate";
import { UserItemBox, PaginationBox } from "./PaginateItems.styles";
import { UserItem } from "../../components";

import type { UserItemType } from "src/store/reduser/types";
import { setUserItemSlice } from "src/store/reduser/setUsersSlice";
import { useDispatch } from "react-redux";

interface IPagination {
  itemsPerPage: number;
  items?: any;
}

type IItem = {
  currentItems: any;
};

const Items: React.FC<IItem> = ({ currentItems }) => {
  const dispatch = useDispatch();
  const getUserItemInf = (data: UserItemType) => {
    dispatch(setUserItemSlice(data));
  };
  return (
    <UserItemBox>
      {currentItems.length > 0 ? (
        currentItems.map((el: any) => {
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
  );
};

export const Pagination: React.FC<IPagination> = ({ itemsPerPage, items }) => {
  const [itemOffset, setItemOffset] = useState(0);

  const endOffset = itemOffset + itemsPerPage;
  const currentItems = items.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(items.length / itemsPerPage);

  const handlePageClick = (event: any) => {
    const newOffset = (event.selected * itemsPerPage) % items.length;
    setItemOffset(newOffset);
  };
  return (
    <PaginationBox>
      <Items currentItems={currentItems} />
      <ReactPaginate
        breakLabel="..."
        nextLabel=">"
        className="pagination"
        previousClassName="button"
        nextClassName="button"
        activeLinkClassName="activelist"
        pageClassName="list"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="<"
        renderOnZeroPageCount={null}
      />
    </PaginationBox>
  );
};
