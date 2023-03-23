import Image from 'next/image';
import * as S from './styles';

import OrderImage from '@/assets/images/success.png';
import { useRouter } from 'next/router';
import { Button } from '../ui';

export const OrderPlaced = () => {
  const router = useRouter();

  const handleBackToHome = () => {
    router.push('/');
  };

  return (
    <S.OrderPlacedWrapper>
      <S.OrderPlacedTitle>
        Compra realizada <br /> com sucesso!
      </S.OrderPlacedTitle>
      <Image
        src={OrderImage.src}
        width={OrderImage.width}
        height={OrderImage.width}
        alt="order placed"
        priority
        quality={100}
      />
      <Button variant="orderBack" text="Voltar" onClick={handleBackToHome} />
    </S.OrderPlacedWrapper>
  );
};

export default OrderPlaced;
