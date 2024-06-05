import React, { useRef, useState } from 'react';
import '../../../index.css'
import mishuk2 from '../img/mishuk2.png';
import rku from '../img/rku.png';
import fiverr from '../img/fiverr.webp';
import nurvai from '../img/nurvai.jpg';
import sp from '../img/sp.jpeg';
import sl from '../img/sl.jpeg';
import bd from '../img/bd.jpeg';
import nv from '../img/nv.jpeg';
import Dialog from '@mui/material/Dialog';
import Slide from '@mui/material/Slide';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpRightFromSquare, faCopy, faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

const CopyToClipboard = ({ text }) => {
    const [copied, setCopied] = useState(false);

    const copyToClipboard = () => {
        navigator.clipboard.writeText(text)
            .then(() => {
                console.log('Text copied to clipboard:', text);
                setCopied(true);
                setTimeout(() => {
                    setCopied(false);
                }, 2000);
            })
            .catch((err) => {
                console.error('Unable to copy to clipboard: ', err);
            });
    };

    return (
        <div className='bg-slate-800 p-3 text-slate-300 flex flex-col justify-center'>
            <p>{text} <button onClick={copyToClipboard}><FontAwesomeIcon className='mx-3' icon={faCopy} /></button></p>
            {copied && <span>Copied!</span>}
        </div>
    );
};

