import { MARKET_CHART } from "@/consts/queryKeys";
import {
  fetchGetCoinMarketChart,
  IFetchGetCoinMarketChart,
} from "@/services/api";

export const queryGetCoinMarketChart = (payload: IFetchGetCoinMarketChart) => {
  const { slug, vs_currency } = payload;

  return {
    queryKey: [
      MARKET_CHART,
      {
        slug,
        vs_currency,
      },
    ],
    queryFn: async () =>
      await fetchGetCoinMarketChart({
        slug,
        vs_currency,
      }),
  };
};
