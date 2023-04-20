import Cookies from 'cookies';
import httpProxy from 'http-proxy';
import type { NextApiRequest, NextApiResponse } from 'next';

export const config = {
  api: {
    bodyParser: false,
  },
};

const proxy = httpProxy.createProxyServer();

const option = {
  target: process.env.API_URL,
  changeOrigin: true,
  selfHandleResponse: false,
};

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  return new Promise<void>((resolve) => {
    const cookies = new Cookies(req, res, {
      secure: process.env.NODE_ENV !== 'development',
    });

    const accessToken = cookies.get('access_token');
    if (accessToken) {
      req.headers.authorization = `Bearer ${accessToken}`;
    }

    req.headers.cookie = '';
    proxy.web(req, res, option);
    proxy.once('proxyRes', () => {
      resolve();
    });
  });
}
