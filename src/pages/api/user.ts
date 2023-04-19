import type { NextApiRequest, NextApiResponse } from 'next';

type Data = {
  name: string;
};
export default function handler(
  _req: NextApiRequest,
  res: NextApiResponse<Data>
): void {
  res.status(200).json({ name: 'Forest Truong' });
}