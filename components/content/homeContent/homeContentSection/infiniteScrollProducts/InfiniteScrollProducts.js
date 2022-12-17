import Image from "next/image";
import i1 from '../../../../../assets/products/1a.png'
import i2 from '../../../../../assets/products/1b.png'
import i3 from '../../../../../assets/products/1aBlack.png'
import i4 from '../../../../../assets/products/1bBlack.png'
import i5 from '../../../../../assets/products/3aWhite.png'
import i6 from '../../../../../assets/products/3bWhite.png'
import i7 from '../../../../../assets/products/4aBlack.png'
import i8 from '../../../../../assets/products/4bBlack.png'
import i9 from '../../../../../assets/products/5aBlack.png'
import i10 from '../../../../../assets/products/5bBlack.png'
import i11 from '../../../../../assets/products/7aBlack.png'
import i12 from '../../../../../assets/products/kosmo.png'
import i13 from '../../../../../assets/products/Screenshot 2022-11-21 at 18.57.56 (1).png'
import {Slide, SlideTrack} from "./styles";

const InfiniteScrollProducts = () => {
    const slides = [i1, i2, i3, i4, i5, i6, i7, i8, i9, i10, i11, i11, i12, i13,
        i1, i2, i3, i4, i5, i6, i7, i8, i9, i10, i11, i11, i12, i13]

    return (
        <SlideTrack>
            {slides.map((slide, i) => (
                <Slide key={i}>
                    <Image src={slide} alt="image of product"/>
                </Slide>
            ))}
        </SlideTrack>
    );
};

export default InfiniteScrollProducts;