import React from 'react';
import '../../index.css'
import '../Responsive.css';
import sort from '../Home/img/sort.png'
import college from '../Home/img/college.svg';
import expert from '../Home/img/expert.svg';
import programming from '../Home/img/programming.svg';
import projects from '../Home/img/projects.svg';
import linkedinfollow from '../Home/img/linkedinfollow.gif'
import Marquee from 'react-fast-marquee';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';

const Shortintro = () => {
    return (
        <div>
            <div className='wave1  '>
                <div className='sort-intro'>
                    <div className='sort-intro-headline p-1 '>
                        <div className='sort-intro-img ps-1'><img src={sort} alt="" className='jhdsahdf' /></div>
                        <div className='w-[50%] h-10 marquee-div rounded   p-2'>
                            <Marquee
                                speed={40}
                                gradient={false}
                                pauseOnHover={false}
                                direction='left'
                                className='marquee-div1 font-nunito'
                                pauseOnClick={false}
                            >
                                Tech Enthusiast B.Tech in Computer Engineering, Mastering JS, React, Node.js, and Java Since 2021...
                            </Marquee>
                        </div>
                        <div className='linkedin-follow h-10 '><a href="https://www.linkedin.com/in/mishuk09/" target='blank'><img className='pt-[3px]' src={linkedinfollow} alt="img" /></a></div>
                    </div>
                    <div className='sort-intro-child mt-2'>

                        {shortInreo.map((shortintro) => {
                            return (
                                <div
                                    key={shortintro.id}
                                    className='flex sort-intro-child-div ms-3 mt-3 mb-3   duration-300    hover:-translate-y-1  bg-white'  >
                                    <div className='sort-intro-div-img23'>
                                        <img src={shortintro.img} className='w-full  flex items-center justify-center object-cover' alt="" />
                                    </div>
                                    <div className='sort-intro-div-descrip234'>
                                        <p className='mt-4 institution font-nunito'>{shortintro.tittle}</p>
                                        <p className='mt-1 institution11'>{shortintro.name}</p>
                                        <p className='mt-3 institution33 font-nunito'>{shortintro.descrip}</p>
                                        <p className='mt-3 institution44 font-nunito'>{shortintro.date}</p>
                                    </div>
                                </div>
                            );
                        })}

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
        name: 'Multimedia University',
        descrip: 'Master of Engineering Science',
        date: '(2025-2027)',
        // img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/Flag_of_Malaysia.svg/1280px-Flag_of_Malaysia.svg.png'
        // img: 'https://media.istockphoto.com/id/2129832111/vector/malaysia-flag-button-on-png-or-transparent-background-vector-illustration.jpg?s=612x612&w=0&k=20&c=6N3TyDVos4LsWMv6rUaD8z5RG7rDudByBlXnfSLcyXc='
        img: 'https://static.vecteezy.com/system/resources/previews/011/571/450/non_2x/circle-flag-of-malaysia-free-png.png'
    },

    {
        id: 2,
        tittle: 'Institution',
        name: 'Rk University',
        descrip: 'B Tech Computer Engineering',
        date: '(2021-2025)',
        img: 'https://img.freepik.com/premium-vector/india-circle-flag_1143296-595.jpg?semt=ais_hybrid&w=740&q=80'

    },

    {
        id: 3,
        tittle: 'Expert',
        name: 'Web-Development',
        descrip: 'UI/UX & Front-End',
        date: 'Sicnce 2022',
        img: programming

    },
    {
        id: 4,
        tittle: 'Projects',
        name: 'Learning Website',
        descrip: 'Like GeekforGeek',
        date: <a className='nounderline' href="https://blanchedalmond-wombat-378902.hostingersite.com/" target='_blank'>CSEHacks<FontAwesomeIcon className='ms-2' icon={faArrowUpRightFromSquare} beat /> </a>,
        img: projects
    }



]