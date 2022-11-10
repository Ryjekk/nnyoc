import HomeContentSection from "../components/content/homeContent/homeContentSection/HomeContentSection";
import HomeContentSide from "../components/content/homeContent/homeContentSide/HomeContentSide";
import ItemContentSection from "../components/content/itemContent/itemContentSection/ItemContentSection";
import ItemContentSide from "../components/content/itemContent/itemContentSide/ItemContentSide";

export const contentChecker = (contentType) => {
  let ContentSide, ContentSection;

  //TODO add itemContent and 404
  switch (contentType) {
    case 'HomeContent':
      ContentSection = <HomeContentSection/>;
      ContentSide = <HomeContentSide/>
      break;
    case 'ItemContent':
      ContentSection = <ItemContentSection/>
      ContentSide = <ItemContentSide/>
      break;
    default:
      return;
  }
  return {ContentSection, ContentSide};
};
