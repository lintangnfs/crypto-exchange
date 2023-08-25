import { createContext, useContext, useEffect } from "react";
import useWebSocket from "react-use-websocket";
import { MARKET_LIST } from "@/consts/queryKeys";

import { useQueryClient } from "@tanstack/react-query";

type cryptoContextType = {};

const cryptoContextDefaultValues: cryptoContextType = {};

const CryptoContext = createContext<cryptoContextType>(
  cryptoContextDefaultValues
);

export function useCrypto() {
  return useContext(CryptoContext);
}

const MESSAGE_TYPE = {
  INITIAL_DATA: "INITIAL_DATA",
  SEND_MESSAGE: "SEND_MESSAGE",
  NEW_MESSAGE: "NEW_MESSAGE",
};

type Props = {
  children: React.ReactNode;
};

export function CryptoProvider({ children }: Props) {
  // dummy url for get market list, i can't find coingecko websocket
  const url = "wss://cable.coingecko.com/cable";
  const { lastMessage } = useWebSocket(url);

  const queryClient = useQueryClient();

  // use to update data here
  useEffect(() => {
    if (lastMessage?.data) {
      const { type, payload } = JSON.parse(lastMessage.data);

      switch (type) {
        case MESSAGE_TYPE.INITIAL_DATA:
          queryClient.setQueryData([MARKET_LIST], () => {
            return payload;
          });
          break;
        case MESSAGE_TYPE.NEW_MESSAGE:
          queryClient.setQueryData([MARKET_LIST], (oldData: any) => {
            return [...oldData, payload];
          });
          break;
        default:
          break;
      }
    }
  }, [lastMessage, queryClient]);

  const value = {};
  return (
    <CryptoContext.Provider value={value}>{children}</CryptoContext.Provider>
  );
}
