import React, { FC } from "react";
import styled from "styled-components";

import moment from "moment";
import dynamic from "next/dynamic";

import Skeleton from "@/components/Skeleton";

const Subtitle = dynamic(() => import("@/components/Text/Subtitle"), {
  ssr: false,
  loading: () => (
    <Skeleton height="20px" width="200px" radius="8px" margin="0 0 5px" />
  ),
});

const CoinChange = dynamic(() => import("@/components/Crypto/Coin/Change"), {
  ssr: false,
  loading: () => <Skeleton height="30px" width="70px" radius="8px" />,
});

const CoinPrice = dynamic(() => import("@/components/Crypto/Coin/Price"), {
  ssr: false,
  loading: () => <Skeleton height="18.5px" width="69.48px" radius="8px" />,
});

const Wrapper = styled.div<{}>`
  display: flex;
  gap: 15px;
  align-items: center;
`;

export interface ICurrentPrice {
  data?: any;
}

const CurrentPrice: FC<ICurrentPrice> = (props) => {
  const { data } = props;
  const lastUpdate = data?.last_updated;

  return (
    <React.Fragment>
      <Subtitle>
        {!!lastUpdate &&
          moment(lastUpdate).format("dddd, MMMM DD YYYY hh:mm:ss")}
      </Subtitle>
      <Wrapper>
        <CoinPrice size="25px" price={data?.market_data?.current_price?.usd} />
        <CoinChange
          dataChange={data?.market_data?.market_cap_change_percentage_24h}
        />
      </Wrapper>
    </React.Fragment>
  );
};

export default CurrentPrice;
