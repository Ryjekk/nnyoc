import Footer from "../../../common/side/footer/Footer";
import {ContentSideWrapper, SideWrapper} from "./styles";
import {ListItem, ListTextExtra, OlItem, TextHeader} from "../../../../styles/common/typography";
import {productData} from "../../../../data/productData";

const HomeContentSide = () => {
  return (
    <ContentSideWrapper>
      <div>
        <SideWrapper>
          <TextHeader>Index</TextHeader>
        </SideWrapper>
        <OlItem>
          {productData.map(el => (
            <ListItem key={el.id}>
              {el.title} <ListTextExtra>{el.titleExtra}</ListTextExtra>
            </ListItem>
          ))}
        </OlItem>
      </div>
      <Footer />
    </ContentSideWrapper>
  );
};

export default HomeContentSide;