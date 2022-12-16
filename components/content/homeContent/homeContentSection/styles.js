import styled from "styled-components";
import {QUERIES} from "../../../../styles/common/vars";

const SectionWrapper = styled.section`
  display: none;

  @media (${QUERIES.small}) { 
    display: initial;
  }
  //position: relative;
`;

const ItemsGalleryWrapper = styled.div`
  //border: 2px solid green;
  //position: absolute;

  //todo not --- this fix for overflow of items on siede
  max-height: 100vh;
  overflow: hidden;
  
  width: calc(100% + 15vh);
  transform: translateX(-15vh);
`;

export {SectionWrapper, ItemsGalleryWrapper}