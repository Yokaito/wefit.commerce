import Image from 'next/image';
import Link from 'next/link';
import styled from 'styled-components';

export const EmptyCartWrapper = styled.div`
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

export const EmptyCartTitle = styled.h2`
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

export const EmptyCartImageWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  border-bottom: 1px solid ${({ theme }) => theme.colors.text[400]};

  @media ${({ theme }) => theme.devices.notebook} {
    max-width: 447px;
  }
`;

export const EmptyCartImage = styled(Image)``;

export const EmptyCartButton = styled(Link)`
  text-decoration: none;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.base.white};
  background-color: ${({ theme }) => theme.colors.primary.main};
  padding: 11px 0;
  height: 40px;
  width: 180px;
  display: flex;
  justify-content: center;
  border-radius: 4px;
  align-items: center;
  font-weight: ${({ theme }) => theme.text.weight.bold};
  font-size: ${({ theme }) => theme.text.size[1]};
`;
