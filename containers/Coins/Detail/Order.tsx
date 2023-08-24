import React, { FC, useState } from "react";
import dynamic from "next/dynamic";

import styled from "styled-components";

import Skeleton from "@/components/Skeleton";
import Card from "@/components/Card";
import PriceInput from "@/components/PriceInput";

const Subtitle = dynamic(() => import("@/components/Text/Subtitle"), {
  ssr: false,
  loading: () => (
    <Skeleton height="20px" width="200px" radius="8px" margin="0 0 5px" />
  ),
});

const CoinPrice = dynamic(() => import("@/components/Crypto/Coin/Price"), {
  ssr: false,
  loading: () => <Skeleton height="18.5px" width="69.48px" radius="8px" />,
});

const Button = dynamic(() => import("@/components/Button"), {
  ssr: false,
  loading: () => <Skeleton height="34.5px" width="97px" radius="8px" />,
});

const ButtonWrapper = styled.div<{}>`
  display: flex;
  gap: 8px;
  align-items: center;
  justify-content: space-between;
  margin-top: 0.5rem;
  margin-bottom: 1rem;
`;

const TotalCoin = styled.div<{}>`
  border-radius: 8px;
  background: #8080804d;
  padding: 0 16px;
  height: fit-content;
  margin: 0.5rem 0 1rem;
`;

const CoinSymbol = styled.p<{}>`
  font-weight: 600;
  font-size: 28px;
  line-height: 50px;
  margin: 0;
`;

export interface IDetailOrder {
  data?: any;
}

const DetailOrder: FC<IDetailOrder> = (props) => {
  const [totalPayment, setTotalPayment] = useState(0);
  const [totalUnit, setTotalUnit] = useState(0);
  const { data } = props;
  const name = data?.name ?? "";

  const handleChangePayment = (payment) => {
    setTotalPayment(payment);
  };

  const handleChange = (value) => {
    const totalPayment = Number(value);
    const price = data?.market_data?.current_price?.usd;
    const unit = Number((totalPayment / price).toFixed(9));

    if (price) {
      setTotalUnit(unit);
    }
  };

  const paymentMenu = [
    {
      value: 100000,
      label: "100.000",
    },
    {
      value: 500000,
      label: "500.000",
    },
    {
      value: 1000000,
      label: "1000.000",
    },
  ];

  return (
    <Card
      title={
        <div>
          Buy {name} Starting From{" "}
          <CoinPrice
            size="20px"
            price={data?.market_data?.current_price?.usd}
          />
        </div>
      }
    >
      <Subtitle>Input purchase amount:</Subtitle>
      <PriceInput onChange={handleChange} value={totalPayment} />
      <ButtonWrapper>
        {paymentMenu.map((item) => (
          <Button
            key={item.value}
            info
            onClick={() => handleChangePayment(item.value)}
            radius="50px"
            width="100%"
          >
            {item.label}
          </Button>
        ))}
      </ButtonWrapper>
      <Subtitle>You will get:</Subtitle>
      <TotalCoin>
        <CoinSymbol>
          {`
          ${data?.symbol ? data.symbol?.toUpperCase() : "CODE"} ${totalUnit}
        `}
        </CoinSymbol>
      </TotalCoin>
      <Button
        onClick={() => console.log()}
        width="100%"
      >{`Buy ${name} Now`}</Button>
    </Card>
  );
};

export default DetailOrder;
