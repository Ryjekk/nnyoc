import styled from "styled-components";
import {FONTSIZE, QUERIES} from "../../../../styles/common/vars";

const ItemSectionWrapper = styled.div`
  height: 100vh;
  overflow: scroll;
  top: 0;
  position: absolute;
  background-color: ${({theme}) => theme.bgColor};
  color: ${({theme}) => theme.itemMobileTextColor};
  width: 100vw;
  z-index: 10;
  padding: 15px;

  @media (${QUERIES.small}) {
    color: ${({theme}) => theme.textColor};
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
  border-bottom: 1px solid ${({theme}) => theme.itemMobileTextColor};
  font-weight: 400;
  letter-spacing: -1px;
  line-height: 40px;
  font-size: ${FONTSIZE.xl};
  text-transform: capitalize;

  @media (${QUERIES.small}) {
    mix-blend-mode: difference;
    border-bottom: 1px solid ${({theme}) => theme.textColor};
  }
`;

const ItemType = styled(ItemTitle)`
  padding: 5px 0 0 0;
`;

const ItemDescription = styled.div`
  font-weight: 200;
  font-size: ${FONTSIZE.l};

  @media (${QUERIES.small}) {
    mix-blend-mode: difference;
  }
`;

const ItemColor = styled.div`
  margin: 20px 0;
  font-size: ${FONTSIZE.xl};

  @media (${QUERIES.small}) {
    mix-blend-mode: difference;
  }
`;

const SizeWrapper = styled.div`
  display: flex;
  gap: 5px;
`;

const ItemSize = styled.div`
  border: 1px solid ${({theme}) => theme.itemMobileTextColor};
  border-radius: 100px;
  padding: 5px 30px 5px 30px;
  font-weight: 200;
  font-size: ${FONTSIZE.l};
  background-color: ${props => props.size === props.sizeSelected && props.theme.colorBlue}};

  &:hover {
    background-color: ${({theme}) => theme.textColor};
    color: black;
    transition: all .2s ease-in;
  }

  @media (${QUERIES.small}) {
    border: 1px solid ${({theme}) => theme.textColor};
    mix-blend-mode: difference;
  }
`;

const ArrowSpan = styled.div`
  padding-left: 8px;

  svg {
    transform: scale(1.3);
    fill: ${({theme}) => theme.itemMobileTextColor};
    stroke: ${({theme}) => theme.itemMobileTextColor};

    @media (${QUERIES.small}) {
      mix-blend-mode: multiply;
      fill: white;
      stroke: white;
    }
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
  font-weight: 200;

  @media (${QUERIES.small}) {
    mix-blend-mode: difference;
  }
`;

const ItemGalleryLine = styled.div`
  margin: 32px 0 10px 0;
  border-bottom: 1px solid ${({theme}) => theme.itemMobileTextColor};

  @media (${QUERIES.small}) {
    mix-blend-mode: difference;
    border-bottom: 1px solid ${({theme}) => theme.textColor};
  }
`;

const ButtonAdd = styled.button`
  padding: 0 20px;
  text-transform: uppercase;
  background-color: ${({theme}) => theme.itemMobileTextColor};
  color: ${({theme}) => theme.colorPrimary};
  
  @media (${QUERIES.small}) {
    mix-blend-mode: difference;
    background-color: ${({theme}) => theme.textColor};
  }
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
    ItemGalleryLine,
    ButtonAdd
}


