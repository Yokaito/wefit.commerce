import type { NextApiRequest, NextApiResponse } from 'next';
import { products } from '@/assets/server';

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<{
    products: typeof products;
  }>,
) {
  res.status(200).json({ products: products });
}
