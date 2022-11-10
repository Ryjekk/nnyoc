import {darkMode, lightMode} from "../../styles/theme/themeContext";
import GlobalStyles from "../../styles/global/global";
import Preloader from "../common/preloader/Preloader";
import {BgThemeAnimation} from "../../styles/theme/bgThemeAnimation";
import {ThemeProvider} from "styled-components";
import {useDarkMode} from "../../hooks/udeDarkMode";
import {usePreloaderTimer} from "../../hooks/usePreloaderTimer";
import Cursor from "../common/cursor/Cursor";

const GlobalWrapper = ({children}) => {
  const [theme, bgAnimation, toggleTheme] = useDarkMode()
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
          {/*<button onClick={toggleTheme}>Switch Theme</button>*/}
          {children}
        </>
      }
    </ThemeProvider>
  );
};

export default GlobalWrapper;