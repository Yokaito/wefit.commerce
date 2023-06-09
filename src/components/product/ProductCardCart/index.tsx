import { useMiniCart } from '@/sdk/minicart';
import * as S from './styles';
import * as T from './types';
import Image from 'next/image';
import TrashIcon from '@/assets/images/trash.png';
import { usePriceFormatter } from '@/sdk/product';
import { QuantitySelector } from '@/components/ui';
import { toast } from 'react-toastify';

export const ProductCardCart = ({
  product,
  variant,
}: T.ProductCardCartProps) => {
  const { image, title, id, price, quantity } = product;
  const formatter = usePriceFormatter();
  const unavailableNotifier = () =>
    toast.warn('Produto não tem estoque suficiente');
  const {
    functions: { removeProduct, updateQuantity },
  } = useMiniCart();

  const handleButtonQuantity = (sum: boolean) => {
    if (sum && quantity >= 1) {
      if (quantity >= 100) return unavailableNotifier();
      updateQuantity(id, quantity + 1);
    } else if (!sum && quantity > 1 && quantity <= 100) {
      updateQuantity(id, quantity - 1);
    }
  };

  const handleInputQuantity = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    const quantity = Number(value);

    if (quantity > 0) {
      if (quantity <= 100) {
        updateQuantity(id, quantity);
      } else {
        unavailableNotifier();
      }
    }
  };

  if (variant === 'table') {
    return (
      <S.ProductCartTr>
        <S.ProductCartInfo>
          <S.ProductCardCartImage
            src={image}
            width={64}
            height={82}
            alt={title}
          />
          <S.ProductCartInfoNameAndValue>
            <S.ProductCardCartName>{title}</S.ProductCardCartName>
            <S.ProductCartValues>{formatter(price)}</S.ProductCartValues>
          </S.ProductCartInfoNameAndValue>
        </S.ProductCartInfo>
        <S.ProductCartQuantityTable>
          <QuantitySelector
            addQuantity={() => handleButtonQuantity(true)}
            removeQuantity={() => handleButtonQuantity(false)}
            inputHandler={handleInputQuantity}
            quantity={quantity}
            maxQuantity={100}
            minQuantity={1}
          />
        </S.ProductCartQuantityTable>
        <S.ProductCartSubTotalTable>
          <S.ProductCartValues>
            {formatter(price * quantity)}
          </S.ProductCartValues>
        </S.ProductCartSubTotalTable>
        <S.ProductCartRemove>
          <S.ProductCartButton onClick={() => removeProduct(id)}>
            <Image
              src={TrashIcon.src}
              width={16}
              height={18}
              alt="remove product"
            />
          </S.ProductCartButton>
        </S.ProductCartRemove>
      </S.ProductCartTr>
    );
  }

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
          <QuantitySelector
            addQuantity={() => handleButtonQuantity(true)}
            removeQuantity={() => handleButtonQuantity(false)}
            inputHandler={handleInputQuantity}
            quantity={quantity}
            maxQuantity={100}
            minQuantity={1}
          />
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
