import {FlexWrapper, HeaderWrapper, LogoTextWrapper} from "./styles";

const Side = ({contentSide}) => {
  return (
      <HeaderWrapper>
        <FlexWrapper>
          <LogoTextWrapper/>
          {contentSide}
        </FlexWrapper>
      </HeaderWrapper>
  );
};

export default Side;