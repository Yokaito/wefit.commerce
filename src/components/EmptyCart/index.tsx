import * as S from './styles';
import EmptyCartImage from '@/assets/images/empty.png';

export const EmptyCart = () => {
  return (
    <S.EmptyCartWrapper>
      <S.EmptyCartTitle>
        Parece que não <br /> há nada por aqui :(
      </S.EmptyCartTitle>
      <S.EmptyCartImageWrapper>
        <S.EmptyCartImage
          src={EmptyCartImage.src}
          width={EmptyCartImage.width}
          height={EmptyCartImage.height}
          alt="Empty Cart"
          priority
        />
      </S.EmptyCartImageWrapper>
      <S.EmptyCartButton href="/">Voltar</S.EmptyCartButton>
    </S.EmptyCartWrapper>
  );
};

export default EmptyCart;
