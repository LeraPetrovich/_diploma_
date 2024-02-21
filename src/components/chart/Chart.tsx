import React from "react";
import { ChartBox } from "./Chart.styles";
import ColumnChart from "./ColumChart";
import { IChart } from "./types";

export const Chart: React.FC<IChart> = ({ data }) => {
  return (
    <ChartBox>
      <ColumnChart data={data} />
    </ChartBox>
  );
};
