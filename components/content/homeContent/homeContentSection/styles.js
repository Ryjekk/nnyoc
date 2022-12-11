import styled from "styled-components";

const SectionWrapper = styled.section`
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