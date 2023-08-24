import type { NextApiRequest, NextApiResponse } from "next";
import { apiGeckoV3 } from "@/helpers/api";

interface IPayloadFetch {
  slug: string;
  tickers: string;
  sparkline: string;
  market_data: string;
  localization: string;
  developer_data: string;
  community_data: string;
}

interface IResponseFetch {
  code: number;
  response: any;
}

const fetchCoinMarketChart = async (
  payload: IPayloadFetch
): Promise<IResponseFetch> => {
  const paramsSearch = new URLSearchParams({
    tickers: payload.tickers,
    sparkline: payload.sparkline,
    market_data: payload.market_data,
    localization: payload.market_data,
    developer_data: payload.market_data,
    community_data: payload.market_data,
  });

  return await apiGeckoV3(`/coins/${payload.slug}?${paramsSearch}`, {
    method: "GET",
  })
    .then(async (response) => {
      return { code: response.status, response: await response.json() };
    })
    .catch(() => {
      return { code: 500, response: "Something went wrong" };
    });
};

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const {
    slug,
    tickers = "false",
    sparkline = "false",
    market_data = "true",
    localization = "false",
    developer_data = "false",
    community_data = "false",
  } = req.query;

  const { code, response } = await fetchCoinMarketChart({
    slug: slug.toString(),
    tickers: tickers.toString(),
    sparkline: sparkline.toString(),
    market_data: market_data.toString(),
    localization: localization.toString(),
    developer_data: developer_data.toString(),
    community_data: community_data.toString(),
  });

  res.status(code).json(response);
};

export default handler;
