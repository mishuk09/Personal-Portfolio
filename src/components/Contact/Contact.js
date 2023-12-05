import React from 'react';
import './Contact.css';
import { faGithub, faFacebook, faLinkedin, faTwitch, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import email from './img/email.png';
import call from './img/call.png';
import location from './img/location.png';
import SendMessage from './ContactForm';
import ContactForm from './ContactForm';
import { faArrowUpRightFromSquare, faCopyright, faEnvelope, faLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons';
import Three from '../Threejs/Three';
import ContactPage from '../ContactPage/ContactPage';


const Contact = () => {
    return (


        <div id='contact' className="flex flex-col items-stretch  contact-headmain   ">
            <div className="  container  ">

                <div className='marquee-div-name mt-[40px] '>
                    <span className='text-blue-500'>Contact</span>
                    <div className='flex justify-between'> <h3 className='text-black '> Let's Contact With Me</h3>
                    </div>
                    <hr className='text-black h-3 pt-0 mt-0' />
                </div>
            </div>{" "}

            <ContactPage></ContactPage>
            <div className="bg-slate-950 contact-icon flex w-full flex-col items-center pt-3   pb-3 px-1 max-md:max-w-full">
                <div className="flex w-[100%] max-w-full text-center flex-col items-center">
                    <div className="text-white text-justify text-1xl font-bold   whitespace-nowrap">
                        Follow Me
                    </div>{" "}
                    <div className="   text-center    footer-logo flex     mt-3 ">
                        <div className='ps-3 ms-0 '><a href="https://github.com/mishuk09"><FontAwesomeIcon className='icon-main' color='white' icon={faGithub} size="2x" /> </a> </div>
                        <div className='ps-3 ms-0 '><a href="https://www.linkedin.com/in/mishuk09/" target='blank'><FontAwesomeIcon className='icon-main' color='white' icon={faLinkedin} size="2x" /></a></div>
                        <div className='ps-3 ms-0 '><a href="https://www.facebook.com/mishuk0910/" target='blank'> <FontAwesomeIcon className='icon-main' color='white' icon={faFacebook} size="2x" /></a></div>
                        <div className='ps-3 ms-0 '><a href="https://www.facebook.com/mishuk0910"><FontAwesomeIcon className='icon-main' icon={faTwitter} color='white' size="2x" /></a></div>

                    </div>{" "}
                    <div className=" text-slate-200  text-center  w-[100%]    self-stretch whitespace-nowrap mt-2">

                        <FontAwesomeIcon icon={faCopyright} size='1x' />   MAHADI HASAN MISHUK 2023
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Contact;