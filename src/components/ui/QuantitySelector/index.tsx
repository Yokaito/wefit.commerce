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
}: T.QuantitySelectorProps) => {
  return (
    <S.QuantitySelectorWrapper>
      <button onClick={removeQuantity}>
        <Image
          src={MinusQuantityIcon.src}
          width={18}
          height={18}
          priority
          alt="plus quantity"
        />
      </button>
      <S.QuantitySelectorInput
        type="text"
        value={quantity}
        onChange={inputHandler}
      />
      <button onClick={addQuantity}>
        <Image
          src={PlusQuantityIcon.src}
          width={18}
          height={18}
          priority
          alt="plus quantity"
        />
      </button>
    </S.QuantitySelectorWrapper>
  );
};

export default QuantitySelector;
