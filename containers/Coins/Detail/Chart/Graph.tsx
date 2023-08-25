import React, { FC, useState } from "react";
import styled from "styled-components";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";

import Skeleton from "@/components/Skeleton";

import { useQuery } from "@tanstack/react-query";
import { queryGetCoinMarketChart, queryGetCoinOHLC } from "@/queries";

const Button = dynamic(() => import("@/components/Button"), {
  ssr: false,
  loading: () => <Skeleton height="34.5px" width="97px" radius="8px" />,
});

const Candlestick = dynamic(() => import("@/components/Charts/Candlestick"), {
  ssr: false,
});

const Line = dynamic(() => import("@/components/Charts/Line"), {
  ssr: false,
});

const Wrapper = styled.div<{}>`
  position: relative;
  padding-bottom: 20px;
  border-bottom: solid 1px #8080804d;
`;

const ButtonWrapper = styled.div<{}>`
  display: flex;
  gap: 15px;
  align-items: center;
  justify-content: space-between;
  padding: 10px 24px 0;
  @media only screen and (max-width: 768px) {
    gap: 5px;
  }
  @media only screen and (max-width: 480px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 5px;
  }
`;

export interface IGraph {
  menu: string;
}

const Graph: FC<IGraph> = (props) => {
  const router = useRouter();
  const [days, setDays] = useState("1");
  const slug = router.query.slug?.toString().toLowerCase();

  const { menu } = props;

  const { data: coinOHLC } = useQuery({
    ...queryGetCoinOHLC({
      days,
      vs_currency: "usd",
      slug: slug,
      enabled: menu === "ohlc",
    }),
  });

  const { data: cointMarketChart } = useQuery({
    ...queryGetCoinMarketChart({
      days,
      vs_currency: "usd",
      slug: slug,
      enabled: menu === "market",
    }),
  });

  const isDaysCounting = days === "1" || days === "7";

  const filterPeriod = [
    {
      value: "1",
      label: "24Hours",
    },
    {
      value: "7",
      label: "1 Week",
    },
    {
      value: "30",
      label: "1 Month",
    },
    {
      value: "365",
      label: "1 Year",
    },
  ];

  return (
    <React.Fragment>
      <Wrapper>
        {menu === "market" ? (
          <Line data={cointMarketChart} />
        ) : (
          <Candlestick
            data={coinOHLC}
            days={days}
            isDaysCounting={isDaysCounting}
          />
        )}

        <ButtonWrapper>
          {filterPeriod.map((item, index) => (
            <Button
              key={item.value}
              onClick={() => setDays(item.value)}
              width="100%"
              type={days === item.value ? "" : "info"}
            >
              {item.label}
            </Button>
          ))}
        </ButtonWrapper>
      </Wrapper>
    </React.Fragment>
  );
};

export default Graph;
