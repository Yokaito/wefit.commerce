import { useMiniCart } from '@/sdk/minicart';
import * as S from './styles';
import * as T from './types';
import Image from 'next/image';
import TrashIcon from '@/assets/images/trash.png';
import PlusQuantityIcon from '@/assets/images/plus-quantity.png';
import MinusQuantityIcon from '@/assets/images/minus-quantity.png';
import { usePriceFormatter } from '@/sdk/product';

export const ProductCardCart = ({ product }: T.ProductCardCartProps) => {
  const { image, title, id, price, quantity } = product;
  const formatter = usePriceFormatter();
  const {
    functions: { removeProduct, updateQuantity },
  } = useMiniCart();

  const handleButtonQuantity = (sum: boolean) => {
    if (sum && quantity >= 1) {
      updateQuantity(id, quantity + 1);
    } else if (!sum && quantity > 1) {
      updateQuantity(id, quantity - 1);
    }
  };

  const handleInputQuantity = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    const quantity = Number(value);

    if (quantity > 0) {
      updateQuantity(id, quantity);
    }
  };

  return (
    <S.ProductCardCartWrapper>
      <S.ProductCardCartImage src={image} width={64} height={82} alt={title} />
      <S.ProductCardCartInfo>
        <S.ProductCardName>
          <S.ProductCardCartName>{title}</S.ProductCardCartName>
          <S.ProductCartPrice>{formatter(price)}</S.ProductCartPrice>
          <button onClick={() => removeProduct(id)}>
            <Image
              src={TrashIcon.src}
              width={16}
              height={18}
              alt="remove product"
            />
          </button>
        </S.ProductCardName>
        <S.ProductCartFooterWrapper>
          <S.ProductCartQuantityWrapper>
            <button onClick={() => handleButtonQuantity(false)}>
              <Image
                src={MinusQuantityIcon.src}
                width={18}
                height={18}
                priority
                alt="plus quantity"
              />
            </button>
            <S.ProductCartQuantityInput
              type="text"
              value={quantity}
              onChange={handleInputQuantity}
            />
            <button onClick={() => handleButtonQuantity(true)}>
              <Image
                src={PlusQuantityIcon.src}
                width={18}
                height={18}
                priority
                alt="plus quantity"
              />
            </button>
          </S.ProductCartQuantityWrapper>
          <S.ProductCartValuesWrapper>
            <S.ProductCartValuesAuxiliar>SubTotal</S.ProductCartValuesAuxiliar>
            <S.ProductCartValues>
              {formatter(price * quantity)}
            </S.ProductCartValues>
          </S.ProductCartValuesWrapper>
        </S.ProductCartFooterWrapper>
      </S.ProductCardCartInfo>
    </S.ProductCardCartWrapper>
  );
};

export default ProductCardCart;
