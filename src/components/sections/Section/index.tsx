import * as S from './styles';
import type * as T from './types';

export const Section = ({
  children,
  type,
  as,
  ...otherProps
}: T.SectionProps) => {
  const textClassName = type?.map((item) => `${item}`).join(' ');

  return (
    <S.SectionWrapper as={as} className={textClassName} {...otherProps}>
      {children}
    </S.SectionWrapper>
  );
};
