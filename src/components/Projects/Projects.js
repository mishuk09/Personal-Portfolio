import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { ExternalLink, Github } from 'lucide-react'; // Lucide icons



const Projects = () => {
    const [projectsData, setProjectsData] = useState([]);
    const [selectedProject, setSelectedProject] = useState(null);
    const [selectedImage, setSelectedImage] = useState(null);

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const res = await axios.get('http://localhost:5000/api/projects');
                const formatted = res.data.map((project, index) => ({
                    id: project._id,
                    title: project.title,
                    subtitle: project.title, // or set a separate subtitle if needed
                    githubLink: project.githubLink,
                    liveLink: project.liveLink,
                    screenshots: project.imageUrls,
                    imgSrc: project.imageUrls[0] || '', // first image as main
                }));
                setProjectsData(formatted);
            } catch (err) {
                console.error('Failed to fetch projects:', err);
            }
        };

        fetchProjects();
    }, []);

    const handleImageClick = (img) => {
        setSelectedImage(img);
    };

    return (
        <div>
            <div id='project' className='projects-head mt-20'>
                <div className='marquee-div-name container mt-[40px] pt-10 mb-10'>
                    <span className='text-blue-600'>What I have done</span>
                    <div className='flex justify-between'>
                        <p className="text-black text-2xl md:text-3xl font-bold hidden md:flex">Projectssss's and worksample</p>
                        <p className="text-black text-2xl md:text-3xl font-bold flex md:hidden">Projectssss's</p>
                        <div className='text-black flex items-center justify-center rounded-full bg-blue-500 hover:bg-blue-600 duration-75 transition-all w-20 h-8 md:w-40 md:h-10'>
                            <a href='/designdev' className='text-white hidden md:flex'>See More<ExternalLink className="w-4 h-4 ml-1" />
                            </a>
                            <a href='/designdev' className='text-white flex md:hidden'>More</a>
                        </div>
                    </div>
                    <hr className='text-black h-3 pt-0 mt-0' />
                </div>

                <div className='container mt-10 mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4'>
                    {projectsData.map((project) => (
                        <div key={project.id} className='relative project-card-item border rounded shadow-lg overflow-hidden'>
                            <img src={project.imgSrc} alt={project.title} className='w-full h-48 object-cover rounded-sm' />
                            <div className='bg-white text-black'>
                                <div className='px-3 py-3 leading-tight'>
                                    <h5 className='text-sm font-semibold truncate' title={project.title}>{project.title}</h5>
                                    <h6 className='text-[10px] font-semibold'>{project.subtitle}</h6>
                                </div>
                                <div className='flex font-semibold justify-around pb-3'>
                                    <div onClick={() => {
                                        setSelectedProject(project);
                                        setSelectedImage(project.screenshots[0]);
                                    }} className='border cursor-pointer text-[12px] px-2 py-1 rounded-sm hover:bg-slate-100 duration-75 text-black no-underline'>
                                        Screenshot
                                    </div>
                                    <a href={project.githubLink} target='_blank' rel='noopener noreferrer' className='border text-[12px] px-2 py-1 rounded-sm hover:bg-slate-100 duration-75 text-black no-underline'>
                                        <Github className="w-4 h-4" />

                                    </a>
                                    <a href={project.liveLink} target='_blank' rel='noopener noreferrer' className='border text-[12px] px-2 py-1 rounded-sm hover:bg-slate-100 duration-75 text-black no-underline'>
                                        Live Preview
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
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
                            <div className='w-full h-96'>
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
