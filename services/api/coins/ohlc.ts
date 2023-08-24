import { api } from "../api";

export interface IFetchGetCoinOHLC {
  slug: string;
  vs_currency?: string;
  days?: string;
  enabled?: boolean;
}

export const fetchGetCoinOHLC = async (payload: IFetchGetCoinOHLC) => {
  const { slug, vs_currency, days } = payload;

  const paramsSearch = new URLSearchParams({
    vs_currency,
    days,
  });

  const url = `/coins/ohlc/${slug}?${paramsSearch}`;

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
