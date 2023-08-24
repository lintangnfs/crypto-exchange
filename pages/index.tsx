import React from "react";
import Layout from "@/containers/Layout";
import CoinList from "@/containers/Coins/List";

export default function Home() {
  return (
    <Layout title="Crypto Exchange">
      <CoinList />
    </Layout>
  );
}
