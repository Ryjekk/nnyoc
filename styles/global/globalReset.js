import {css} from "styled-components";

export const globalReset = css`
  * {
    border: 0;
    box-sizing: inherit;
    font-weight: inherit;
    margin: 0;
    outline: 0;
    padding: 0;
    text-decoration: none;
    text-rendering: optimizeLegibility;
    -webkit-appearance: none;
    -moz-appearance: none;
    position: relative;
    z-index: 99;
  }

  html {
    display: flex;
    min-height: 100%;
    width: 100%;
    box-sizing: border-box;
    line-height: 1.5;
    font-size: 1.6rem;
    padding: 0;
    margin: 0;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    font-family: 'DiatypeSemiMono', monospace;
  }

  body {
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    // 1rem == 10px
    font-size: 62.5%;
    overscroll-behavior-y: none;
    -webkit-overflow-scrolling: touch;
    font-family: 'DiatypeSemiMono', monospace;
    background: ${({theme}) => theme.bgColor};
    color: ${({theme}) => theme.textColor};
    overflow: hidden;
  }

  a {
    color: currentColor;
    text-decoration: none;
  }

  a:hover {
    cursor: pointer;
  }
`;
