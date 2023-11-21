import React from 'react';
import './Shortintro.css'
import sort from '../Home/img/sort.png'
import tick from '../Home/img/tick.png';
import college from '../Home/img/college.svg';
import expert from '../Home/img/expert.svg';
import programming from '../Home/img/programming.svg';
import projects from '../Home/img/projects.svg';
import linkedinfollow from '../Home/img/linkedinfollow.png'
import { Animation } from 'react-ui-ox-anim';

const Shortintro = () => {
    return (
        <div>
            <div className='wave1'>
                
                <div className='sort-intro  '>
                    <div className='sort-intro-headline p-2 '>
                        <div className='sort-intro-img ps-1'><img src={sort} alt="" /></div>
                        <div className='sort-intro-head ps-5'>
                            <div><img className=' ' src={tick} alt="" /> </div>
                            <div><img className=' ' src={tick} alt="" /></div>

                        </div>
                        <div className='linkedin-follow   '><img src={linkedinfollow} alt="img" /></div>
                    </div>
                    <div className='sort-intro-child mt-2'>

                        {/* <Animation animations={'swirve'}>Animate me</Animation></div> */}
                        <div className=' sort-intro-child-div m-3  bg-white'><img src={college} alt="" />
                            <p className='mt-3 institution'>Institution</p>
                            <p className='mt-3 institution11'>Rk University</p>
                            <p className='mt-3 institution33'>B Tech Computer Engineering</p>
                            <p className='mt-3 institution44'>(2021-2025)</p>
                        </div>
                        <div className=' sort-intro-child-div m-3 bg-white'><img src={programming} alt="" />
                            <p className='mt-3 institution'>Programming</p>
                            <p className='mt-3 institution11'>JS,React,Node Js,Java.</p>
                            <p className='mt-3 institution33'>Web-Development & DSA</p>
                            <p className='mt-3 institution44'>Since 2022</p>
                        </div>
                        <div className=' sort-intro-child-div m-3 bg-white'><img src={expert} alt="" />
                            <p className='mt-3 institution'>Expert</p>
                            <p className='mt-3 institution11'>Web-Development</p>
                            <p className='mt-3 institution33'>UI/UX & Front-End</p>
                            <p className='mt-3 institution44'>Sicnce 2022</p>
                        </div>
                        <div className=' sort-intro-child-div m-3 bg-white'><img src={projects} alt="" />
                            <p className='mt-3 institution'>Projects</p>
                            <p className='mt-3 institution11'>Learning Website</p>
                            <p className='mt-3 institution33'>Like GeekforGeek</p>
                            <p className='mt-3 institution44'><a href="www.csehacks.com" target='_blank'><Animation animations={'swirve'}>CSEHAcks</Animation></a></p>
                        </div>



                    </div>
                </div>
            </div>
        </div>
    );
};

export default Shortintro;