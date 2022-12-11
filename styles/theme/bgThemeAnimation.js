import styled, {css} from "styled-components";
import {bgDarkAnimation, bgLightAnimation} from "../common/animations";

const animateGrowWhite = css`
  animation: ${bgLightAnimation} 2s forwards;
`;

const animateGrowDark = css`
  animation: ${bgDarkAnimation} 2s forwards;
`;

export const BgThemeAnimation = styled.div`
  position: absolute;
  display: block;
  z-index: -5;
  //background-color: red;
  width: 100vw;
  height: 100vh;
  top: -100%;
  right: 0;

  ${props => props.animate === 'light' ? animateGrowWhite : animateGrowDark};
`;