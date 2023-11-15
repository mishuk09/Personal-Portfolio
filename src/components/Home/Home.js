import React from 'react';
import './Home.css'
import { faGithub, faFacebook, faLinkedin, faTwitch, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import home from './img/home.png'
import wave from './img/wave.svg';
import sortintro from './img/sortintro.png'
import linkedinfollow from './img/linkedinfollow.png'

import homelogo from './img/homelogo.png';

const Home = () => {
    return (
        <div>
            <div className='container   home-div'>

                {/* whatsapp logo */}
                <div className='whatsapp-logo'><FontAwesomeIcon icon={faWhatsapp} size="2x" beat /></div>
                <div className='name-div'>

                    <p className='name-p'>Welcome to my Portfolio</p>
                    <div className='name-div22'>
                        <p>I'm</p>
                        <h1>MAHADI HASAN <span>MISHUK</span> </h1>
                        <hr />
                    </div>
                    {/* <p>
                        I'm{' '}
                        <Typed
                            strings={['Designer', 'Developer', 'Freelancer', 'Photographer']}
                            typeSpeed={50}
                            backSpeed={25}
                            backDelay={1500}
                            loop
                        />
                    </p> */}
                    {/* <p>Junior web Developer</p> */}
                    {/* <p>I'm <span class="typed" data-typed-items="Designer, Developer, Freelancer, Photographer"></span></p> */}
                    <p  >I am Sincare,responsible,confident,dedicated,down to earth & trustworthly.Currently I am studying about Web-development as well as Softwer Engineering.</p>

                    <div className=' icon-div mt-10'>
                        <div> <img src={homelogo} alt="" /></div>
                        <div className='social-link pt-8 '>

                            <div className='ps-4 h-5 w-'><FontAwesomeIcon icon={faGithub} size="2x" />  </div>
                            <div className='ps-4 h-5 w-'><FontAwesomeIcon icon={faLinkedin} size="2x" /></div>
                            <div className='ps-4 h-5 w-'><FontAwesomeIcon icon={faFacebook} size="2x" /></div>
                            <div className='ps-4 h-5 w-'><FontAwesomeIcon icon={faTwitch} size="2x" /></div>
                        </div>
                    </div>
                </div>


                <div className='pic-div'>
                    <img className='container-fluid' src={home} alt="" />
                </div>
            </div>

            <div className='container container-fluid wave1'>
                <img className='' src={wave} alt="" />

                <div className='sort-intro'>
                    <div className='sort-intro-headline'>
                        <div><img src={sortintro} alt="" /></div>
                        <div></div>
                        <div><img src={linkedinfollow} alt="" /></div>
                    </div>
                    <div>
                        <div></div>
                        <div></div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Home;