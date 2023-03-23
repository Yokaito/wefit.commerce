import styled from 'styled-components';

export const SectionWrapper = styled.section`
  &.LayoutMain {
    display: flex;
    flex-wrap: wrap;
  }

  &.LayoutContent {
    width: 100%;
    box-sizing: border-box;
    max-width: ${({ theme }) => theme.breakpoints.notebook}px;
    padding-right: 16px;
    padding-left: 16px;
    padding-bottom: 16px;
    margin-right: auto;
    margin-left: auto;

    @media (${({ theme }) => theme.devices.notebook}) {
      padding-right: 0px;
      padding-left: 0px;
    }
  }

  &.LayoutHeader {
    width: 100%;
    box-sizing: border-box;
    max-width: ${({ theme }) => theme.breakpoints.notebook}px;
    padding-right: 10px;
    padding-left: 10px;
    margin-right: auto;
    margin-left: auto;

    @media (${({ theme }) => theme.devices.notebook}) {
      padding-right: 0px;
      padding-left: 0px;
    }
  }
`;
