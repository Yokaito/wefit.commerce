import * as S from './styles';
import * as T from './types';
import { useBuyButton, usePriceFormatter } from '@/sdk/product';
import { Button } from '@/components/ui';
import QuantityIcon from '@/assets/images/cart-quantity.png';
import { useMiniCart } from '@/sdk/minicart';

export const ProductCard = ({ product }: T.ProductCardProps) => {
  const { id, image, price, title } = product;

  const {
    functions: { hasProduct },
  } = useMiniCart();
  const formatPrice = usePriceFormatter();
  const buyProps = useBuyButton({
    ...product,
    quantity: 1,
  });
  const inCart = hasProduct(id);

  const Icon = (
    <S.ProductButtonWrapper>
      <S.ProductButtonIcon
        src={QuantityIcon.src}
        height={QuantityIcon.height}
        width={QuantityIcon.width}
        alt="quantity icon"
      />
      <S.ProductButtonQuantity>
        {inCart ? inCart.quantity : 0}
      </S.ProductButtonQuantity>
    </S.ProductButtonWrapper>
  );

  return (
    <S.ProductCardWrapper>
      <S.ProductCardHeader>
        <S.ProductCardImage
          src={image}
          width={147}
          height={188}
          alt="Viuva Negra"
          priority
        />
        <S.ProductCardInformation>
          <S.ProductCardTitle>{title}</S.ProductCardTitle>
          <S.ProductCardValue>{formatPrice(price)}</S.ProductCardValue>
        </S.ProductCardInformation>
      </S.ProductCardHeader>
      <S.ProductCardBottom>
        <Button
          {...buyProps}
          variant={inCart ? 'secondary' : 'primary'}
          icon={Icon}
          text={inCart ? 'item adicionado' : 'adicionar ao carrinho'}
        ></Button>
      </S.ProductCardBottom>
    </S.ProductCardWrapper>
  );
};

export default ProductCard;
