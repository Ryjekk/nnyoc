import Image from "next/image";
import {SwitchBtn} from "./styles";
import sun from '../../../../../assets/ico/sun.svg'
import moon from '../../../../../assets/ico/moon.svg'
import {useContext} from "react";
import {DarkModeContext} from "../../../../../context/DarkModeContext";

const Switcher = () => {
  const {theme, toggleTheme} = useContext(DarkModeContext)

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