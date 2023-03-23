import type { NextApiRequest, NextApiResponse } from 'next';
import { products } from '@/assets/server';

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<{
    products: typeof products;
  }>,
) {
  return setTimeout(() => {
    res.status(200).json({ products });
  }, 1000);
}
