import {CollabSectionWrapper, DifferenceBoxWithBorder} from "./styles";
import Gallery from "../../../common/gallery/Gallery";

import a from '../../../../assets/collabs/a.jpg'
import SlickSlider from "../../../common/slickSlider/SlickSlider";

const CollaboratorContentSection = () => {
    return (
        <div>
            <DifferenceBoxWithBorder />
            <CollabSectionWrapper>
            {/*    <Gallery*/}
            {/*        galleryID="my-test-gallery"*/}
            {/*        images={[*/}
            {/*            {*/}
            {/*                largeURL:*/}
            {/*                    `${a.src}`,*/}
            {/*                thumbnailURL:*/}
            {/*                    `${a.src}`,*/}
            {/*                width: 600,*/}
            {/*                height: 600,*/}
            {/*            },*/}
            {/*        ]}*/}
            {/*    />*/}

                {/*<SlickSlider/>*/}
            </CollabSectionWrapper>
        </div>

    );
};

export default CollaboratorContentSection;