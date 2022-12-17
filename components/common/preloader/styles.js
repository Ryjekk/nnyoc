import styled from "styled-components";
import {motion} from "framer-motion";

const PreloaderWrapper = styled(motion.div)`
  background-color: #131212;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 15px;
`;

const ImageWrapper = styled(motion.div)`
  position: relative;
`;

const PreloaderHeader = styled(motion.div)`
  color: #fd652b;
  font-size: 20px;
  font-family: 'Tahoma', sans-serif;
  letter-spacing: 1.9px;
  font-weight: lighter;
  font-style: italic;
`;

export {ImageWrapper, PreloaderWrapper, PreloaderHeader}
