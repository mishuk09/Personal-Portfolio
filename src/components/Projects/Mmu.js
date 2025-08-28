import mishuk from './img/mishuk.png';
import { motion } from "framer-motion";
import { useEffect, useState } from 'react';
import SurveyDashboard from './Mmu/SurveyDashboard ';
import SurveyDashboardAuth from './Mmu/SurveyDashboardAuth';
import Summary from './Mmu/Summary';
import ThesisAuth from './Mmu/ThesisAuth';
import Presentation from './Mmu/Presentation';

const Mmu = () => {
    const [isActive, setIsActive] = useState(false);
    const [hours, setHours] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [task, setTask] = useState('');
    const [alltask, setAlltask] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [modal, setModal] = useState(false);
    const [showLoginModal, setShowLoginModal] = useState(false);
    const [showThesisModal, setShowThesisModal] = useState(false);
    const [showPresentationModal, setShowPresentationModal] = useState(false);


    useEffect(() => {
        const fetchStatusAndTime = async () => {
            try {
                const response = await fetch("https://mmu-task-backend.onrender.com/api/status-time");
                const data = await response.json();

                setIsActive(data.status === true); // Set the active status (true/false)

                // Convert seconds to hours and minutes
                const hrs = Math.floor(data.totalTime / 3600); // 1 hour = 3600 seconds
                const mins = Math.floor((data.totalTime % 3600) / 60); // Remaining seconds converted to minutes

                setHours(hrs);
                setMinutes(mins);
            } catch (error) {
                console.error("Error fetching status and time:", error);
            }
        };

        fetchStatusAndTime();
    }, []);


    //fetch task
    useEffect(() => {
        const fetchLatestTask = async () => {
            try {
                const response = await fetch("https://mmu-task-backend.onrender.com/api/fetch-latest-task");
                if (!response.ok) throw new Error("Failed to fetch latest task");

                const data = await response.json();
                setTask(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchLatestTask();
    }, []);

    //fetch all task
    useEffect(() => {
        const fetchallTask = async () => {
            try {
                const response = await fetch("https://mmu-task-backend.onrender.com/api/fetch-all-tasks");
                if (!response.ok) throw new Error("Failed to fetch latest task");

                const data = await response.json();
                setAlltask(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchallTask();
    }, []);


    return (
        <div className='pb-6'>
            {
                showPresentationModal && (
                    <div className="fixed inset-0 bg-black bg-opacity-50 h-screen flex items-center justify-center z-50">
                        <Presentation onClose={() => setShowPresentationModal(false)} />
                    </div>
                )
            }
            {
                modal && (
                    <div className="fixed inset-0 bg-black bg-opacity-50 h-screen flex items-center justify-center z-50">
                        <SurveyDashboardAuth onClose={() => setModal(false)} />
                    </div>)
            }

            {showLoginModal && (
                <div className="fixed inset-0 bg-black bg-opacity-50 h-screen flex items-center justify-center z-50">
                    <Summary onClose={() => setShowLoginModal(false)} />
                </div>
            )}

            {
                showThesisModal && (
                    <div className="fixed inset-0 bg-black bg-opacity-50 h-screen flex items-center justify-center z-50">
                        <ThesisAuth onClose={() => setShowThesisModal(false)} />
                    </div>
                )
            }


            {/* Statistics Section */}
            <div className="grid grid-cols-1 pb-10   md:grid-cols-3 lg:grid-cols-[1fr_1.5fr_0.5fr] w-full gap-2 lg:gap-3 mb-6">

                <div className="bg-green-50 p-2 w-full   rounded-lg shadow-md">
                    <div className="flex flex-col justify-center gap-2">
                        <ProfileCard
                            name="Dr. Norhidayah Binti Mohamad"
                            role="Supervisor"
                            image="https://mmuexpert.mmu.edu.my/images/staff/1001110710.jpg"
                            link='https://mmuexpert.mmu.edu.my/norhidayahmohamad'

                        />
                        <ProfileCard
                            name="Dr. Nor Azlina Binti Ab Aziz"
                            role="Co-Supervisor"
                            image="https://mmuexpert.mmu.edu.my/images/staff/1001060739.jpg"
                            link='https://mmuexpert.mmu.edu.my/azlinaaziz'

                        />
                        <ProfileCard
                            name="Mahadi Hasan Mishuk"
                            role="Research Assistant"
                            image={mishuk}
                            link='mishukinfo.com'
                        />
                    </div>
                </div>

                <div className="bg-white w-full   p-3 rounded-lg shadow-md border border-gray-200">
                    <h2 className="text-gray-500 text-base font-semibold flex flex-col text-center items-center">
                        📦 Projects Name <span className="flex text-gray-700  mt-2 text-center items-center">Advanching Green Processing  of Biodegradable Fertilizers with AI</span>
                    </h2>
                    <div className="flex justify-center border rounded-sm p-1 border-gray-300 space-x-2 mt-3  h-24 overflow-y-auto custom-scrollbar ">
                        <p className='w-full  text-justify text-sm px-1'><span className='font-semibold text-lg'> T</span>he agricultural  sector is a vital contributor to Malaysia’s economy but faces challenges in balancing productivity with environmental sustainability. Fertilizer use, particularly urea, is crucial for crop yields due to its high nitrogen content and solubility. However, manufacturing of fertilizers, particularly those containing nitrogen compounds, is a significant source of ammonia (NH₃) release, which is harmful to humans, animals, and plants. The granulation process in urea fertilizer production emits ammonia gas to the environment. This research focuses on advancing biodegradable fertilizer production towards a sustainable and environmentally friendly process. Advanced artificial intelligence methods, including Random Forest and the Particle Swarm Optimization algorithm, will be employed to develop accurate ammonia release prediction models. A lab-scale size fluidized bed granulation system will be used in this research. The models will identify optimal production parameters to reduce ammonia gas release effectively, predicting and minimizing ammonia emissions during urea fertilizer production. Additionally, the study will assess Malaysian farmers' awareness and willingness to adopt environmentally friendly fertilizers, offering recommendations to promote sustainable agricultural practices. The research aligns with Islamic teachings, which prohibit environmental destruction, as emphasized in Quranic verses such as Al-Qasas 77 and Al-A’raf 56. It also supports the United Nations Sustainable Development Goal (SDG) 12 on responsible consumption and production. Through innovative solutions and awareness initiatives, this study aims to contribute to sustainable agriculture while protecting the environment.</p>

                    </div>

                    <p className=" font-semibold text-gray-900 mt-4">⌛ Min 12 Month - Max 36 Month</p>

                    <div className="flex items-center">
                        <p>
                            <img
                                src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAMAAABF0y+mAAAAXVBMVEUCTqEjSZYCTqECTqECTaFHcEwCTaECTqECTqECTqECTqECTqECTaECTqECTqECTqECTqECTaACTqECTqHsGyPsHCTsHCMCTqHsHCQCTqHsHCTsHCTrHCPsHCQCTqHr2qXIAAAAH3RSTlN6DaFDTwA62reTWtFjxP8tIP/67SXO/4Os5PHjgGCNaOOdLAAAARBJREFUeAF90QUWgzAQRdFJyo+WSF3Z/zIbP/WHc3GIGF9NHBw5IZU2DD3izE7rmc3IrVxuFq+IjjX1HXu+YviCVb9hjEVZxVVCO7AnE2qWUPUzY4WyMCCrN1xtuUMpGOt6W1BsRwa0prqdRk+ulnG3Pxz2u6y14xPuDiWGfuWZNu0qAfuKJ6xdLDvPBeuZh9plvNCGNumd8yg6XhPGhmdXI5wq3p7OnNurbIFrtj0gBh7dOBX30+n+/BHJj8+1oBWc3J6ts2fC1o0UVZXgx2DDkWCe/0RDxo9e+oUAW16lvPcz2oLsy5kqo04I72LDc0Ooo7ChIIL7QBoIqH8IPz/hOaMMnNBjRiuFkgZN4cjMAxxBIhydv7jrAAAAAElFTkSuQmCC'
                                alt="Rise Up Labs Logo"
                                className="w-6 h-6 rounded-full mr-2"
                            />
                        </p>
                        <p className="text-green-600">
                            Associated with <a href="https://www.mmu.edu.my/" target="blank" className="font-semibold ms-2">Multimedia University</a>
                        </p>
                    </div>
                </div>

                <div className="bg-white w-full     p-2 flex flex-col items-center justify-center rounded-lg shadow-md">
                    <div className="flex flex-col items-center justify-center">
                        <img
                            src={mishuk}
                            alt=""
                            className="w-10 h-10 border-gray-50 border rounded-full object-cover"
                        />
                        <h2 className="text-base  text-gray-900 mt-1 font-semibold flex flex-col items-center">
                            <a href="mishukinfo.com " className=' no-underline hover:underline delay-300'> Mishuk</a>
                            <p className="text-gray-500 text-xs mr-1">🔬 Research Assistant</p>
                        </h2>
                    </div>
                    <div className=" text-gray-700 text-sm space-y-2">
                        <p>💻 <strong>Mode:</strong> Full-time</p>
                        <p>📅 <strong>Days:</strong> Monday - Friday</p>
                        <p>⏰ <strong>Time:</strong> 9 AM - 5 PM</p>
                    </div>
                </div>
            </div>

            {/* live sections */}

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 pb-10">
                <motion.div
                    className="bg-white  p-3 rounded-lg shadow-md"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <h2 className="text-xl font-semibold text-gray-500 flex text-center justify-center items-center gap-2">
                        📝 Today’s Task - {new Date().toLocaleDateString()}
                    </h2>

                    <div className="mt-3  text-gray-700 text-base ">
                        {loading && (
                            <div className="flex items-center space-x-2 text-gray-500">
                                <span className="animate-spin h-4 w-4 border-2 border-blue-500 border-t-transparent rounded-full"></span>
                                <p className="text-sm mt-3 leading-none">Please wait...</p>
                            </div>
                        )}
                        {error && <p className="text-red-500">{error}</p>}

                        {task && (
                            <div className="bg-gray-100  p-2 w-full   rounded-md">
                                <div>
                                    <p className="text-base font-semibold text-gray-800">📝 {task.task}</p>
                                    <p className="text-sm text-gray-600">
                                        ⏳ <strong>Task added</strong>: {new Date(task.createdAt).toLocaleString()}
                                    </p>
                                </div>
                            </div>

                        )}
                    </div>

                    <div className="mt-2 w-full flex flex-col md:flex-row gap-2 items-center justify-center bg-gray-100 p-2 rounded-lg shadow-sm">
                        {/* Profile Section */}
                        <div className="flex w-full flex-col md:flex-row md:w-[40%] border-r pe-2 items-center gap-2">
                            <div className="relative">
                                <img
                                    src={mishuk} // Update with your actual image path
                                    alt="Mishuk"
                                    className="w-12 h-12 border-2 border-gray-300 rounded-full object-cover"
                                />
                                <div className="absolute top-0 right-0">
                                    {isActive ? (
                                        <span className="flex items-center gap-1 text-green-600 font-medium">
                                            <motion.span
                                                className="w-3 h-3 bg-green-500 rounded-full"
                                                animate={{ scale: [1, 1.3, 1] }}
                                                transition={{ repeat: Infinity, duration: 0.8 }}
                                            />
                                        </span>
                                    ) : (
                                        <span className="text-red-500 font-medium"></span>
                                    )}
                                </div>
                            </div>
                            <div>
                                <h2 className="text-lg font-semibold text-gray-700 flex items-center gap-2">
                                    Mishuk
                                    {isActive ? (
                                        <span className="flex items-center text-xs gap-1 text-green-600">
                                            (Active)
                                        </span>
                                    ) : (
                                        <span className="text-red-500 text-xs font-medium">(Offline)</span>
                                    )}
                                </h2>
                            </div>
                        </div>

                        {/* Work Details Section */}
                        <div className="w-full h-full md:w-[60%] p-2 rounded-lg text-gray-700 text-sm flex items-center justify-center">

                            <p className="flex items-center gap-2">
                                ⏳ <strong>Total Working Hour:</strong>
                                <span className="bg-blue-200 text-blue-700 px-2 py-1 rounded-md font-semibold">
                                    {hours}h
                                </span>
                                <span className="bg-indigo-200 text-indigo-700 px-2 py-1 rounded-md font-semibold">
                                    {minutes}m
                                </span>
                            </p>

                        </div>
                    </div>

                </motion.div>
                <div className="bg-white p-3 min-h-[250px] rounded-lg shadow-md">
                    <h2 className="text-xl font-semibold text-gray-500 flex text-center justify-center items-center gap-2">
                        ✅ Completed Till Now
                    </h2>
                    <div className="mt-3 text-gray-700 text-sm space-y-2 max-h-44 overflow-y-auto custom-scrollbar">
                        {loading && (
                            <div className="flex items-center space-x-2 text-gray-500">
                                <span className="animate-spin h-4 w-4 border-2 border-blue-500 border-t-transparent rounded-full"></span>
                                <p className="text-sm mt-3 leading-none">Please wait...</p>
                            </div>
                        )}



                        {error && <p className="text-red-500">{error}</p>}
                        {alltask.map((taskall) => (
                            <p
                                key={taskall.id}
                                className="flex items-center gap-1 p-1 me-2 bg-gray-100 rounded-lg shadow-sm hover:bg-gray-200 transition duration-200"
                            >
                                ✔️ <span className="font-medium">{taskall.task}</span>
                            </p>
                        ))}
                    </div>
                </div>






            </div>


            {/* Survey Section */}
            <div className="flex flex-col md:flex-row items-center justify-center gap-3 bg-white py-6 px-4 rounded shadow-lg mt-6">
                <button
                    onClick={() => setModal(true)}
                    className="w-full md:w-auto bg-blue-600 text-white py-2.5 px-6 rounded font-medium shadow-md hover:bg-blue-700 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200"
                >
                    📝 Survey Dashboard
                </button>

                <button
                    onClick={() => setShowLoginModal(true)}
                    className="w-full md:w-auto bg-green-600 text-white py-2.5 px-6 rounded font-medium shadow-md hover:bg-green-700 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-green-500 transition-all duration-200"
                >
                    📊 Survey Summary
                </button>

                <button
                    onClick={() => setShowThesisModal(true)}
                    className="w-full md:w-auto bg-purple-600 text-white py-2.5 px-6 rounded font-medium shadow-md hover:bg-purple-700 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-200"
                >
                    🎓 Proposal Defence
                </button>
                <button
                    onClick={() => setShowPresentationModal(true)}
                    className="w-full md:w-auto bg-yellow-600 text-white py-2.5 px-6 rounded font-medium shadow-md hover:bg-yellow-700 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 transition-all duration-200"
                >
                    📑 2 Sept Presentation
                </button>
            </div>

        </div>
    );
};

export default Mmu;


const ProfileCard = ({ name, role, image, link }) => {
    return (
        <div className="flex items-center bg-white shadow-md rounded-lg p-3 w-full ">
            <div className="flex-shrink-0 ">
                <img
                    src={image}
                    alt={name}
                    className="w-12 h-12 rounded-full border-2 border-gray-200 m-2  object-cover object-center"
                />
            </div>
            <div className="ml-4">
                <a href={link} className="text-lg no-underline cursor-pointer hover:underline duration-300  text-blue-600 font-semibold">{name}</a>
                <div className="flex items-center mt-1">
                    <span className="bg-green-100 text-green-600 text-sm font-medium py-1 px-3 rounded-full flex items-center">
                        <svg
                            className="w-4 h-4 mr-2"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M5.121 17.804A1 1 0 016 17h12a1 1 0 01.879.804l1.562 7.041c.064.289-.046.588-.275.78a1 1 0 01-.72.375H4.555a1 1 0 01-.72-.375.755.755 0 01-.275-.78L5.121 17.804zM12 9a4 4 0 110-8 4 4 0 010 8zm0 8c-4.418 0-8 1.79-8 4a1 1 0 001 1h14a1 1 0 001-1c0-2.21-3.582-4-8-4z"
                            />
                        </svg>
                        {role}
                    </span>
                </div>
            </div>
        </div>
    );
};
