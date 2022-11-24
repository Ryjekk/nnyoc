import styled from "styled-components";
import {QUERIES} from "../../../styles/common/vars";
import logoSide from '../../../assets/logo/logoBannerx2.png'

const HeaderWrapper = styled.header`
  @media (${QUERIES.small}) {
    //border-right: 1px solid ${({theme}) => theme.textColor};
  }
`;

const FlexWrapper = styled.div`
  display: flex;
`;

const LogoTextWrapper = styled.div`
  background-image: url(${logoSide.src});
  // border-right: 1px solid ${({theme}) => theme.textColor};
   
  min-height: 100vh;
  width: 20vw;
  object-fit: cover;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: top;
`;

export {HeaderWrapper, FlexWrapper, LogoTextWrapper}