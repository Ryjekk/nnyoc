import {ItemsGalleryWrapper, SectionWrapper} from "./styles";
import InfiniteScrollProducts from "./infiniteScrollProducts/InfiniteScrollProducts";

const HomeContentSection = () => {
  return (
    <SectionWrapper>
      <ItemsGalleryWrapper>
          <InfiniteScrollProducts/>
      </ItemsGalleryWrapper>
    </SectionWrapper>
  );
};

export default HomeContentSection;