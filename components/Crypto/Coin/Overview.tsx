import React, { FC } from "react";
import styled from "styled-components";
import CoinChange from "./Change";
import CoinImage from "./Image";
import CoinPrice from "./Price";

export interface ICoinOverview {
  image?: string;
  code?: string;
  dataChange?: number;
  price?: number;
}

const Wrapper = styled.div<{}>`
  align-items: center;
  display: flex;
  gap: 16px;
  margin-bottom: 0.8rem;
`;

const Code = styled.p<{}>`
  font-size: 18px;
  font-weight: 600;
  color: #1e2329;
  margin: 0;
`;

const Price = styled(CoinPrice)`
  color: #808080;
  margin-bottom: -10px;
`;

const CoinOverview: FC<ICoinOverview> = (props) => {
  return (
    <React.Fragment>
      <Wrapper>
        <CoinImage
          image={props.image}
          name={`coin-image-${props.code}`}
          height={36}
          width={36}
        />
        <Code>{props.code ?? "CODE"}</Code>
      </Wrapper>
      <Price price={props.price} size="20px" />
      <CoinChange dataChange={props.dataChange} size="big" />
    </React.Fragment>
  );
};

export default CoinOverview;
