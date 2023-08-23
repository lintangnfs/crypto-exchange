import type { NextApiRequest, NextApiResponse } from "next";
import { apiGeckoV3 } from "@/helpers/api";

interface IPayloadFetch {
  slug: string;
}

interface IResponseFetch {
  code: number;
  response: any;
}

const fetchCoinMarketChart = async (
  payload: IPayloadFetch
): Promise<IResponseFetch> => {
  return await apiGeckoV3(
    `/coins/${payload.slug}?localization=false&tickers=false&market_data=true&community_data=false&developer_data=false&sparkline=false`,
    {
      method: "GET",
    }
  )
    .then(async (response) => {
      return { code: response.status, response: await response.json() };
    })
    .catch(() => {
      return { code: 500, response: "Something went wrong" };
    });
};

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { code, response } = await fetchCoinMarketChart({
    slug: req.query.slug.toString(),
  });

  res.status(code).json(response);
};

export default handler;
