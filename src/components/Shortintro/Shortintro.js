import React from 'react';
import './Shortintro.css'
import '../Responsive.css';
import sort from '../Home/img/sort.png'
import tick from '../Home/img/tick.png';
import college from '../Home/img/college.svg';
import expert from '../Home/img/expert.svg';
import programming from '../Home/img/programming.svg';
import projects from '../Home/img/projects.svg';
import linkedinfollow from '../Home/img/linkedinfollow.gif'
import { Animation } from 'react-ui-ox-anim';
import Marquee from 'react-fast-marquee';
import { Zoom } from 'react-reveal';

const Shortintro = () => {
    return (
        <div>
            <div className='wave1  '>

                <div className='sort-intro  '>
                    <div className='sort-intro-headline p-1 '>
                        <div className='sort-intro-img ps-1'><img src={sort} alt="" className='jhdsahdf' /></div>
                        <div className='w-[50%] h-10 marquee-div rounded bg-blue-400 p-2'>
                            <Marquee
                                speed={40}
                                gradient={false}
                                pauseOnHover={false}
                                direction='left'
                                className='marquee-div1'
                                pauseOnClick={false}

                            >
                                Tech Enthusiast B.Tech in Computer Engineering, Mastering JS, React, Node.js, and Java Since 2021...
                            </Marquee>
                        </div>
                        <div className='linkedin-follow h-10    '><img className='pt-[3px]' src={linkedinfollow} alt="img" /></div>
                    </div>
                    <div className='sort-intro-child mt-2'>
                        <Zoom>
                            {
                                shortInreo.map((shortintro) => {
                                    return <div className=' flex sort-intro-child-div ms-3 mt-3 mb-3   bg-white' key={shortInreo.id}>
                                        <div className='sort-intro-div-img23'>
                                            <img src={shortintro.img} alt="" />
                                        </div>

                                        <div className='sort-intro-div-descrip234  '>
                                            <p className='mt-4 institution'>{shortintro.tittle}</p>
                                            <p className='mt-1 institution11'>  {shortintro.name}</p>
                                            <p className='mt-3 institution33'>  {shortintro.descrip}</p>
                                            <p className='mt-3 institution44'>  {shortintro.date}</p>
                                        </div>
                                    </div>

                                })
                            }

                        </Zoom>



                    </div>
                </div>
            </div>
        </div>
    );
};

export default Shortintro;


const shortInreo = [
    {
        id: 1,
        tittle: 'Institution',
        name: 'Rk University',
        descrip: 'B Tech Computer Engineering',
        date: '(2021-2025)',
        img: college

    },

    {
        id: 1,
        tittle: 'Programming',
        name: 'JS,React,Node Js,Java.',
        descrip: 'Web-Development & DSA',
        date: 'Since 2022',
        img: expert

    },

    {
        id: 1,
        tittle: 'Expert',
        name: 'Web-Development',
        descrip: 'UI/UX & Front-End',
        date: 'Sicnce 2022',
        img: programming

    },

    {
        id: 1,
        tittle: 'Projects',
        name: 'Learning Website',
        descrip: 'Like GeekforGeek',
        date: <a href="www.csehacks.com" target='_blank'><Animation animations={'swirve'}>CSEHAcks</Animation></a>,
        img: projects
    }



]