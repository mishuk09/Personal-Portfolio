import { faGithub, faFacebook, faLinkedin, faTwitch } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import React, { useState } from 'react';
import './Testimonier.css';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import rkulogo from '../img/rkulogo.png'
import bdflag from '../img/bdflag.webp'
import indiaflag from '../img/indiaflag.webp'
import fiverr from '../img/fiverr.webp'


function Testimonier() {
    const [activeSlide, setActiveSlide] = useState(0);

    const handleIndicatorClick = (index) => {
        setActiveSlide(index);
    };


    return (
        <div>
            <section className="testimonial">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 d-none d-lg-block">
                            <ol className="carousel-indicators tabs">
                                <li onClick={() => handleIndicatorClick(0)} className={activeSlide === 0 ? 'active' : ''}>
                                    <figure className={activeSlide === 0 ? 'active-border' : ''}>
                                        <img src="https://livedemo00.template-help.com/wt_62267_v8/prod-20823-one-service/images/testimonials-01-179x179.png" className="img-fluid" alt="" />
                                    </figure>
                                </li>
                                <li onClick={() => handleIndicatorClick(1)} className={activeSlide === 1 ? 'active' : ''}>
                                    <figure className={activeSlide === 1 ? 'active-border' : ''}>
                                        <img src="https://livedemo00.template-help.com/wt_62267_v8/prod-20823-one-service/images/testimonials-02-306x306.png" className="img-fluid" alt="" />
                                    </figure>
                                </li>
                                <li onClick={() => handleIndicatorClick(2)} className={activeSlide === 2 ? 'active' : ''}>
                                    <figure className={activeSlide === 2 ? 'active-border' : ''}>
                                        <img src="https://livedemo00.template-help.com/wt_62267_v8/prod-20823-one-service/images/testimonials-03-179x179.png" className="img-fluid" alt="" />
                                    </figure>
                                </li>
                            </ol>
                        </div>
                        <div className="col-lg-6 d-flex justify-content-center align-items-center">
                            <div id="carouselExampleIndicators" data-interval="false" className="carousel slide" data-ride="carousel">
                                {/* Your other content */}
                                {/* Sample carousel items, replace with your content */}
                                <h1>TESTIMONIALS</h1>
                                <div className="carousel-inner">
                                    <div className={activeSlide === 0 ? 'carousel-item active' : 'carousel-item'}>
                                        <div class="carousel-item active">
                                            <div class="quote-wrapper">
                                                <p>I have tried a lot of food delivery services but Plate is something out of
                                                    this world! Their food is really healthy and it tastes great, which is why I
                                                    recommend this company to all my friends!</p>
                                                <div className='name-div-tes'> <h3>Shivangi Patel  <img className=' ' src={indiaflag} alt="" /></h3>
                                                    <span > Assistant Professor</span><hr />
                                                </div> <h5>Rk University,Rajkot,Gujarat,India.</h5>
                                                <div className='social-link pt-6 '>

                                                    <div className='pe-4  w-'><FontAwesomeIcon className='testimonier-div-icon' icon={faLinkedin} /></div>
                                                    <div className='pe-4  w-'><FontAwesomeIcon className='testimonier-div-icon' icon={faEnvelope} /></div>
                                                    <div className='pe-4  w-'><FontAwesomeIcon className='testimonier-div-icon' icon={faPhone} /></div>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={activeSlide === 1 ? 'carousel-item active' : 'carousel-item'}>
                                        <div class="quote-wrapper">
                                            <p>I have tried a lot of food delivery services but Plate is something out of
                                                this world! Their food is really healthy and it tastes great, which is why I
                                                recommend this company to all my friends!</p>
                                            <div className='name-div-tes'> <h3>SHALINI JHA  <img src={indiaflag} alt="" /></h3>
                                                <span > Asst. Professor || Training and placement officer || ISTD Member</span><hr />
                                            </div> <h5>Rk University,Rajkot,Gujarat,India.</h5>
                                            <div className='social-link pt-6 '>

                                                <div className='pe-4  w-'><FontAwesomeIcon className='testimonier-div-icon' icon={faLinkedin} /></div>
                                                <div className='pe-4  w-'><FontAwesomeIcon className='testimonier-div-icon' icon={faEnvelope} /></div>
                                                <div className='pe-4  w-'><FontAwesomeIcon className='testimonier-div-icon' icon={faPhone} /></div>

                                            </div>
                                        </div>
                                    </div>
                                    <div className={activeSlide === 2 ? 'carousel-item active' : 'carousel-item'}>
                                        <div class="quote-wrapper">
                                            <p>I have tried a lot of food delivery services but Plate is something out of
                                                this world! Their food is really healthy and it tastes great, which is why I
                                                recommend this company to all my friends!</p>
                                            <div className='name-div-tes'> <h3>NUR ALOM <img src={fiverr} alt="" /><img src={bdflag} alt="" /></h3>
                                                <span > Graphic Designer</span><hr />
                                            </div> <h5>Rk University,Rajkot,Gujarat,India.</h5>
                                            <div className='social-link pt-6 '>

                                                <div className='pe-4  w-'><FontAwesomeIcon className='testimonier-div-icon' icon={faLinkedin} /></div>
                                                <div className='pe-4  w-'><FontAwesomeIcon className='testimonier-div-icon' icon={faEnvelope} /></div>
                                                <div className='pe-4  w-'><FontAwesomeIcon className='testimonier-div-icon' icon={faPhone} /></div>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* Rest of your HTML */}

                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Testimonier;
