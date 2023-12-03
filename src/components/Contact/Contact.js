import React from 'react';
import './Contact.css';
import { faGithub, faFacebook, faLinkedin, faTwitch } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import email from './img/email.png';
import call from './img/call.png';
import location from './img/location.png';
import SendMessage from './ContactForm';
import ContactForm from './ContactForm';
import { faCopyright, faEnvelope, faLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons';
import Three from '../Threejs/Three';
import ContactPage from '../ContactPage/ContactPage';


const Contact = () => {
    return (


        <div id='contact' className="flex flex-col items-stretch  contact-headmain   ">
            <div className="  text-justify text-3xl font-bold leading-10 self-center whitespace-nowrap max-md:max-w-full">
                So Let's Contact With Me
            </div>{" "}
            <ContactPage></ContactPage>
            <div className="bg-slate-950 flex w-full flex-col items-center pt-3   pb-3 px-5 max-md:max-w-full">
                <div className="flex w-56 max-w-full flex-col items-center">
                    <div className="text-white text-justify text-1xl font-bold   whitespace-nowrap">
                        Follow Me
                    </div>{" "}
                    <div className="self-stretch footer-logo flex items-start justify-between  mt-3 ">
                        <div ><FontAwesomeIcon icon={faGithub} className='icon-c' color='white' size="2x" />  </div>
                        <div ><FontAwesomeIcon icon={faLinkedin} className='icon-c' color='white' size="2x" /></div>
                        <div ><FontAwesomeIcon icon={faFacebook} className='icon-c' color='white' size="2x" /></div>
                        <div ><FontAwesomeIcon icon={faTwitch} className='icon-c' color='white' size="2x" /></div>

                    </div>{" "}
                    <div className="text-white text-justify       leading-5 self-stretch whitespace-nowrap mt-3">
                        <FontAwesomeIcon icon={faCopyright} size='1x' />  MAHADI HASAN MISHUK 2023
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Contact;