import React, { FC } from "react";
import styled from "styled-components";
import { formatNumber, formatToCurrency } from "@/helpers/formatter";

export interface IDetailData {
  data?: any;
}

const Wrapper = styled.div<{}>`
  display: grid;
  gap: 2rem;
  grid-template-columns: repeat(3, minmax(0px, 1fr));
  padding: 32px;
  @media only screen and (max-width: 768px) {
    gap: 2px;
    grid-template-columns: repeat(1, minmax(0px, 1fr));
  }
`;

const DataWrapper = styled.div<{}>`
  margin-bottom: 1.3rem;
  @media only screen and (max-width: 768px) {
    border-bottom: solid 1px #8080804d;
  }
`;

const Title = styled.div<{}>`
  font-size: 20px;
  line-height: 29px;
  --tw-text-opacity: 1;
  color: rgba(11, 10, 10, var(--tw-text-opacity));
  font-weight: 600;
  margin-bottom: 0.2rem;
`;

const Subtitle = styled.div<{}>`
  font-size: 16px;
  line-height: 20px;
  color: #80808080;
  margin: 0 0 5px;
`;

const DetailData: FC<IDetailData> = (props) => {
  const { data } = props;

  return (
    <Wrapper>
      <DataWrapper>
        <Subtitle>Market Capitalization</Subtitle>
        <Title>{`${formatToCurrency(
          data?.market_data?.market_cap?.usd
        )}`}</Title>
      </DataWrapper>
      <DataWrapper>
        <Subtitle>Maximum Supply</Subtitle>
        <Title>{`${formatNumber(
          data?.market_data?.max_supply
        )} ${data?.symbol?.toUpperCase()}`}</Title>
      </DataWrapper>
      <DataWrapper>
        <Subtitle>Circulating Supply</Subtitle>
        <Title>{`${formatNumber(
          data?.market_data?.circulating_supply
        )} ${data?.symbol?.toUpperCase()}`}</Title>
      </DataWrapper>
    </Wrapper>
  );
};

export default DetailData;
