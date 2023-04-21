import { MongoDBAdapter } from '@next-auth/mongodb-adapter';
import NextAuth from 'next-auth';
import FacebookProvider from 'next-auth/providers/facebook';
import GoogleProvider from 'next-auth/providers/google';
import * as process from 'process';

import clientPromise from '@/lib/mongodb';

export default NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID ? process.env.GOOGLE_ID : '',
      clientSecret: process.env.GOOGLE_SECRET ? process.env.GOOGLE_SECRET : '',
    }),
    FacebookProvider({
      clientId: process.env.FACEBOOK_CLIENT_ID
        ? process.env.FACEBOOK_CLIENT_ID
        : '',
      clientSecret: process.env.FACEBOOK_CLIENT_SECRET
        ? process.env.FACEBOOK_CLIENT_SECRET
        : '',
    }),
  ],
  adapter: MongoDBAdapter(clientPromise, { databaseName: 'next-ecommerce-db' }),
  secret: process.env.NEXTAUTH_URL,
});
