import styled from "styled-components";

const SideContent = styled.div`
  padding: 16px 24px;
`;

const DifferenceBoxWithBorder = styled.div`
  margin-top: 64px;
  mix-blend-mode: difference;
  border-top: 1px solid ${({theme}) => theme.textColor};
`;

export {SideContent, DifferenceBoxWithBorder}