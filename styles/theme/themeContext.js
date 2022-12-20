import {COLORS} from "../common/vars";

// dear future me - here are colors are accordingly to color theme because i do use   mix-blend-mode: difference; on
// text to difreenciate text amd borders

export const lightMode = {
  colorPrimary: `${COLORS.colorPrimary}`,
  bgColor: `${COLORS.colorWhite}`,
  textColor: `${COLORS.colorWhite}`,
  textLight: `${COLORS.colorDarkGray}`,
  itemMobileTextColor: `${COLORS.colorBlack}`,
  colorBlue: '#c9a907'
}

export const darkMode = {
  colorPrimary: `${COLORS.colorSecondary}`,
  bgColor: `${COLORS.colorBlack}`,
  textColor: `${COLORS.colorWhite}`,
  textLight: `${COLORS.colorLightGray}`,
  itemMobileTextColor: `${COLORS.colorWhite}`,
  colorBlue: '#DE8D14'
}