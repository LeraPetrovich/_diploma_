import styled, { css } from "styled-components";

export const HealthItem = styled.div<{ $color: string }>`
  padding: 5px;
  display: flex;
  flex-direction: column;
  gap: 5px;
  border: 1px solid black;
  background-color: ${(props) =>
    ({
      good: "green",
      malaise: "yellow",
      badly: "red",
    }[props.$color])};
`;

export const HealthItemText = styled.p`
  padding: 0;
  margin: 0;
`;
