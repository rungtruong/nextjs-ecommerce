import { MetaTag } from '@/components';
import { MainLayout } from '@/components/layout/main';

import type { NextPageWithLayout } from '../models/common';
import { AppConfig } from '../utils/app-config';

const Index: NextPageWithLayout = () => {
  return (
    <div>
      <MetaTag title={AppConfig.title} description={AppConfig.description} />
      <h1> FT TEST</h1>
    </div>
  );
};

Index.Layout = MainLayout;

export default Index;
