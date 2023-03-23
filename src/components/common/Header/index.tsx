import * as S from './styles';

import { Logo, Minicart } from '@/components/ui';

export const Header = () => {
  return (
    <S.HeaderWrapper>
      <S.HeaderContent className="LayoutHeader" as="div">
        <Logo />
        <Minicart />
      </S.HeaderContent>
    </S.HeaderWrapper>
  );
};

export default Header;
