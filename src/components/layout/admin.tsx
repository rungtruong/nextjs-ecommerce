import { useSession } from 'next-auth/react';
import React from 'react';

import LoginPage from '@/components/common/login-page';
import type { LayoutProps } from '@/models';

function AdminLayout(props: LayoutProps) {
  const { data: session } = useSession();

  if (session) {
    return <>{props.children}</>;
  }
  return <LoginPage />;
}

export { AdminLayout };
