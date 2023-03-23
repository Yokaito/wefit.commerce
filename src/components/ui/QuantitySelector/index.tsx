import Image from 'next/image';
import * as S from './styles';
import * as T from './types';
import PlusQuantityIcon from '@/assets/images/plus-quantity.png';
import MinusQuantityIcon from '@/assets/images/minus-quantity.png';

export const QuantitySelector = ({
  addQuantity,
  removeQuantity,
  inputHandler,
  quantity,
  minQuantity,
  maxQuantity,
}: T.QuantitySelectorProps) => {
  const minusDisabled = quantity <= minQuantity;
  const plusDisabled = quantity >= maxQuantity;

  return (
    <S.QuantitySelectorWrapper>
      <S.QuantitySelectorButton
        onClick={removeQuantity}
        disabled={minusDisabled}
      >
        <Image
          src={MinusQuantityIcon.src}
          width={18}
          height={18}
          priority
          alt="plus quantity"
        />
      </S.QuantitySelectorButton>
      <S.QuantitySelectorInput
        type="text"
        value={quantity}
        onChange={inputHandler}
      />
      <S.QuantitySelectorButton onClick={addQuantity} disabled={plusDisabled}>
        <Image
          src={PlusQuantityIcon.src}
          width={18}
          height={18}
          priority
          alt="plus quantity"
        />
      </S.QuantitySelectorButton>
    </S.QuantitySelectorWrapper>
  );
};

export default QuantitySelector;
