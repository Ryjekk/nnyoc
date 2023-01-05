import styled from "styled-components";
import {QUERIES} from "../../../../styles/common/vars";

const CartFullWrapper = styled.div`
  margin: 0 auto;
  max-width: 700px;
`;

const CartProductWrapper = styled.div`
  display: flex;
  border: 1px solid ${({theme}) => theme.itemMobileTextColor};
`;

const CartProductImg = styled.div`
  width: 170px;
  height: 130px;
  border-right: 1px solid ${({theme}) => theme.itemMobileTextColor};;
  background-color: aliceblue;
`;

const CartTotal = styled.div`
  border: 1px solid ${({theme}) => theme.itemMobileTextColor};
  border-top: none;
  padding: 10px;
  display: flex;
  justify-content: space-between;
  font-weight: 300;
  text-transform: uppercase;
`;

const CartSubtotal = styled.div`
  border-left: 1px solid ${({theme}) => theme.itemMobileTextColor};
  border-right: 1px solid ${({theme}) => theme.itemMobileTextColor};
`;

const CartFullText = styled.p`
  font-size: 14px;
  margin: 0 auto;
`;

const CartProductDetailsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  position: relative;
`

const CartProductDetails = styled.div`
  padding: 10px;
  font-weight: 200;
`;

const CartItemPrice = styled(CartProductDetails)`
  align-self: flex-end;
  display: flex;
  align-items: flex-end;
  text-align: end;
`;

const CloseIcon = styled.div`
  position: absolute;
  right: 10px;
  top: 10px;
  font-weight: 200;
`;

export {
    CartFullWrapper,
    CartItemPrice,
    CartProductDetails,
    CartFullText,
    CartProductImg,
    CartProductWrapper,
    CartProductDetailsWrapper,
    CartTotal,
    CartSubtotal,
    CloseIcon
}