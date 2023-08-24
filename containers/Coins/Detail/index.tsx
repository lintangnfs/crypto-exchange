import React, { FC } from "react";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";

import Section from "@/containers/Section";
import SkeletonCoinInfo from "@/components/Skeleton/Coin/Info";

// State Management
import { useQuery } from "@tanstack/react-query";
import { queryGetCoinDetail, queryGetCoinMarketChart } from "@/queries";

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
  grid-template-columns: repeat(3, minmax(0px, 1fr));
  gap: 2rem;
`;

const LeftWrapper = styled.div<{}>`
  grid-column: span 2 / span 2;
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

  const { data: coinChart } = useQuery({
    ...queryGetCoinMarketChart({
      vs_currency: "usd",
      slug: slug,
    }),
  });

  return (
    <Section
      title={
        <CoinInfo
          image={coinDetail?.image?.small}
          code={coinDetail?.name.toUpperCase()}
        />
      }
    >
      <DetailLayout>
        <LeftWrapper>
          <DetailChart data={coinDetail} />
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
