import { signOut, useSession } from 'next-auth/react';
import React from 'react';

import { AdminLayout, MetaTag } from '@/components';
import type { NextPageWithLayout } from '@/models';
import { AppConfig } from '@/utils/app-config';

const Admin: NextPageWithLayout = () => {
  const { data: session } = useSession();

  return (
    <>
      <MetaTag title={AppConfig.title} description={AppConfig.description} />
      Admin Signed in as {session?.user?.email} <br />
      <button onClick={() => signOut()}>Sign out</button>
    </>
  );
};

Admin.Layout = AdminLayout;
export default Admin;
