import { ProductCart } from '@/sdk/minicart';

export type ProductCardCartProps = {
  product: ProductCart;
  variant: 'table' | 'card';
};
