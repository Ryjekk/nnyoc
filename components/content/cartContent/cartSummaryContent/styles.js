import styled from "styled-components";
import {QUERIES} from "../../../../styles/common/vars";

const SummaryWrapper = styled.div`
  // Always 15+15+40++
  padding: 95px 15px 0 15px;
  
  @media (${QUERIES.small}) {
    padding: 95px;
  }
`;

export {SummaryWrapper}