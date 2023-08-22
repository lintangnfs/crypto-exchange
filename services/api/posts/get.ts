import { api } from "../api";

export interface IFetchGetPosts {
  id?: string;
}

export const fetchGetPosts = async (payload: IFetchGetPosts) => {
  const { id } = payload;

  const paramsSearch = new URLSearchParams({
    id,
  });

  const url = `/posts?${paramsSearch}`;

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
