import styled from 'styled-components';

export const ProductGridWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-auto-rows: 1fr;
  gap: 16px;
  margin: 0 auto;

  @media (${({ theme }) => theme.devices.tablet}) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (${({ theme }) => theme.devices.notebook}) {
    grid-template-columns: repeat(3, 1fr);
    margin: 0;
  }
`;
