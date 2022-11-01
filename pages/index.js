import GlobalStyles from "../styles/global/global";
import {ThemeProvider} from "styled-components";
import {darkMode, lightMode} from "../styles/theme/themeContext";
import {useDarkMode} from "../hooks/udeDarkMode";
import {BgThemeAnimation} from "../styles/theme/bgThemeAnimation";
import CustomCursor from "../components/ui/customCursor/CustomCursor";

const Home = () => {
  const [theme, bgAnimation, toggleTheme] = useDarkMode()
  const whatToAnimate = bgAnimation === 'animateDark' ? 'dark' : bgAnimation === 'animateLight' ? 'light' : '';

  return (
    <ThemeProvider theme={theme === 'light' ? lightMode : darkMode}>
      <GlobalStyles/>
      <BgThemeAnimation animate={whatToAnimate}/>

      <CustomCursor />
      <button onClick={toggleTheme}>Switch Theme</button>

      {theme}aaaa

    </ThemeProvider>
  )
}

export default Home;