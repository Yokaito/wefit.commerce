import { useState } from 'react';
import * as S from './styles';

import MinicartIcon from '@/assets/images/minicart.png';
import { useMiniCart } from '@/sdk/minicart/useMinicart';

export const Minicart = () => {
  const {
    auxiliar: { totalProducts },
  } = useMiniCart();

  const text = totalProducts === 1 ? 'item' : 'itens';

  return (
    <>
      <S.MinicartWrapper href="/minicart">
        <S.MinicartCounterWrapper>
          <S.MinicartCounterAux>Meu Carrinho</S.MinicartCounterAux>
          <S.MinicartCounter>
            {totalProducts} {text}
          </S.MinicartCounter>
        </S.MinicartCounterWrapper>
        <S.MinicartIcon
          src={MinicartIcon.src}
          width={29}
          height={25}
          alt="minicart icon"
        />
      </S.MinicartWrapper>
    </>
  );
};

export default Minicart;
