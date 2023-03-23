import styled, { css } from 'styled-components';
import * as T from './types';

const variantStyles = (variant: T.Variant) => {
  return {
    primary: css`
      background-color: ${({ theme }) => theme.colors.primary.main};

      span {
        min-width: 157px;
      }
    `,
    secondary: css`
      background-color: ${({ theme }) => theme.colors.secondary.main};

      span {
        min-width: 157px;
      }
    `,
    order: css`
      background-color: ${({ theme }) => theme.colors.primary.main};

      @media (${({ theme }) => theme.devices.notebook}) {
        max-width: 235px;
      }

      span {
        font-size: ${({ theme }) => theme.text.size[1]};
      }
    `,
    orderBack: css`
      background-color: ${({ theme }) => theme.colors.primary.main};
      width: 180px;

      span {
        font-size: ${({ theme }) => theme.text.size[1]};
      }
    `,
  }[variant];
};

export const ButtonWrapper = styled.button<T.ButtonWrapperProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  line-height: normal;
  gap: 12px;
  padding: 11px 0;
  border-radius: 4px;
  height: 40px;

  &:hover {
    cursor: pointer;
  }

  span {
    color: ${({ theme }) => theme.colors.base.white};
    font-size: ${({ theme }) => theme.text.size[0]};
    font-weight: ${({ theme }) => theme.text.weight.bold};
    text-transform: uppercase;
  }

  ${({ variant = 'primary' }) => variantStyles(variant)}
`;
