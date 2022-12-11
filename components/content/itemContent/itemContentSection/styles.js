import styled from "styled-components";
import {FONTSIZE} from "../../../../styles/common/vars";

const ItemSectionWrapper = styled.div`
  margin: 0 15px;
  height: 100vh;
  overflow: scroll;
`;

const ItemTitle = styled.div`
  padding: 20px 0 0 0;
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
    ItemPrice,
    ItemMore,
    ItemGalleryLine
}


