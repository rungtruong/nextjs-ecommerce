import { MongoDBAdapter } from '@next-auth/mongodb-adapter';
import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';

import clientPromise from '../../../lib/mongodb';

export const authOptions = {
  clientId: process.env.GOOGLE_ID ? process.env.GOOGLE_ID : '',
  clientSecret: process.env.GOOGLE_SECRET ? process.env.GOOGLE_SECRET : '',
  adapter: MongoDBAdapter(clientPromise),
};

export default NextAuth({
  providers: [GoogleProvider({ ...authOptions })],
});
