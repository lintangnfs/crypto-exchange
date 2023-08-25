import { MARKET_LIST } from "@/consts/queryKeys";
import { fetchGetCoinOHLC, IFetchGetCoinOHLC } from "@/services/api";

export const queryGetCoinOHLC = (payload: IFetchGetCoinOHLC) => {
  const { vs_currency, days, slug, enabled } = payload;

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
    enabled: enabled,
    staleTime: Infinity,
    cacheTime: Infinity,
    refetchInterval: 2000,
  };
};
