import { createGlobalStyle } from 'styled-components';
import { globalReset } from './globalReset';
import { globalFonts } from './globalFonts';

const GlobalStyles = createGlobalStyle`
  ${globalFonts}
  ${globalReset}
`;

export default GlobalStyles;
