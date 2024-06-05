import React from 'react';
import '../../index.css';
import work from './img/work.png';
import '@splidejs/splide/dist/css/themes/splide-default.min.css'; // Import Splide styles
import shoes from './img/shoes.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

const Projects = () => {
    // projectsData.js
    const projectsData = [
        {
            id: 1,
            imgSrc: shoes,
            title: 'Animado - Comprehensive Animation Studio',
            subtitle: 'Educational',
            screenshotLink: 'path/to/screenshot1.png',
            githubLink: 'https://github.com/user/project1',
            liveLink: 'https://project1.live'
        },
        {
            id: 2,
            imgSrc: shoes,
            title: 'Clothify - Online Clothing Store',
            subtitle: 'E-commerce',
            screenshotLink: 'path/to/screenshot2.png',
            githubLink: 'https://github.com/user/project2',
            liveLink: 'https://project2.live'
        },
        {
            id: 3,
            imgSrc: shoes,
            title: 'ShoeMart - E-commerce Shoe Platform',
            subtitle: 'E-commerce',
            screenshotLink: 'path/to/screenshot3.png',
            githubLink: 'https://github.com/user/project3',
            liveLink: 'https://project3.live'
        },
        {
            id: 4,
            imgSrc: shoes,
            title: 'ShoeMart - E-commerce Shoe Platform',
            subtitle: 'E-commerce',
            screenshotLink: 'path/to/screenshot3.png',
            githubLink: 'https://github.com/user/project3',
            liveLink: 'https://project3.live'
        }
    ];

    return (
        <div>
            <div id='project' className='projects-head mt-10'>
                <div className='projects-head12'>
                    <div className='img-head pt-3'>
                        <img src={work} alt="Projects" />
                        <h4>Projects</h4>
                    </div>
                    <p className='pt-3 pb-2 xs:text-sm sm:text-[16px]'>
                        I have completed many projects. Here are three of the most dynamic ones.
                    </p>
                </div>
                <div className='container mt-10 mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4'>
                    {
                        projectsData.map((project) => (
                            <div key={project.id} className='project-card-item border rounded-sm shadow-lg mb-4'>
                                <img src={project.imgSrc} alt={project.title} className='w-full h-48 object-cover rounded-sm' />
                                <div className='bg-white text-black'>
                                    <div className='px-3 py-3 leading-tight'>
                                        <h5 className='text-sm font-semibold truncate' title={project.title}>{project.title}</h5>
                                        <h6 className='text-[10px] font-semibold'>{project.subtitle}</h6>
                                    </div>
                                    <div className='flex  font-semibold justify-around pb-3'>
                                        <a href={project.screenshotLink} target='_blank' rel='noopener noreferrer' className='border text-[12px] px-2 py-1 text-black no-underline  '>
                                            Screenshot
                                        </a>
                                        <a href={project.githubLink} target='_blank' rel='noopener noreferrer' className='border text-[12px] px-2 py-1 text-black no-underline  '>
                                            <FontAwesomeIcon icon={faGithub} />
                                        </a>
                                        <a href={project.liveLink} target='_blank' rel='noopener noreferrer' className='border text-[12px] px-2 py-1 text-black no-underline  '>
                                            Live Preview
                                        </a>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    );
};

export default Projects;
