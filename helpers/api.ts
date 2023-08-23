import { RequestInit } from "next/dist/server/web/spec-extension/request";

const baseUrl: {
  [key: string]: string | undefined;
} = {
  geckoV3: `${process.env.NEXT_API_COINGECKO}/v3`,
};

interface INewOptions {
  newUrl: string;
  newOptions: RequestInit;
}

const optionsHandler = (
  url: string,
  version: string,
  options?: RequestInit
): INewOptions => {
  const headers: any = {
    ...(options?.headers || {}),
  };

  const newOptions: RequestInit = {
    ...(options || {}),
    headers,
  };

  const newUrl: string = `${baseUrl[version]}${url}`;

  return {
    newUrl,
    newOptions,
  };
};

const apiGeckoV3 = async (
  url: string,
  options?: RequestInit
): Promise<Response> => {
  const { newUrl, newOptions }: INewOptions = optionsHandler(
    url,
    "geckoV3",
    options
  );

  return fetch(newUrl, newOptions);
};

export { apiGeckoV3 };
