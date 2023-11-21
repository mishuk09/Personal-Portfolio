import React, { useState } from 'react';
import './Workpv.css';
import Marquee from "react-fast-marquee";
import sihh from '../img/sihh.png';
import ahms from '../img/ahms.png';
import calendar from '../img/calendar.png';
import movieapp from '../img/movieapp.png';
import portt from '../img/portt.png';

const Workpv = () => {
    const [isPaused, setIsPaused] = useState(false);

    const handleMouseOver = () => {
        setIsPaused(true);
    };

    const handleMouseOut = () => {
        setIsPaused(false);
    };

    return (
        <div className='container'>
            <div className='marquee-div-name'>
                Here Are a Few of My Work Among Many
            </div>
            <Marquee
                speed={40}
                gradient={false}
                pauseOnHover={false}
                direction='left'
                className='marquee-div'
                pauseOnClick={false}
                onMouseEnter={handleMouseOver}
                onMouseLeave={handleMouseOut}
            >
                <img src={portt} alt="" />
                <img src={sihh} alt="" />
                <img src={movieapp} alt="" />
                <img src={calendar} alt="" />
                <img src={ahms} alt="" />
            </Marquee>
        </div>
    );
};

export default Workpv;
