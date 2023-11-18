import React from 'react';
import './Projects.css';
import work from './img/work.png';
import google from './img/google.png';
import browser from './img/browser.png';
import W3C from './img/W3C.png';
import gtmetrix from './img/gtmetrix.png';



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


                </div>
                <div className='cerifyby'>
                    <p className='cerifvyp'>Verified by <span>Google PageSpeed Insights</span></p>
                    <div className='sdfsafsd '>
                        <img className='w-30' src={google} alt="" /><img src={gtmetrix} alt="" /><img src={W3C} alt="" /><img src={browser} alt="" /></div>
                </div>

            </div>

        </div>
    );
};

export default Projects;