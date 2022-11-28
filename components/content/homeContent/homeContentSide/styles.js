import styled from "styled-components";

const ContentSideWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  mix-blend-mode: difference;
  border-left: 1px solid ${({theme}) => theme.textColor};
  z-index: 10;
`;

const SideWrapper = styled.div`
  mix-blend-mode: difference;
  padding: 24px 24px 0;
  border-bottom: 1px solid ${({theme}) => theme.textColor};
  border-right: 1px solid ${({theme}) => theme.textColor};
`;

export {ContentSideWrapper, SideWrapper}