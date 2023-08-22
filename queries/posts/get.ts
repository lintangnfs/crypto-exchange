import { POSTS } from "@/consts/queryKeys";
import { fetchGetPosts, IFetchGetPosts } from "@/services/api";

export const queryGetPosts = (payload: IFetchGetPosts) => {
  const { id } = payload;

  return {
    queryKey: [
      POSTS,
      {
        id,
      },
    ],
    queryFn: async () =>
      await fetchGetPosts({
        id,
      }),
  };
};
