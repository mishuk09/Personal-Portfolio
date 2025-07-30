import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Github } from 'lucide-react';

const ProjectAll = () => {
    const [projectsData, setProjectsData] = useState([]);
    const [selectedProject, setSelectedProject] = useState(null);
    const [selectedImage, setSelectedImage] = useState(null);

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
        <>

            <div className=" pt-28 px-4   md:px-12 lg:px-24 bg-gray-50 min-h-screen">
                <div className='max-w-7xl mx-auto'>


                    <div className="text-center mb-10">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">
                            🚀 All Projects
                        </h2>
                        <p className="text-gray-600 text-base md:text-lg max-w-xl mx-auto">
                            Explore the complete collection of my web development projects 🌐 — showcasing creativity, performance, and clean code.
                        </p>
                    </div>

                    {/* Placeholder for projects grid */}
                    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
                        {projectsData.map((project) => (
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
            </div>
        </>
    );
};

export default ProjectAll;
