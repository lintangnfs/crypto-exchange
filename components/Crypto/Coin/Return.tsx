import React, { FC } from "react";
import styled, { css } from "styled-components";

export interface ICoinReturn {
  size?: "normal" | "big";
  return?: string;
  isUp?: boolean;
}

const CoinReturn: FC<ICoinReturn> = (props) => {
  const Wrapper = styled.div<{}>`
    align-items: center;
    display: flex;
    gap: 16px;
    margin-bottom: 0.8rem;
  `;

  const Return = styled.p<{ size?: string; up?: boolean }>`
    font-size: 14px;
    font-weight: 600;
    color: #e54040;
    margin-bottom: 2px;
    margin: 0;
    ${(props) =>
      props.size === "big" &&
      css`
        font-size: 20px;
      `};
    ${(props) =>
      props.up &&
      css`
        color: #25a764;
      `};
  `;

  return (
    <React.Fragment>
      <Wrapper>
        <Return size={props.size} up={props.isUp}>{`${props.isUp ? "+" : "-"} ${
          props.return
        } %`}</Return>
      </Wrapper>
    </React.Fragment>
  );
};

export default CoinReturn;
