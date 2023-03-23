import styled from 'styled-components';
import { SectionWrapper } from '@/components/sections/Section/styles';

export const HeaderWrapper = styled.header`
  display: flex;
  flex-direction: column;
  z-index: ${({ theme }) => theme.zIndex.highest};
  background: transparent;
  align-items: center;
  width: 100%;
  top: 0;

  @media ${({ theme }) => theme.devices.notebook} {
    margin-bottom: 24px;
  }
`;

export const HeaderContent = styled(SectionWrapper)`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  height: 68px;

  @media ${({ theme }) => theme.devices.notebook} {
    height: 74px;
  }
`;
