import Slider from "react-slick";
import {SliderWrapper} from "./styled";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import a from '../../../assets/collabs/a.jpg'
import b from '../../../assets/collabs/b.jpg'
import c from '../../../assets/collabs/c.jpg'
import d from '../../../assets/collabs/d.jpg'

const SlickSlider = () => {
    let settings = {
        dots: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
    };
    // TODO - incliude gallery in place of image to have OP view
    return (
        <SliderWrapper>
            <Slider {...settings}>
                <div><Image src={a}/></div>
                <div><Image src={b}/></div>
                <div><Image src={c}/></div>
                <div><Image src={d}/></div>
            </Slider>
        </SliderWrapper>
    );
};

export default SlickSlider;
