import {COLORS} from "../common/vars";
import smallLogoBlack from "../../assets/logo/logoSimpleBlack.png"
import smallLogoWhite from "../../assets/logo/logoSimpleWhite.png"

// dear future me - here are colors are accordingly to color theme because i do use   mix-blend-mode: difference; on
// text to difreenciate text amd borders=

export const lightMode = {
  colorPrimary: `${COLORS.colorPrimary}`,
  bgColor: `${COLORS.colorWhite}`,
  textColor: `${COLORS.colorWhite}`,
  textLight: `${COLORS.colorDarkGray}`,
  itemMobileTextColor: `${COLORS.colorBlack}`,
  colorBlue: '#c9a907',
  logoCheckout: `${smallLogoBlack.src}`
}

export const darkMode = {
  colorPrimary: `${COLORS.colorSecondary}`,
  bgColor: `${COLORS.colorBlack}`,
  textColor: `${COLORS.colorWhite}`,
  textLight: `${COLORS.colorLightGray}`,
  itemMobileTextColor: `${COLORS.colorWhite}`,
  colorBlue: '#DE8D14',
  logoCheckout: `${smallLogoWhite.src}`
}