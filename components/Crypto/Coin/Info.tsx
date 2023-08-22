import React, { FC } from "react";
import styled from "styled-components";
import Image from "next/image";
import CoinReturn from "./Return";

export interface ICoinInfo {
  image?: string;
  code?: string;
  name?: string;
}

const CoinInfo: FC<ICoinInfo> = (props) => {
  const Wrapper = styled.div<{}>`
    align-items: center;
    display: flex;
    gap: 16px;
  `;

  const Code = styled.p<{}>`
    font-size: 16px;
    font-weight: 600;
    color: #1e2329;
    margin-bottom: 2px;
    margin: 0;
  `;

  const Name = styled.p<{}>`
    font-size: 14px;
    color: #808080;
    margin-bottom: 2px;
    margin: 0;
  `;

  return (
    <React.Fragment>
      <Wrapper>
        <Image
          src={props.image}
          alt={`coin-image-${props.name}`}
          height={32}
          width={32}
        />
        <Code>{props.code}</Code>
        <Name>{props.name}</Name>
      </Wrapper>
    </React.Fragment>
  );
};

export default CoinInfo;
