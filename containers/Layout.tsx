import React from "react";
import Head from "next/head";
import dynamic from "next/dynamic";
import Skeleton from "@/components/Skeleton";

const Header = dynamic(() => import("@/containers/Header"), {
  ssr: false,
  loading: () => (
    <header>
      <Skeleton height="60px" />
    </header>
  ),
});

interface ILayout {
  children: React.ReactNode;
  title?: string;
}

export default function Layout({ children, title }: ILayout) {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <link
          rel="icon"
          href={`${process.env.NEXT_PUBLIC_HOST_IMAGE}?id=1vytA0jRJLHaHlfs9xNhgwnUfRv9dSLoK`}
        />
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1"
        />
      </Head>
      <div className="layout">
        <Header />
        <div className="content">{children}</div>
      </div>
    </div>
  );
}
