import * as T from './types';
import * as S from './styles';

export const Button = ({
  children,
  variant = 'primary',
  text = 'Button',
  icon,
  ...props
}: T.ButtonProps) => {
  return (
    <S.ButtonWrapper {...props} variant={variant}>
      {icon}
      <span>{text}</span>
    </S.ButtonWrapper>
  );
};

export default Button;
