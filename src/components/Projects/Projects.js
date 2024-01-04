import React from 'react';
import './Projects.css';
import work from './img/work.png';
import google from './img/google.png';
import browser from './img/browser.png';
import W3C from './img/W3C.png';
import bigimage from './img/bigimage.png';
import ProjectVideo from './ProjectVideo';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpRightFromSquare, faFileImage } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';




const Projects = () => {
    return (
        <div >
            <div id='project' className='projects-head mt-10'>
                <div className='projects-head12'>
                    <div className='img-head pt-3'><img src={work} alt="" /><h4>Projects</h4>
                    </div>
                    <p className='pt-3 asdsa'>I Have Completed Many Projects Among Theme These Two Projects are More Dynamic</p>
                    <button>CSEHacks</button>
                </div>

                <div className='flex items-start text-center justify-center gap-3 '>
                    <div>
                        <div className='project-child overflow-hidden'>
                            <div className='project-child-head ps-3 pt-2'>
                                <span>Plexus </span> <span>A Degital Marketing Website</span>
                            </div>

                            <ProjectVideo></ProjectVideo>

                        </div>
                        <div className='flex gap-2 text-center items-center justify-center mt-4'>
                            <a className='no-underline' href='https://plexus.org.in/' target='blank' > <div className='h-auto py-2 px-3 w-auto text-xs  hover:bg-blue-600 bg-blue-500 text-white rounded-full text-center flex items-center justify-center'>Live Preview <FontAwesomeIcon className='ms-2' icon={faArrowUpRightFromSquare} /></div></a>
                            <Link className='no-underline' to='#' > <div className='h-auto py-2 px-3 w-auto text-xs hover:bg-blue-600 bg-blue-500 text-white rounded-full text-center flex items-center justify-center'>Screenshots <FontAwesomeIcon className='ms-2' icon={faFileImage} /></div></Link>
                            <Link className='no-underline' to='#' > <div className='h-auto py-2 px-3 w-auto text-xs hover:bg-blue-600 bg-blue-500 text-white rounded-full text-center flex items-center justify-center'>Github <FontAwesomeIcon className='ms-2' icon={faGithub} /></div></Link>
                        </div>
                    </div>
                    <div>
                        <div className='project-child overflow-hidden'>
                            <div className='project-child-head ps-3 pt-2'>
                                <span>CSEHacks </span> <span>A Learning Website</span>
                            </div>

                            <ProjectVideo></ProjectVideo>

                        </div>
                        <div className='flex gap-2 text-center items-center justify-center mt-4'>
                            <a className='no-underline' href='https://plexus.org.in/' target='blank' > <div className='h-auto py-2 px-3 w-auto text-xs  hover:bg-blue-600 bg-blue-500 text-white rounded-full text-center flex items-center justify-center'>Live Preview <FontAwesomeIcon className='ms-2' icon={faArrowUpRightFromSquare} /></div></a>
                            <Link className='no-underline' to='#' > <div className='h-auto py-2 px-3 w-auto text-xs  hover:bg-blue-600 bg-blue-500 text-white rounded-full text-center flex items-center justify-center'>Screenshots <FontAwesomeIcon className='ms-2' icon={faFileImage} /></div></Link>
                            <Link className='no-underline' to='#' > <div className='h-auto py-2 px-3 w-auto text-xs hover:bg-blue-600 bg-blue-500 text-white rounded-full text-center flex items-center justify-center'>Github <FontAwesomeIcon className='ms-2' icon={faGithub} /></div></Link>
                        </div>
                    </div>
                    <div>
                        <div className='project-child overflow-hidden'>
                            <div className='project-child-head ps-3 pt-2'>
                                <span>CSEHacks </span> <span>A Learning Website</span>
                            </div>

                            <ProjectVideo></ProjectVideo>

                        </div>
                        <div className='flex gap-2 text-center items-center justify-center mt-4'>
                            <a className='no-underline' href='https://plexus.org.in/' target='blank' > <div className='h-auto py-2 px-3 w-auto text-xs  hover:bg-blue-600 bg-blue-500 text-white rounded-full text-center flex items-center justify-center'>Live Preview <FontAwesomeIcon className='ms-2' icon={faArrowUpRightFromSquare} /></div></a>
                            <Link className='no-underline' to='#' > <div className='h-auto py-2 px-3 w-auto text-xs hover:bg-blue-600 bg-blue-500 text-white rounded-full text-center flex items-center justify-center'>Screenshots <FontAwesomeIcon className='ms-2' icon={faFileImage} /></div></Link>
                            <Link className='no-underline' to='#' > <div className='h-auto py-2 px-3 w-auto text-xs hover:bg-blue-600 bg-blue-500 text-white rounded-full text-center flex items-center justify-center'>Github <FontAwesomeIcon className='ms-2' icon={faGithub} /></div></Link>
                        </div>
                    </div>


                </div>



                <div className='cerifyby'>
                    <p className='cerifvyp'>Verified by <span>Google PageSpeed Insights</span></p>
                    <div className='sdfsafsd '>
                        <div>  <img className='pt-2' src={google} alt="" /></div>
                        <div className='bigimages'> <img src={bigimage} alt="" /></div>
                        <div className='w3c pt-3'>  <img className='w3c' src={W3C} alt="" /></div>
                        <div className='browserstack mx-4 pt-3'>  <img src={browser} alt="" /></div>
                    </div>
                </div>

            </div>


        </div>
    );
};

export default Projects;