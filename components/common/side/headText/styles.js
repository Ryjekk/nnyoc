import styled from "styled-components";

const SideWrapper = styled.div`
  mix-blend-mode: difference;
  padding: 24px 24px 0;
  border-bottom: 1px solid ${({theme}) => theme.textColor};
  border-right: 1px solid ${({theme}) => theme.textColor};
`;

export {SideWrapper}