import React from 'react';
import '../../../index.css'
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
                    <div className='w-[60%]   skills-marque   rounded   p-2'>
                        <Marquee
                            speed={40}
                            gradient={false}
                            pauseOnHover={false}
                            direction='left'
                            className='marquee-div font-nunito'
                            pauseOnClick={false}
                        >
                            Tech Enthusiast B.Tech in Computer Engineering, Mastering JS, React, Node.js, and Java Since 2021...
                        </Marquee>
                    </div>
                    <div className='  followglinkedin   '><a href="https://www.linkedin.com/in/mishuk09/" target='blank'><img className=' ' src={linkedin} alt="" /></a> </div>
                </div>
                <div className='skills-child-main mt-2 px-3 pt-2'>
                    <p >Last Update:: <span className='lastupdate  '>1 Decembar 2023</span></p>
                    <div className='skills-headline-child'>
                        <Zoom>
                            {
                                itemsskill.map((item) => (
                                    <div key={item.id} className='      '>
                                        <p className='dsahead'>{item.title}</p>
                                        <p className='dsahead1 font-nunito'> {item.description}</p>
                                        <p className='dsahead'>{item.no}</p>
                                    </div>
                                ))
                            }

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
            <img className='asasas xs:mx-2 sm:mx-10 mx-10' src={benext} alt="" />
            <div className='benest ' data-aos='fade-up'>
                <div className='benext-child'>
                </div>
                <div className='benext-child2 font-nunito p-4'>
                    <Fade top>
                        <h1>Be my next success story?</h1>
                    </Fade>
                    <Fade right>
                        <p  >Have an idea? Talk to me today! Share your requirements and let's
                            team up for a successful project with simplicity."</p> </Fade  >

                    <Fade bottom> <div className='w-25 benext-child2-button '>
                        <Link to="/contactpage"> <Button>Write Your Query</Button></Link>
                    </div>
                    </Fade>
                </div>
            </div>
        </div>
    );
};

export default Skillsbar;

const itemsskill = [
    {
        id: 1,
        title: 'DSA',
        description: 'Number of Problems Solved',
        no: '50'
    },
    {
        id: 2,
        title: 'Github',
        description: 'Total Repositories',
        no: '70'
    },
    {
        id: 3,
        title: 'Github',
        description: 'Total Contributions',
        no: '869'
    },
    {
        id: 4,
        title: 'Github',
        description: 'Total Commits',
        no: '670'
    }
];
