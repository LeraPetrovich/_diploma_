import { FunctionComponent } from "react";
import { HealthItem, HealthItemText } from "./HealthStatusBlock.styles";
import { HealThStatusBlockProps } from "./types";

export const HealThStatusBlock: FunctionComponent<HealThStatusBlockProps> = ({
  title,
  params,
  status,
}) => {
  return (
    <>
      <HealthItem $color={status}>
        <HealthItemText>{title}</HealthItemText>
        <HealthItemText>{params}</HealthItemText>
      </HealthItem>
    </>
  );
};
