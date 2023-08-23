import { api } from "../api";

export interface IFetchGetCoinMarkets {
  vs_currency?: string;
}

export const fetchGetCoinMarkets = async (payload: IFetchGetCoinMarkets) => {
  const { vs_currency } = payload;

  const paramsSearch = new URLSearchParams({
    vs_currency,
  });

  const url = `/coins/markets?${paramsSearch}`;

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
