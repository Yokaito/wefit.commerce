import { useRouter } from 'next/router';
import { Button } from '@/components/ui';
import * as S from './styles';
import * as T from './types';
import EmptyCartImage from '@/assets/images/empty.png';
import OrderImage from '@/assets/images/success.png';

export const Feedback = ({ variant = 'emptyCart' }: T.FeedbackProps) => {
  const router = useRouter();

  const handleBackToHome = () => {
    router.push('/');
  };

  const image = variant === 'emptyCart' ? EmptyCartImage : OrderImage;

  return (
    <S.FeedbackWrapper>
      <S.FeedbackTitle>
        {variant === 'emptyCart' && (
          <>
            Parece que não <br /> há nada por aqui :(
          </>
        )}
        {variant === 'orderSuccess' && (
          <>
            Compra realizada <br /> com sucesso!
          </>
        )}
      </S.FeedbackTitle>
      <S.FeedbackImageWrapper showBorder={variant === 'emptyCart'}>
        <S.FeedbackImage
          src={image.src}
          width={image.width}
          height={image.height}
          alt={variant}
          priority
          quality={100}
        />
      </S.FeedbackImageWrapper>
      <Button variant="orderBack" text="Voltar" onClick={handleBackToHome} />
    </S.FeedbackWrapper>
  );
};

export default Feedback;
