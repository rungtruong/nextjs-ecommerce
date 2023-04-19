import '../styles/global.css';

import { SessionProvider } from 'next-auth/react';

import { EmptyLayout } from '../components';
import type { AppPropsWithLayout } from '../models/common';

const App = ({
  Component,
  pageProps: { session, ...pageProps },
}: AppPropsWithLayout) => {
  const Layout = Component.Layout ?? EmptyLayout;

  return (
    <SessionProvider session={session}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </SessionProvider>
  );
};

export default App;
