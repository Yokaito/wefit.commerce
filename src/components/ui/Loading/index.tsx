import Image from 'next/image';
import * as S from './styles';
import Loader from '@/assets/images/loading.png';

export const Loading = () => {
  return (
    <S.LoadingWrapper>
      <S.LoadingContainer>
        <Image
          src={Loader.src}
          width={Loader.width}
          height={Loader.height}
          alt="loading"
        />
      </S.LoadingContainer>
    </S.LoadingWrapper>
  );
};

export default Loading;
