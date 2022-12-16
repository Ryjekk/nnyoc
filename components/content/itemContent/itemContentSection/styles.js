import styled from "styled-components";
import {FONTSIZE, QUERIES} from "../../../../styles/common/vars";

const ItemSectionWrapper = styled.div`
  height: 100vh;
  overflow: scroll;
  
   top: 0;
   position: absolute;
   background-color: ${({theme}) => theme.bgColor};
   width: 100vw;
   z-index: 10;
   padding: 15px;

  @media (${QUERIES.small}) {
    margin: 0 15px;
    
    background-color: initial;
    z-index: initial;
    padding: 0;
    width: initial;
    position: relative;
  }
`;

const ItemTitle = styled.div`
  padding: 19px 0 0 0;
  mix-blend-mode: difference;
  border-bottom: 1px solid ${({theme}) => theme.textColor};
  font-weight: 400;
  letter-spacing: -1px;
  line-height: 40px;
  font-size: ${FONTSIZE.xl};
  text-transform: capitalize;
`;

const ItemType = styled(ItemTitle)`
  padding: 5px 0 0 0;
`;

const ItemDescription = styled.div`
  mix-blend-mode: difference;
  font-weight: 200;
  font-size: ${FONTSIZE.l};
`;

const ItemColor = styled.div`
  mix-blend-mode: difference;
  margin: 20px 0;
  font-size: ${FONTSIZE.xl};
`;

const SizeWrapper = styled.div`
  display: flex;
  gap: 5px;
`;

const ItemSize = styled.div`
  mix-blend-mode: difference;
  border: 1px solid ${({theme}) => theme.textColor};
  border-radius: 100px;
  padding: 5px 30px 5px 30px;
  font-weight: 200;
  font-size: ${FONTSIZE.l};

  &:hover {
    background-color: ${({theme}) => theme.textColor};
    color: black;
    transition: all .2s ease-in;
  }
`;

const ArrowSpan = styled.div`
  padding-left: 8px;

  svg {
    transform: scale(1.3);
    fill: white;
    stroke: white;
    mix-blend-mode: multiply;
  }
`;

const CloseSpan = styled(ArrowSpan)`
  position: absolute;
  padding-left: 0;
  right: 0;

  @media (${QUERIES.small}) { 
    display: none;
  }
`;

const ItemPrice = styled(ItemColor)`
  display: flex;
  gap: 20px;
`;

const ItemMore = styled.div`
  mix-blend-mode: difference;
  font-weight: 200;
`;

const ItemGalleryLine = styled.div`
  margin: 32px 0 10px 0;
  mix-blend-mode: difference;
  border-bottom: 1px solid ${({theme}) => theme.textColor};
`;

export {
    ItemSectionWrapper,
    ItemTitle,
    ItemType,
    ItemDescription,
    ItemColor,
    SizeWrapper,
    ItemSize,
    ArrowSpan,
    CloseSpan,
    ItemPrice,
    ItemMore,
    ItemGalleryLine
}


