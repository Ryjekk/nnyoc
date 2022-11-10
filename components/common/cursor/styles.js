import styled from "styled-components";
import {motion} from "framer-motion";

const CursorEl = styled(motion.div)`
  border-radius: 50%;
  position: fixed;
  background: white;
  width: 30px;
  height: 30px;
  mix-blend-mode: difference;
  pointer-events: none;
  z-index: 10;
`;

export {CursorEl}