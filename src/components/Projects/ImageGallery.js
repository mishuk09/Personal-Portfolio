import React, { useState } from 'react';
import a from './img/a.PNG';
import b from './img/b.PNG';
import c from './img/c.PNG';
import d from './img/d.PNG';
import e from './img/e.PNG';
import f from './img/f.PNG';

const ImageGallery = () => {
    const thumbnails = [
        { id: 1, img: a },
        { id: 2, img: b },
        { id: 3, img: c },
        { id: 4, img: d },
        { id: 5, img: e },
        { id: 6, img: f },
    ];

    const [mainImage, setMainImage] = useState(thumbnails[0].img);

    const handleImageClick = (imgSrc) => {
        setMainImage(imgSrc);
    };

    return (
        <div className="flex flex-col items-center">
            <img
                src={mainImage}
                alt="Main"
                className="w-[1000px] h-auto rounded-lg shadow-md mb-4"
            />

            <div className="flex justify-center flex-wrap">
                {thumbnails.map((thumb) => (
                    <img
                        key={thumb.id}
                        src={thumb.img}
                        alt={`Thumbnail ${thumb.id}`}
                        className="w-20 h-20 md:w-10 md:h-10 object-cover rounded-lg shadow-md m-2 cursor-pointer transition-transform duration-500 ease-in-out hover:transform hover:scale-105"
                        onClick={() => handleImageClick(thumb.img)}
                    />
                ))}
            </div>
        </div>
    );
};

export default ImageGallery;
