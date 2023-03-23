import styled from 'styled-components';

export const OrderPlacedWrapper = styled.div`
  padding: 64px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;
  width: 100%;
  height: max-content;
  background-color: ${({ theme }) => theme.colors.base.white};
  border-radius: 4px;
`;

export const OrderPlacedTitle = styled.h2`
  font-size: ${({ theme }) => theme.text.size[4]};
  font-weight: ${({ theme }) => theme.text.weight.bold};
  color: ${({ theme }) => theme.colors.text[100]};
  text-align: center;
`;
