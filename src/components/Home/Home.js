import React from 'react';
import './Home.css';
import '../Responsive.css';
import { faGithub, faFacebook, faLinkedin, faUpwork, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import home from './img/home.png'
import wave from './img/wave.svg';
import Typical from 'react-typical';
import code from './img/code.png';
import welcome from './img/welcome.png';




import homelogo from './img/homelogo.png';
import Shortintro from '../Shortintro/Shortintro';
import Solar from './SolarSystem/Solar';
import WhatsApp from '../OthersComponent/Button/WhatsApp';
import { faCode } from '@fortawesome/free-solid-svg-icons';


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
                    <div className='absolute left-0 mt-5  welcome-img'>
                        <img className=' ' src={welcome} alt="" />
                    </div>
                    {/* whatsapp logo */}
                    <WhatsApp></WhatsApp>
                    {/* <div className='whatsapp-logo'><FontAwesomeIcon icon={faWhatsapp} size="2x" beat className='whatsapplogo' /></div> */}
                    <div className='name-div  mt-5'>


                        {/* <p className='name-p'>Welcome to my Portfolio</p> */}
                        <div className='name-div22'>
                            <p className='text-slate-400 font-bold	'	>I'm</p>
                            <h1>MAHADI HASAN <span>MISHUK</span> </h1>
                            <div className='flex   align-items-center justify-center mt-2'>
                                <div className='gradient-line1 w-[48%] pt-1'> </div>
                                <div className='gradient-line0 mx-3'>

                                    <FontAwesomeIcon icon={faCode} className='    coding-icon34 text-white' size='1xl' beat />
                                    {/* <img className=' ' src={code} alt="" /> */}
                                </div>
                                <div className='gradient-line w-[48%]  '> </div>
                            </div>
                        </div>
                        <p className='typical mt-4'>
                            <Typical
                                // steps={['Hello', 1000, 'Hello world!', 500]}
                                steps={steps}
                                loop={Infinity}
                                wrapper="span"
                            />
                        </p>
                        <p className=' text-slate-400	'>I am Sincere,responsible,confident,dedicated,down to earth & trustworthly.Currently I am studying about Web-development as well as Softwer Engineering.</p>

                        <div className=' icon-div mt-6'>
                            <div> <img src={homelogo} alt="" /></div>
                            <div className='social-link pt-8 '>

                                <div className='ps-4 h-5 w-'><a href="https://github.com/mishuk09"><FontAwesomeIcon className='icon-main' icon={faGithub} size="2x" /> </a> </div>
                                <div className='ps-4 h-5 w-'><a href="https://www.linkedin.com/in/mishuk09/" target='blank'><FontAwesomeIcon className='icon-main' icon={faLinkedin} size="2x" /></a></div>
                                <div className='ps-4 h-5 w-'><a href="https://www.facebook.com/mishuk0910/" target='blank'> <FontAwesomeIcon className='icon-main' icon={faFacebook} size="2x" /></a></div>
                                <div className='ps-4 h-5 w-'><a href=""></a><FontAwesomeIcon className='icon-main' icon={faTwitter} size="2x" /></div>

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