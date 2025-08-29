import React from "react";
import { motion } from "framer-motion";
import dataimg from '../img/data.webp';

import {
    PieChart,
    Pie,
    Cell,
    BarChart,
    Bar,
    XAxis,
    YAxis,
    Tooltip,
    Legend,
    ResponsiveContainer,
} from "recharts";
import {
    BookOpen,
    Database,
    Cog,
    BarChart3,
    Lightbulb,
    CheckCircle,
    Users,
} from "lucide-react";
import MethodologyFlow from "./MethodologyFlow";
import VisualsSection from "./VisualsSection";



const ThesisSummary = () => {
    const [modalOpen, setModalOpen] = React.useState(false);
    // Pie chart data for ML models
    const modelData = [
        { name: "RSM", value: 30 },
        { name: "RF", value: 20 },
        { name: "M5P", value: 15 },
        { name: "ANN", value: 10 },
        { name: "SVM", value: 10 },
        { name: "REPTree", value: 15 },
    ];
    const COLORS = ["#2563eb", "#10b981", "#f59e0b", "#ef4444", "#7c3aed", "#14b8a6"];

    // Bar chart data for sample model performance (T1 Coating)
    const perfData = [
        { model: "ANN", R: 0.55, RMSE: 0.25 },
        { model: "SVM", R: 0.56, RMSE: 0.25 },
        { model: "RF", R: 0.86, RMSE: 0.16 },
        { model: "RSM", R: 0.97, RMSE: 0.08 },
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br bg-blue-50 text-gray-800">

            {
                modalOpen && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
                        <div className="bg-white rounded-lg p-6 max-w-[500px] mx-auto overflow-hidden overflow-y-auto max-h-[80vh]">
                            <h2 className="text-xl font-semibold mb-4">Data Collection</h2>
                            <img src={dataimg} alt="Data Collection" className="mb-4 rounded object-cover w-full  " />
                            <p className="text-gray-700">
                                This image illustrates the data collection process for the study.
                            </p>
                            <button
                                onClick={() => setModalOpen(false)}
                                className="mt-4 bg-blue-600 text-white py-2 px-4 rounded"
                            >
                                Close
                            </button>
                        </div>
                    </div>
                )
            }


            {/* Header */}
            <header className="bg-gradient-to-r from-green-600 to-blue-600 text-white py-16 shadow-lg mt-16">
                <div className="max-w-7xl mx-auto text-center px-6">
                    <h1 className="text-4xl md:text-5xl font-bold">
                        🌱 Nitrate Leaching Prediction Study
                    </h1>
                    <p className="mt-2 text-lg opacity-90">
                        Proportional Impact Prediction of Coating Materials on USG using ML & RSM
                    </p>
                </div>
            </header>

            {/* Content */}
            <main className="max-w-7xl mx-auto px-6 py-10 space-y-10">
                {/* Overview */}
                <motion.section
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="bg-white p-6 md:p-10 rounded-2xl shadow border border-gray-100"
                >
                    {/* Header */}
                    <h2 className="flex items-center gap-3 text-2xl font-bold text-gray-800 mb-4">
                        <BookOpen className="w-7 h-7 text-blue-600" />
                        <span className="bg-blue-50 px-3 py-1 rounded-lg text-blue-600 text-sm font-medium">
                            Study Overview
                        </span>
                    </h2>

                    {/* Title */}
                    <h3 className="text-lg font-semibold text-gray-900 mb-3 leading-snug">
                        Title:{" "}
                        <a
                            href="https://www.nature.com/articles/s41598-024-53410-8#data-availability"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600 hover:text-blue-700 hover:underline transition"
                        >
                            Proportional Impact Prediction Model of Coating Material on Nitrate Leaching of Slow-Release Urea Super Granules (USG) Using Machine Learning and RSM Technique
                        </a>
                    </h3>

                    {/* Description */}
                    <p className="text-gray-700 leading-relaxed text-justify">
                        This research introduces machine learning models to predict nitrate leaching
                        from Urea Super Granules (USG) coated with different materials. The study
                        emphasizes optimizing coating techniques to reduce leaching, enhance
                        fertilizer efficiency, and safeguard groundwater from contamination.
                    </p>
                </motion.section>


                {/* Scope */}
                <motion.section
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="bg-white p-6 md:p-8 rounded-2xl shadow-md"
                >
                    <h2 className="flex items-center gap-2 text-2xl font-semibold text-blue-600 mb-3">
                        <Database className="w-6 h-6 text-green-500" /> Study Scope
                    </h2>
                    <ul className="list-disc list-inside space-y-2 text-gray-700 leading-relaxed">
                        {/* <li>T1 ➝ Clay + Neem Oil (no heat)</li> */}
                        <li>T1➝ USG with bentonite clay and neem oil (without heat)</li>
                        <li>T2➝ USG with bentonite clay and neem oil (with heat)</li>
                        <li>T3➝ USG with sulfur and acacia oil</li>
                    </ul>
                    <p className="mt-4">
                        Goals: Predict nitrate leaching, optimize coating, and guide{" "}
                        <b>farmers 👨‍🌾</b> and <b>policymakers 🏛️</b>.
                    </p>
                </motion.section>

                {/* Data */}
                <motion.section
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    className="bg-white p-6 md:p-8 rounded-2xl shadow-md"
                >
                    <h2 className="flex items-center gap-2 text-2xl font-semibold text-blue-600 mb-3">
                        <Cog className="w-6 h-6 text-green-500" /> Data Collection
                    </h2>
                    <img onClick={() => setModalOpen(true)} src={dataimg} alt="Data Collection" className="mb-4 h-60 rounded border border-gray-300 cursor-pointer" />
                    <p className="mb-4 text-gray-700">
                        Inputs: Neem/Acacia oil, Clay/Sulfur, Curing time. <br />
                        Output: Nitrate leaching measured over 32 days using spectrophotometry.
                    </p>
                </motion.section>

                {/* Methods & ML Models Section */}
                <section className="py-12  ">
                    <div className=" ">
                        {/* Title */}
                        <h2 className="text-3xl font-bold text-center text-blue-700 mb-10">
                            Methods & Machine Learning Models
                        </h2>

                        {/* Flowchart */}
                        <MethodologyFlow />

                        {/* Card Grid */}
                        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3 mt-3">
                            {[
                                { name: "ANN", desc: "Artificial Neural Network" },
                                { name: "SVM", desc: "Support Vector Machine" },
                                { name: "RF", desc: "Random Forest" },
                                { name: "M5P", desc: "M5 Model Tree" },
                                { name: "REPTree", desc: "Reduced Error Pruning Tree" },
                                { name: "RSM", desc: "Response Surface Methodology" },
                            ].map((model, i) => (
                                <div
                                    key={i}
                                    className="p-4 bg-white rounded shadow-md hover:shadow-xl transition-transform transform hover:-translate-y-1"
                                >
                                    <h3 className="text-xl font-semibold text-blue-700">{model.name}</h3>
                                    <p className="mt-2 text-gray-600">{model.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>


                {/* <MethodologyFlow /> */}
                <VisualsSection />
                {/* Results */}
                <motion.section
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.9 }}
                    className="bg-white p-6 md:p-8 rounded-2xl shadow-md"
                >
                    <h2 className="flex items-center gap-2 text-2xl font-semibold text-blue-600 mb-3">
                        <Lightbulb className="w-6 h-6 text-green-500" /> Results & Performance
                    </h2>
                    <p className="text-gray-700 mb-4">
                        RSM performed best overall. RF & M5P also strong. ANN & SVM weaker with small datasets.
                    </p>

                    {/* Bar Chart */}
                    <div className="w-full h-72 mt-6">
                        <ResponsiveContainer>
                            <BarChart data={perfData}>
                                <XAxis dataKey="model" />
                                <YAxis />
                                <Tooltip />
                                <Legend />
                                <Bar dataKey="R" fill="#2563eb" radius={[6, 6, 0, 0]} />
                                <Bar dataKey="RMSE" fill="#10b981" radius={[6, 6, 0, 0]} />
                            </BarChart>
                        </ResponsiveContainer>
                    </div>
                </motion.section>

                {/* Conclusion */}
                <motion.section
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    className="bg-gradient-to-r from-green-600 to-blue-600 p-6 md:p-8 rounded-2xl shadow-md text-white"
                >
                    <h2 className="flex items-center gap-2 text-2xl font-semibold mb-3">
                        <CheckCircle className="w-6 h-6 text-white" /> Conclusion
                    </h2>
                    <p className="text-lg leading-relaxed">
                        RSM proved most effective in predicting and optimizing nitrate leaching.
                        Findings support <b>sustainable agriculture</b> 🌍 with improved fertilizer efficiency and reduced pollution.
                        Beneficial for <b>farmers</b>, <b>researchers</b>, and <b>policymakers</b>.
                    </p>
                </motion.section>

                {/* Call to Action */}
                <motion.section
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.1 }}
                    className="bg-white p-6 md:p-8 rounded-2xl shadow-md"
                >
                    <h2 className="flex items-center gap-2 text-2xl font-semibold text-blue-600 mb-3">
                        <Users className="w-6 h-6 text-green-500" /> Call to Action
                    </h2>
                    <ul className="list-disc list-inside space-y-2 text-gray-700">
                        <li>👨‍🌾 Farmers ➝ Adopt optimized coatings for better yield.</li>
                        <li>🔬 Researchers ➝ Apply ML to sustainable agriculture.</li>
                        <li>🏛️ Policymakers ➝ Use findings to guide regulations.</li>
                    </ul>
                </motion.section>
            </main>
        </div>
    );
};

export default ThesisSummary;
