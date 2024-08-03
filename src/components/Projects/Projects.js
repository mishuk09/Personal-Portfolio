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

import c1 from './img/c1.png';
import c2 from './img/c2.png';
import c3 from './img/c3.png';
import c4 from './img/c4.png';
import c5 from './img/c5.png';
import c6 from './img/c6.png';
import c7 from './img/c7.png';
import c8 from './img/c8.png';
import c9 from './img/c9.png';
import c10 from './img/c10.png';

import x1 from './img/x1.png';
import x2 from './img/x2.png';
import x3 from './img/x3.png';
import x4 from './img/x4.png';
import x6 from './img/x6.png';
import x7 from './img/x7.png';
import x8 from './img/x8.png';
import x9 from './img/x9.png';

import a1 from './img/a1.png';
import a2 from './img/a2.png';
import a3 from './img/a3.png';

import a5 from './img/a5.png';
import a6 from './img/a6.png';
import a7 from './img/a7.png';


const Projects = () => {
    const [selectedProject, setSelectedProject] = useState(null);
    const [selectedImage, setSelectedImage] = useState(null);

    const projectsData = [
        {
            id: 1,
            imgSrc: c1,
            title: 'CSEHacks - A Learning website like GFG,Javatpoint',
            subtitle: 'Educational',
            label: 'New',
            screenshotLink: shoes, // Assuming this is the correct image path
            githubLink: 'https://github.com/mishuk09/Learning-Website/',
            liveLink: 'https://csehacks.tech',
            screenshots: [
                c1, c2, c3, c4, c5, c6, c7, c8, c9, c10
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
            imgSrc: x1,
            title: 'ShoeMart - E-commerce Shoe Platform',
            subtitle: 'E-commerce',
            label: 'Popular',
            screenshotLink: shoes, // Assuming this is the correct image path
            githubLink: 'https://github.com/mishuk09/Ecommerce',
            liveLink: 'https://ecommerce-five-nu-53.vercel.app/',
            screenshots: [
                x1, x2, x3, x4, x6, x7, x8, x9
            ]
        },
        {
            id: 4,
            imgSrc: a1,
            title: 'ShoeMart - E-commerce Shoe Platform',
            subtitle: 'E-commerce',
            label: 'Popular',
            screenshotLink: shoes, // Assuming this is the correct image path
            githubLink: 'https://github.com/mishuk09/sneaker',
            liveLink: 'https://sneaker-git-master-mishuk09s-projects.vercel.app/',
            screenshots: [
                a1, a2, a3, a5, a6, a7
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
                        <h4 className='text-black'>Projects</h4>
                    </div>
                    <p className='pt-3 text-black pb-2 xs:text-sm sm:text-[16px]'>
                        I have completed many projects. Here are three of the most dynamic ones.
                    </p>
                </div>
                <div className='container mt-10 mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4'>
                    {
                        projectsData.map((project) => (
                            <div key={project.id} className='relative project-card-item border rounded shadow-lg overflow-hidden'>
                                <img src={project.imgSrc} alt={project.title} className='w-full  h-48 object-cover rounded-sm' />
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
                                className='absolute top-2 right-2 text-slate-500 font-bold text-lg'
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
