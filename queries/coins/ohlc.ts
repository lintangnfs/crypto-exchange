import { MARKET_LIST } from "@/consts/queryKeys";
import { fetchGetCoinOHLC, IFetchGetCoinOHLC } from "@/services/api";

export const queryGetCoinOHLC = (payload: IFetchGetCoinOHLC) => {
  const { vs_currency, days, slug } = payload;

  return {
    queryKey: [
      MARKET_LIST,
      {
        vs_currency,
        days,
        slug,
      },
    ],
    queryFn: async () =>
      await fetchGetCoinOHLC({
        slug,
        vs_currency,
        days,
      }),
    refetchInterval: 2000,
  };
};
