import React from "react";
import Layout from "@/containers/Layout";
import Section from "@/containers/Section";
import CoinList from "@/containers/Coins/List";

export default function Home() {
  return (
    <Layout title="Crypto Exchange">
      <Section title="Market Overview" subtitle="All Cryptos in Rupiah">
        <CoinList />
      </Section>
    </Layout>
  );
}
