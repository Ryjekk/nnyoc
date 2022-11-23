import styled from "styled-components";

const SectionWrapper = styled.section`
  position: relative;
`;

const ItemsGalleryWrapper = styled.div`
  border: 2px solid green;
  position: absolute;
  width: 100vw;
  transform: translateX(-15vh);
`;

export {SectionWrapper, ItemsGalleryWrapper}