import {ContentSideWrapper, FlexWrapper, HeaderWrapper, LogoTextWrapper} from "./styles";
import Footer from "./footer/Footer";
import HeadText from "./headText/HeadText";
import Link from "next/link";

const Side = ({contentSide}) => {
    return (
        <HeaderWrapper>
            <FlexWrapper>
                <Link href="/"><LogoTextWrapper/></Link>
                <ContentSideWrapper>
                    <div>
                       <HeadText />
                        {contentSide}
                    </div>
                    <Footer/>
                </ContentSideWrapper>
            </FlexWrapper>
        </HeaderWrapper>
    );
};

export default Side;