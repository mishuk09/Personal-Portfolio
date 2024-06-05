import React, { useState } from 'react';
import '../../index.css';
import work from './img/work.png';
import '@splidejs/splide/dist/css/themes/splide-default.min.css'; // Import Splide styles
import shoes from './img/shoes.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

const Projects = () => {
    const [selectedProject, setSelectedProject] = useState(null);

    const projectsData = [
        {
            id: 1,
            imgSrc: shoes,
            title: 'Animado - Comprehensive Animation Studio',
            subtitle: 'Educational',
            label: 'New',
            screenshotLink: 'path/to/screenshot1.png',
            githubLink: 'https://github.com/user/project1',
            liveLink: 'https://project1.live',
            screenshots: [
                'path/to/screenshot1_1.png',
                'path/to/screenshot1_2.png',
                'path/to/screenshot1_3.png',
            ]
        },
        {
            id: 2,
            imgSrc: shoes,
            title: 'Clothify - Online Clothing Store',
            subtitle: 'E-commerce',
            label: 'Featured',
            screenshotLink: 'path/to/screenshot2.png',
            githubLink: 'https://github.com/user/project2',
            liveLink: 'https://project2.live',
            screenshots: [
                'path/to/screenshot2_1.png',
                'path/to/screenshot2_2.png',
                'path/to/screenshot2_3.png',
            ]
        },
        {
            id: 3,
            imgSrc: shoes,
            title: 'ShoeMart - E-commerce Shoe Platform',
            subtitle: 'E-commerce',
            label: 'Popular',
            screenshotLink: 'path/to/screenshot3.png',
            githubLink: 'https://github.com/user/project3',
            liveLink: 'https://project3.live',
            screenshots: [
                'path/to/screenshot3_1.png',
                'path/to/screenshot3_2.png',
                'path/to/screenshot3_3.png',
            ]
        },
        {
            id: 3,
            imgSrc: shoes,
            title: 'ShoeMart - E-commerce Shoe Platform',
            subtitle: 'E-commerce',
            label: 'Popular',
            screenshotLink: 'path/to/screenshot3.png',
            githubLink: 'https://github.com/user/project3',
            liveLink: 'https://project3.live',
            screenshots: [
                'path/to/screenshot3_1.png',
                'path/to/screenshot3_2.png',
                'path/to/screenshot3_3.png',
            ]
        },
    ];

    return (
        <div>
            <div id='project' className='projects-head mt-20'>
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
                            <div key={project.id} className='relative project-card-item border rounded shadow-lg overflow-hidden'>
                                <img src={project.imgSrc} alt={project.title} className='w-full h-48 object-cover rounded-sm' />
                                <div className='bg-white text-black'>
                                    <div className='px-3 py-3 leading-tight'>
                                        <h5 className='text-sm font-semibold truncate' title={project.title}>{project.title}</h5>
                                        <h6 className='text-[10px] font-semibold'>{project.subtitle}</h6>
                                    </div>
                                    <div className='flex font-semibold justify-around pb-3'>
                                        <div onClick={() => setSelectedProject(project)} className='border cursor-pointer text-[12px] px-2 py-1 rounded-sm hover:bg-slate-100 duration-75 text-black no-underline'>
                                            Screenshot
                                        </div>
                                        <a href={project.githubLink} target='_blank' rel='noopener noreferrer' className='border text-[12px] px-2 py-1 rounded-sm hover:bg-slate-100 duration-75 text-black no-underline'>
                                            <FontAwesomeIcon icon={faGithub} />
                                        </a>
                                        <a href={project.liveLink} target='_blank' rel='noopener noreferrer' className='border text-[12px] px-2 py-1 rounded-sm hover:bg-slate-100 duration-75 text-black no-underline'>
                                            Live Preview
                                        </a>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>

            {selectedProject && (
                <div className='fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50'>
                    <div className='bg-white rounded-lg overflow-hidden w-full max-w-2xl'>
                        <div className='relative'>
                            <button
                                onClick={() => setSelectedProject(null)}
                                className='absolute top-2 right-2 text-black font-bold text-lg'
                            >
                                &times;
                            </button>
                            <img
                                src={selectedProject.screenshots[0]}
                                alt={selectedProject.title}
                                className='w-full h-64 object-cover'
                            />
                            <div className='flex overflow-x-auto py-2'>
                                {selectedProject.screenshots.map((imgSrc, index) => (
                                    <img
                                        key={index}
                                        src={imgSrc}
                                        alt={`${selectedProject.title} screenshot ${index + 1}`}
                                        className='h-20 object-cover mx-2 cursor-pointer'
                                        onClick={() => setSelectedProject({
                                            ...selectedProject,
                                            screenshots: [imgSrc, ...selectedProject.screenshots.filter(src => src !== imgSrc)]
                                        })}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Projects;
