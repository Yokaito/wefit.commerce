import { css } from 'styled-components';

import theme from '@/styles/theme';

export const Typography = css`
  /* Codeby Fonts */
  *,
  body,
  html {
    font-family: ${theme.text.family.primary}, ui-monospace, SFMono-Regular,
      Consolas, 'Liberation Mono', Menlo, monospace;
    font-size: 16px;

    letter-spacing: 0.01em;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`;
