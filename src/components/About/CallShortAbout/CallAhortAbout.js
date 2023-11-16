import React from 'react';
import './CallShortAbout.css'
import about from '../img/about.png'
import tick from '../../Home/img/tick.png';
import followgithub from '../img/followgithub.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCakeCandles, faPhone, faLocationDot, faPaperPlane } from '@fortawesome/free-solid-svg-icons'


const CallAhortAbout = () => {
    return (
        <div>


            <div className='sortabout mt-2  '>
                <div className='sort-intro-he p-2 '>
                    <div className='sort-introimg ps-1'><img src={about} alt="" /></div>
                    <div className='sort-intro-head11 ps-5'>
                        <div><img className=' ' src={tick} alt="" /> </div>
                        <div><img className=' ' src={tick} alt="" /></div>

                    </div>
                    <div className=' followgithub   '><img src={followgithub} alt="img" /></div>
                </div>
                <div className='sort-intro-child-main mt-2'>


                    <div className='sort-intro-child11 m-2  '>
                        <div className='circle1 mt-1 mx-2'><FontAwesomeIcon icon={faPaperPlane} className='icon mt-3 mx-3' size="2x" /></div>
                        <div className='email-section mt-3 mx-2'>
                            <h5>Email</h5>
                            <p>mishukinfo09@gmail.com</p>
                        </div>
                    </div>
                    <div className=' sort-intro-child11 m-2 '>
                        <div className='circle1 mt-1 mx-2'><FontAwesomeIcon icon={faCakeCandles} className='icon mt-3 mx-4' size="2x" /></div>
                        <div className='email-section mt-3 mx-2'>
                            <h5>Age</h5>
                            <p>22</p>
                        </div>

                    </div>
                    <div className=' sort-intro-child11 m-2 '>
                        <div className='circle1 mt-1 mx-2'><FontAwesomeIcon icon={faPhone} className='icon mt-3 mx-3' size="2x" /></div>
                        <div className='email-section mt-3 mx-2'>
                            <h5>Phone</h5>
                            <p>+91 7069089661</p>
                        </div>

                    </div>
                    <div className=' sort-intro-child11 m-2'>
                        <div className='circle1 mt-1 mx-2'><FontAwesomeIcon icon={faLocationDot} className='icon mt-3 mx-4' size="2x" /></div>
                        <div className='email-section mt-3 mx-2'>
                            <h5>Location</h5>
                            <p>Rajkot,Gujarat,India.</p>
                        </div>
                    </div>



                </div>
            </div>

        </div>
    );
};

export default CallAhortAbout;