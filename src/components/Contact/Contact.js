import React from 'react';
import './Contact.css';
import { faGithub, faFacebook, faLinkedin, faTwitch } from '@fortawesome/free-brands-svg-icons';
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
                    <div className='flex justify-between'> <h3 className=' '> Let's Contact With Me</h3>
                    </div>
                    <hr className='text-black h-3 pt-0 mt-0' />
                </div>
            </div>{" "}
            {/* <div className='marquee-div-name mt-[40px] mb-10'>
                <span className='text-blue-500'>What I Do</span>
                <div className='flex justify-between'> <p> Design & Development</p>  <button className='text-white rounded-full bg-blue-500 w-40 h-10'>See More <FontAwesomeIcon className='ms-1' icon={faArrowUpRightFromSquare} /></button>
                </div>
                <hr className='text-white h-3 pt-0 mt-0' />
            </div> */}
            <ContactPage></ContactPage>
            <div className="bg-slate-950 contact-icon flex w-full flex-col items-center pt-3   pb-3 px-5 max-md:max-w-full">
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