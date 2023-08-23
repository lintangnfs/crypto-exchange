import { api } from "../api";

export interface IFetchGetCoinDetail {
  slug: string;
}

export const fetchGetCoinDetail = async (payload: IFetchGetCoinDetail) => {
  const { slug } = payload;

  const url = `/coins/detail/${slug}`;

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
