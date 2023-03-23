import Image from 'next/image';
import styled from 'styled-components';

export const ProductCardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.base.white};
  border-radius: 4px;
  min-width: 343px;
  width: 100%;
  padding: 10px 11px;
  justify-content: center;
  align-items: center;
  gap: 8px;

  @media ${({ theme }) => theme.devices.notebook} {
    min-width: 309.33px;
  }
`;

export const ProductCardHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 7px;
`;

export const ProductCardImage = styled(Image)``;

export const ProductCardInformation = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2px;
`;

export const ProductCardTitle = styled.h3`
  font-size: ${({ theme }) => theme.text.size[0]};
  font-weight: ${({ theme }) => theme.text.weight.bold};
  color: ${({ theme }) => theme.colors.text[300]};
`;

export const ProductCardValue = styled.p`
  font-size: ${({ theme }) => theme.text.size[2]};
  font-weight: ${({ theme }) => theme.text.weight.bold};
  color: ${({ theme }) => theme.colors.text[100]};
`;

export const ProductCardBottom = styled.div`
  display: flex;
  width: 100%;
`;

export const ProductButtonWrapper = styled.div`
  display: flex;
  gap: 3.4px;
  justify-content: center;
  align-items: center;
`;

export const ProductButtonIcon = styled(Image)``;

export const ProductButtonQuantity = styled.p`
  font-size: ${({ theme }) => theme.text.size[0]};
  font-weight: ${({ theme }) => theme.text.weight.regular};
  color: ${({ theme }) => theme.colors.base.white};
`;
