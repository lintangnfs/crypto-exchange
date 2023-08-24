import { api } from "../api";

export interface IFetchGetCoinMarketChart {
  slug: string;
  vs_currency?: string;
  days?: string;
  enabled?: boolean;
}

export const fetchGetCoinMarketChart = async (
  payload: IFetchGetCoinMarketChart
) => {
  const { slug, vs_currency, days } = payload;

  const paramsSearch = new URLSearchParams({
    days,
    vs_currency,
  });

  const url = `/coins/market_chart/${slug}?${paramsSearch}`;

  const response = await api(url, {
    method: "GET",
  });

  if (!response.ok) {
    const result = await response.json();

    return Promise.reject(result);
  }

  const result = await response.json();
  return result;
};
