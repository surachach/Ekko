import type { AppProps } from "next/app";
import "antd/dist/antd.css";
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Ex Sanko</title>
        <meta charSet="utf-8" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
