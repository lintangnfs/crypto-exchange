import type { NextApiRequest, NextApiResponse } from "next";
import { apiGeckoV3 } from "@/helpers/api";

interface IPayloadFetch {
  vs_currency: string;
  days: string;
  slug: string;
}

interface IResponseFetch {
  code: number;
  response: any;
}

const fetchCoinMarketChart = async (
  payload: IPayloadFetch
): Promise<IResponseFetch> => {
  const paramsSearch = new URLSearchParams({
    days: payload.days,
    vs_currency: payload.vs_currency,
  });

  return await apiGeckoV3(
    `/coins/${payload.slug}/market_chart?${paramsSearch}`,
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
  const { slug, vs_currency = "usd", days = "1" } = req.query;

  const { code, response } = await fetchCoinMarketChart({
    ...req.query,
    vs_currency: vs_currency.toString(),
    slug: slug.toString(),
    days: days.toString(),
  });

  res.status(code).json(response);
};

export default handler;
