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
import Solar from './SolarSystem/Solar';

const Home = () => {


    const steps = [
        'Hello 👋', 1000,
        'I am a Junior Web-Developer🌐', 1000,
        ' I am practicing Data Structures & Algorithms 👌', 1000,

    ];
    return (
        <div  >
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
                        {/* <img className='container-fluid' src={home} alt="" /> */}
                        <Solar></Solar>
                    </div>
                </div>
            </div>
            <div className='wave1'>
                <img className='' src={wave} alt="" />


                <Shortintro></Shortintro>


            </div>

        </div>
    );
};

export default Home;