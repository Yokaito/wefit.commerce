import { createGlobalStyle } from 'styled-components';

import { ModernNormalize } from './modern-normalize';
import { Resets } from './resets';
import { Typography } from './typography';

import theme from '@/styles/theme';

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${theme.colors.background.primary};
  }

  ${Typography}
  ${ModernNormalize}
  ${Resets}
`;

export default GlobalStyle;
