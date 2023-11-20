import React from 'react';
import './Home.css'
// import './response.css'
import { faGithub, faFacebook, faLinkedin, faTwitch, faWhatsapp, } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import home from './img/home.png'
import wave from './img/wave.svg';
import Typical from 'react-typical'




import homelogo from './img/homelogo.png';
import Shortintro from '../Shortintro/Shortintro';

const Home = () => {


    const steps = [
        'Hello 👋', 1000,
        'I am a Junior Web-Developer🌐', 1000,
        'I am practicing Data Structures and Algorithms 👌', 1000,

    ];
    return (
        <div >
            <div className='home-div-main'>
                <div className='container   home-div'>

                    {/* whatsapp logo */}
                    <div className='whatsapp-logo'><FontAwesomeIcon icon={faWhatsapp} size="2x" beat className='whatsapplogo' /></div>
                    <div className='name-div'>

                        <p className='name-p'>Welcome to my Portfolio</p>
                        <div className='name-div22'>
                            <p>I'm</p>
                            <h1>MAHADI HASAN <span>MISHUK</span> </h1>
                            <hr />
                        </div>
                        <p className='typical'>
                            <Typical
                                // steps={['Hello', 1000, 'Hello world!', 500]}
                                steps={steps}
                                loop={Infinity}
                                wrapper="span"
                            />
                        </p>
                        <p  >I am Sincere,responsible,confident,dedicated,down to earth & trustworthly.Currently I am studying about Web-development as well as Softwer Engineering.</p>

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
            </div>
            <div className='    wave1'>
                <img className='' src={wave} alt="" />

                {/* Call ShortIntroduction Class */}
                <Shortintro></Shortintro>

                {/* <div className='sort-intro  '>
                    <div className='sort-intro-headline p-2 '>
                        <div className='sort-intro-img ps-1'><img src={sort} alt="" /></div>
                        <div className='sort-intro-head ps-5'>
                            <div><img className=' ' src={tick} alt="" /> </div>
                            <div><img className=' ' src={tick} alt="" /></div>

                        </div>
                        <div className='linkedin-follow   '><img src={linkedinfollow} alt="img" /></div>
                    </div>
                    <div className='sort-intro-child mt-2'>

                        
                        <div className=' sort-intro-child-div m-3  bg-white'><img src={college} alt="" />
                            <p className='mt-3 institution'>Institution</p>
                            <p className='mt-3 institution11'>Rk University</p>
                            <p className='mt-3 institution33'>B Tech Computer Engineering</p>
                            <p className='mt-3 institution44'>(2021-2025)</p>
                        </div>
                        <div className=' sort-intro-child-div m-3 bg-white'><img src={programming} alt="" />
                            <p className='mt-3 institution'>Programming</p>
                            <p className='mt-3 institution11'>JS,React,Node Js,Java.</p>
                            <p className='mt-3 institution33'>Web-Development & DSA</p>
                            <p className='mt-3 institution44'>Since 2022</p>
                        </div>
                        <div className=' sort-intro-child-div m-3 bg-white'><img src={expert} alt="" />
                            <p className='mt-3 institution'>Expert</p>
                            <p className='mt-3 institution11'>Web-Development</p>
                            <p className='mt-3 institution33'>UI/UX & Front-End</p>
                            <p className='mt-3 institution44'>Sicnce 2022</p>
                        </div>
                        <div className=' sort-intro-child-div m-3 bg-white'><img src={projects} alt="" />
                            <p className='mt-3 institution'>Projects</p>
                            <p className='mt-3 institution11'>Learning Website</p>
                            <p className='mt-3 institution33'>Like GeekforGeek</p>
                            <p className='mt-3 institution44'><a href="www.csehacks.com" target='_blank'><Animation animations={'swirve'}>CSEHAcks</Animation></a></p>
                        </div>



                    </div>
                </div> */}
            </div>

        </div>
    );
};

export default Home;