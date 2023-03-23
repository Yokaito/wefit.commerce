import Image from 'next/image';
import Link from 'next/link';
import styled from 'styled-components';

export const MinicartWrapper = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  gap: 9px;
  color: ${({ theme }) => theme.colors.text[200]};
`;

export const MinicartCounterAux = styled.span`
  display: none;
  font-size: ${({ theme }) => theme.text.size[1]};
  font-weight: ${({ theme }) => theme.text.weight.semibold};
  color: ${({ theme }) => theme.colors.base.white};

  @media (${({ theme }) => theme.devices.notebook}) {
    display: block;
  }
`;

export const MinicartCounter = styled.span`
  color: ${({ theme }) => theme.colors.text[200]};
  font-size: ${({ theme }) => theme.text.size[0]};
  font-weight: ${({ theme }) => theme.text.weight.semibold};

  @media (${({ theme }) => theme.devices.notebook}) {
    text-align: end;
  }
`;

export const MinicartCounterWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const MinicartIcon = styled(Image)``;
