import HomeContentSection from "../components/content/homeContent/homeContentSection/HomeContentSection";
import HomeContentSide from "../components/content/homeContent/homeContentSide/HomeContentSide";
import ItemContentSection from "../components/content/itemContent/itemContentSection/ItemContentSection";
import ItemContentSide from "../components/content/itemContent/itemContentSide/ItemContentSide";
import CollaborationsContentSection
    from "../components/content/collaborationsContent/collaborationsContentSection/CollaborationsContentSection";
import CollaborationsContentSide
    from "../components/content/collaborationsContent/collaborationsContentSide/CollaborationsContentSide";
import CollaboratorContentSide
    from "../components/content/collaboratorContent/collaboratorContentSide/CollaboratorContentSide";
import CollaboratorContentSection
    from "../components/content/collaboratorContent/collaboratorContentSection/CollaboratorContentSection";

export const contentChecker = (contentType, products, product, price) => {
    let ContentSide, ContentSection;

    //TODO add itemContent and 404
    switch (contentType) {
        case 'HomeContent':
            ContentSection = <HomeContentSection/>;
            ContentSide = <HomeContentSide products={products}/>
            break;
        case 'ItemContent':
            ContentSection = <ItemContentSection product={product} price={price}/>
            ContentSide = <ItemContentSide products={products}/>
            break;
        case 'CollaborationsContent':
            ContentSection = <CollaborationsContentSection/>
            ContentSide = <CollaborationsContentSide/>
            break;
        case 'CollaboratorContent':
            ContentSection = <CollaboratorContentSection/>
            ContentSide = <CollaboratorContentSide/>
            break;
        default:
            return;
    }
    return {ContentSection, ContentSide};
};
