import {CollectionSectionWrapper} from "./styles";
import {DifferenceBoxWithBorder} from "../../../../styles/common/boxes";
import Gallery from "../../../common/gallery/Gallery";

const CollectionContentSection = ({q}) => {
    return (
        <CollectionSectionWrapper>
            <DifferenceBoxWithBorder style={{paddingTop: '24px'}}/>
            <Gallery pid={q.collection.toUpperCase()}/>
        </CollectionSectionWrapper>
    );
};

export default CollectionContentSection;