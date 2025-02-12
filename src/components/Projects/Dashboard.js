import React, { useEffect, useState } from "react";
import Nav from "../Navbar/Nav";
import mishuk from './img/mishuk.png';
import mizan from './img/mizanvai.png';
import riseuplabs from './img/riseuplabs.svg';
import github from './img/github.png';
import { motion } from "framer-motion";
import PieAnimation from "./img/PieAnimation";


const Dashboard = () => {
    const [isActive, setIsActive] = useState(false);
    const [hours, setHours] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [task, setTask] = useState('');
    const [alltask, setAlltask] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);


    useEffect(() => {
        const fetchStatusAndTime = async () => {
            try {
                const response = await fetch("https://portfolio-backend-q5fr.onrender.com/api/status-time");
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
                const response = await fetch("https://portfolio-backend-q5fr.onrender.com/api/fetch-latest-task");
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
                const response = await fetch("https://portfolio-backend-q5fr.onrender.com/api/fetch-all-tasks");
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
        <>
            <Nav />

            <div className="px-6 pt-[100px] bg-gray-50 min-h-screen ">
                <div className="max-w-7xl mx-auto">
                    {/* Header Section */}
                    <div className="mb-6">
                        <h1 className="text-2xl text-gray-900 md:text-3xl font-bold mb-6 flex items-center">
                            🚀 Work Progress Dashboard
                        </h1>
                    </div>

                    {/* Statistics Section */}
                    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-[repeat(2,_1fr)_repeat(2,_0.5fr)] w-full gap-2 lg:gap-3 mb-6">
                        <div className="bg-green-50 p-2 w-full   rounded-lg shadow-md">
                            <div className="flex flex-col justify-center gap-2">
                                <ProfileCard
                                    name="Mizanur Rahman"
                                    role="Team Leader"
                                    image={mizan}
                                />
                                <ProfileCard
                                    name="Mahadi Hasan Mishuk"
                                    role="Developer"
                                    image={mishuk}
                                />
                            </div>
                        </div>

                        <div className="bg-white w-full   p-3 rounded-lg shadow-md border border-gray-200">
                            <h2 className="text-gray-500 text-base font-semibold flex flex-col text-center items-center">
                                📦 Projects Name <span className="flex text-gray-700 text-xl mt-2 text-center items-center">E-commerce Website (MERN)</span>
                            </h2>
                            <div className="flex justify-center space-x-2 mt-3">
                                <a
                                    href="https://github.com/mishuk09/Ecommerce-MERN-Task-FrontEnd"
                                    target="blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center no-underline justify-center border border-gray-500 py-1 px-2 w-40 rounded-lg hover:bg-gray-100 transition"
                                >
                                    <img src={github} className="w-5 h-5" alt="GitHub Logo" />
                                    <span className="ml-2 text-sm">GitHub</span>
                                </a>
                                <a
                                    href="https://e-commerce-4103d.web.app"
                                    target="blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center no-underline justify-center border border-gray-500 py-1 px-2 w-40 rounded-lg hover:bg-gray-100 transition"
                                >
                                    🌍 <span className="ml-2 text-sm">Live Demo</span>
                                </a>
                            </div>

                            <p className="text-xl font-bold text-gray-900 mt-4">⌛ 3 Months</p>

                            <div className="flex items-center">
                                <p>
                                    <img
                                        src={riseuplabs}
                                        alt="Rise Up Labs Logo"
                                        className="w-6 h-6 rounded-full mr-2"
                                    />
                                </p>
                                <p className="text-green-600">
                                    Associated with <a href="https://riseuplabs.com/" target="blank" className="font-semibold ms-2">Rise Up Labs</a>
                                </p>
                            </div>
                        </div>

                        <div className="bg-white w-full   p-3 rounded-lg shadow-md">
                            <div className="">
                                {/* SRS Document Section */}
                                <div className="flex flex-col items-center justify-between border-b pb-4">

                                    <span className="text-xl mr-2">🎨</span>
                                    <div className="flex items-center">
                                        <p className="text-sm font-semibold text-gray-500">UI Design</p>
                                    </div>
                                    <a
                                        href="https://drive.google.com/file/d/1Ffrexf-kMoSih6uEBdlYwZNbvTaUwcI5/view?usp=sharing" target="blank"
                                        download
                                        className="bg-green-600 text-white py-2 px-4 text-xs no-underline  rounded-lg hover:bg-green-700 transition"
                                    >
                                        Download
                                    </a>
                                </div>

                                {/* UI Design Section */}
                                <div className="flex flex-col items-center justify-between">
                                    <span className="text-xl mr-2">📑</span>
                                    <div className="flex items-center">
                                        <p className="text-sm font-semibold text-gray-500">SRS Document</p>
                                    </div>
                                    <a
                                        href="https://docs.google.com/document/d/1wZ4VzNrnCptU87PbdTaTt8UUvFgOAo0EdFtSYo48--0/edit?usp=sharing" target="blank"
                                        download
                                        className="bg-blue-600 text-white py-2 px-4 text-xs no-underline  rounded-lg hover:bg-blue-700 transition"
                                    >
                                        Download
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white w-full   p-2 flex flex-col items-center justify-center rounded-lg shadow-md">
                            <div className="flex flex-col items-center justify-center">
                                <img
                                    src={mishuk}
                                    alt=""
                                    className="w-10 h-10 border-gray-50 border rounded-full object-cover"
                                />
                                <h2 className="text-base  text-gray-900 mt-1 font-semibold flex flex-col items-center">
                                    Mishuk
                                    <p className="text-gray-500 text-xs mr-1">🚀 <strong>Intern:</strong> Software Engineer</p>
                                </h2>
                            </div>
                            <div className=" text-gray-700 text-sm space-y-2">
                                <p>💻 <strong>Work:</strong> Remotely</p>
                                <p>📅 <strong>Days:</strong> Sunday - Thursday</p>
                                <p>⏰ <strong>Time:</strong> 9 AM - 6 PM</p>
                            </div>
                        </div>
                    </div>

                    {/* live sections */}

                    <div className="grid grid-cols-1 lg:grid-cols-[repeat(1,_1fr)_repeat(2,_0.7fr)]  gap-2 pb-10">
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



                        <div className="bg-white  p-3 rounded-lg shadow-md">
                            <h2 className="text-xl font-semibold text-gray-500 flex text-center justify-center items-center gap-2">
                                ⏳ Percentage of Complession
                            </h2>
                            {/* Inline divs for progress */}
                            <div className="mt-3 flex justify-between items-center text-sm font-medium">
                                <PieAnimation />
                            </div>
                        </div>


                    </div>

                </div>
            </div>
        </>
    );
};

export default Dashboard;

const ProfileCard = ({ name, role, image }) => {
    return (
        <div className="flex items-center bg-white shadow-md rounded-lg p-4 w-full ">
            <div className="flex-shrink-0">
                <img
                    src={image}
                    alt={name}
                    className="w-12 h-12 rounded-full object-cover"
                />
            </div>
            <div className="ml-4">
                <h2 className="text-lg  text-gray-900 font-semibold">{name}</h2>
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
