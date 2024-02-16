import { FunctionComponent } from "react";
import {
  HealthItem,
  HealthItemParamsText,
  HealthItemTitle,
} from "./HealthStatusBlock.styles";
import { HealThStatusBlockProps } from "./types";

export const HealThStatusBlock: FunctionComponent<HealThStatusBlockProps> = ({
  title,
  params,
  // status,
}) => {
  return (
    <>
      <HealthItem>
        <HealthItemTitle>{title}</HealthItemTitle>
        <HealthItemParamsText>{params}</HealthItemParamsText>
      </HealthItem>
    </>
  );
};
