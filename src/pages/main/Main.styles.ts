import { styled } from "styled-components";

export const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: start;
  flex-direction: column;
  width: 90%;
  margin: 0 auto;
  padding-top: 100px;
`;

export const ContentContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  border: 1px solid #d3e3e866;
  border-radius: 20px;
  gap: 40px;
  margin-top: 60px;
`;

export const SortBox = styled.div`
  display: flex;
  align-items: center;
  align-self: end;
  gap: 20px;
`;
export const SortDate = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100px;
  padding: 10px;
  border: 1px solid #d3e3e8;
  border-radius: 100px;
`;
export const SortDateText = styled.p`
  margin: 0;
  padding: 0;
  color: #95c2cf;
  font-weight: 400;
  font-size: 14px;
`;

export const UserItemBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
`;
