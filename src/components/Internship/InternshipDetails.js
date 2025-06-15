import React from "react";

const InternshipDetails = () => {


    return (
        <div className="px-6 pt-16 bg-gradient-to-b from-gray-50 to-white min-h-screen">
            <div className="max-w-6xl mx-auto">

                {/* Section Title */}
                <div className="text-center mb-8 mt-16">
                    <h1 className="text-2xl md:text-4xl font-extrabold text-gray-800 mb-2">
                        🎯 Internship Experience with Riseuplabs
                    </h1>
                    <p className=" text-gray-500">
                        A detailed overview of my internship journey at Riseup Labs.
                    </p>
                </div>

                {/* Company Info with Logo Background */}
                <div className="relative bg-gray-950 rounded-2xl shadow-md p-3 md:p-8 mb-12 overflow-hidden transition hover:shadow-lg">
                    {/* Logo Background */}
                    <div className="absolute inset-0 opacity-30">
                        <img
                            src="https://riseuplabs.com/wp-content/themes/rul/images/riseuplabs.svg"
                            alt="Riseup Labs Logo"
                            className="w-full h-full object-contain"
                        />
                    </div>

                    {/* Company Text Content */}
                    <div className="relative">
                        <h2 className="text-3xl font-bold text-white md:text-red-600 mb-2">
                            🏢 Riseup Labs
                        </h2>
                        <p className="text-gray-500 text-md mb-4">
                            🌐 <a href="https://riseuplabs.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">www.riseuplabs.com</a>
                        </p>
                        <div className="text-gray-100 space-y-1 px-2">
                            <p>
                                <span className="font-semibold">Role:</span> Software Engineering Intern
                            </p>
                            <p>
                                <span className="font-semibold">Duration:</span> February 2025 – May 2025
                            </p>
                            <p>
                                <span className="font-semibold">Location:</span> Remote (Uttara, Bangladesh)
                            </p>
                        </div>

                    </div>
                </div>

                {/* Project and Certificate sections remain same */}
                {/* Project Details */}
                <div className="mb-14">
                    <h2 className="text-2xl font-bold border-b border-gray-300 pb-2 text-gray-800 mb-8">
                        🚀 Key Projects Delivered
                    </h2>
                    <div className="grid gap-8 md:grid-cols-2">

                        <div

                            className="p-6 bg-red-800 rounded-2xl shadow-md hover:shadow-lg transition border"
                        >
                            <h3 className="text-xl font-semibold text-gray-100 mb-2">
                                Full-Stack E-commerce Website
                            </h3>
                            <p className="text-gray-300 leading-relaxed">
                                Engineered a scalable e-commerce platform with React.js, Node.js, and MongoDB, featuring user authentication, payment integration, and admin dashboard.
                            </p>
                        </div>

                        {/* Certificate Section */}
                        <div className="p-6 bg-white rounded-2xl shadow-md hover:shadow-lg transition border space-y-6">

                            {/* Buttons Section */}
                            <div className="flex flex-wrap gap-4">
                                <h3 className="text-xl font-semibold text-gray-700 mb-3">
                                    📜 Certificates & Resources
                                </h3>
                                <div className="flex flex-col sm:flex-row flex-wrap gap-2 w-full">

                                    <a
                                        href="https://github.com/mishuk09/Ecommerce-MERN-Task-FrontEnd"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className=" w-full no-underline text-center bg-gradient-to-r from-gray-950 to-gray-900 text-white font-semibold py-2 px-6 rounded-full hover:from-gray-900 hover:to-gray-950 transition duration-300"
                                    >
                                        💻 GitHub
                                    </a>
                                    <a
                                        href="https://e-commerce-4103d.web.app/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className=" w-full no-underline text-center bg-gradient-to-r from-purple-600 to-purple-500 text-white font-semibold py-2 px-6 rounded-full hover:from-purple-700 hover:to-purple-600 transition duration-300"
                                    >
                                        🚀 Live Demo
                                    </a>
                                    <a
                                        href="https://riseuplabs.com/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className=" w-full no-underline text-center bg-gradient-to-r from-blue-600 to-blue-500 text-white font-semibold py-2 px-6 rounded-full hover:from-blue-700 hover:to-blue-600 transition duration-300"
                                    >
                                        🔗   Certificate
                                    </a>
                                </div>
                            </div>

                        </div>


                    </div>
                </div>



            </div>
        </div>
    );
};

export default InternshipDetails;
