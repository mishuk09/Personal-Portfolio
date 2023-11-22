import React from 'react';
import './Mission.css';
import missionimg from './img/missionimg.png';
import map from './img/map.webp';
import { Link } from 'react-router-dom';


const Mission = () => {
    return (
        <div>
            <div className='mission-parent'>
                <div className='mission-head'>
                    <img className='mission-head-img1' src={map} alt="" />
                </div>

                <div className='container   img-title-mission'>

                    <div className='  mission-head-img'>
                        <img className='' src={missionimg} alt="" />
                    </div>

                    <div className='mission-detils   '>
                        <h1>My Mission and Vission</h1>
                        <p className=''>I'm Mahadi Hasan Mishuk and my mission is simple create websites that blend creativity and functionality. I'm dedicated to making your digital vision a reality with clear communication, cutting-edge tech, and a user-first mindset. Let's build something amazing together!</p>
                        <Link to="/contactpage"><button>Take The First Step</button></Link>
                    </div>
                </div>

            </div>


        </div>
    );
};

export default Mission;