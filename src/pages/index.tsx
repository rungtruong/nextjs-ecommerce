import { signOut, useSession } from 'next-auth/react';

import { MetaTag } from '@/components';
import LoginPage from '@/components/common/login-page';

import type { NextPageWithLayout } from '../models/common';
import { AppConfig } from '../utils/app-config';

const Index: NextPageWithLayout = () => {
  const { data: session } = useSession();

  if (session) {
    return (
      <>
        <MetaTag title={AppConfig.title} description={AppConfig.description} />
        Signed in as {session.user?.email} <br />
        <button onClick={() => signOut()}>Sign out</button>
      </>
    );
  }
  return <LoginPage />;
};

export default Index;
