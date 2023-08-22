import React, { FC } from "react";
import styled from "styled-components";
import Image from "next/image";
import CoinReturn from "./Return";

export interface ICoinOverview {
  image?: string;
  code?: string;
  return?: string;
  price?: string;
}

const CoinOverview: FC<ICoinOverview> = (props) => {
  const Wrapper = styled.div<{}>`
    align-items: center;
    display: flex;
    gap: 16px;
    margin-bottom: 0.8rem;
  `;

  const Code = styled.p<{}>`
    font-size: 16px;
    font-weight: 600;
    color: #1e2329;
    margin-bottom: 2px;
    margin: 0;
  `;

  const Price = styled.p<{}>`
    font-size: 14px;
    color: #808080;
    margin-bottom: 2px;
    margin-bottom: 0.8rem;
  `;

  return (
    <React.Fragment>
      <Wrapper>
        <Image
          src={props.image}
          alt={`coin-image-${props.code}`}
          height={32}
          width={32}
        />
        <Code>{props.code}</Code>
      </Wrapper>
      <Price>{props.price}</Price>
      <CoinReturn return={props.return} size="big" />
    </React.Fragment>
  );
};

export default CoinOverview;
