import styled from 'styled-components';

export const QuantitySelectorWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 11px;
`;

export const QuantitySelectorInput = styled.input`
  width: 59px;
  height: 26px;
  border: 1px solid ${({ theme }) => theme.colors.auxiliar[100]};
  border-radius: 4px;
  padding: 0 12px;
  font-size: ${({ theme }) => theme.text.size[1]};
  font-weight: ${({ theme }) => theme.text.weight.regular};
  color: ${({ theme }) => theme.colors.text[100]};
`;
