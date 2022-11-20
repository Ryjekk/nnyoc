import styled from "styled-components";
import {FONTSIZE, QUERIES, SPACING} from "./vars";

const TextFooter = styled.p`
  font-weight: 200;
  line-height: 1.1;
  font-size: ${FONTSIZE.xs};
`;

const TextFooterTop = styled(TextFooter)`
  font-size: ${FONTSIZE.l};
  line-height: initial;
`;

const TextHeader = styled.p`
  font-weight: 400;
  letter-spacing: -1px;
  line-height: 40px;
  font-size: ${FONTSIZE.xl};
`;

const OlItem = styled.ol`
  list-style: none;
  counter-reset: item;
  margin-top: 16px;
`;

const ListItem = styled.li`
  counter-increment: item;
  font-weight: 300;
  font-size: ${FONTSIZE.l};
  margin: ${SPACING.basic};
  display: inline-block;
  position: relative;
  
  
  &::after {
    content: '';
    position: absolute;
    width: 100%;
    transform: scaleX(0);
    height: 3px;
    bottom: 0;
    left: 0;
    background-color: ${({theme}) => theme.colorPrimary};;
    transform-origin: bottom right;
    transition: transform 0.2s ease-out;
  }
  
  &:hover::after {
    transform: scaleX(1);
    transform-origin: bottom left;
  }

  &::before {
    margin-right: 10px;
    content: counter(item) ".";
  }

  @media (${QUERIES.small}) {
    font-size: ${FONTSIZE.xl};
    font-weight: 400;
    line-height: .95;
  }
`;

const ListTextExtra = styled.span`
  font-weight: 100;
  font-size: ${FONTSIZE.s};
`;

export {TextFooter, TextFooterTop, TextHeader, OlItem, ListItem, ListTextExtra}