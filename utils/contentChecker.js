import HomeContentSection from "../components/content/homeContent/homeContentSection/HomeContentSection";
import HomeContentSide from "../components/content/homeContent/homeContentSide/HomeContentSide";
import ItemContentSection from "../components/content/itemContent/itemContentSection/ItemContentSection";
import ItemContentSide from "../components/content/itemContent/itemContentSide/ItemContentSide";
import CollectionsContentSection
    from "../components/content/collectionsContent/collectionsContentSection/CollectionsContentSection";
import CollectionsContentSide
    from "../components/content/collectionsContent/collectionsContentSide/CollectionsContentSide";
import CollectionContentSide
    from "../components/content/collectionContent/collectionContentSide/CollectionContentSide";
import CollectionContentSection
    from "../components/content/collectionContent/collectionContentSection/CollectionContentSection";

export const contentChecker = (contentType, products, product, price, q) => {
    let ContentSide, ContentSection;

    switch (contentType) {
        case 'HomeContent':
            ContentSection = <HomeContentSection/>;
            ContentSide = <HomeContentSide products={products}/>
            break;
        case 'ItemContent':
            ContentSection = <ItemContentSection product={product} price={price}/>
            ContentSide = <ItemContentSide products={products}/>
            break;
        case 'CollectionsContent':
            ContentSection = <CollectionsContentSection />
            ContentSide = <CollectionsContentSide />
            break;
        case 'CollectionContent':
            ContentSection = <CollectionContentSection q={q}/>
            ContentSide = <CollectionContentSide q={q}/>
            break;
        default:
            return;
    }
    return {ContentSection, ContentSide};
};
