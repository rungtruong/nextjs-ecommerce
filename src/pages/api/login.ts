import Cookies from 'cookies';
import type { ProxyResCallback } from 'http-proxy';
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
  selfHandleResponse: true,
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  if (req.method !== 'POST') {
    return res.status(404).json({ message: 'Method not supported' });
  }

  return new Promise<void>((resolve) => {
    req.headers.cookie = '';

    const handleLoginResponse: ProxyResCallback = (proxyRes, _req, _res) => {
      let body = '';
      proxyRes.on('data', (chunk) => {
        body += chunk;
      });

      proxyRes.on('end', () => {
        try {
          const { accessToken, expireAt } = JSON.parse(body);
          const cookies = new Cookies(req, res, {
            secure: process.env.NODE_ENV !== 'development',
          });

          cookies.set('access_token', accessToken, {
            httpOnly: true,
            sameSite: 'lax',
            expires: new Date(expireAt),
          });
          (res as NextApiResponse)
            .status(200)
            .json({ message: 'Login successfully' });
        } catch (error) {
          (res as NextApiResponse)
            .status(500)
            .json({ message: 'Something went wrong' });
        }
        resolve();
      });
    };

    proxy.once('proxyRes', handleLoginResponse);
    proxy.web(req, res, option);
  });
}
