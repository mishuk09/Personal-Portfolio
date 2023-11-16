import React from 'react';
import './Skills.css'
import wave from './img/wave.svg'

const Skills = () => {
    return (
        <div>
            <div className='skills-div'>
                <div className=' container'><h1 className='pt-3'>Technologies/Tools/Skills</h1>
                    <p  >I work with cutting-edge technologies designed to solve your product requirements. Focus on finding solutions for your
                        business needs while we handle the technical aspect.</p></div>
            </div>
            <div className='skillswave'>

                <img src={wave} alt="" />
                <div className='prolanguage  '></div>
            </div>
        </div>
    );
};

export default Skills;