import React from "react";
import Head from "next/head";

type Props = {
  title?: string;
};

const LoginLayout: React.FC<Props> = ({
  children,
  title = "This is the default title",
}) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0"
      />
    </Head>

    {children}
  </div>
);

export default LoginLayout;
