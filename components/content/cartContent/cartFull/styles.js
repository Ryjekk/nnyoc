import styled from "styled-components";

const CartFullWrapper = styled.div`
  margin: 0 auto;
  width: 700px;
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

const CartProductDetails = styled.div`
  padding: 10px;
  font-weight: 200;
`;

const CartItemPrice = styled(CartProductDetails)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-end;  
`;

export {CartFullWrapper, CartItemPrice, CartProductDetails, CartFullText, CartProductImg, CartProductWrapper, CartTotal, CartSubtotal}