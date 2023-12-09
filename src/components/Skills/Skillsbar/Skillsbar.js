import React from 'react';
import './Skillsbar.css'
import linkedin from '../img/linkedin.gif';
import Skills from '../img/skills.png';
import Chart from '../AcumulationChart/Chart';
import Barchart from '../Barchart/Barchart';
import Toolchart from '../ToolsChart/Toolchart';
import benext from './img/benext.png';
import { Link } from 'react-router-dom';
import Button from '../../OthersComponent/Button/Button';
import Aos from 'aos';
import { useEffect } from 'react';
import { Zoom } from 'react-reveal';
import { Fade } from 'react-reveal';
import Marquee from 'react-fast-marquee';

const Skillsbar = () => {
    useEffect(() => {
        Aos.init({ duration: 2000 })
    }, []);

    return (
        <div className='skillsbar'>
            <div className='skillsbar-div-head mt-2  '>
                <div className='skills-bar-head p-2 '>
                    <div className='skills-introimg ps-1 '><img src={Skills} alt="" /></div>
                    <div className='w-[60%]  gfhdg rounded bg-blue-400 p-2'>
                        <Marquee
                            speed={40}
                            gradient={false}
                            pauseOnHover={false}
                            direction='left'
                            className='marquee-div'
                            pauseOnClick={false}
                        >
                            Tech Enthusiast B.Tech in Computer Engineering, Mastering JS, React, Node.js, and Java Since 2021...
                        </Marquee>
                    </div>
                    <div className='  followglinkedin   '><img className=' ' src={linkedin} alt="" /> </div>
                </div>
                <div className='skills-child-main mt-2 px-3 pt-2'>
                    <p >Last Update:: <span className='lastupdate  '>1 Decembar 2023</span></p>
                    <div className='skills-headline-child'>
                        <Zoom  >
                            <div>
                                <p className='dsahead'>DSA</p>
                                <p className='dsahead1' >Number of Problem solve</p>
                                <p className='dsahead'>50</p>
                            </div>
                        </Zoom>
                        <Zoom>
                            <div>
                                <p className='dsahead'>Github</p>
                                <p className='dsahead1'>Total Repositories</p>
                                <p className='dsahead'>50</p>
                            </div>
                        </Zoom>
                        <Zoom>
                            <div>
                                <p className='dsahead'>Github</p>
                                <p className='dsahead1'>Total Contributions</p>
                                <p className='dsahead'>869</p>
                            </div>
                        </Zoom>
                        <Zoom>
                            <div> <p className='dsahead'>Github</p>
                                <p className='dsahead1'>Total Commits</p>
                                <p className='dsahead'>694</p>
                            </div>
                        </Zoom>
                    </div>
                    <div className='bar-chart mt-3 '>
                        <div className='pro-barchart'>
                            <Chart></Chart>
                        </div>
                        <div className='language-barchart ps-2'>
                            <div className='bar-chart-child'>
                                <Barchart></Barchart>
                            </div>
                            <div className='bar-chart-child'>
                                <Toolchart></Toolchart>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <img className='asasas mx-10' src={benext} alt="" />
            <div className='benest ' data-aos='fade-up'>
                <div className='benext-child'>
                </div>
                <div className='benext-child2 p-4'>
                    <Fade top>
                        <h1>Be my next success story?</h1>
                    </Fade>
                    <Fade right>
                        <p  >Have an idea? Talk to me today! Share your requirements and let's
                            team up for a successful project with simplicity."</p> </Fade  >

                    <Fade bottom> <div className='w-25 benext-child2-button '>
                        <Link to="/contactpage"> <Button>Have a Free Consultation</Button></Link>
                    </div>
                    </Fade>
                </div>
            </div>
        </div>
    );
};

export default Skillsbar;