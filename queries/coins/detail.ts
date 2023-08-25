import { MARKET_DETAIL } from "@/consts/queryKeys";
import { fetchGetCoinDetail, IFetchGetCoinDetail } from "@/services/api";

export const queryGetCoinDetail = (payload: IFetchGetCoinDetail) => {
  const { slug } = payload;

  return {
    queryKey: [
      MARKET_DETAIL,
      {
        slug,
      },
    ],
    queryFn: async () =>
      await fetchGetCoinDetail({
        slug,
      }),
    refetchInterval: 2000,
  };
};
