import { createGlobalStyle } from "styled-components";

import { ModernNormalize } from "./modern-normalize";
import { Resets } from "./resets";
import { Typography } from "./typography";

const GlobalStyle = createGlobalStyle`
  ${Typography}
  ${ModernNormalize}
  ${Resets}
`;

export default GlobalStyle;
