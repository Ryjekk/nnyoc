import styled from "styled-components";

const CollabSectionWrapper = styled.div`
  //border: 3px solid red;
  padding-top: 24px;
`;

const DifferenceBoxWithBorder = styled.div`
  margin-top: 64px;
  mix-blend-mode: difference;
  border-top: 1px solid ${({theme}) => theme.textColor};
`;

export {CollabSectionWrapper, DifferenceBoxWithBorder}
