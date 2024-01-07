import React, { useRef } from 'react';
import './Projects.css';
import work from './img/work.png';
import ProjectVideo from './ProjectVideo';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpRightFromSquare, faFileImage } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';
import Dialog from '@mui/material/Dialog';
import Slide from '@mui/material/Slide';
import '@splidejs/splide/dist/css/themes/splide-default.min.css'; // Import Splide styles
import ImageGallery from './ImageGallery';



const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});
const Projects = () => {
    const [open, setOpen] = React.useState(false);
    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
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
        <div >
            <div id='project' className='projects-head   mt-10'>
                <div className='projects-head12'>
                    <div className='img-head pt-3'><img src={work} alt="" /><h4>Projects</h4>
                    </div>
                    <p className='pt-3 px-2 text-slate-400 xs:text-sm sm:text-[16px]  asdsa'>I Have Completed Many Projects Among Theme These Three Projects are More Dynamic</p>

                </div>

                <div className='container grid grid-cols-3 xs:overflow-x-auto xs:gri gap-3'>
                    <div className='w-full h-full'>
                        <div className='project-child overflow-hidden'>
                            <div className='project-child-head ps-3 pt-2'>
                                <span>Plexus </span> <span>A Degital Marketing Website</span>
                            </div>
                            <ProjectVideo></ProjectVideo>
                        </div>
                        <div className='flex gap-2    text-center items-center justify-center mt-4'>
                            <a className='no-underline' href="https://plexus.org.in/" target='blank'>
                                <button className='h-auto py-2 px-3 w-auto text-xs  hover:bg-blue-600 bg-blue-500 text-white rounded text-center flex items-center justify-center'>Live <FontAwesomeIcon className='ms-2' icon={faArrowUpRightFromSquare} /></button>
                            </a>
                            <React.Fragment>
                                <button className='h-auto py-2 px-3 w-auto text-xs  bg-blue-500 text-white rounded text-center flex items-center justify-center' variant="outlined" onClick={handleClickOpen}>
                                    <div >
                                        Screenshot <FontAwesomeIcon className='ms-2' icon={faFileImage} />
                                    </div>
                                </button>
                                <Dialog
                                    open={open}
                                    TransitionComponent={Transition}
                                    keepMounted
                                    onClose={handleClose}
                                    aria-describedby="alert-dialog-slide-description"
                                >
                                    <ImageGallery />
                                </Dialog>
                            </React.Fragment>
                            <a className='no-underline' href='https://github.com/mishuk09/Digital_marketing/blob/main/README.md' target='blank' > <button className='h-auto py-2 px-3 w-auto text-xs hover:bg-blue-600 bg-blue-500 text-white rounded text-center flex items-center justify-center'>Github <FontAwesomeIcon className='ms-2' icon={faGithub} /></button></a>
                        </div>
                    </div>
                    <div className='w-full h-full'>
                        <div className='project-child overflow-hidden'>
                            <div className='project-child-head ps-3 pt-2'>
                                <span>Plexus </span> <span>A Degital Marketing Website</span>
                            </div>
                            <ProjectVideo></ProjectVideo>
                        </div>
                        <div className='flex gap-2    text-center items-center justify-center mt-4'>
                            <a className='no-underline' href="https://plexus.org.in/" target='blank'>
                                <button className='h-auto py-2 px-3 w-auto text-xs  hover:bg-blue-600 bg-blue-500 text-white rounded text-center flex items-center justify-center'>Live <FontAwesomeIcon className='ms-2' icon={faArrowUpRightFromSquare} /></button>
                            </a>
                            <React.Fragment>
                                <button className='h-auto py-2 px-3 w-auto text-xs  bg-blue-500 text-white rounded text-center flex items-center justify-center' variant="outlined" onClick={handleClickOpen}>
                                    <div >
                                        Screenshot <FontAwesomeIcon className='ms-2' icon={faFileImage} />
                                    </div>
                                </button>
                                <Dialog
                                    open={open}
                                    TransitionComponent={Transition}
                                    keepMounted
                                    onClose={handleClose}
                                    aria-describedby="alert-dialog-slide-description"
                                >
                                    <ImageGallery />
                                </Dialog>
                            </React.Fragment>
                            <a className='no-underline' href='https://github.com/mishuk09/Digital_marketing/blob/main/README.md' target='blank' > <button className='h-auto py-2 px-3 w-auto text-xs hover:bg-blue-600 bg-blue-500 text-white rounded text-center flex items-center justify-center'>Github <FontAwesomeIcon className='ms-2' icon={faGithub} /></button></a>
                        </div>
                    </div>
                    <div className='w-full h-full'>
                        <div className='project-child overflow-hidden'>
                            <div className='project-child-head ps-3 pt-2'>
                                <span>Plexus </span> <span>A Degital Marketing Website</span>
                            </div>
                            <ProjectVideo></ProjectVideo>
                        </div>
                        <div className='flex gap-2    text-center items-center justify-center mt-4'>
                            <a className='no-underline' href="https://plexus.org.in/" target='blank'>
                                <button className='h-auto py-2 px-3 w-auto text-xs  hover:bg-blue-600 bg-blue-500 text-white rounded text-center flex items-center justify-center'>Live <FontAwesomeIcon className='ms-2' icon={faArrowUpRightFromSquare} /></button>
                            </a>
                            <React.Fragment>
                                <button className='h-auto py-2 px-3 w-auto text-xs  bg-blue-500 text-white rounded text-center flex items-center justify-center' variant="outlined" onClick={handleClickOpen}>
                                    <div >
                                        Screenshot <FontAwesomeIcon className='ms-2' icon={faFileImage} />
                                    </div>
                                </button>
                                <Dialog
                                    open={open}
                                    TransitionComponent={Transition}
                                    keepMounted
                                    onClose={handleClose}
                                    aria-describedby="alert-dialog-slide-description"
                                >
                                    <ImageGallery />
                                </Dialog>
                            </React.Fragment>
                            <a className='no-underline' href='https://github.com/mishuk09/Digital_marketing/blob/main/README.md' target='blank' > <button className='h-auto py-2 px-3 w-auto text-xs hover:bg-blue-600 bg-blue-500 text-white rounded text-center flex items-center justify-center'>Github <FontAwesomeIcon className='ms-2' icon={faGithub} /></button></a>
                        </div>
                    </div>




                </div>






            </div>
        </div>



    );
};

export default Projects;