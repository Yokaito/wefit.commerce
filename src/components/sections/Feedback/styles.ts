import Image from 'next/image';
import styled, { css } from 'styled-components';
import * as T from './types';

export const FeedbackWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 532px;
  gap: 32px;
  width: 100%;
  border-radius: 4px;
  background-color: ${({ theme }) => theme.colors.base.white};
  padding: 64px 0;
`;

export const FeedbackTitle = styled.h2`
  font-weight: ${({ theme }) => theme.text.weight.bold};
  font-size: ${({ theme }) => theme.text.size[4]};
  color: ${({ theme }) => theme.colors.text[100]};
  text-align: center;

  @media ${({ theme }) => theme.devices.notebook} {
    br {
      display: none;
    }
  }
`;

export const FeedbackImageWrapper = styled.div<T.FeedbackImageWrapperProps>`
  width: 100%;
  display: flex;
  justify-content: center;
  ${({ showBorder }) =>
    showBorder &&
    css`
      border-bottom: 1px solid ${({ theme }) => theme.colors.text[400]};
    `}

  @media ${({ theme }) => theme.devices.notebook} {
    max-width: 447px;
  }
`;

export const FeedbackImage = styled(Image)``;
