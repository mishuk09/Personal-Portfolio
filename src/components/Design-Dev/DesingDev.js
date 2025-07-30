
import underline from './img/underimg.png';

const DesingDev = () => {
    return (
        <div >


            <div className=' px-3 md:p-0 relative  flex flex-col items-center bg-gray-100'>
                {/* Wallet Connect Section */}


                {/* Main Content */}
                <div className='max-w-7xl mx-auto flex flex-col text-center items-center justify-center mt-24 md:mt-36'>
                    {/* Home Title */}
                    <h1 className=' text-3xl md:text-5xl font-bold text-gray-800'>
                        👋 Welcome to My
                        <span className='text-blue-600 ms-2 inline-block'>
                            &lt; Workspace /&gt;
                            {/* Image Below Wallet Text */}
                            <div className='mt-[-10px]'>
                                <img src={underline} alt="undereffect" className='ms-4 w-[150px] md:w-[300px] h-auto' />
                            </div>
                        </span>
                    </h1>

                    {/* Description */}
                    <p className='text-gray-600 mt-2 font-semibold  mb-2 px-4 text-center'>
                        Select an option below to explore more about my Workspece
                    </p>

                    <div className="  grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mb-6">

                        {/* Thesis Work */}
                        <div className="mt-14 text-center bg-white w-full p-6 rounded-lg   border border-gray-200 hover:shadow-md transition duration-300">
                            <img src="https://cdn-icons-png.flaticon.com/512/4305/4305541.png" alt="Thesis Work" className="mx-auto w-16 h-16" />
                            <h2 className="text-xl font-semibold text-gray-800 flex items-center justify-center gap-2 mt-2">
                                📚 My Thesis Work
                            </h2>
                            <p className="mt-2 text-gray-600">
                                Dive into my academic research and final year thesis project.
                            </p>
                            <a href="rku" className="mt-4 inline-block no-underline px-6 py-2 bg-purple-600 text-white font-medium rounded-lg  hover:bg-purple-700 transition">
                                View Thesis
                            </a>
                        </div>

                        {/* Running Work */}
                        <div className="md:mt-14 text-center bg-white w-full p-6 rounded-lg    border border-gray-200 hover:shadow-md transition duration-300">
                            <img src="https://cdn-icons-png.flaticon.com/512/5954/5954968.png" alt="Ongoing Work" className="mx-auto w-16 h-16" />
                            <h2 className="text-xl font-semibold text-gray-800 flex items-center justify-center gap-2 mt-2">
                                ⚡ Ongoing Work in Progress
                            </h2>
                            <p className="mt-2 text-gray-600">
                                Track and manage your current projects with ease.
                            </p>
                            <a href="workprogress" className="mt-4 inline-block no-underline px-6 py-2 bg-green-600 text-white font-medium rounded-lg  hover:bg-green-700 transition">
                                View Progress
                            </a>
                        </div>

                        {/* My Projects */}
                        <div className="  text-center bg-white w-full p-6 rounded-lg    border border-gray-200 hover:shadow-md transition duration-300">
                            <img src="https://cdn-icons-png.flaticon.com/512/3135/3135768.png" alt="My Projects" className="mx-auto w-16 h-16" />
                            <h2 className="text-xl font-semibold text-gray-800 flex items-center justify-center gap-2 mt-2">
                                🏗️ My Projects
                            </h2>
                            <p className="mt-2 text-gray-600">
                                Explore the projects I’ve built, showcasing my skills and expertise.
                            </p>
                            <a href="projectsall" className="mt-4 inline-block no-underline px-6 py-2 bg-blue-600 text-white font-medium rounded-lg  hover:bg-blue-700 transition">
                                View My Projects
                            </a>
                        </div>

                        {/* Certification */}
                        <div className="  text-center bg-white w-full p-6 rounded-lg     border border-gray-200 hover:shadow-md transition duration-300">
                            <img src="https://cdn-icons-png.flaticon.com/512/3909/3909385.png" alt="Certifications" className="mx-auto w-16 h-16" />
                            <h2 className="text-xl font-semibold text-gray-800 flex items-center justify-center gap-2 mt-2">
                                🎓 My Certifications
                            </h2>
                            <p className="mt-2 text-gray-600">
                                Browse the certifications I’ve earned along my learning journey.
                            </p>
                            <a href="riseuplabs" className="mt-4 inline-block no-underline px-6 py-2 bg-yellow-500 text-white font-medium rounded-lg  hover:bg-yellow-600 transition">
                                View Certifications
                            </a>
                        </div>
                    </div>



                </div>
            </div >
        </div>
    );
};

export default DesingDev;
