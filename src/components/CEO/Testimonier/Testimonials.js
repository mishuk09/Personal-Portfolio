import React from 'react';
import './Test.css';
import mishuk2 from '../img/mishuk2.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons'


const Testimonials = () => {
    return (
        <div className='container'>
            <div className='Testimonials-name-div'>
                <h1>Testimonials </h1>
            </div>

            <div className='Testimonials-head flex'>

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
