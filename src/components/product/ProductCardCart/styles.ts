import Image from 'next/image';
import styled from 'styled-components';

export const ProductCardCartWrapper = styled.div`
  display: flex;
  gap: 16px;
  padding-right: 16px;
`;

export const ProductCardCartImage = styled(Image)``;

export const ProductCardCartInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;
  justify-content: space-between;
`;

export const ProductCardName = styled.div`
  display: flex;
  gap: 16px;
  justify-content: space-between;
  align-items: start;
  flex-wrap: wrap;
`;

export const ProductCartPrice = styled.span`
  font-size: ${({ theme }) => theme.text.size[2]};
  font-weight: ${({ theme }) => theme.text.weight.bold};
  color: ${({ theme }) => theme.colors.text[100]};
`;

export const ProductCardCartName = styled.h3`
  font-size: ${({ theme }) => theme.text.size[1]};
  font-weight: ${({ theme }) => theme.text.weight.bold};
  color: ${({ theme }) => theme.colors.text[100]};
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  width: 100px;

  @media (${({ theme }) => theme.devices.notebook}) {
    width: max-content;
  }
`;

export const ProductCartFooterWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 5px;
  align-items: center;
`;

export const ProductCartValuesWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

export const ProductCartValuesAuxiliar = styled.span`
  font-size: ${({ theme }) => theme.text.size[0]};
  font-weight: ${({ theme }) => theme.text.weight.bold};
  color: ${({ theme }) => theme.colors.text[200]};
  text-transform: uppercase;
`;

export const ProductCartValues = styled.span`
  font-size: ${({ theme }) => theme.text.size[2]};
  font-weight: ${({ theme }) => theme.text.weight.bold};
  color: ${({ theme }) => theme.colors.text[100]};
`;

export const ProductCartInfoNameAndValue = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  justify-content: center;
`;

export const ProductCartTr = styled.tr``;

export const ProductCartInfo = styled.td`
  display: flex;
  gap: 52px;
`;

export const ProductCartQuantityTable = styled.td``;

export const ProductCartSubTotalTable = styled.td``;

export const ProductCartRemove = styled.td``;

export const ProductCartButton = styled.button`
  &:hover {
    cursor: pointer;
  }
`;
