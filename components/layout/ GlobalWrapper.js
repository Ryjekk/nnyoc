import {darkMode, lightMode} from "../../styles/theme/themeContext";
import GlobalStyles from "../../styles/global/global";
import Preloader from "../common/preloader/Preloader";
import {BgThemeAnimation} from "../../styles/theme/bgThemeAnimation";
import {ThemeProvider} from "styled-components";
import {usePreloaderTimer} from "../../hooks/usePreloaderTimer";
import Cursor from "../common/cursor/Cursor";
import {useContext} from "react";
import {DarkModeContext} from "../../context/DarkModeContext";

const GlobalWrapper = ({children}) => {
  const {theme, bgAnimation} = useContext(DarkModeContext)
  const whatToAnimate = bgAnimation === 'animateDark' ? 'dark' : bgAnimation === 'animateLight' ? 'light' : '';
  const preloader = usePreloaderTimer();

  return (
    <ThemeProvider theme={theme === 'light' ? lightMode : darkMode}>
      <GlobalStyles/>
      {preloader
        ? <Preloader/>
        : <>
          <BgThemeAnimation animate={whatToAnimate}/>
          <Cursor/>
          {children}
        </>
      }
    </ThemeProvider>
  );
};

export default GlobalWrapper;