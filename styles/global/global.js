import { createGlobalStyle } from 'styled-components';
import { globalReset } from './globalReset';
import { globalFonts } from './globalFonts';

const GlobalStyles = createGlobalStyle`
  ${globalReset}
  ${globalFonts}
`;

export default GlobalStyles;
