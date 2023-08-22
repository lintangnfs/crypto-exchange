import React from "react";
import Layout from "@/containers/Layout";
import Section from "@/containers/Section";
import CoinOverview from "@/components/Crypto/Coin/Overview";

export default function Home() {
  return (
    <Layout title="Crypto Exchange">
      <Section title="Market Overview" subtitle="All Cryptos in Rupiah">
        <CoinOverview
          code="BTN"
          image={`${process.env.NEXT_PUBLIC_HOST_IMAGE}?id=1PsGDYooNP8tQ8F5P8i7aSFtRHuXhzqoS`}
          price="Rp. 88.129"
          return="5.81"
        />
      </Section>
    </Layout>
  );
}
