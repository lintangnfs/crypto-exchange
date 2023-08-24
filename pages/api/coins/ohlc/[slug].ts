import type { NextApiRequest, NextApiResponse } from "next";
import { apiGeckoV3 } from "@/helpers/api";

interface IPayloadFetch {
  slug: string;
  vs_currency: string;
  days: string;
}

interface IResponseFetch {
  code: number;
  response: any;
}

const fetchCoinOHLC = async (
  payload: IPayloadFetch
): Promise<IResponseFetch> => {
  const paramsSearch = new URLSearchParams({
    vs_currency: payload.vs_currency,
    days: payload.days,
  });

  return await apiGeckoV3(`/coins/${payload.slug}/ohlc?${paramsSearch}`, {
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
  const { slug, vs_currency = "usd", days = "1" } = req.query;

  const { code, response } = await fetchCoinOHLC({
    slug: slug.toString(),
    vs_currency: vs_currency.toString(),
    days: days.toString(),
  });

  res.status(code).json(response);
};

export default handler;
