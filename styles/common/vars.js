//Mobile First approach
const QUERIES = {
  large: `min-width: 1200px`,
  medium: `min-width: 870px`,
  small: `min-width: 660px`,
};

const COLORS = {
  // colorPrimary: '#0000ff', //oryginal
  colorPrimary: 'rgba(222, 141, 20)',
  // colorSecondary: '#fd652b', //oryginal
  colorSecondary: '#DE8D14',
  colorWhite: '#EEEEEE',
  colorBlack: '#121212',
  colorLightGray: '#A4A4A4',
  colorDarkGray: '#606060',
};


const FONTS = {
  fontPrimary: 'DiatypeSemiMono',
};

const FONTSIZE = {
  // 1rem = 10px; Base fontSize = 16px
  // Here following scaling accordingly to: 👉 https://carbondesignsystem.com/guidelines/typography/overview/#scale
  xs: '12px',
  s: '14px',
  m: '18px',
  l: '24px',
  xl: '32px',
  xxl: '55px'
};

const SPACING = {
  basic: '16px 24px',
}

export {QUERIES, COLORS, FONTS, FONTSIZE, SPACING}