import { useMiniCart } from '@/sdk/minicart';
import * as S from './styles';
import { ProductCardCart } from '@/components/product';
import { usePriceFormatter } from '@/sdk/product';
import { Button } from '../ui';
import { useRouter } from 'next/router';

export const MiniCart = () => {
  const { products, totalizers } = useMiniCart();
  const formatter = usePriceFormatter();
  const router = useRouter();

  const handleOrder = () => {
    router.push('/order');
  };

  return (
    <S.MinicartWrapper>
      <S.MinicartContent>
        {products.map((product) => (
          <ProductCardCart key={product.id} product={product} />
        ))}
      </S.MinicartContent>
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
