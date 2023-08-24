import React, { FC } from "react";
import styled, { css } from "styled-components";

export interface ICoinChange {
  size?: "normal" | "big";
  dataChange?: number;
}

const Wrapper = styled.div<{}>`
  align-items: center;
  display: flex;
  gap: 16px;
`;

const Change = styled.div<{ $size?: string; $down: boolean }>`
  display: flex;
  align-items: center;
  gap: 5px;
  font-weight: 600;
  margin-bottom: 2px;
  margin: 0;
  ${(props) =>
    css`
      font-size: ${props.$size === "big" ? "20px" : "16px"};
      color: ${props.$down ? "#e54040" : "#25a764"};
    `};
`;

const Arrow = styled.div<{ $down?: boolean }>`
  width: fit-content;
  height: fit-content;
  transform: rotate(-90deg);
  -webkit-transform: rotate(-90deg);
  -moz-transform: rotate(-90deg);
  -ms-transform: rotate(-90deg);
  -o-transform: rotate(-90deg);
  ${(props) =>
    props.$down &&
    css`
      transform: rotate(90deg);
      -webkit-transform: rotate(90deg);
      -moz-transform: rotate(90deg);
      -ms-transform: rotate(90deg);
      -o-transform: rotate(90deg);
    `};
`;

const CoinChange: FC<ICoinChange> = (props) => {
  const isNegativeChange = props.dataChange?.toString()?.includes("-");

  return (
    <React.Fragment>
      <Wrapper>
        <Change $size={props.size} $down={isNegativeChange}>
          <Arrow $down={isNegativeChange}>➤</Arrow>
          <p>{` ${props.dataChange
            ?.toFixed(2)
            .toString()
            .replace("-", "")} %`}</p>
        </Change>
      </Wrapper>
    </React.Fragment>
  );
};

export default CoinChange;
