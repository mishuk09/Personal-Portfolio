import React from 'react';
import './Home.css'
import { faGithub, faFacebook, faLinkedin, faTwitch, faWhatsapp, } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import home from './img/home.png'
import wave from './img/wave.svg';
import Typical from 'react-typical'




import homelogo from './img/homelogo.png';
import Shortintro from '../Shortintro/Shortintro';
import Solar from './SolarSystem/Solar';
import WhatsApp from '../OthersComponent/Button/WhatsApp';
import Three from '../Threejs/Three';

const Home = () => {


    const steps = [
        'Hello 👋', 1000,
        'I am a Junior Web-Developer🌐', 1000,
        ' I am practicing Data Structures & Algorithms 👌', 1000,

    ];
    return (

        <div id='home' className='mt-[67px]' >


            <div className='home-div-main'>
                <div className='container   home-div'>

                    {/* whatsapp logo */}
                    <WhatsApp></WhatsApp>
                    {/* <div className='whatsapp-logo'><FontAwesomeIcon icon={faWhatsapp} size="2x" beat className='whatsapplogo' /></div> */}
                    <div className='name-div  '>

                        <p className='name-p'>Welcome to my Portfolio</p>
                        <div className='name-div22'>
                            <p className='text-slate-400 font-bold	'	>I'm</p>
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
                        <p className=' text-slate-400	'>I am Sincere,responsible,confident,dedicated,down to earth & trustworthly.Currently I am studying about Web-development as well as Softwer Engineering.</p>

                        <div className=' icon-div mt-10'>   
                            <div> <img src={homelogo} alt="" /></div>
                            <div className='social-link pt-8 '>

                                <div className='ps-4 h-5 w-'><FontAwesomeIcon className='icon-main' icon={faGithub} size="2x" />  </div>
                                <div className='ps-4 h-5 w-'><FontAwesomeIcon className='icon-main' icon={faLinkedin} size="2x" /></div>
                                <div className='ps-4 h-5 w-'><FontAwesomeIcon className='icon-main' icon={faFacebook} size="2x" /></div>
                                <div className='ps-4 h-5 w-'><FontAwesomeIcon className='icon-main' icon={faTwitch} size="2x" /></div>

                            </div>
                        </div>
                    </div>


                    <div className='pic-div bg-black'>
                        <Solar></Solar>
                    </div>
                </div>
            </div>
            <div className='wave1'>
                <img className=' img645' src={wave} alt="" />


                <Shortintro></Shortintro>


            </div>

        </div>
    );
};

export default Home;