import LightGallery from 'lightgallery/react';


import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';
import 'lightgallery/css/lg-autoplay.css';
import 'lightgallery/css/lg-fullscreen.css';
import 'lightgallery/css/lg-share.css';
import 'lightgallery/css/lg-rotate.css';


import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';
import lgAutoplay from 'lightgallery/plugins/autoplay'
import lgFullscreen from 'lightgallery/plugins/fullscreen';
import lgShare from 'lightgallery/plugins/share';
import lgRotate from 'lightgallery/plugins/rotate';

const images = [
    { src: "/1.jpg", alt: "1", },
    { src: "/2.jpg", alt: "2" },
    { src: "/3.jpg", alt: "3" },
    { src: "/4.jpg", alt: "4", },
    { src: "/5.jpg", alt: "5", },
    { src: "/6.jpg", alt: "6", },
    { src: "/7.jpg", alt: "7", },
    { src: "/8.jpg", alt: "8", },
    { src: "/9.jpg", alt: "9", },
    { src: "/10.jpg", alt: "10", },
    { src: "/11.jpg", alt: "11", },
    { src: "/12.jpg", alt: "12", },

]

export function Gallery() {
    const onInit = () => {
        console.log('initialized');
    };
    return (
        <div className="App">
            <LightGallery
                onInit={onInit}
                speed={500}
                plugins={[lgThumbnail, lgZoom, lgAutoplay, lgFullscreen, lgRotate, lgShare]}
            >

                {images.map((image, index) => {
                    return (
                        <a href={image.src} key={index}>
                            <img alt={image.alt} src={image.src} />
                        </a>
                    )
                })}


            </LightGallery>
        </div>
    );
}