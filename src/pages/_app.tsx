import React from 'react';
import Head from 'next/head';
import { AppProps } from 'next/app';

import { ThemeProvider } from '@emotion/react';
import GlobalStyle from '@/styles/global';
import { theme } from '@/styles/designToken/theme';

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <meta charSet="utf8" />
        <title>emotion example</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <ThemeProvider theme={theme}>
        {GlobalStyle}
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
};

export default App;
