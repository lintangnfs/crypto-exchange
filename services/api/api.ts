interface INewOptions {
  newUrl: string;
  newOptions: RequestInit;
}

export const HeaderAuth = (token: string) => ({
  token,
});

const optionsHandler = (url: string, options?: RequestInit): INewOptions => {
  const headers: any = {
    ...(options?.headers || {}),
  };

  const newOptions: RequestInit = {
    ...(options || {}),
    headers,
  };

  const newUrl: string = `${process.env.NEXT_PUBLIC_ROOT_DOMAIN}/api${url}`;

  return {
    newUrl,
    newOptions,
  };
};

export const api = async (
  url: string,
  options?: RequestInit
): Promise<Response> => {
  const { newUrl, newOptions }: INewOptions = optionsHandler(url, options);
  return fetch(newUrl, newOptions);
};
