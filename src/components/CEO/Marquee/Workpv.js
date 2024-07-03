import React, { useState } from 'react';
import '../../../index.css'
import Marquee from "react-fast-marquee";
import sihh from '../img/sihh.png';
import ahms from '../img/ahms.png';
import calendar from '../img/calendar.png';
import movieapp from '../img/movieapp.png';
import portt from '../img/portt.png';
import csehacks from '../img/csehacks.png';

const Workpv = () => {
    const [  setIsPaused] = useState(false);

    const handleMouseOver = () => {
        setIsPaused(true);
    };

    const handleMouseOut = () => {
        setIsPaused(false);
    };

    return (
        <div className='container'>
            <div className='marquee-div-name mt-[40px] mb-10'>
                <span className='text-blue-500'>What I Do</span>
                <div className='flex justify-between'> <p> Design & Development</p> 
                 {/* <button className='text-white rounded-full bg-blue-500 w-40 h-10'>See More <FontAwesomeIcon className='ms-1' icon={faArrowUpRightFromSquare} /></button> */}
                </div>
                <hr className='text-white h-3 pt-0 mt-0' />
            </div>
            <Marquee
                speed={40}
                gradient={false}
                pauseOnHover={false}
                direction='left'
                className='marquee-div-w'
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

