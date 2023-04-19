import Link from 'next/link';

import { AppConfig } from '@/utils/app-config';

import type { LayoutProps } from '../../models/common';

function MainLayout(props: LayoutProps) {
  return (
    <div className="w-full px-1 text-gray-700 antialiased">
      <div className="mx-auto max-w-screen-md">
        <header className="border-b border-gray-300">
          <div className="pb-8 pt-16">
            <h1 className="text-3xl font-bold text-gray-900">
              {AppConfig.title}
            </h1>
            <h2 className="text-xl">{AppConfig.description}</h2>
          </div>
          <nav>
            <ul className="flex flex-wrap text-xl">
              <li className="mr-6">
                <Link
                  href="/"
                  className="border-none text-gray-700 hover:text-gray-900"
                >
                  Home
                </Link>
              </li>
              <li className="mr-6">
                <Link
                  href="/about/"
                  className="border-none text-gray-700 hover:text-gray-900"
                >
                  About
                </Link>
              </li>
              <li className="mr-6">
                <Link
                  href="/blog/"
                  className="border-none text-gray-700 hover:text-gray-900"
                >
                  Blog
                </Link>
              </li>
            </ul>
          </nav>
        </header>

        <main className="content py-5 text-xl">{props.children}</main>
      </div>
    </div>
  );
}
export { MainLayout };