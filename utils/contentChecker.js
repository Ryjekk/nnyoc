import HomeContentSection from "../components/content/homeContent/homeContentSection/HomeContentSection";
import HomeContentSide from "../components/content/homeContent/homeContentSide/HomeContentSide";
import ItemContentSection from "../components/content/itemContent/itemContentSection/ItemContentSection";
import ItemContentSide from "../components/content/itemContent/itemContentSide/ItemContentSide";
import CollaborationsContentSection
    from "../components/content/collaborationsContent/collaborationsContentSection/CollaborationsContentSection";
import CollaborationsContentSide
    from "../components/content/collaborationsContent/collaborationsContentSide/CollaborationsContentSide";

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
        case 'CollaborationsContent':
            ContentSection = <CollaborationsContentSection/>
            ContentSide = <CollaborationsContentSide/>
            break;
        default:
            return;
    }
    return {ContentSection, ContentSide};
};
