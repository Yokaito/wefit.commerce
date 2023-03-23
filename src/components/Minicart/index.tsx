import { useMiniCart } from '@/sdk/minicart';
import * as S from './styles';
import { ProductCardCart } from '@/components/product';
import { usePriceFormatter } from '@/sdk/product';
import { Button } from '../ui';
import { useRouter } from 'next/router';
import useMediaQuery from '@/sdk/hooks/useMediaQuery';

export const MiniCart = () => {
  const { products, totalizers } = useMiniCart();
  const formatter = usePriceFormatter();
  const router = useRouter();
  const { isNotebook, isDesktop } = useMediaQuery();

  const handleOrder = () => {
    router.push('/order');
  };

  return (
    <S.MinicartWrapper>
      <S.MinicartContent>
        {products.map((product) => (
          <ProductCardCart key={product.id} product={product} variant="card" />
        ))}
      </S.MinicartContent>
      {(isNotebook || isDesktop) && (
        <S.MinicartTable>
          <thead>
            <tr>
              <th align="left">Produto</th>
              <th align="left">QTD</th>
              <th align="left">SubTotal</th>
              <th align="right"></th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <ProductCardCart
                key={product.id}
                product={product}
                variant="table"
              />
            ))}
          </tbody>
        </S.MinicartTable>
      )}

      <S.MinicartDivider />
      <S.MinicartBottom>
        <S.MinicartTotalValuesWrapper>
          <S.MinicartTotalAuxiliar>Total</S.MinicartTotalAuxiliar>
          <S.MinicartTotalValues>
            {formatter(totalizers.total)}
          </S.MinicartTotalValues>
        </S.MinicartTotalValuesWrapper>
        <Button
          variant="order"
          text="Finalizar Pedido"
          onClick={handleOrder}
        ></Button>
      </S.MinicartBottom>
    </S.MinicartWrapper>
  );
};

export default MiniCart;
