import styled from "styled-components";
import smallLogo from "../../../../assets/logo/logoSimpleBlack.png"

const CornerLogos = styled.div`
  width: 40px;
  height: 40px;
  border: 2px solid ${({theme}) => theme.itemMobileTextColor};
  border-radius: 6px;
  position: fixed;
  margin: 15px;
  background-size: 80%;
  background-position: center;
  background-repeat: no-repeat;
`;

const CornerLogosTL = styled(CornerLogos)`
  top: 0;
  left: 0;
  background-image: url(${smallLogo.src});
`;

const CornerLogosTR = styled(CornerLogos)`
  top: 0;
  right: 0;
  background-image: url(${smallLogo.src});
  transform: scaleX(-1)
`;

const CornerLogosBL = styled(CornerLogos)`
  bottom: 0;
  left: 0;
  background-image: url(${smallLogo.src});
`;

const CornerLogosBR = styled(CornerLogos)`
  bottom: 0;
  right: 0;
  background-image: url(${smallLogo.src});
  transform: scaleX(-1)
`;

const TitleMid = styled.p`
  margin-top: 25px;
  position: fixed;
  top: 0;
  left: 50%;
  transform: translate(-50%, 0);
  font-weight: 100;
  letter-spacing: 1px;
`;

export {CornerLogosTL, CornerLogosTR, CornerLogosBL, CornerLogosBR , TitleMid}