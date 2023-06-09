import { signOut, useSession } from 'next-auth/react';

import { MainLayout, MetaTag } from '@/components';
import type { NextPageWithLayout } from '@/models';
import { AppConfig } from '@/utils/app-config';

const Index: NextPageWithLayout = () => {
  const { data: session } = useSession();

  return (
    <>
      <MetaTag title={AppConfig.title} description={AppConfig.description} />
      User Signed in as {session?.user?.email} <br />
      <button onClick={() => signOut()}>Sign out</button>
    </>
  );
};

Index.Layout = MainLayout;
export default Index;
