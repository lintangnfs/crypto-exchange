import "@/styles/globals.css";
import type { AppProps } from "next/app";
import {
  Hydrate,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { CryptoProvider } from "@/helpers/context/CryptoContext";

const queryClient = new QueryClient();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
        <CryptoProvider>
          <Component {...pageProps} />
        </CryptoProvider>
        <ReactQueryDevtools initialIsOpen={true} />
      </Hydrate>
    </QueryClientProvider>
  );
}
