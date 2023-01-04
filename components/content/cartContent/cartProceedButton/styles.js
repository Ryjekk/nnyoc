import styled from "styled-components";

const ButtonProceedWrapper = styled.div`
  margin: 0 auto;
  max-width: 700px;
`;

const ButtonProceed = styled.button`
  position: relative;
  width: 99%;
  height: 60px;
  margin-top: 10px;
  border: 1px solid #000;
  background-color: #fff;
  box-shadow: 6px 6px 0 ${({theme}) => theme.itemMobileTextColor}, 
  5px 5px 0 ${({theme}) => theme.itemMobileTextColor}, 
  4px 4px 0 ${({theme}) => theme.itemMobileTextColor}, 
  3px 3px 0 ${({theme}) => theme.itemMobileTextColor}, 
  2px 2px 0 ${({theme}) => theme.itemMobileTextColor}, 
  1px 1px 0 ${({theme}) => theme.itemMobileTextColor};
  
  &:hover {
    transform: translate3d(3px, 3px, 0);
    box-shadow: 3px 3px 0 ${({theme}) => theme.itemMobileTextColor}, 
    2px 2px 0 ${({theme}) => theme.itemMobileTextColor}, 
    1px 1px 0 ${({theme}) => theme.itemMobileTextColor};
  }
`;

const Plus = styled.p`
  width: 5px;
  height: 5px;
  position: absolute;
  margin: 0 6px;
`;

const PlusTL = styled(Plus)`
  top: 0; 
  left: 0;
`;

const PlusTR = styled(Plus)`
  top: 0;
  right: 0;
`;

const PlusBL = styled(Plus)`
  bottom: 12px;
  left: 0;
`;

const PlusBR = styled(Plus)`
  bottom: 12px;
  right: 0;
`;

const TextButtonProceed = styled.span`
  mix-blend-mode: difference;
  color: ${({theme}) => theme.textColor};
  letter-spacing: 2px;
  font-size: 14px;
`;

export {ButtonProceedWrapper, ButtonProceed, PlusTL, PlusBL, PlusBR, PlusTR, TextButtonProceed}
