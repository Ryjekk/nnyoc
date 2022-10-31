import {keyframes} from 'styled-components';
import {COLORS} from "./vars";

const bgDarkAnimation = keyframes`
  0% {
    width: 0;
    height: 0;
    top: 0;
    right: 0;
    background-color: ${COLORS.colorBlack};
  }
  100% {
    width: 400vmax;
    height: 400vmax;
    top: calc(-250vmax + 3rem);
    right: calc(-250vmax + 3rem);
    background-color: ${COLORS.colorBlack};
  }
`;

const bgLightAnimation = keyframes`
  0% {
    background-color: ${COLORS.colorWhite};
    width: 0;
    height: 0;
    top: 0;
    right: 0;
  }
  100% {
    background-color: ${COLORS.colorWhite};
    width: 400vmax;
    height: 400vmax;
    top: calc(-250vmax + 3rem);
    right: calc(-250vmax + 3rem);
  }
`;

export {bgDarkAnimation, bgLightAnimation}