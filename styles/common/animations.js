import {keyframes} from 'styled-components';
import {COLORS} from "./vars";

const bgDarkAnimation = keyframes`
  0% {
    width: 0;
    height: 0;
    top: 0;
    right: 0;
    background-color: ${COLORS.colorBlack};
    border-bottom-left-radius: 100%;
  }
  100% {
    width: 100vw;
    height: 100vh;
    top: 0;
    right: 0;
    background-color: ${COLORS.colorBlack};
    border-bottom-left-radius: 100%;
  }
`;

const bgLightAnimation = keyframes`
  0% {
    width: 0;
    height: 0;
    top: 0;
    right: 0;
    background-color: ${COLORS.colorWhite};
    border-bottom-left-radius: 100%;
  }
  100% {
    width: 100vw;
    height: 100vh;
    top: 0;
    right: 0;
    background-color: ${COLORS.colorWhite};
    border-bottom-left-radius: 100%;
  }
`;

export {bgDarkAnimation, bgLightAnimation}