import Image from "next/image";
import {SwitchBtn} from "./styles";
import sun from '../../../../../assets/ico/sun.svg'
import moon from '../../../../../assets/ico/moon.svg'
import {useDarkMode} from "../../../../../hooks/useDarkMode";

const Switcher = () => {
  const [theme, bgAnimation, toggleTheme] = useDarkMode()

  return (
    <SwitchBtn onClick={toggleTheme}>
      {theme === 'light' ? (
        <Image src={moon} alt="darkMode" />
      ) : (
        <Image src={sun} alt="lightMode" />
      )}
    </SwitchBtn>
  );
};

export default Switcher;