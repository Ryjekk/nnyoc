import styled from "styled-components";


const CartEmptyWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const TextEmptyCart = styled.p`
  font-size: 24px;
  font-weight: 100;
  
  strong, a {
    font-weight: 500;
  }
  
  a {
    color: ${({theme}) => theme.colorPrimary};
    border-bottom: 1px solid ${({theme}) => theme.colorPrimary};
  }
`;

export {TextEmptyCart, CartEmptyWrapper}