import React from 'react';
import './Projects.css';
import work from './img/work.png';
import google from './img/google.png';
import browser from './img/browser.png';
import W3C from './img/W3C.png';
import bigimage from './img/bigimage.png';
import ProjectVideo from './ProjectVideo';




const Projects = () => {
    return (
        <div >

            <div className='projects-head mt-10'>
                <div className='projects-head12'>
                    <div className='img-head pt-3'><img src={work} alt="" /><h4>Projects</h4>
                    </div>

                    <p className='pt-3 asdsa'>I Have Completed Many Projects Among Theme These Two Projects are More Dynamic</p>
                    <button>CSEHacks</button>
                </div>

                <div className='project-child'>
                    <div className='project-child-head ps-3 pt-2'>
                        <span>CSEHacks </span> <span>A Learning Website</span>
                    </div>
                    <ProjectVideo></ProjectVideo>


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