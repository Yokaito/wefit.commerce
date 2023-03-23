import Link from 'next/link';
import styled from 'styled-components';

export const MinicartWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 21px;
  background-color: ${({ theme }) => theme.colors.base.white};
  border-radius: 4px;
  padding: 16px;
  width: 100%;
  height: calc(100vh - 84px);

  @media (${({ theme }) => theme.devices.notebook}) {
    height: max-content;
    padding: 24px;
  }
`;

export const MinicartContent = styled.div`
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  height: 84%;
  gap: 16px;

  @media (${({ theme }) => theme.devices.notebook}) {
    overflow-y: hidden;
    height: 100%;
    display: none;
  }
`;

export const MinicartDivider = styled.div`
  background-color: ${({ theme }) => theme.colors.text[200]};
  height: 1px;
`;

export const MinicartBottom = styled.div`
  bottom: 0;
  height: 77px;
  display: flex;
  flex-direction: column;
  gap: 16px;

  @media (${({ theme }) => theme.devices.notebook}) {
    flex-direction: row-reverse;
    align-items: center;
    justify-content: space-between;
    height: max-content;
  }
`;

export const MinicartTotalValuesWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 5px;
`;

export const MinicartTotalAuxiliar = styled.span`
  font-size: ${({ theme }) => theme.text.size[1]};
  color: ${({ theme }) => theme.colors.text[200]};
  font-weight: ${({ theme }) => theme.text.weight.bold};
  text-transform: uppercase;
`;

export const MinicartTotalValues = styled.span`
  font-size: ${({ theme }) => theme.text.size[5]};
  color: ${({ theme }) => theme.colors.text[100]};
  font-weight: ${({ theme }) => theme.text.weight.bold};
  text-align: center;
  width: 130px;
`;

export const MinicartTable = styled.table`
  display: none;

  @media (${({ theme }) => theme.devices.notebook}) {
    display: table;

    thead {
      th {
        font-size: ${({ theme }) => theme.text.size[1]};
        color: ${({ theme }) => theme.colors.text[200]};
        font-weight: ${({ theme }) => theme.text.weight.bold};
        text-transform: uppercase;
      }
    }

    tbody {
      td {
        padding-top: 21px;
      }
    }
  }
`;
