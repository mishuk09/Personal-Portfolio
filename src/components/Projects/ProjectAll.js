import React from 'react';

const projects = [
    {
        id: 1,
        title: '👟 Sneakers E-commerce Website',
        description: 'A modern eCommerce store with user authentication, product browsing, and a seamless checkout experience.',
        image: 'https://via.placeholder.com/400x250?text=Sneakers+Store',
        link: 'https://yourprojectlink1.com',
    },
    {
        id: 2,
        title: '🌍 Tour Management App',
        description: 'A responsive tour planner app built with React, Tailwind, and MongoDB with team cost breakdown.',
        image: 'https://via.placeholder.com/400x250?text=Tour+App',
        link: 'https://yourprojectlink2.com',
    },
    {
        id: 3,
        title: '📘 CSEHacks Learning Platform',
        description: 'An educational platform for beginner programmers with rich content editors and interactive lessons.',
        image: 'https://via.placeholder.com/400x250?text=CSEHacks',
        link: 'https://csehacks.com',
    },
];

const ProjectAll = () => {
    return (
        <section className="bg-gradient-to-br from-gray-50 to-gray-100 py-16 px-4 md:px-12 lg:px-20">
            <h2 className="text-4xl font-bold text-center text-gray-800 mb-14">
                🚀 Featured Projects
            </h2>

            <div className="grid gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                {projects.map((project) => (
                    <div
                        key={project.id}
                        className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition duration-300 border border-gray-200"
                    >
                        <img
                            src={project.image}
                            alt={project.title}
                            className="w-full h-56 object-cover"
                        />
                        <div className="p-6 flex flex-col justify-between h-full">
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">{project.title}</h3>
                            <p className="text-gray-600 text-sm mb-4">{project.description}</p>
                            <a
                                href={project.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="mt-auto inline-block bg-blue-600 text-white font-medium px-5 py-2 rounded-lg text-sm hover:bg-blue-700 transition"
                            >
                                🔗 Visit Project
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default ProjectAll;
