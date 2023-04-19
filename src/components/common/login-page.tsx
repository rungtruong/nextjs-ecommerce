import { signIn } from 'next-auth/react';

import { EmptyLayout } from '@/components';

import type { NextPageWithLayout } from '../../models/common';

const LoginPage: NextPageWithLayout = () => {
  return (
    <div className="relative flex h-screen w-screen items-center justify-center bg-gradient-to-br from-sky-50 to-gray-200">
      <div className="container relative m-auto px-6 text-gray-500 md:px-12 xl:px-40">
        <div className="m-auto md:w-8/12 lg:w-6/12 xl:w-6/12">
          <div className="rounded-xl bg-white shadow-xl">
            <div className="p-6 sm:p-16">
              <div className="space-y-4">
                <img
                  src="https://tailus.io/sources/blocks/social/preview/images/icon.svg"
                  loading="lazy"
                  className="w-10"
                  alt="tailus logo"
                />
                <h2 className="mb-8 text-2xl font-bold text-cyan-900">
                  Sign in to unlock the session.
                </h2>
              </div>
              <div className="mt-16 grid space-y-4">
                <button
                  className="group h-12 rounded-full border-2 border-gray-300 px-6 transition duration-300 
                   hover:border-blue-400 focus:bg-blue-50 active:bg-blue-100"
                  onClick={() =>
                    signIn('google', {
                      redirect: false,
                    })
                  }
                >
                  <div className="relative flex items-center justify-center space-x-4">
                    <img
                      src="https://tailus.io/sources/blocks/social/preview/images/google.svg"
                      className="absolute left-0 w-5"
                      alt="google logo"
                    />
                    <span className="block w-max text-sm font-semibold tracking-wide text-gray-700 transition duration-300 group-hover:text-blue-600 sm:text-base">
                      Continue with Google
                    </span>
                  </div>
                </button>
                {/* <button
                    className="group h-12 rounded-full border-2 border-gray-300 px-6 transition duration-300 
                               hover:border-blue-400 focus:bg-blue-50 active:bg-blue-100"
                  >
                    <div className="relative flex items-center justify-center space-x-4">
                      <img
                        src="https://upload.wikimedia.org/wikipedia/en/0/04/Facebook_f_logo_%282021%29.svg"
                        className="absolute left-0 w-5"
                        alt="Facebook logo"
                      />
                      <span className="block w-max text-sm font-semibold tracking-wide text-gray-700 transition duration-300 group-hover:text-blue-600 sm:text-base">
                        Continue with Facebook
                      </span>
                    </div>
                  </button> */}
              </div>
              {/* <div className="mt-32 space-y-4 text-center text-gray-600 sm:-mb-8">
                  <p className="text-xs">
                    By proceeding, you agree to our{' '}
                    <a href="#" className="underline">
                      Terms of Use
                    </a>{' '}
                    and confirm you have read our{' '}
                    <a href="#" className="underline">
                      Privacy and Cookie Statement
                    </a>
                    .
                  </p>
                  <p className="text-xs">
                    This site is protected by reCAPTCHA and the{' '}
                    <a href="#" className="underline">
                      Google Privacy Policy
                    </a>{' '}
                    and{' '}
                    <a href="#" className="underline">
                      Terms of Service
                    </a>{' '}
                    apply.
                  </p>
                </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

LoginPage.Layout = EmptyLayout;

export default LoginPage;
