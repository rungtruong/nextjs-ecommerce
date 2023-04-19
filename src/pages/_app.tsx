import '../styles/global.css';

import { EmptyLayout } from '../components';
import type { AppPropsWithLayout } from '../models/common';

const MyApp = ({ Component, pageProps }: AppPropsWithLayout) => {
  const Layout = Component.Layout ?? EmptyLayout;

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
};

export default MyApp;
