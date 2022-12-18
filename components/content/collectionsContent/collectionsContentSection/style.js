import styled from "styled-components";
import {QUERIES} from "../../../../styles/common/vars";

const CollectionsSectionWrapper = styled.div`
  display: none;
  
  @media (${QUERIES.small}) {
    display: block;
  }
`;

export {CollectionsSectionWrapper}