import React from 'react';
import '../../index.css'
// import './Home.css';
import '../Responsive.css';
import { faGithub, faFacebook, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import wave from './img/wave.svg';
import Typical from 'react-typical';
import welcome from './img/welcome.png';
import homelogo from './img/homelogo.png';
import Shortintro from '../Shortintro/Shortintro';
import Solar from './SolarSystem/Solar';
import WhatsApp from '../OthersComponent/Button/WhatsApp';
import { faCode } from '@fortawesome/free-solid-svg-icons';
import element from './img/element.png';


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
                    <div className='absolute container  mx-2 mt-5  welcome-img'>
                        <img className=' ' src={welcome} alt="" />
                    </div>
                    <div className='absolute container     w-[800px]   element-img'>
                        <img className='   w-[500px]' src={element} alt="" />
                    </div>

                    <WhatsApp></WhatsApp>
                    <div className='name-div    mt-5'>
                        <div className='name-div22'>
                            <p className='text-slate-400 font-bold	'	>I'm</p>
                            <h1 className='font-verdina'>MAHADI HASAN <span>MISHUK</span> </h1>
                            <div className='flex   align-items-center justify-center mt-2'>
                                <div className='gradient-line1 w-[48%] pt-1'> </div>
                                <div className='gradient-line0 mx-3'>
                                    <FontAwesomeIcon icon={faCode} className='coding-icon34  ' size='xl' beat />
                                </div>
                                <div className='gradient-line w-[48%]  '> </div>
                            </div>
                        </div>
                        <p className='typical mt-4 font-nunito'>
                            <Typical
                                steps={steps}
                                loop={Infinity}
                                wrapper="span"
                            />
                        </p>
                        <p className=' text-slate-400 font-nunito xs:pe-4 sm:pe-0 text-justify	'>I am sincere, responsible, confident, dedicated, down-to-earth, and trustworthy. Currently, I am studying web development as well as software engineering</p>
                        <div className=' icon-div mt-6'>
                            <div> <img src={homelogo} alt="" /></div>
                            <div className='social-link relative pt-8 '>
                                <div className='ps-4 h-5 w-'><a href="https://github.com/mishuk09" target='blank'><FontAwesomeIcon className='icon-main' icon={faGithub} size="2x" /> </a> </div>
                                <div className='ps-4 h-5 w-'><a href="https://www.linkedin.com/in/mishuk09/" target='blank'><FontAwesomeIcon className='icon-main' icon={faLinkedin} size="2x" /></a></div>
                                <div className='ps-4 h-5 w-'><a href="https://www.facebook.com/mishuk0910/" target='blank'> <FontAwesomeIcon className='icon-main' icon={faFacebook} size="2x" /></a></div>
                                <div className='ps-4 h-5 w-'><a href="https://www.facebook.com/mishuk0910/" target='blank'><FontAwesomeIcon className='icon-main' icon={faTwitter} size="2x" /></a></div>
                            </div>
                        </div>
                    </div>
                    <div className='pic-div   '>
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