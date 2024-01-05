import React, { useState, useEffect } from "react";
import ImgsViewer from "react-images-viewer";
import work from './img/work.png';
import google from './img/google.png';

const ImgView = () => {
    const [viewerIsOpen, setViewerIsOpen] = useState(false);
    const [currImg, setCurrImg] = useState(0);
    const [autoplay, setAutoplay] = useState(false);

    const images = [
        { src: google },
        { src: work },
    ];

    useEffect(() => {
        let intervalId;
        if (autoplay) {
            intervalId = setInterval(() => {
                setCurrImg((prevImg) => (prevImg + 1) % images.length);
            }, 3000); // Change the interval time as needed (in milliseconds)
        } else {
            clearInterval(intervalId);
        }
        return () => clearInterval(intervalId);
    }, [autoplay, images.length]);

    const openViewer = (index) => {
        setCurrImg(index);
        setViewerIsOpen(true);
    };

    const closeViewer = () => {
        setViewerIsOpen(false);
    };

    const gotoPrevious = () => {
        setCurrImg(currImg === 0 ? images.length - 1 : currImg - 1);
    };

    const gotoNext = () => {
        setCurrImg((currImg + 1) % images.length);
    };

    const toggleAutoplay = () => {
        setAutoplay(!autoplay);
    };

    return (
        <div>
            <button onClick={gotoPrevious}>Prev</button>
            <button onClick={toggleAutoplay}>{autoplay ? "Stop Autoplay" : "Start Autoplay"}</button>
            <button onClick={gotoNext}>Next</button>

            <div style={{ display: "flex" }}>
                {images.map((img, index) => (
                    // eslint-disable-next-line jsx-a11y/img-redundant-alt
                    <img
                        key={index}
                        src={img.src}
                        alt={`Image ${index}`}
                        onClick={() => openViewer(index)}
                        style={{ marginRight: "10px", cursor: "pointer" }}
                    />
                ))}
            </div>

            <ImgsViewer
                imgs={images}
                currImg={currImg}
                isOpen={viewerIsOpen}
                onClose={closeViewer}
                onClickPrev={gotoPrevious}
                onClickNext={gotoNext}
            />
        </div>
    );
};

export default ImgView;


