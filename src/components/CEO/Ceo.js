import React from 'react';
import './Ceo.css';
import MapChart from './earth/MapChart';
import mishuk1 from './img/mishuk2.png';
import Testimonier from './Testimonier/Testimonier';
import Workpv from './Marquee/Workpv';

const Ceo = () => {
    return (
        <div>
            <div className='ceo'>
                <Workpv></Workpv>
                <Testimonier></Testimonier>
                <div className='img-div'>
                    {/* <img className='container' src={download} alt="" /> */}
                    <MapChart className='img'></MapChart>
                </div>
            </div>
            <div className='container ceo-parent'>
                <div className='ceo-img pt-3 px-2'>
                    <img src={mishuk1} alt="" />
                </div>
                <div className='ceo-detils'>
                    <div className='h3-span'>
                        <h3>CEO of CSEHacks</h3>
                        <span>Learning Website</span>
                    </div>
                    <p >I am  Here to Introduce Our Learning website. This site specially Design for Computer Engineering student .We are try to give a easy and enjoyable learning. Your valuable comment  will give us more inspiration to go ahead.</p>
                    <h5> -Mahadi Hasan Mishuk </h5>
                    <a href="http://mahadiinfo.me/Portfolio/" target='blank'><button>Go To Website</button></a>
                </div>
            </div>

        </div>
    );
};

export default Ceo;