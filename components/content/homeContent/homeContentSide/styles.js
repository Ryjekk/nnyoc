import styled from "styled-components";

const ContentSideWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
`;

const SideWrapper = styled.div`
  padding: 24px 24px 0;
  border-bottom: 1px solid ${({theme}) => theme.textColor};
  border-right: 1px solid ${({theme}) => theme.textColor};
`;

export {ContentSideWrapper, SideWrapper}