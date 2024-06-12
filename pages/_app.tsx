import React from 'react';
import { ConfigProvider } from 'antd';
import type { AppProps } from 'next/app';
import { SessionProvider } from 'next-auth/react';

import theme from '../theme/themeConfig';  // Adjust the import path if necessary

const App = ({ Component, pageProps: { session, ...pageProps } }: AppProps) => (
  <SessionProvider session={session}>
    <ConfigProvider theme={theme}>
      <Component {...pageProps} />
    </ConfigProvider>
  </SessionProvider>
);

export default App;
