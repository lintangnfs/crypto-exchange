import type { NextApiRequest, NextApiResponse } from "next";
import { apiGeckoV3 } from "@/helpers/api";

interface IPayloadFetch {
  vs_currency: string;
  page: string;
  per_page: string;
  order: string;
  sparkline?: string;
  price_change_percentage?: string;
}

interface IResponseFetch {
  code: number;
  response: any;
}

const fetchCoinMarkets = async (
  payload: IPayloadFetch
): Promise<IResponseFetch> => {
  const paramsSearch = new URLSearchParams({
    ...payload,
  });

  return await apiGeckoV3(`/coins/markets?${paramsSearch}`, {
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
  const vs_currency = req.query.vs_currency || "usd";

  const { code, response } = await fetchCoinMarkets({
    ...req.query,
    vs_currency: vs_currency.toString(),
    page: "1",
    per_page: "10",
    order: "gecko_desc",
    sparkline: "false",
    price_change_percentage: "24h",
  });

  res.status(code).json(response);
};

export default handler;
