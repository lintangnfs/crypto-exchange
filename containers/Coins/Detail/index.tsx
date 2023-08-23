import React, { FC } from "react";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";

import Section from "@/containers/Section";
import Skeleton from "@/components/Skeleton";
import SkeletonCoinInfo from "@/components/Skeleton/CoinInfo";

// State Management
import { useQuery } from "@tanstack/react-query";
import { queryGetCoinDetail, queryGetCoinMarketChart } from "@/queries";

import CoinImage from "@/components/Crypto/Coin/Image";

// Helpers
import { formatToCurrency } from "@/helpers/formatter";

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

export interface ICoinDetail {
  data?: any;
}

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
          code={coinDetail?.name.toUpperCase()}
          image={coinDetail?.image?.small}
        />
      }
    >
      Detail Here
    </Section>
  );
};

export default CoinDetail;
