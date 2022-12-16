import {useEffect} from 'react';
import PhotoSwipeLightbox from 'photoswipe/lightbox';
import 'photoswipe/style.css';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import {productData} from "../../../data/productData";
import {collections} from "../../../data/collections";
import {GalleryHeightWrapper} from "./styles";
import {useRouter} from "next/router";

const Gallery = ({pid}) => {
    const {pathname: p} = useRouter();
    const {images} = productData.find(el => el.id === pid)
        || collections.find(elx => elx.artist.toUpperCase() === pid);

    let settings = {
        dots: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2500,
        pauseOnHover: false
    };

    useEffect(() => {
        let lightbox = new PhotoSwipeLightbox({
            gallery: '#' + pid,
            children: 'a',
            pswpModule: () => import('photoswipe'),
        });
        lightbox.init();

        return () => {
            lightbox.destroy();
            lightbox = null;
        };
    }, []);

    return (
        <div id={pid}>
            <Slider {...settings}>
                {images.map((image, index) => (
                    <a
                        href={image.src}
                        data-pswp-width={image.width}
                        data-pswp-height={image.height}
                        key={pid + '-' + index}
                        target="_blankx"
                        rel="noreferrer"
                    >
                        {/*TODO HEIGH ADJUST on scaling doesnt look quite good */}
                        <GalleryHeightWrapper height={p.includes('/item') ? 50 : 90}>
                            <Image src={image.src} alt="" layout="fill" objectFit="contain"/>
                        </GalleryHeightWrapper>
                    </a>
                ))}
            </Slider>
        </div>
    );
};

export default Gallery;