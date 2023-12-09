import React from 'react';
import './Test.css';
import mishuk2 from '../img/mishuk2.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUpRightFromSquare, faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons'


const Testimonials = () => {
    return (
        <div id='testimonials' className='container'>
            <div className='Testimonials-name-div mt-[80px] mb-0 '>
                <span className='text-blue-500'>What People Say</span>
                <div className='flex justify-between'> <p> Testimonials</p>  <button className='text-white rounded-full bg-blue-500 w-40 h-10'>See More <FontAwesomeIcon className='ms-1' icon={faArrowUpRightFromSquare} /></button>
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
                            <p>Mahadi Hasan Mishuk</p>
                            <p className="name">Assistance Professor</p>
                        </div>
                        <p className='detils-p  '>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloremque dignissimos similique nobis velit doloribus ex hic excepturi, exercitationem quas obcaecati reiciendis corporis fugit odit voluptatem, quasi porro rem assumenda facere.</p>
                        <div className='end-section456'>
                            <FontAwesomeIcon className='FontAwesomeIcon123' icon={faEnvelope} />
                            <FontAwesomeIcon className='FontAwesomeIcon123' icon={faPhone} />
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
                            <p>Mahadi Hasan Mishuk</p>
                            <p className="name">Assistance Professor</p>
                        </div>
                        <p className='detils-p  '>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloremque dignissimos similique nobis velit doloribus ex hic excepturi, exercitationem quas obcaecati reiciendis corporis fugit odit voluptatem, quasi porro rem assumenda facere.</p>
                        <div className='end-section456'>
                            <FontAwesomeIcon className='FontAwesomeIcon123' icon={faEnvelope} />
                            <FontAwesomeIcon className='FontAwesomeIcon123' icon={faPhone} />
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
                            <p>Mahadi Hasan Mishuk</p>
                            <p className="name">Assistance Professor</p>
                        </div>
                        <p className='detils-p  '>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloremque dignissimos similique nobis velit doloribus ex hic excepturi, exercitationem quas obcaecati reiciendis corporis fugit odit voluptatem, quasi porro rem assumenda facere.</p>
                        <div className='end-section456'>
                            <FontAwesomeIcon className='FontAwesomeIcon123' icon={faEnvelope} />
                            <FontAwesomeIcon className='FontAwesomeIcon123' icon={faPhone} />
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
                            <p>Mahadi Hasan Mishuk</p>
                            <p className="name">Assistance Professor</p>
                        </div>
                        <p className='detils-p  '>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloremque dignissimos similique nobis velit doloribus ex hic excepturi, exercitationem quas obcaecati reiciendis corporis fugit odit voluptatem, quasi porro rem assumenda facere.</p>
                        <div className='end-section456'>
                            <FontAwesomeIcon className='FontAwesomeIcon123' icon={faEnvelope} />
                            <FontAwesomeIcon className='FontAwesomeIcon123' icon={faPhone} />

                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Testimonials;
