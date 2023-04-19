import type { NextPage } from 'next';
import type { AppProps } from 'next/app';
import type { ReactElement, ReactNode } from 'react';

export interface LayoutProps {
  children: ReactNode;
}

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  Layout?: (props: LayoutProps) => ReactElement;
};

export type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};
