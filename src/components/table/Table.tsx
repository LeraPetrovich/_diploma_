import React from "react";
import {
  TableBox,
  TableContent,
  TableConteiner,
  HeaderTable,
  HeaderItem,
  ContentItem,
  TableBody,
} from "./Table.style.module";
import { TableProps } from "./types";
import { useSelector } from "react-redux";
import { IRootState } from "src/store";
import goodSvg from "../../assets/good.svg";
import malaiseSvg from "../../assets/malaise.svg";
import badlySvg from "../../assets/badly.svg";

const headerItems = ["Параметр", "Значение", "Статус", "Дата"];

export const Table: React.FC<TableProps> = ({ id, date }) => {
  const useItems = useSelector(
    (state: IRootState) => state.paramItemsReducer.paramItem
  );
  return (
    <TableBox>
      <TableConteiner>
        <HeaderTable>
          {headerItems.map((el, index) => {
            return <HeaderItem key={index}>{el}</HeaderItem>;
          })}
        </HeaderTable>
        <TableBody>
          {useItems.map((el, index) => {
            if (el.id === id) {
              return (
                <React.Fragment key={index}>
                  {Object.values(el).map((criteria) => {
                    if (typeof criteria === "object" && criteria !== null) {
                      return (
                        <TableContent>
                          <ContentItem>{criteria.title}</ContentItem>
                          <ContentItem>
                            {criteria.status === "good" && (
                              <img src={goodSvg} />
                            )}
                            {criteria.status === "malaise" && (
                              <img src={malaiseSvg} />
                            )}
                            {criteria.status === "badly" && (
                              <img src={badlySvg} />
                            )}
                          </ContentItem>
                          <ContentItem>{criteria.params}</ContentItem>
                          <ContentItem>{date}</ContentItem>
                        </TableContent>
                      );
                    }
                    return null;
                  })}
                </React.Fragment>
              );
            }
          })}
        </TableBody>
      </TableConteiner>
    </TableBox>
  );
};
