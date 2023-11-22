import React from 'react';
import './Skills.css'
import github from './img/github.png';
import react from './img/react.png';
import javascript from './img/javascript.png';
import java from './img/java.png';
import nodejs from './img/nodejs.png';
import sql from './img/sql.png';
import Skillsbar from './Skillsbar/Skillsbar';
// import Popup from 'reactjs-popup';
// import ContactForm from '../Contact/ContactForm';
import { Link } from 'react-router-dom';

const Skills = () => {
    return (
        <div className='container skills-main-head-div'>
            <div className='skills-div'>



            </div>


            <div className='skills'>
                <div className='skills-headline'>
                    <h1>Technologies/Tools/Skills</h1>
                    <p>I work with cutting-edge technologies designed to solve your product requirements. Focus on finding solutions for your business needs while we handle the technical aspect.</p>
                    <Link to="/contactpage"><button className='skills-button'>Ask Your Query</button></Link>
                    

                </div>
                <div className='skills-img'>
                    <div className='w=5   js'> <img src={javascript} alt="" /></div>
                    <div className='w=5  react'>  <img className='mb-4' src={nodejs} alt="" /><img src={react} alt="" /></div>
                    <div className='w=5 bg-pink react'> <img className='mb-4' src={sql} alt="" /><img className='mb-4' src={github} alt="" /><img src={java} alt="" /></div>
                </div>
            </div>

            {/* barchart for skills */}

            <Skillsbar></Skillsbar>


        </div>
    );
};

export default Skills;