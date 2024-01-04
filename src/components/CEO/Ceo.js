import React from 'react';
import './Ceo.css';
import '../Responsive.css';
import MapChart from './earth/MapChart';
import mm from './img/mm.png';
import Workpv from './Marquee/Workpv';
import Testimonials from './Testimonier/Testimonials';

const Ceo = () => {
    return (
        <div className='ceo-head-parant  '>
            <div className='ceo bg-black'>
                <Workpv></Workpv>
                <Testimonials></Testimonials>
                <div className='img-div'>
                    <MapChart className='img'></MapChart>
                </div>
            </div>
            <div className='container ceo-parent'>
                <div className='ceo-img pt-3 px-2'>
                    <img src={mm} alt="" />
                </div>
                <div className='ceo-detils'>    
                    <div className='h3-span'>
                        <h3>Author of CSEHacks</h3>
                        <span>Learning Website</span>
                    </div>
                    <p >I am  Here to Introduce Our Learning website. This site specially Design for Computer Engineering student .We are try to give a easy and enjoyable learning. Your valuable comment  will give us more inspiration to go ahead.</p>
                    <h5> -Mahadi Hasan Mishuk </h5>
                    <a href="https://github.com/mishuk09" target='blank'><button>Go To Website</button></a>
                </div>
            </div>

        </div>
    );
};

export default Ceo;