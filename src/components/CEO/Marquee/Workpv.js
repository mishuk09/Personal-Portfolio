import React, { useState } from 'react';
import '../../../index.css'
import Marquee from "react-fast-marquee";
import sihh from '../img/sihh.png';
import ahms from '../img/ahms.png';
import calendar from '../img/calendar.png';
import movieapp from '../img/movieapp.png';
import portt from '../img/portt.png';
import csehacks from '../img/csehacks.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import Seemore from '../../Projects/Utills/Seemore';

const Workpv = () => {
    const [setIsPaused] = useState(false);

    const handleMouseOver = () => {
        setIsPaused(true);
    };

    const handleMouseOut = () => {
        setIsPaused(false);
    };

    return (
        <div className='container'>
            <div className='marquee-div-name mt-[40px] mb-10'>
                <span className='text-blue-500 font text-base'>What I Do</span>
                <div className='flex justify-between'>
                    <p className='font-sans text-2xl md:text-3xl text-white hidden md:flex font-extrabold'> Design & Development</p>
                    <p className='font-sans text-xl md:text-3xl text-white flex md:hidden font-extrabold'>Development</p>
                    {/* <div className='text-white flex items-center justify-center rounded-full bg-blue-500 hover:bg-blue-600 duration-75 transition-all w-20 h-8 md:w-40 md:h-10'>
                        <a href='/designdev' className='text-white hidden md:flex'>See More <FontAwesomeIcon className='ms-1' icon={faArrowUpRightFromSquare} /></a>
                        <a href='/designdev' className='text-white flex md:hidden'>More</a>
                    </div> */}
                    <div>
                        <Seemore url="/designdev" />
                    </div>

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

