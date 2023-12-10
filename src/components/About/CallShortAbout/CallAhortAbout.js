import React from 'react';
import './CallShortAbout.css';
import '../../Responsive.css';
import about from '../img/about.png'
import followgithub from '../img/followgithub.gif'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCakeCandles, faPhone, faLocationDot, faPaperPlane } from '@fortawesome/free-solid-svg-icons'
import Marquee from "react-fast-marquee";
import Fade from 'react-reveal/Fade';



const CallAhortAbout = () => {
    return (
        <div>
            <div className='sortabout mt-2  '>
                <div className='sort-intro-he  p-1 '>
                    {/* <div className='sort-intro-img ps-1'><img src={about} alt="" className='jhdsahdf' /></div> */}
                    <div className='sort-introimg ps-1'><img src={about} alt="" /></div>
                    <div className='w-[50%] short-intro-marquee   rounded bg-blue-400 p-2'>
                        <Marquee
                            speed={40}
                            gradient={false}
                            pauseOnHover={false}
                            direction='left'
                            className='marquee-div'
                            pauseOnClick={false}
                        >
                            Tech Enthusiast B.Tech in Computer Engineering, Mastering JS, React, Node.js, and Java Since 2021...
                        </Marquee>
                    </div>
                    {/* <div className='linkedin-follow h-8    '><img className=' ' src={followgithub} alt="img" /></div> */}
                    <div className=' followgithub   '><img src={followgithub} alt="img" /></div>
                </div>
                <div className='sort-intro-child-main mt-2'>
                    <Fade top>
                        <div className='sort-intro-child11 m-2  '>
                            <div className='circle1 mt-1 mx-2 '><FontAwesomeIcon icon={faPaperPlane} className='icon mt-3  ' size="2x" /></div>
                            <div className='email-section mt-3 mx-2'>
                                <h5>Email</h5>
                                <p>mishukinfo09@gmail.com</p>
                            </div>
                        </div>
                    </Fade>
                    <Fade right>
                        <div className=' sort-intro-child11 m-2 '>
                            <div className='circle1 mt-1 mx-2'><FontAwesomeIcon icon={faCakeCandles} className='icon mt-3 ' size="2x" /></div>
                            <div className='email-section mt-3 mx-2'>
                                <h5>Age</h5>
                                <p>22</p>
                            </div>
                        </div>
                    </Fade>
                    <Fade bottom>
                        <div className=' sort-intro-child11 m-2 '>
                            <div className='circle1 mt-1 mx-2'><FontAwesomeIcon icon={faPhone} className='icon mt-3  ' size="2x" /></div>
                            <div className='email-section mt-3 mx-2'>
                                <h5>Phone</h5>
                                <p>+91 7069089661</p>
                            </div>
                        </div>
                    </Fade>
                    <Fade right>
                        <div className=' sort-intro-child11 m-2'>
                            <div className='circle1 mt-1 mx-2'><FontAwesomeIcon icon={faLocationDot} className='icon mt-3  ' size="2x" /></div>
                            <div className='email-section mt-3 mx-2'>
                                <h5>Location</h5>
                                <p>Rajkot,Gujarat,India.</p>
                            </div>
                        </div>
                    </Fade>
                </div>
            </div>
        </div>
    );
};

export default CallAhortAbout;