import {useEffect} from 'react';
import PhotoSwipeLightbox from 'photoswipe/lightbox';
import 'photoswipe/style.css';
import Image from "next/image";

const Gallery = ({galleryID, images}) => {
    useEffect(() => {
        let lightbox = new PhotoSwipeLightbox({
            gallery: '#' + galleryID,
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
        <div className="pswp-gallery" id={galleryID}>
            {images.map((image, index) => (
                <a
                    href={image.largeURL}
                    data-pswp-width={image.width}
                    data-pswp-height={image.height}
                    key={galleryID + '-' + index}
                    target="_blankx"
                    rel="noreferrer"
                >
                    {/*TODO ADJUST THIS SIZE TO SCAL NICEY*/}
                    <div style={{height: '600px'}}>
                        <Image src={image.thumbnailURL} alt="" layout="fill" objectFit="contain"/>
                    </div>
                </a>
            ))}
        </div>
    );
};

export default Gallery;