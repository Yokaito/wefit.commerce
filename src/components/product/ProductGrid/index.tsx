import * as S from './styles';
import { PropsWithChildren } from 'react';

export const ProductGrid = ({ children }: PropsWithChildren) => {
  return <S.ProductGridWrapper>{children}</S.ProductGridWrapper>;
};

export default ProductGrid;
