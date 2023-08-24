import React, { FC } from "react";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";

import Section from "@/containers/Section";
import Skeleton from "@/components/Skeleton";
import SkeletonCoinInfo from "@/components/Skeleton/Coin/Info";

// State Management
import { useQuery } from "@tanstack/react-query";
import { queryGetCoinMarkets } from "@/queries";

// Helpers
import { dataMarkets } from "@/consts/dummyData";
import { ICoinMarket } from "@/typings/interfaces/coins";

import Slider from "@/components/Slider";

const Table = dynamic(() => import("@/components/Table"), {
  ssr: false,
});

const CoinInfo = dynamic(() => import("@/components/Crypto/Coin/Info"), {
  ssr: false,
  loading: () => <SkeletonCoinInfo />,
});

const CoinChange = dynamic(() => import("@/components/Crypto/Coin/Change"), {
  ssr: false,
  loading: () => <Skeleton height="18.5px" width="69.48px" radius="8px" />,
});

const CoinPrice = dynamic(() => import("@/components/Crypto/Coin/Price"), {
  ssr: false,
  loading: () => <Skeleton height="18.5px" width="69.48px" radius="8px" />,
});

export interface ICoinList {
  data?: any;
}

const CoinList: FC<ICoinList> = (props) => {
  const router = useRouter();

  const { data: coinMarkets } = useQuery({
    ...queryGetCoinMarkets({
      vs_currency: "usd",
    }),
  });

  const handleDetail = (data: ICoinMarket) => {
    (async () => {
      const pathname = `/market/${data.id}`;

      const fullPathname = `${pathname}`;

      await router.push(
        {
          pathname,
        },
        fullPathname,
        { shallow: true }
      );
    })();
  };

  const columns = [
    {
      title: "Crypto",
      dataIndex: "crypto",
      render: (data: ICoinMarket) => {
        return (
          <CoinInfo
            code={data.symbol.toUpperCase()}
            name={data.name}
            image={data.image}
          />
        );
      },
    },
    {
      title: "Price",
      currency: "USD",
      dataIndex: "current_price",
      className: "mini-hide",
      render: (data: ICoinMarket) => {
        return <CoinPrice price={data.current_price} />;
      },
    },
    {
      title: "24h Change",
      dataIndex: "price_change_percentage_24h",
      className: "mini-hide",
      render: (data: ICoinMarket) => {
        return <CoinChange dataChange={data.price_change_percentage_24h} />;
      },
    },
    {
      title: "Info",
      dataIndex: "price_change_percentage_24h",
      className: "mini-show text-right",
      render: (data: ICoinMarket) => {
        return (
          <React.Fragment>
            <CoinPrice price={data.current_price} />
            <CoinChange dataChange={data.price_change_percentage_24h} />
          </React.Fragment>
        );
      },
    },
  ];

  const topFiveCoins = coinMarkets?.slice(0, 5) ?? dataMarkets?.slice(0, 5);

  return (
    <React.Fragment>
      <Section title="Market Overview" subtitle="Top 5 Most Known Cryptos">
        <Slider data={topFiveCoins} onClick={(data) => handleDetail(data)} />
      </Section>
      <Section title="Market List" subtitle="All Cryptos in USD">
        <Table
          columns={columns}
          data={coinMarkets ?? dataMarkets}
          rowDataClick={(data) => handleDetail(data)}
        />
      </Section>
    </React.Fragment>
  );
};

export default CoinList;
