import GlobalStyles from "../styles/global/global";
import {ThemeProvider} from "styled-components";
import {darkMode, lightMode} from "../styles/theme/themeContext";
import {useDarkMode} from "../hooks/udeDarkMode";
import {BgThemeAnimation} from "../styles/theme/bgThemeAnimation";
import Cursor from "../components/ui/cursor/Cursor";
import Preloader from "../components/ui/preloader/Preloader";
import {usePreloaderTimer} from "../hooks/usePreloaderTimer";

const Home = () => {
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
          <button onClick={toggleTheme}>Switch Theme</button>
        </>
      }

    </ThemeProvider>
  )
}

export default Home;