import React from 'react';
import './Contact.css';
import { faGithub, faFacebook, faLinkedin, faTwitch } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import email from './img/email.png';
import call from './img/call.png';
import location from './img/location.png';


const Contact = () => {
    return (
        // <div className='container contact-main-head'>
        //     <h3>So Let's Contact With Me</h3>
        //     <div className='contact-head'>
        //         <div className='contact-child'>
        //             <div className='email-div'>
        //                 <div></div>
        //                 <div></div>
        //             </div>
        //             <div className='call-div'>
        //                 <div></div>
        //                 <div></div>
        //             </div>
        //             <div className='location-div'>
        //                 <div></div>
        //                 <div></div>
        //             </div>
        //             <div className='mapdiv'>
        //                 <div></div>
        //                 <div></div>
        //             </div>
        //         </div>
        //         <div className='contact-child2'></div>
        //     </div>

        // </div>

        <div className="flex flex-col items-stretch  contact-headmain   ">
            <div className="text-black text-justify text-3xl font-bold leading-10 self-center whitespace-nowrap max-md:max-w-full">
                So Let's Contact With Me
            </div>{" "}
            <div className="container contact-head-main shadow-sm  self-center flex w-full   flex-col items-center mt-16 px-5  rounded-md    ">
                <div className="flex w-full  flex-col items-center  ">

                    <div className="self-stretch mt-10  ">
                        <div className="gap-1 flex  ">
                            <div className="flex flex-col items-stretch w-[57%] max-md:w-full  ">
                                <div className="flex grow flex-col    ">
                                    <div className="self-stretch flex justify-between gap-4  ">
                                        <div className='location-div'> <img src={email} alt="" /> </div>
                                        {" "}
                                        <div className="flex grow basis-[0%] flex-col items-stretch   max-md:max-w-full">
                                            <div className="text-white text-justify text-1xl font-bold leading-8 whitespace-nowrap max-md:max-w-full">
                                                Email
                                            </div>{" "}
                                            <div className="text-white text-justify text-sm leading-8 whitespace-nowrap   max-md:max-w-full">
                                                mishukinfo09@gmail.com
                                            </div>
                                        </div>
                                    </div>{" "}
                                    <div className="flex    justify-between gap-4 mt-3 self-start  ">
                                        <div className='location-div'> <img src={call} alt="" /> </div>{" "}
                                        <div className="flex grow basis-[0%] flex-col items-stretch  ">
                                            <div className="text-white text-justify text-1xl font-bold leading-8 whitespace-nowrap">
                                                Call
                                            </div>{" "}
                                            <div className="text-white text-justify text-sm leading-8 whitespace-nowrap  ">
                                                +91 7069078661
                                            </div>
                                        </div>


                                    </div>{" "}
                                    <div className="flex    justify-between gap-4 mt-3 self-start  ">
                                        <div className='location-div'> <img src={location} alt="" /> </div>{" "}
                                        <div className="flex grow basis-[0%] flex-col items-stretch  ">
                                            <div className="text-white text-justify text-1xl font-bold leading-8 whitespace-nowrap">
                                                Location
                                            </div>{" "}
                                            <div className="text-white text-justify text-sm leading-8 whitespace-nowrap  ">
                                                Rk university Rajkot,Gujarat,India.
                                            </div>
                                        </div>
                                    </div>{" "}


                                    <div className="text-white text-justify   font-bold leading-8 whitespace-nowrap  self-stretch items-center   pt-10 pb-10      ">
                                        <iframe
                                            className='rounded'
                                            title="Google Map"
                                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d59091.95342571948!2d70.9144792896636!3d22.230701929315895!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3959b4a660019ee9%3A0x3d6254f36ed0e794!2sRK%20University%20Main%20Campus!5e0!3m2!1sen!2sin!4v1700453227845!5m2!1sen!2sin"
                                            width="400"
                                            height="350"
                                            style={{ border: 0 }}
                                            allowFullScreen=""
                                            loading="lazy"
                                            referrerPolicy="no-referrer-when-downgrade"
                                        ></iframe>
                                    </div>


                                </div>
                            </div>{" "}
                            <div className="flex flex-col items-stretch w-[35%] ml-5  ">
                                <div className="flex flex-col items-stretch  ">
                                    <div className="text-white text-justify text-1xl leading-8 whitespace-nowrap max-md:max-w-full">
                                        Name
                                    </div>{" "}
                                    <input className="border  text-white bg-inherit flex flex-col mt-2 py-2 rounded-md border-solid  border-slate-400 max-md:max-w-full" type="text" />

                                    <div className="text-white text-justify text-1xl leading-8 whitespace-nowrap mt-3 max-md:max-w-full">
                                        Email
                                    </div>{" "}
                                    <input className="border  text-white bg-inherit flex flex-col mt-2 py-2 rounded-md border-solid border-white max-md:max-w-full" type="text" />


                                    <div className="text-white text-justify text-1xl leading-8 whitespace-nowrap mt-2  ">

                                    </div>

                                    <input className="border   h-40 flex-col mt-5 rounded-md border-solid border-white bg-inherit   text-white " type="text" />
                                    <div className="text-white   text-1xl text-center font-bold leading-8 whitespace-nowrap   bg-sky-500 items-center mt-12 px-5 py-2 rounded-[50px]   ">
                                        Send{" "}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>{" "}
            <div className="bg-slate-950 flex w-full flex-col items-center pt-3 mt-10 pb-3 px-5 max-md:max-w-full">
                <div className="flex w-56 max-w-full flex-col items-center">
                    <div className="text-white text-justify text-1xl font-bold   whitespace-nowrap">
                        Follow Me
                    </div>{" "}
                    <div className="self-stretch footer-logo flex items-start justify-between  mt-3 ">
                        <div className=''><FontAwesomeIcon icon={faGithub} className='icon' size="2x" />  </div>
                        <div className=''><FontAwesomeIcon icon={faLinkedin} className='icon' size="2x" /></div>
                        <div className=''><FontAwesomeIcon icon={faFacebook} className='icon' size="2x" /></div>
                        <div className=''><FontAwesomeIcon icon={faTwitch} className='icon' size="2x" /></div>

                    </div>{" "}
                    <div className="text-white text-justify       leading-5 self-stretch whitespace-nowrap mt-3">
                         MAHADI HASAN MISHUK 2023
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Contact;