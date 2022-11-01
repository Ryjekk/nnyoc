import styled from "styled-components";

const CursorSecondary = styled.div`
  z-index: 1000;
  border-radius: 50%;
  pointer-events: none;
  overflow: hidden;
  position: fixed;
  background: white;
  mix-blend-mode: difference;
  width: 30px;
  height: 30px;
  transform: ${props => props.toTransform && `${props.toTransform}`};
  transition: 0.09s linear;
`;

export {CursorSecondary}
