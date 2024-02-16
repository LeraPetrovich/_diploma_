import styled, { css } from "styled-components";

export const HealthItem = styled.div`
  padding: 5px;
  display: flex;
  flex-direction: column;
  gap: 5px;
  border: 1px dashed #d3e3e8;
  background: none;
`;

export const HealthItemTitle = styled.p`
  padding: 0;
  margin: 0;
  color: #95c2cf;
  font-weight: 400;
  line-height: 21.78px;
  font-size: 18px;
`;

export const HealthItemParamsText = styled.p`
  padding: 0;
  margin: 0;
  color: #000000;
  font-weight: 400;
  line-height: 21.78px;
  font-size: 18px;
  margin-top: 6px;
`;

// background-color: ${(props) =>
//   ({
//     good: "green",
//     malaise: "yellow",
//     badly: "red",
//   }[props.$color])};
