import React, { useEffect, useRef } from "react";
import * as echarts from "echarts";
import { EChartOption } from "echarts";

interface IData {
  day: string;
  status: number;
}

const ColumnChart = ({ data }: { data: IData[] }) => {
  const chartRef = useRef(null);

  useEffect(() => {
    if (chartRef.current) {
      const chart = echarts.init(chartRef.current);

      const options: EChartOption = {
        title: {
          text: "Общее состояние за последнюю рабочую неделю",
        },
        xAxis: {
          type: "category",
          data: data.map((point) => point.day),
        },
        yAxis: {
          type: "value",
          max: 100,
        },
        series: [
          {
            data: data.map((point) => ({
              value: point.status,
              itemStyle: {
                color: "#4f8ea0", // point.value > 0 ? "green" : "red",
              },
            })),
            type: "bar",
          },
        ],
      };

      chart.setOption(options);

      return () => {
        chart.dispose();
      };
    }
  }, [data]);

  return <div ref={chartRef} style={{ width: "100%", height: "400px" }} />;
};

export default ColumnChart;
