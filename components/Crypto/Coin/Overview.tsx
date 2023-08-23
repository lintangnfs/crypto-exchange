import React, { FC } from "react";
import styled from "styled-components";
import CoinChange from "./Change";
import CoinImage from "./Image";

export interface ICoinOverview {
  image?: string;
  code?: string;
  dataChange?: number;
  price?: string;
}

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

const CoinOverview: FC<ICoinOverview> = (props) => {
  return (
    <React.Fragment>
      <Wrapper>
        <CoinImage
          image={props.image}
          name={`coin-image-${props.code}`}
          height={32}
          width={32}
        />
        <Code>{props.code}</Code>
      </Wrapper>
      <Price>{props.price}</Price>
      <CoinChange dataChange={props.dataChange} size="big" />
    </React.Fragment>
  );
};

export default CoinOverview;
