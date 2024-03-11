import styled from "styled-components";

export const PaginationBox = styled.div`
  .button {
    background-color: #4f8ea0;
    padding: 6px;
    border-radius: 12px;
    width: 20px;
    height: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    cursor: pointer;
  }
  .pagination {
    display: flex;
    align-items: center;
    list-style-type: none;
    gap: 10px;
  }
  .activelist {
    color: #4f8ea0;
    border: 1px solid #4f8ea0;
    padding: 5px;
    border-radius: 12px;
  }
  .list {
    padding: 5px;
    cursor: pointer;
  }
`;

export const UserItemBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
`;
