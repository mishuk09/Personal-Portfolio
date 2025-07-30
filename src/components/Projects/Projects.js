import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Github } from 'lucide-react';
import Seemore from './Utills/Seemore';

const Projects = () => {
    const [projectsData, setProjectsData] = useState([]);
    const [selectedProject, setSelectedProject] = useState(null);
    const [selectedImage, setSelectedImage] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const res = await axios.get('https://portfolio-backend-q5fr.onrender.com/api/projects');
                const sorted = res.data.sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt)); // Oldest first

                const formatted = sorted.map((project) => ({
                    id: project._id,
                    title: project.title,
                    subtitle: project.title,
                    githubLink: project.githubLink,
                    liveLink: project.liveLink,
                    screenshots: project.imageUrls,
                    imgSrc: project.imageUrls[0] || '',
                }));
                setLoading(false);

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
        <div className=' bg-[#e6e6e6]  mt-[330px] md:mt-10 pt-6 md:pt-16 pb-10 font-[Montserrat]'>
            <div className='  max-w-7xl mx-auto px-4'>
                <div className='mb-10'>
                    <span className='text-blue-600 text-sm md:text-base'>What I have done</span>
                    <div className='flex justify-between items-center flex-wrap gap-3 mt-2'>
                        <p className="text-black hidden md:block text-2xl md:text-3xl font-bold">Projects and Work Samples</p>
                        <p className="text-black md:hidden text-2xl md:text-3xl font-bold">Projects </p>
                        <Seemore url="/designdev" />
                    </div>
                    <hr className='mt-3 border-black' />
                </div>


                {loading ? (
                    <div className="flex justify-center items-center h-64">
                        <p className="text-gray-500">Loading projects...</p>
                    </div>
                ) : (
                    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
                        {projectsData.slice(0, 6).map((project) => (
                            <div key={project.id} className='bg-white rounded-lg shadow-lg overflow-hidden'>
                                <img
                                    src={project.imgSrc}
                                    alt={project.title}
                                    loading="lazy"
                                    className='w-full h-48 object-cover'
                                />
                                <div className='p-4'>
                                    <h5 className='text-sm font-semibold truncate' title={project.title}>{project.title}</h5>
                                    <p className='text-[10px] font-medium text-gray-600'>{project.subtitle}</p>
                                    <div className='flex justify-between items-center mt-4 text-sm'>
                                        <button
                                            onClick={() => {
                                                setSelectedProject(project);
                                                setSelectedImage(project.screenshots[0]);
                                            }}
                                            className='px-2 py-1 border rounded hover:bg-gray-100 transition'
                                        >
                                            Screenshot
                                        </button>

                                        <a
                                            href={project.githubLink}
                                            target='_blank'
                                            rel='noopener noreferrer'
                                            className='flex no-underline items-center gap-1 px-2 py-1 border rounded hover:bg-gray-100 transition'
                                        >
                                            <Github className="w-4 h-4" /> GitHub
                                        </a>

                                        <a
                                            href={project.liveLink}
                                            target='_blank'
                                            rel='noopener noreferrer'
                                            className='px-2 no-underline py-1 border rounded hover:bg-gray-100 transition'
                                        >
                                            Live Preview
                                        </a>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>

            {selectedProject && (
                <div
                    className='fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50'
                    onClick={() => setSelectedProject(null)}
                >
                    <div
                        className='bg-white rounded-lg overflow-hidden w-[90%] max-w-3xl'
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className='relative'>
                            <button
                                onClick={() => setSelectedProject(null)}
                                className='absolute top-2 right-2 text-slate-600 text-xl font-bold'
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
                            <div className='flex overflow-x-auto gap-2 p-3'>
                                {selectedProject.screenshots.map((imgSrc, index) => (
                                    <img
                                        key={index}
                                        src={imgSrc}
                                        alt={`Screenshot ${index + 1}`}
                                        className='h-16 md:h-24 object-cover border cursor-pointer'
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
