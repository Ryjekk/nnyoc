import {GridWrapper, MainWrapper} from "./styles";
import Side from "../common/side/Side";
import {contentChecker} from "../../utils/contentChecker";

const Layout = ({contentType}) => {
  const {ContentSection, ContentSide} = contentChecker(contentType)

  return (
    <MainWrapper>
      <GridWrapper>
        <Side contentSide={ContentSide}/>
        {ContentSection}
      </GridWrapper>
    </MainWrapper>
  );
};

export default Layout;