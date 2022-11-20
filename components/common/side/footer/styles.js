import styled from "styled-components";
import {SPACING} from "../../../../styles/common/vars";

const FooterWrapper = styled.div`
  border-top: 1px solid ${({theme}) => theme.textColor};
  border-right: 1px solid ${({theme}) => theme.textColor};
  height: 100px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  text-align: right;
  padding: ${SPACING.basic};
`;

const FooterWrapperTop = styled.div`
  border-top: 1px solid ${({theme}) => theme.textColor};
  border-right: 1px solid ${({theme}) => theme.textColor};
  height: 120px;
  display: flex;
  flex-direction: column;
  padding: ${SPACING.basic};
`;

export {FooterWrapper, FooterWrapperTop}