import React, { FC } from "react";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";

import Section from "@/containers/Section";
import SkeletonCoinInfo from "@/components/Skeleton/Coin/Info";

// State Management
import { useQuery } from "@tanstack/react-query";
import {
  queryGetCoinDetail,
  queryGetCoinMarketChart,
  queryGetCoinOHLC,
} from "@/queries";

import styled from "styled-components";

const CoinInfo = dynamic(() => import("@/components/Crypto/Coin/Info"), {
  ssr: false,
  loading: () => <SkeletonCoinInfo hideName />,
});

const DetailInfo = dynamic(() => import("./Info"), {
  ssr: false,
});

const DetailOrder = dynamic(() => import("./Order"), {
  ssr: false,
});

const DetailChart = dynamic(() => import("./Chart"), {
  ssr: false,
});

export interface ICoinDetail {
  data?: any;
}

const DetailLayout = styled.div<{}>`
  display: grid;
  gap: 2rem;
  grid-template-columns: repeat(3, minmax(0px, 1fr));
  @media only screen and (max-width: 800px) {
    gap: 0;
    grid-template-columns: repeat(1, minmax(0px, 1fr));
  }
`;

const LeftWrapper = styled.div<{}>`
  grid-column: span 2 / span 2;
  @media only screen and (max-width: 800px) {
    grid-column: 1;
  }
`;

const RightWrapper = styled.div<{}>``;

const CoinDetail: FC<ICoinDetail> = (props) => {
  const router = useRouter();
  const slug = router.query.slug?.toString().toLowerCase();

  const { data: coinDetail } = useQuery({
    ...queryGetCoinDetail({
      slug: slug,
    }),
  });

  const { data: coinOHLC } = useQuery({
    ...queryGetCoinOHLC({
      days: "1",
      vs_currency: "usd",
      slug: slug,
    }),
  });

  const dataPoints = coinOHLC?.map((item) => {
    return { x: new Date(item[0]), y: item.shift() };
  });

  return (
    <Section
      title={
        <CoinInfo
          image={coinDetail?.image?.small}
          code={
            coinDetail?.name ? coinDetail.name.toUpperCase() : "COIN DETAIL"
          }
        />
      }
    >
      <DetailLayout>
        <LeftWrapper>
          <DetailChart data={coinDetail} dataPoints={dataPoints} />
          <DetailInfo data={coinDetail} />
        </LeftWrapper>
        <RightWrapper>
          <DetailOrder data={coinDetail} />
        </RightWrapper>
      </DetailLayout>
    </Section>
  );
};

export default CoinDetail;
