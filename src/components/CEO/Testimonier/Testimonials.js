import React, { useRef, useState } from 'react';
import '../../../index.css';
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
import { faCopy, faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
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
                }, 1000);
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
    const testimonialsData = [
        {
            name: "Md Nur Islam",
            position: "Graphic Designer",
            details: "For done my project, 100% I am fully satisfied for his creativity with experience. So, I think it's my ethical responsibility to recommend ! Highly recommended anyone to create your extremely surprising website!",
            image: nurvai,
            links: {
                link: "https://www.fiverr.com/adipnur",
                img: fiverr,
                linkedin: "https://www.linkedin.com/in/nur-alam-890863159/",
                email: "nuralam.ne@gmail.com",
                phone: "+880 1744-883106"
            }
        },
        {
            name: "Shivangi Patel",
            position: "Assistant Professor",
            details: "Updating...",
            image: sp,
            links: {
                img: rku,
                link: "https://soe.rku.ac.in/btech-computer-engineering-faculty.php",
                linkedin: "https://www.linkedin.com/in/shivangi-patel-65823b123/",
                email: "shivangi.patel@rku.ac.in",
                phone: "+91 90333 36835"
            }
        },
        {
            name: "Shalini Jha",
            position: "Assistant Professor",
            details: "Updating...",
            image: sl,
            links: {
                img: rku,
                link: "https://soe.rku.ac.in/btech-computer-engineering-faculty.php",
                linkedin: "https://www.linkedin.com/in/shalini-jha-771338165/",
                email: "jhashalu1@gmail.com",
                phone: "+91 87807 61370"
            }
        },
        {
            name: "Vadher Nikunj",
            position: "Assistant Professor",
            details: "Updating...",
            image: nv,
            links: {
                img: rku,
                link: "https://soe.rku.ac.in/btech-computer-engineering-faculty.php",
                linkedin: "https://www.linkedin.com/in/vadher-nikunj-876b34177/",
                email: "vadhernknj19@gmail.com",
                phone: "+91 99784 46077"
            }
        },
        {

            name: "Bhoomi Dangar",
            position: "Assistant Professor",
            details: "Updating...",
            image: bd,
            links: {
                img: rku,
                fiverr: "https://soe.rku.ac.in/btech-computer-engineering-faculty.php",
                linkedin: "https://www.linkedin.com/in/bhoomi-dangar-32b625147/",
                email: "bhoomiahir321@gmail.com",
                phone: "+91 82002 45406"
            }
        }
    ];

    const [dialogData, setDialogData] = useState({ open: false, email: "", phone: "" });

    const handleClickOpen = (email, phone) => {
        setDialogData({ open: true, email, phone });
    };

    const handleClose = () => {
        setDialogData({ open: false, email: "", phone: "" });
    };

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
                <span className='text-blue-500 font-[Montserrat] text-[17px]'>What People Say</span>
                <div className='flex justify-between'>
                    <p className='font-sans text-2xl md:text-3xl text-white font-extrabold'> Testimonials</p>
                </div>
                <hr className='text-white h-3 pt-0 mt-0' />
            </div>

            <div className='px-5 mb-10 relative'>
                <div className='grid grid-flow-col auto-cols-max gap-3 mt-4 xs:overflow-x-auto md:overflow-hidden' ref={interviewRef}>
                    {testimonialsData.map((testimonial, index) => (
                        <div key={index} className="e-card playing">
                            <div className="image"></div>
                            <div className="wave"></div>
                            <div className="wave"></div>
                            <div className="wave"></div>
                            <div className="infotop">
                                <div className='infotop-img'>
                                    <img src={testimonial.image} alt={testimonial.name} />
                                </div>
                                <div className="text-content">
                                    <p>{testimonial.name}</p>
                                    <p className="name">{testimonial.position}</p>
                                </div>
                                <p className='detils-p'>{testimonial.details}</p>
                                <div className='end-section456 px-1 items-center bg-slate-800 flex flex-row justify-between'>
                                    <div>
                                        <a href={testimonial.links.link} target='blank'>
                                            <img className='w-8 hover:scale-125 duration-300' src={testimonial.links.img} alt="Fiverr" />
                                        </a>
                                    </div>
                                    <div>
                                        <React.Fragment>
                                            <button variant="outlined" onClick={() => handleClickOpen(testimonial.links.email, testimonial.links.phone)}>
                                                <FontAwesomeIcon className='FontAwesomeIcon123 me-2 text-slate-200 hover:text-blue-500 duration-200' icon={faEnvelope} />
                                            </button>
                                            <Dialog
                                                open={dialogData.open}
                                                TransitionComponent={Transition}
                                                keepMounted
                                                onClose={handleClose}
                                                aria-describedby="alert-dialog-slide-description"
                                                BackdropProps={{
                                                    style: {
                                                        backgroundColor: 'rgba(0, 0, 0, 0.1)' // Adjust the opacity as needed
                                                    }
                                                }}
                                            >
                                                <div className='bg-slate-800 p-3 text-slate-300 flex flex-col justify-center'>
                                                    <CopyToClipboard text={dialogData.email} />
                                                    <CopyToClipboard text={dialogData.phone} />
                                                </div>
                                            </Dialog>
                                        </React.Fragment>
                                        <React.Fragment>
                                            <button variant="outlined" onClick={() => handleClickOpen(testimonial.links.email, testimonial.links.phone)}>
                                                <FontAwesomeIcon className='FontAwesomeIcon123 me-2 text-slate-200 hover:text-blue-500 duration-200' icon={faPhone} />
                                            </button>
                                            <Dialog
                                                open={dialogData.open}
                                                TransitionComponent={Transition}
                                                keepMounted
                                                onClose={handleClose}
                                                aria-describedby="alert-dialog-slide-description"
                                                BackdropProps={{
                                                    style: {
                                                        backgroundColor: 'rgba(0, 0, 0, 0.1)' // Adjust the opacity as needed
                                                    }
                                                }}
                                            >
                                                <div className='bg-slate-800 p-3 text-slate-300 flex flex-col justify-center'>
                                                    <CopyToClipboard text={dialogData.email} />
                                                    <CopyToClipboard text={dialogData.phone} />
                                                </div>
                                            </Dialog>
                                        </React.Fragment>
                                        <a href={testimonial.links.linkedin} target='blank'>
                                            <FontAwesomeIcon className='FontAwesomeIcon123 text-slate-200 hover:text-blue-500 duration-200' icon={faLinkedin} />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <button className='leftArrow1 bg-slate-400 px-1 py-2 rounded-lg hover:bg-slate-700 duration-300' onClick={() => scroll(-interviewRef.current.clientWidth)}>
                    &lt;
                </button>
                <button className='rightArrow1 bg-slate-400 px-1 py-2 rounded-lg hover:bg-slate-700 duration-300' onClick={() => scroll(interviewRef.current.clientWidth)}>
                    &gt;
                </button>
            </div>
        </div>
    );
};

export default Testimonials;
