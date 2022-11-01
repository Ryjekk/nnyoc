import GlobalStyles from "../styles/global/global";
import {ThemeProvider} from "styled-components";
import {darkMode, lightMode} from "../styles/theme/themeContext";
import {useDarkMode} from "../hooks/udeDarkMode";
import {BgThemeAnimation} from "../styles/theme/bgThemeAnimation";
import Cursor from "../components/ui/cursor/Cursor";

const Home = () => {
  const [theme, bgAnimation, toggleTheme] = useDarkMode()
  const whatToAnimate = bgAnimation === 'animateDark' ? 'dark' : bgAnimation === 'animateLight' ? 'light' : '';

  return (
    <ThemeProvider theme={theme === 'light' ? lightMode : darkMode}>
      <GlobalStyles/>
      <BgThemeAnimation animate={whatToAnimate}/>

      <Cursor/>
      <button onClick={toggleTheme}>Switch Theme</button>

      <p>{theme}</p>aaaa

    </ThemeProvider>
  )
}

export default Home;