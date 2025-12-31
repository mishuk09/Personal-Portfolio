import React from "react";
import { CheckCircle, Circle } from "lucide-react";
import { motion } from "framer-motion";

const roadmap = [
    { task: "Week 1", status: "done", detail: "Completed initial setup & planning" },
    { task: "Week 2", status: "done", detail: "Built authentication system" },
    { task: "Week 3", status: "done", detail: "Database integration finished" },
    { task: "Week 4", status: "done", detail: "Frontend core design ready" },
    { task: "Week 5", status: "current", detail: "Currently implementing payment system" },
    { task: "Week 6", status: "upcoming", detail: "Upcoming: API integration" },
    { task: "Week 7", status: "upcoming", detail: "Upcoming: Testing & bug fixing" },
    { task: "Week 8", status: "upcoming", detail: "Upcoming: Final launch" },
];

export default function RoadmapTimeline() {
    return (
        <div className="w-full max-w-6xl mx-auto mt-16 px-6">
            <h2 className="text-2xl font-bold text-center mb-10 text-gray-800">
                📍 My Roadmap Journey
            </h2>

            <div className="relative flex items-center justify-between">
                {/* Progress Line */}
                <div className="absolute top-6 left-0 w-full h-1 bg-gradient-to-r from-green-500 via-blue-500 to-gray-300 -z-10 rounded-full"></div>

                {roadmap.map((item, index) => (
                    <div key={index} className="flex flex-col items-center relative w-full group">
                        {/* Milestone */}
                        <div className="relative">
                            {item.status === "done" && (
                                <motion.div
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                >
                                    <CheckCircle className="w-12 h-12 text-green-500 bg-white rounded-full shadow-lg border-2 border-green-400" />
                                </motion.div>
                            )}

                            {item.status === "current" && (
                                <motion.img
                                    src="http://localhost:3000/static/media/mishuk.png" // replace with your photo
                                    alt="Current"
                                    className="w-14 h-14 rounded-full border-4 border-blue-500 shadow-xl z-10 animate-pulse"
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1.1 }}
                                    transition={{ duration: 0.8, repeat: Infinity, repeatType: "mirror" }}
                                />
                            )}

                            {item.status === "upcoming" && (
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                >
                                    <Circle className="w-12 h-12 text-gray-400 bg-white rounded-full shadow-md border-2 border-gray-300" />
                                </motion.div>
                            )}

                            {/* Tooltip (shows on hover) */}
                            <div className="absolute bottom-16 left-1/2 -translate-x-1/2 hidden group-hover:block">
                                <div className="bg-gray-800 text-white text-xs px-3 py-2 rounded-lg shadow-lg max-w-[150px] text-center">
                                    {item.detail}
                                    <div className="absolute left-1/2 -bottom-2 -translate-x-1/2 w-3 h-3 bg-gray-800 rotate-45"></div>
                                </div>
                            </div>
                        </div>

                        {/* Task Label */}
                        <motion.div
                            className="mt-4 px-4 py-2 bg-white rounded-xl shadow-md text-sm font-medium text-gray-700"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.15 }}
                        >
                            {item.task}
                        </motion.div>
                    </div>
                ))}
            </div>
        </div>
    );
}
