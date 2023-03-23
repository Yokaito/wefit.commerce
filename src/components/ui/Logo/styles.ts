import Link from 'next/link';
import styled from 'styled-components';

export const LogoWrapper = styled(Link)`
  color: ${({ theme }) => theme.colors.base.white};
  text-decoration: none;
  font-size: ${({ theme }) => theme.text.size[4]};
  font-weight: ${({ theme }) => theme.text.weight.bold};
`;
