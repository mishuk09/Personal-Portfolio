import React from 'react';
import './About.css'
import '../Responsive.css';
import aboutmepic from './img/aboutmepic.png'
import CallAhortAbout from './CallShortAbout/CallAhortAbout';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons'


const About = () => {
    return (
        <div id='about' className='container aboutme-main-pic'>
            <div className='container about-section'>
                {/* <img className='mainimg' src={aboutmepic} alt="" /> */}
                <h1>Mahadi Hasan Mishuk</h1>
                <p className='about-para-about'>Junior Web-Developer</p>
                <p className='about-detilsold'>Aspiring computer engineer with a strong foundation in programming and web development. Seeking opportunities to apply my skills in creating innovative web solutions, leveraging proficiency in HTML, CSS, JavaScript, React, and Node.js. Dedicated to continuous learning.</p>

                <div className='callabout'><CallAhortAbout></CallAhortAbout></div>

                <p className='about-detils'>Aspiring computer engineer with a strong foundation in programming and web development. Seeking opportunities to apply my skills in creating innovative web solutions, leveraging proficiency in HTML, CSS, JavaScript, React, and Node.js. Dedicated to continuous learning.</p>
                <div className='resume'><a href="http://mahadiinfo.me/Portfolio/" target='blank'><button>Resume <FontAwesomeIcon icon={faDownload} /></button></a>  </div>
                <div className='yearexperience'>
                    <div className='years11 pt-3'>
                        <h3> 1+</h3>
                        <p>Years Experience</p></div>
                    <div className='years pt-3'> <h3> 10+</h3>
                        <p>Happy Clients</p></div>
                    <div className='years pt-3'> <h3> 5+</h3>
                        <p>Projects Done</p></div>
                    <div className='years1 pt-3'> <h3> 2</h3>
                        <p>Get Awards</p></div>
                </div>
            </div>

            <img className='mainimg' src={aboutmepic} alt="" />

        </div>
    );
};

export default About;