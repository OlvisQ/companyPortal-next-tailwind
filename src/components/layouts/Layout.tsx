import React from "react";
import Head from "next/head";
import Header from "@/components/Global/Header";

type Props = {
  title?: string;
};

const Layout: React.FC<Props> = ({
  children,
  title = "This is the default title",
}) => (
  <div className="overflow-x-hidden">
    <Head>
      <title>{title}</title>
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0"
      />
    </Head>

    <Header />

    {children}
  </div>
);

export default Layout;
