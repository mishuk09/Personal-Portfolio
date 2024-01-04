import React, { useEffect } from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/themes/splide-default.min.css'; // Import Splide styles

import google from './img/google.png';
import work from './img/work.png';
import bigimage from './img/bigimage.png';

const MySplideComponent = () => {
    useEffect(() => {
        const mainSlider = new Splide('#main-slider', {
            type: 'fade',
            heightRatio: 0.5,
            pagination: false,
            arrows: false,
            cover: true,
        });

        const thumbnailSlider = new Splide('#thumbnail-slider', {
            rewind: true,
            fixedWidth: 104,
            fixedHeight: 58,
            isNavigation: true,
            gap: 10,
            focus: 'center',
            pagination: false,
            cover: true,
            dragMinThreshold: {
                mouse: 4,
                touch: 10,
            },
            breakpoints: {
                640: {
                    fixedWidth: 66,
                    fixedHeight: 38,
                },
            },
        });

        mainSlider.sync(thumbnailSlider);
        mainSlider.mount();
        thumbnailSlider.mount();

        return () => {
            mainSlider.destroy();
            thumbnailSlider.destroy();
        };
    }, []);

    return (
        <div>
            <div id="main-slider" className="splide">
                <div className="splide__track">
                    <ul className="splide__list">
                        <SplideSlide>
                            <img src={work} alt="Slide 1" />
                        </SplideSlide>
                        <SplideSlide>
                            <img src={bigimage} alt="Slide 2" />
                        </SplideSlide>
                        {/* Add more slides as needed */}
                    </ul>
                </div>
            </div>
            <div id="thumbnail-slider" className="splide">
                <div className="splide__track">
                    <ul className="splide__list">
                        <SplideSlide>
                            <img src="thumbnail1.jpg" alt="Thumbnail 1" />
                        </SplideSlide>
                        <SplideSlide>
                            <img src="thumbnail2.jpg" alt="Thumbnail 2" />
                        </SplideSlide>
                        {/* Add more thumbnails as needed */}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default MySplideComponent;
