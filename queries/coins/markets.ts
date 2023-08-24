import { MARKET_LIST } from "@/consts/queryKeys";
import { fetchGetCoinMarkets, IFetchGetCoinMarkets } from "@/services/api";

export const queryGetCoinMarkets = (payload: IFetchGetCoinMarkets) => {
  const { vs_currency } = payload;

  return {
    queryKey: [
      MARKET_LIST,
      {
        vs_currency,
      },
    ],
    queryFn: async () =>
      await fetchGetCoinMarkets({
        vs_currency,
      }),
    refetchInterval: 2000,
  };
};
