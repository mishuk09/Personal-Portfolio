import React, { useState } from 'react';
import './Workpv.css';
import Marquee from "react-fast-marquee";
import sihh from '../img/sihh.png';
import ahms from '../img/ahms.png';
import calendar from '../img/calendar.png';
import movieapp from '../img/movieapp.png';
import portt from '../img/portt.png';
import csehacks from '../img/csehacks.png';

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
                <span>What I Do</span>
                <p> Design & Development</p>
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
                <img src={csehacks} alt="" />
                <img src={sihh} alt="" />
                <img src={movieapp} alt="" />
                <img src={calendar} alt="" />
                <img src={ahms} alt="" />
                <img src={portt} alt="" />
            </Marquee>
        </div>
    );
};

export default Workpv;
