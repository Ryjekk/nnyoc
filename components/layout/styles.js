import styled from "styled-components";
import {QUERIES} from "../../styles/common/vars";

const MainWrapper = styled.main``;

const GridWrapper = styled.div`
  display: grid;

  @media (${QUERIES.small}) {
    grid-template-columns: 60vw 40vw;
  }
  
  @media (${QUERIES.medium}) {
    grid-template-columns: 50vw 50vw;
  }
`;

export {GridWrapper, MainWrapper}