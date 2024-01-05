import React from 'react';
import './Test.css';
import mishuk2 from '../img/mishuk2.png';
import rku from '../img/rku.png';
import fiverr from '../img/fiverr.webp';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUpRightFromSquare, faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';


const Testimonials = () => {
    return (
        <div id='testimonials' className='container'>
            <div className='Testimonials-name-div mt-[80px] mb-0 '>
                <span className='text-blue-500'>What People Say</span>
                <div className='flex justify-between'> <p className='text-5xl'> Testimonials</p>  <button className='text-white rounded-full bg-blue-500 w-40 h-10'>See More <FontAwesomeIcon className='ms-1' icon={faArrowUpRightFromSquare} /></button>
                </div>
                <hr className='text-white h-3 pt-0 mt-0' />
            </div>
            <div className='Testimonials-head flex mt-0 py-3'>
                <div className="e-card playing">
                    <div className="image"></div>
                    <div className="wave"></div>
                    <div className="wave"></div>
                    <div className="wave"></div>
                    <div className="infotop  ">
                        <div className='infotop-img'>
                            <img src={mishuk2} alt="" />
                        </div>
                        <div className="text-content">
                            <p>Shivangi Patel</p>
                            <p className="name">Assistance Professor</p>
                        </div>
                        <p className='detils-p  '>Updating...</p>
                        <div className='end-section456 px-1 items-center bg-slate-800 flex flex-row justify-between'>
                            <div>
                                <a href="https://rku.ac.in/" target='blank'> <img className='w-10 hover:scale-125 duration-300' src={rku} alt="" /></a>
                            </div>
                            <div>
                                <FontAwesomeIcon className='FontAwesomeIcon123 me-2 text-slate-200' icon={faEnvelope} />
                                <FontAwesomeIcon className='FontAwesomeIcon123 me-2 text-slate-200' icon={faPhone} />
                                <FontAwesomeIcon className='FontAwesomeIcon123 me-2 text-slate-200' icon={faLinkedin} />
                            </div>

                        </div>
                    </div>
                </div>
                <div className="e-card playing">
                    <div className="image"></div>
                    <div className="wave"></div>
                    <div className="wave"></div>
                    <div className="wave"></div>
                    <div className="infotop  ">
                        <div className='infotop-img'>
                            <img src={mishuk2} alt="" />
                        </div>
                        <div className="text-content">
                            <p>Shalini Jha</p>
                            <p className="name">Assistance Professor</p>
                        </div>
                        <p className='detils-p  '>Updating...</p>
                        <div className='end-section456 px-1 items-center bg-slate-800 flex flex-row justify-between'>
                            <div>
                                <a href="https://rku.ac.in/" target='blank'> <img className='w-10 hover:scale-125 duration-300' src={rku} alt="" /></a>
                            </div>
                            <div>
                                <FontAwesomeIcon className='FontAwesomeIcon123 me-2 text-slate-200' icon={faEnvelope} />
                                <FontAwesomeIcon className='FontAwesomeIcon123 me-2 text-slate-200' icon={faPhone} />
                                <FontAwesomeIcon className='FontAwesomeIcon123 me-2 text-slate-200' icon={faLinkedin} />
                            </div>

                        </div>
                    </div>
                </div>
                <div className="e-card playing">
                    <div className="image"></div>
                    <div className="wave"></div>
                    <div className="wave"></div>
                    <div className="wave"></div>
                    <div className="infotop  ">
                        <div className='infotop-img'>
                            <img src={mishuk2} alt="" />
                        </div>
                        <div className="text-content">
                            <p>Md Nur Islam</p>
                            <p className="name">Graphic Designer</p>
                        </div>
                        <p className='detils-p  '>Updating...</p>
                        <div className='end-section456 px-1 items-center bg-slate-800 flex flex-row justify-between'>
                            <div>
                                <a href="https://rku.ac.in/" target='blank'> <img className='w-8 hover:scale-125 duration-300' src={fiverr} alt="" /></a>
                            </div>
                            <div>
                                <FontAwesomeIcon className='FontAwesomeIcon123 me-2 text-slate-200' icon={faEnvelope} />
                                <FontAwesomeIcon className='FontAwesomeIcon123 me-2 text-slate-200' icon={faPhone} />
                                <FontAwesomeIcon className='FontAwesomeIcon123 me-2 text-slate-200' icon={faLinkedin} />
                            </div>

                        </div>
                    </div>
                </div>
                <div className="e-card playing">
                    <div className="image"></div>
                    <div className="wave"></div>
                    <div className="wave"></div>
                    <div className="wave"></div>
                    <div className="infotop  ">
                        <div className='infotop-img'>
                            <img src={mishuk2} alt="" />
                        </div>
                        <div className="text-content">
                            <p>Nikunj Vatt</p>
                            <p className="name">Assistance Professor</p>
                        </div>
                        <p className='detils-p  '>Updating...</p>
                        <div className='end-section456 px-1 items-center bg-slate-800 flex flex-row justify-between'>
                            <div>
                                <a href="https://rku.ac.in/" target='blank'> <img className='w-10 hover:scale-125 duration-300' src={rku} alt="" /></a>
                            </div>
                            <div>
                                <FontAwesomeIcon className='FontAwesomeIcon123 me-2 text-slate-200' icon={faEnvelope} />
                                <FontAwesomeIcon className='FontAwesomeIcon123 me-2 text-slate-200' icon={faPhone} />
                                <FontAwesomeIcon className='FontAwesomeIcon123 me-2 text-slate-200' icon={faLinkedin} />
                            </div>

                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Testimonials;
