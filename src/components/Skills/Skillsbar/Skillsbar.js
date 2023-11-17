import React from 'react';
import './Skillsbar.css'
import tick from '../../Home/img/tick.png';
import linkedin from '../img/linkedin.png';
import Skills from '../img/skills.png';

const Skillsbar = () => {
    return (
        <div className='skillsbar'>
            <div className='skillsbar-div-head mt-2  '>
                <div className='skills-bar-head p-2 '>
                    <div className='skills-introimg ps-1 '><img src={Skills} alt="" /></div>
                    <div className='skills-bar-head11 ps-5'>
                        <div><img className=' ' src={tick} alt="" /> </div>
                        <div><img className=' ' src={tick} alt="" /></div>

                    </div>
                    <div className='  followglinkedin   '><img className=' ' src={linkedin} alt="" /> </div>
                </div>
                <div className='skills-child-main mt-2'>
                    <p>Last Update:: <span className='lastupdate'>1 Decembar 2023</span></p>



                </div>
            </div>
        </div>
    );
};

export default Skillsbar;