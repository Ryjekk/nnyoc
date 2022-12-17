import styled from "styled-components";
import {QUERIES} from "../../../styles/common/vars";

const GalleryHeightWrapper = styled.div`
  height: 100vw;
  
  @media (${QUERIES.small}) {
    height: ${props => props.height === 50 ? '50vw' : '90vh'}
  }
`;

export {GalleryHeightWrapper}