const Testimonials = () => {
    // Separate states and functions for each dialog
    const [openNurvai, setOpenNurvai] = useState(false);
    const [openSp, setOpenSp] = useState(false);
    const [openSl, setOpenSl] = useState(false);
    const [openNv, setOpenNv] = useState(false);
    const [openBd, setOpenBd] = useState(false);


    const handleClickOpenNurvai = () => {
        setOpenNurvai(true);
    };

    const handleCloseNurvai = () => {
        setOpenNurvai(false);
    };

    const handleClickOpenSp = () => {
        setOpenSp(true);
    };

    const handleCloseSp = () => {
        setOpenSp(false);
    };
    const handleClickOpenSl = () => {
        setOpenSl(true);
    };

    const handleCloseSl = () => {
        setOpenSl(false);
    };
    const handleClickOpenNv = () => {
        setOpenNv(true);
    };

    const handleCloseNv = () => {
        setOpenNv(false);
    };
    const handleClickOpenBd = () => {
        setOpenBd(true);
    };

    const handleCloseBd = () => {
        setOpenBd(false);
    };
    // ... (similar functions for other cards)


    const interviewRef = useRef(null);


    const scroll = (scrollOffset) => {
        if (interviewRef.current) {
            const container = interviewRef.current;
            const start = container.scrollLeft;

            const startTime = performance.now();
            const duration = 500; // Adjust the duration as needed

            const animateScroll = (currentTime) => {
                const elapsedTime = currentTime - startTime;
                const scroll = easeInOutQuad(elapsedTime, start, scrollOffset, duration);
                container.scrollLeft = scroll;

                if (elapsedTime < duration) {
                    requestAnimationFrame(animateScroll);
                }
            };

            requestAnimationFrame(animateScroll);
        }
    };


    // Easing function for smooth scroll animation
    const easeInOutQuad = (t, b, c, d) => {
        t /= d / 2;
        if (t < 1) return (c / 2) * t * t + b;
        t--;
        return (-c / 2) * (t * (t - 2) - 1) + b;
    };



    return (
        <div id='testimonials' className='container'>
            <div className='Testimonials-name-div mt-[80px] mb-0 '>
                <span className='text-blue-500'>What People Say</span>
                <div className='flex justify-between'> <p className='text-5xl'> Testimonials</p>  <button className='text-white rounded-full bg-blue-500 w-40 h-10'>See More <FontAwesomeIcon className='ms-1' icon={faArrowUpRightFromSquare} /></button>
                </div>
                <hr className='text-white h-3 pt-0 mt-0' />
            </div>

            <div className='px-5 mb-10 relative  '>
                <div className=' grid grid-flow-col auto-cols-max gap-3 mt-4 xs:overflow-x-auto md:overflow-hidden' ref={interviewRef}>

                    <div className="e-card playing">
                        <div className="image"></div>
                        <div className="wave"></div>
                        <div className="wave"></div>
                        <div className="wave"></div>
                        <div className="infotop  ">
                            <div className='infotop-img'>
                                <img src={nurvai} alt="" />
                            </div>
                            <div className="text-content">
                                <p>Md Nur Islam</p>
                                <p className="name">Graphic Designer</p>
                            </div>
                            <p className='detils-p  '>For done my project, 100% I am fully satisfied for his creativity with experience. So, I think it's my ethical responsibility to recommend ! Highly recommended anyone to create your extremely surprising website!</p>
                            <div className='end-section456 px-1 items-center bg-slate-800 flex flex-row justify-between'>
                                <div>
                                    <a href="https://www.fiverr.com/adipnur" target='blank'> <img className='w-8 hover:scale-125 duration-300' src={fiverr} alt="" /></a>
                                </div>
                                <div>
                                    <React.Fragment>
                                        <button className='' variant="outlined" onClick={handleClickOpenNurvai}>
                                            <div >
                                                <FontAwesomeIcon className='FontAwesomeIcon123 me-2 text-slate-200 hover:text-blue-500 duration-200' icon={faEnvelope} />
                                            </div>
                                        </button>
                                        <Dialog
                                            open={openNurvai}
                                            TransitionComponent={Transition}
                                            keepMounted
                                            onClose={handleCloseNurvai}
                                            aria-describedby="alert-dialog-slide-description"
                                        >
                                            <div className='bg-slate-800 p-3 text-slate-300 flex flex-col   justify-center'>
                                                <CopyToClipboard text="nuralam.ne@gmail.com" />
                                                <CopyToClipboard text="+880 1744-883106" />
                                            </div>
                                        </Dialog>
                                    </React.Fragment>
                                    <React.Fragment>
                                        <button className='' variant="outlined" onClick={handleClickOpenNurvai}>
                                            <div >
                                                <FontAwesomeIcon className='FontAwesomeIcon123 me-2 text-slate-200 hover:text-blue-500 duration-200' icon={faPhone} />
                                            </div>
                                        </button>
                                        <Dialog
                                            open={openNurvai}
                                            TransitionComponent={Transition}
                                            keepMounted
                                            onClose={handleCloseNurvai}
                                            aria-describedby="alert-dialog-slide-description"
                                        >
                                            <div className='bg-slate-800 p-3 text-slate-300 flex flex-col   justify-center'>
                                                <CopyToClipboard text="nuralam.ne@gmail.com" />
                                                <CopyToClipboard text="+880 1744-883106" />
                                            </div>
                                        </Dialog>
                                    </React.Fragment>
                                    <a href="https://www.linkedin.com/in/nur-alam-890863159/" target='blank'><FontAwesomeIcon className='FontAwesomeIcon123 me-2 hover:text-blue-500 text-slate-200' icon={faLinkedin} /></a>
                                </div>


                            </div>
                        </div>
                    </div>
                    <div className="e-card playing">
                        <div className="image"></div>
                        <div className="wave"></div>
                        <div className="wave"></div>
                        <div className="wave"></div>
                        <div className="infotop  ">
                            <div className='infotop-img'>
                                <img src={sp} alt="" />
                            </div>
                            <div className="text-content">
                                <p>Shivangi Patel</p>
                                <p className="name">Assistant Professor</p>
                            </div>
                            <p className='detils-p  '> Updating...</p>
                            <div className='end-section456 px-1 items-center bg-slate-800 flex flex-row justify-between'>
                                <div>
                                    <a href="https://www.fiverr.com/adipnur" target='blank'> <img className='w-8 hover:scale-125 duration-300' src={rku} alt="" /></a>
                                </div>


                                <div>



                                    <React.Fragment>
                                        <button className='' variant="outlined" onClick={handleClickOpenSp}>
                                            <div >
                                                <FontAwesomeIcon className='FontAwesomeIcon123 me-2 text-slate-200 hover:text-blue-500 duration-200' icon={faEnvelope} />
                                            </div>
                                        </button>
                                        <Dialog
                                            open={openSp}
                                            TransitionComponent={Transition}
                                            keepMounted
                                            onClose={handleCloseSp}
                                            aria-describedby="alert-dialog-slide-description"
                                        >
                                            <div className='bg-slate-800 p-3 text-slate-300 flex flex-col   justify-center'>
                                                <CopyToClipboard text="shivangi.patel@rku.ac.in " />
                                                <CopyToClipboard text="+91 90333 36835" />
                                            </div>
                                        </Dialog>
                                    </React.Fragment>
                                    <React.Fragment>
                                        <button className='' variant="outlined" onClick={handleClickOpenSp}>
                                            <div >
                                                <FontAwesomeIcon className='FontAwesomeIcon123 me-2 text-slate-200 hover:text-blue-500 duration-200' icon={faPhone} />
                                            </div>
                                        </button>
                                        <Dialog
                                            open={openSp}
                                            TransitionComponent={Transition}
                                            keepMounted
                                            onClose={handleCloseSp}
                                            aria-describedby="alert-dialog-slide-description"
                                        >
                                            <div className='bg-slate-800 p-3 text-slate-300 flex flex-col   justify-center'>
                                                <CopyToClipboard text="shivangi.patel@rku.ac.in" />
                                                <CopyToClipboard text="+91 90333 36835" />
                                            </div>
                                        </Dialog>
                                    </React.Fragment>
                                    <a href="https://www.linkedin.com/in/shivangi-patel-65823b123/" target='blank'><FontAwesomeIcon className='FontAwesomeIcon123 me-2 hover:text-blue-500 text-slate-200' icon={faLinkedin} /></a>
                                </div>


                            </div>
                        </div>
                    </div>
                    <div className="e-card playing">
                        <div className="image"></div>
                        <div className="wave"></div>
                        <div className="wave"></div>
                        <div className="wave"></div>
                        <div className="infotop  ">
                            <div className='infotop-img'>
                                <img src={sl} alt="" />
                            </div>
                            <div className="text-content">
                                <p>Shalini Jha</p>
                                <p className="name">Assistant Professor</p>
                            </div>
                            <p className='detils-p  '>Updating...</p>
                            <div className='end-section456 px-1 items-center bg-slate-800 flex flex-row justify-between'>
                                <div>
                                    <a href="https://www.fiverr.com/adipnur" target='blank'> <img className='w-8 hover:scale-125 duration-300' src={rku} alt="" /></a>
                                </div>
                                <div>
                                    <React.Fragment>
                                        <button className='' variant="outlined" onClick={handleClickOpenSl}>
                                            <div >
                                                <FontAwesomeIcon className='FontAwesomeIcon123 me-2 text-slate-200 hover:text-blue-500 duration-200' icon={faEnvelope} />
                                            </div>
                                        </button>
                                        <Dialog
                                            open={openSl}
                                            TransitionComponent={Transition}
                                            keepMounted
                                            onClose={handleCloseSl}
                                            aria-describedby="alert-dialog-slide-description"
                                        >
                                            <div className='bg-slate-800 p-3 text-slate-300 flex flex-col   justify-center'>
                                                <CopyToClipboard text="jhashalu1@gmail.com" />
                                                <CopyToClipboard text="+91 87807 61370" />
                                            </div>
                                        </Dialog>
                                    </React.Fragment>
                                    <React.Fragment>
                                        <button className='' variant="outlined" onClick={handleClickOpenSl}>
                                            <div >
                                                <FontAwesomeIcon className='FontAwesomeIcon123 me-2 text-slate-200 hover:text-blue-500 duration-200' icon={faPhone} />
                                            </div>
                                        </button>
                                        <Dialog
                                            open={openSl}
                                            TransitionComponent={Transition}
                                            keepMounted
                                            onClose={handleCloseSl}
                                            aria-describedby="alert-dialog-slide-description"
                                        >
                                            <div className='bg-slate-800 p-3 text-slate-300 flex flex-col   justify-center'>
                                                <CopyToClipboard text="jhashalu1@gmail.com" />
                                                <CopyToClipboard text="+91 87807 61370" />
                                            </div>
                                        </Dialog>
                                    </React.Fragment>
                                    <a href="https://www.linkedin.com/in/shalini-jha-771338165/" target='blank'><FontAwesomeIcon className='FontAwesomeIcon123 me-2 hover:text-blue-500 text-slate-200' icon={faLinkedin} /></a>
                                </div>


                            </div>
                        </div>
                    </div>
                    <div className="e-card playing">
                        <div className="image"></div>
                        <div className="wave"></div>
                        <div className="wave"></div>
                        <div className="wave"></div>
                        <div className="infotop  ">
                            <div className='infotop-img'>
                                <img src={nv} alt="" />
                            </div>
                            <div className="text-content">
                                <p>Vadher Nikunj</p>
                                <p className="name">Assistant Professor</p>
                            </div>
                            <p className='detils-p  '>Updating...</p>
                            <div className='end-section456 px-1 items-center bg-slate-800 flex flex-row justify-between'>
                                <div>
                                    <a href="https://www.fiverr.com/adipnur" target='blank'> <img className='w-8 hover:scale-125 duration-300' src={rku} alt="" /></a>
                                </div>


                                <div>

                                    {/* <button onClick={sendEmail}><FontAwesomeIcon className='FontAwesomeIcon123 me-2 text-slate-200' icon={faEnvelope} /></button> */}

                                    <React.Fragment>
                                        <button className='' variant="outlined" onClick={handleClickOpenNv}>
                                            <div >
                                                <FontAwesomeIcon className='FontAwesomeIcon123 me-2 text-slate-200 hover:text-blue-500 duration-200' icon={faEnvelope} />
                                            </div>
                                        </button>
                                        <Dialog
                                            open={openNv}
                                            TransitionComponent={Transition}
                                            keepMounted
                                            onClose={handleCloseNv}
                                            aria-describedby="alert-dialog-slide-description"
                                        >
                                            <div className='bg-slate-800 p-3 text-slate-300 flex flex-col   justify-center'>
                                                <CopyToClipboard text="vadhernknj19@gmail.com" />
                                                <CopyToClipboard text="+91 99784 46077" />
                                            </div>
                                        </Dialog>
                                    </React.Fragment>
                                    <React.Fragment>
                                        <button className='' variant="outlined" onClick={handleClickOpenNv}>
                                            <div >
                                                <FontAwesomeIcon className='FontAwesomeIcon123 me-2 text-slate-200 hover:text-blue-500 duration-200' icon={faPhone} />
                                            </div>
                                        </button>
                                        <Dialog
                                            open={openNv}
                                            TransitionComponent={Transition}
                                            keepMounted
                                            onClose={handleCloseNv}
                                            aria-describedby="alert-dialog-slide-description"
                                        >
                                            <div className='bg-slate-800 p-3 text-slate-300 flex flex-col   justify-center'>
                                                <CopyToClipboard text="vadhernknj19@gmail.com" />
                                                <CopyToClipboard text="+91 99784 46077" />
                                            </div>
                                        </Dialog>
                                    </React.Fragment>
                                    <a href="https://www.linkedin.com/in/vadher-nikunj-876b34177/" target='blank'><FontAwesomeIcon className='FontAwesomeIcon123 me-2 hover:text-blue-500 text-slate-200' icon={faLinkedin} /></a>
                                </div>


                            </div>
                        </div>
                    </div>
                    <div className="e-card playing">
                        <div className="image"></div>
                        <div className="wave"></div>
                        <div className="wave"></div>
                        <div className="wave"></div>
                        <div className="infotop  ">
                            <div className='infotop-img'>
                                <img src={bd} alt="" />
                            </div>
                            <div className="text-content">
                                <p>Bhoomi Dangar</p>
                                <p className="name">Assistant Professor</p>
                            </div>
                            <p className='detils-p  '>Updating...</p>
                            <div className='end-section456 px-1 items-center bg-slate-800 flex flex-row justify-between'>
                                <div>
                                    <a href="https://www.fiverr.com/adipnur" target='blank'> <img className='w-8 hover:scale-125 duration-300' src={rku} alt="" /></a>
                                </div>


                                <div>


                                    <React.Fragment>
                                        <button className='' variant="outlined" onClick={handleClickOpenBd}>
                                            <div >
                                                <FontAwesomeIcon className='FontAwesomeIcon123 me-2 text-slate-200 hover:text-blue-500 duration-200' icon={faEnvelope} />
                                            </div>
                                        </button>
                                        <Dialog
                                            open={openBd}
                                            TransitionComponent={Transition}
                                            keepMounted
                                            onClose={handleCloseBd}
                                            aria-describedby="alert-dialog-slide-description"
                                        >
                                            <div className='bg-slate-800 p-3 text-slate-300 flex flex-col   justify-center'>
                                                <CopyToClipboard text="bhoomiahir321@gmail.com" />
                                                <CopyToClipboard text="+91 82002 45406" />
                                            </div>
                                        </Dialog>
                                    </React.Fragment>
                                    <React.Fragment>
                                        <button className='' variant="outlined" onClick={handleClickOpenBd}>
                                            <div >
                                                <FontAwesomeIcon className='FontAwesomeIcon123 me-2 text-slate-200 hover:text-blue-500 duration-200' icon={faPhone} />
                                            </div>
                                        </button>
                                        <Dialog
                                            open={openBd}
                                            TransitionComponent={Transition}
                                            keepMounted
                                            onClose={handleCloseBd}
                                            aria-describedby="alert-dialog-slide-description"
                                        >
                                            <div className='bg-slate-800 p-3 text-slate-300 flex flex-col   justify-center'>
                                                <CopyToClipboard text="bhoomiahir321@gmail.com" />
                                                <CopyToClipboard text="+91 82002 45406" />
                                            </div>
                                        </Dialog>
                                    </React.Fragment>
                                    <a href="https://www.linkedin.com/in/bhoomi-dangar-32b625147/" target='blank'><FontAwesomeIcon className='FontAwesomeIcon123 me-2 hover:text-blue-500 text-slate-200' icon={faLinkedin} /></a>
                                </div>


                            </div>
                        </div>
                    </div>



                </div>

                <button
                    className='absolute top-1/2 left-2 transform -translate-y-1/2 bg-gray-200 text-black p-2 rounded-full'
                    onClick={() => scroll(-500)}
                >
                    {'<'}
                </button>
                <button
                    className='absolute top-1/2 right-2 transform -translate-y-1/2 bg-gray-200 text-black p-2 rounded-full'
                    onClick={() => scroll(500)}
                >
                    {'>'}
                </button>
            </div>
        </div>
    );
};

export default Testimonials;
