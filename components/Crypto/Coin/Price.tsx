import React, { FC } from "react";
import styled, { css } from "styled-components";
import { formatToCurrency } from "@/helpers/formatter";

export interface ICoinPrice {
  price: number;
  size?: string;
}

const Wrapper = styled.span<{ size?: string }>`
  font-size: 16px;
  font-weight: 600;
  ${(props) =>
    css`
      font-size: ${props.size};
    `};
`;

const CoinPrice: FC<ICoinPrice> = (props) => {
  const { price, size } = props;

  return <Wrapper size={size}>{!!price && formatToCurrency(price)}</Wrapper>;
};

export default CoinPrice;
