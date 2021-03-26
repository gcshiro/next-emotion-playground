import React from 'react';
import Head from 'next/head';
import { AppProps } from 'next/app';

import GlobalStyle from '@/styles/global';

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <meta charSet="utf8" />
        <title>emotion example</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      {GlobalStyle}
      <Component {...pageProps} />
    </>
  );
};

export default App;
