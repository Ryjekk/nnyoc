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
  background-color: ${({theme}) => theme.bgColor};
  width: 400vmax;
  height: 400vmax;
  top: calc(-250vmax + 3rem);
  right: calc(-250vmax + 3rem);
  border-radius: 100%;
  
  ${props => props.animate === 'light' ? animateGrowWhite : animateGrowDark};
`;