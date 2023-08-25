import { MARKET_CHART } from "@/consts/queryKeys";
import {
  fetchGetCoinMarketChart,
  IFetchGetCoinMarketChart,
} from "@/services/api";

export const queryGetCoinMarketChart = (payload: IFetchGetCoinMarketChart) => {
  const { slug, days, vs_currency, enabled } = payload;

  return {
    queryKey: [
      MARKET_CHART,
      {
        slug,
        days,
        vs_currency,
      },
    ],
    queryFn: async () =>
      await fetchGetCoinMarketChart({
        slug,
        days,
        vs_currency,
      }),
    refetchInterval: 2000,
    staleTime: Infinity,
    cacheTime: Infinity,
    enabled: enabled,
  };
};
