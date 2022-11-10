import {FlexWrapper, HeaderWrapper} from "./styles";
import LogoSide from "./logoSide/LogoSide";
import ContentSide from "./contentSide/ContentSide";

const Side = () => {
  return (
      <HeaderWrapper>
        <FlexWrapper>
          <LogoSide />
          <ContentSide/>
        </FlexWrapper>
      </HeaderWrapper>
  );
};

export default Side;