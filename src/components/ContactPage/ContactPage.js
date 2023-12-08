import '../Responsive.css';
import './ContactPage.css'
import React, { useState } from 'react';

import Navbar from '../Navbar/Navbar';
import ContactForm from '../Contact/ContactForm';
import contact from './img/contact.png';
import Three from '../Threejs/Three';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons';
import { Fade } from 'react-reveal';
import { Zoom } from 'react-reveal';
import Nav from '../Navbar/Nav';

const ContactPage = () => {
    const [showContactInfo, setShowContactInfo] = useState(false);

    const toggleContactInfo = () => {
        setShowContactInfo(!showContactInfo);
    };



    return (
        <div className='contactpage-div-style pb-10' >
            <Nav></Nav>
            <div className='absolute three-div'>
                <Three></Three>
            </div>
            <div className='container contact-page-form relative flex pt-7 mt-[65px]'>
                <div className='hnjhgyh'>
                    <Fade top>
                        {!showContactInfo && (
                            <img
                                className='w-[450px] px-10 mt-[70px]  img-contact-form cursor-pointer'
                                src={contact}
                                alt=""
                                onClick={toggleContactInfo}
                            />
                        )}</Fade>
                    {showContactInfo && (

                        <div className='relative w-[100%] bg-transparent contactInfo rounded top-0 left-10 bg-gray-900 p-3 ms-10  '>
                            <div className="flex flex-col items-stretch w-[100%] max-md:w-full pt-4 contact-head-child2 ">
                                <div className="flex grow flex-col    contact-head-child3  ">
                                    <Fade top>
                                        <div className="self-stretch flex justify-between gap-4  ">
                                            <div className='location-div text-center pt-2 rounded-full w-10 h-10 bg-blue-600 '><FontAwesomeIcon icon={faEnvelope} color='white' /> </div>
                                            {" "}
                                            <div className="flex grow basis-[0%] mt-1 leading-3	 flex-col items-stretch   max-md:max-w-full">
                                                <div className="text-white text-justify text-1xl font-bold leading-3 whitespace-nowrap max-md:max-w-full">
                                                    Email
                                                </div>{" "}
                                                <div className="text-white mt-0 text-justify text-sm leading-8 whitespace-nowrap   max-md:max-w-full">
                                                    mishukinfo09@gmail.com
                                                </div>
                                            </div>
                                        </div>{" "}
                                    </Fade>
                                    <Fade left>
                                        <div className="flex    justify-between gap-4 mt-3 self-start  ">
                                            <div className='location-div text-center pt-2 rounded-full w-10 h-10 bg-blue-600 '>  <FontAwesomeIcon icon={faPhone} color='white' /> </div>{" "}
                                            <div className="flex grow basis-[0%] leading-3 flex-col items-stretch  ">
                                                <div className="text-white text-justify text-1xl font-bold leading-3 whitespace-nowrap">
                                                    Call
                                                </div>{" "}
                                                <div className="text-white text-justify text-sm leading-8 whitespace-nowrap  ">
                                                    +91 7069078661
                                                </div>
                                            </div>


                                        </div>{" "}
                                    </Fade>
                                    <Fade right>
                                        <div className="flex    justify-between gap-4 mt-3 self-start  ">
                                            <div className='location-div text-center pt-2 rounded-full w-10 h-10 bg-blue-600  '> <FontAwesomeIcon icon={faLocationDot} color='white' className='  ' /> </div>{" "}
                                            <div className="flex grow basis-[0%] leading-3 flex-col items-stretch  ">
                                                <div className="text-white text-justify text-1xl font-bold leading-3 whitespace-nowrap">
                                                    Location
                                                </div>{" "}
                                                <div className="text-white text-justify text-sm leading-8 whitespace-nowrap  ">
                                                    Rk university Rajkot,Gujarat,India.
                                                </div>
                                            </div>
                                        </div>{" "}
                                    </Fade  >

                                    <Zoom>
                                        <div className="text-white text-justify mt-4   font-bold leading-8 whitespace-nowrap  self-stretch items-center     ">
                                            <iframe
                                                className='rounded iframe-map'
                                                title="Google Map"
                                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d59091.95342571948!2d70.9144792896636!3d22.230701929315895!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3959b4a660019ee9%3A0x3d6254f36ed0e794!2sRK%20University%20Main%20Campus!5e0!3m2!1sen!2sin!4v1700453227845!5m2!1sen!2sin"
                                                width="100%"
                                                height="250"
                                                style={{ border: 0 }}
                                                allowFullScreen=""
                                                loading="lazy"
                                                referrerPolicy="no-referrer-when-downgrade"
                                            ></iframe>
                                        </div>
                                    </Zoom>


                                </div>
                            </div>
                        </div>

                    )}
                </div>
                <Fade right>
                    <div className='w-[50%]  contactform absolute    right-0  '>
                        <ContactForm></ContactForm>
                    </div>
                </Fade>
            </div>
        </div>
    );
};

export default ContactPage;
