import { css } from "styled-components";

export const Resets = css`
  // ----------------------------------------------------------
  // GLOBAL STYLES
  // Resets
  // ----------------------------------------------------------

  // Reset default styles
  body {
    padding: 0;
    margin: 0;
  }

  // Remove all of the default margins
  blockquote,
  dl,
  dd,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  hr,
  figure,
  p,
  pre {
    margin: 0;
    padding: 0;
  }

  // Remove heading elements default style
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-size: inherit;
    font-weight: inherit;
  }

  // Remove list elements default style
  ol,
  ul {
    padding: 0;
    margin: 0;
    list-style: none;
  }

  // Reset default button styles
  button {
    display: flex;

    border: none;
    margin: 0;
    padding: 0;
    width: auto;
    overflow: visible;

    background: transparent;

    /* inherit font & color from ancestor */
    color: inherit;
    font: inherit;

    line-height: normal;

    -webkit-font-smoothing: inherit;
    -moz-osx-font-smoothing: inherit;

    -webkit-appearance: none;

    &:disabled {
      cursor: not-allowed;
    }
  }
`;
