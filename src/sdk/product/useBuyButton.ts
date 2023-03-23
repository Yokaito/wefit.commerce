import { ProductCart, useMiniCart } from '@/sdk/minicart';
import { useCallback } from 'react';

export const useBuyButton = (product: ProductCart) => {
  const {
    functions: { addProduct },
  } = useMiniCart();

  const onClick = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {
      e.preventDefault();

      addProduct(product);
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [product],
  );

  return {
    onClick,
    'data-id': product.id,
  };
};
