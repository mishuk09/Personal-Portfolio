import React, { useState } from 'react';
import '../../index.css';
import work from './img/work.png';
import '@splidejs/splide/dist/css/themes/splide-default.min.css'; // Import Splide styles
import shoes from './img/shoes.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import p1 from './img/p1.png';
import p2 from './img/p2.png';
import p3 from './img/p3.png';
import p4 from './img/p4.png';
import p5 from './img/p5.png';
import p6 from './img/p6.png';
import p7 from './img/p7.png';

const Projects = () => {
    const [selectedProject, setSelectedProject] = useState(null);
    const [selectedImage, setSelectedImage] = useState(null);

    const projectsData = [
        {
            id: 1,
            imgSrc: shoes,
            title: 'Animado - Comprehensive Animation Studio',
            subtitle: 'Educational',
            label: 'New',
            screenshotLink: shoes, // Assuming this is the correct image path
            githubLink: 'https://github.com/mishuk09/Digital_marketing',
            liveLink: 'https://project1.live',
            screenshots: [
                p1, p2, p3
            ]
        },
        {
            id: 2,
            imgSrc: p1,
            title: 'Plexus - Digital Marketing Service',
            subtitle: 'Agency',
            label: 'Featured',
            screenshotLink: shoes, // Assuming this is the correct image path
            githubLink: 'https://github.com/user/project2',
            liveLink: 'https://plexus.org.in/',
            screenshots: [
                p1, p2, p3, p4, p5, p6, p7,
            ]
        },
        {
            id: 3,
            imgSrc: shoes,
            title: 'ShoeMart - E-commerce Shoe Platform',
            subtitle: 'E-commerce',
            label: 'Popular',
            screenshotLink: shoes, // Assuming this is the correct image path
            githubLink: 'https://github.com/user/project3',
            liveLink: 'https://project3.live',
            screenshots: [
                p1, p2, p3
            ]
        },
    ];

    const handleImageClick = (imgSrc) => {
        setSelectedImage(imgSrc);
    };

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
                                        <div onClick={() => { setSelectedProject(project); setSelectedImage(project.screenshots[0]); }} className='border cursor-pointer text-[12px] px-2 py-1 rounded-sm hover:bg-slate-100 duration-75 text-black no-underline'>
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
                    <div className='bg-white rounded-lg overflow-hidden w-full max-w-3xl'>
                        <div className='relative'>
                            <button
                                onClick={() => setSelectedProject(null)}
                                className='absolute top-2 right-2 text-black font-bold text-lg'
                            >
                                &times;
                            </button>
                            <div className='w-full h-96'> {/* Fixed dimensions for the image box */}
                                <img
                                    src={selectedImage}
                                    alt={selectedProject.title}
                                    className='w-full h-full object-cover'
                                />
                            </div>
                            <div className='flex overflow-x-auto pt-2 pb-3 custom-scrollbar'>
                                {selectedProject.screenshots.map((imgSrc, index) => (
                                    <img
                                        key={index}
                                        src={imgSrc}
                                        alt={`${selectedProject.title} screenshot ${index + 1}`}
                                        className='h-10 md:h-20 border-1 object-cover mx-2 cursor-pointer'
                                        onClick={() => handleImageClick(imgSrc)}
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
