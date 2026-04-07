import React, { useState } from "react";
import ThesisDisplay from "./ThesisDisplay";
import ReviewResult from "./ReviewResult";

const ThesisPlan = () => {
    const [activeTab, setActiveTab] = useState("objectives");

    const tabItems = [
        { id: "objectives", label: "🎯 Objectives" },
        { id: "methodology", label: "🔬 Methodology" },
        { id: "questions", label: "❓ Questions & Answers" },
        { id: "timeline", label: "📅 Timeline" },
        { id: "expectedOutcomes", label: "✅ Expected Outcomes" },
        { id: "ethicalAlignment", label: "🌱 Ethical & Islamic Alignment" },
        { id: "literatureReview", label: "📖 Literature Review" },
        { id: "reviewResults", label: "📊 Review Results" },
    ];


    return (
        <div className="bg-blue-50 min-h-screen">
            <div className="max-w-7xl mx-auto pt-28 pb-10">
                {/* Title & Description */}
                <div className="mb-12 text-center">
                    <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4 leading-tight">
                        📝 Advancing Green Processing of Biodegradable Fertilizers with AI
                    </h2>
                    <p className="text-lg font-medium text-gray-600">
                        MSc Research Plan | Mahadi Hasan Mishuk | Presented on 5th August 2025
                    </p>
                </div>
 <div className="mb-10"></div>
                {/* Executive Summary */}
                <div className="mb-16 bg-white border-2 border-blue-500 p-8 rounded-lg shadow-md">
                    <h2 className="text-3xl font-semibold text-green-700 mb-4">Executive Summary</h2>
                    <p className="text-lg text-gray-700 leading-relaxed">
                        This research addresses environmental issues caused by ammonia emissions during urea fertilizer production in Malaysia.
                        The project uses AI (Random Forest and PSO) to optimize fertilizer production and reduce NH₃ emissions.
                        It also evaluates farmers’ awareness of green practices to recommend sustainable solutions based on Islamic values and SDG 12.
                    </p>
                </div>


                {/* Tab Navigation */}
                <div className="flex flex-wrap border-b border-gray-300 justify-center gap-4 mb-10">
                    {tabItems.map((tab) => (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            className={`px-6 py-3 text-lg font-semibold border-b-4 transition-all duration-300
                            ${activeTab === tab.id
                                    ? "border-blue-500 text-blue-600"
                                    : "border-transparent text-gray-500 hover:text-blue-500"}`}
                        >
                            {tab.label}
                        </button>
                    ))}
                </div>

                {/* Tab Content */}
                <div className="bg-white p-6 rounded-lg shadow-lg border-2 border-gray-300 text-gray-800">
                    {activeTab === "objectives" && (
                        <div className=" bg-white p-8 rounded-lg shadow border border-gray-200">
                            <h2 className="text-3xl font-semibold text-green-600 mb-6">Objectives</h2>
                            <ul className="list-inside space-y-4 text-lg text-gray-700">
                                <li className="flex items-start space-x-3">
                                    <span className="text-green-600">✔️</span>
                                    <span>Predict NH₃ emissions using a Random Forest model.</span>
                                </li>
                                <li className="flex items-start space-x-3">
                                    <span className="text-green-600">✔️</span>
                                    <span>Optimize process parameters using Particle Swarm Optimization (PSO).</span>
                                </li>
                                <li className="flex items-start space-x-3">
                                    <span className="text-green-600">✔️</span>
                                    <span>Assess farmers’ awareness and willingness to adopt eco-friendly fertilizers.</span>
                                </li>
                                <li className="flex items-start space-x-3">
                                    <span className="text-green-600">✔️</span>
                                    <span>Promote sustainable agriculture through Islamic values and SDG 12.</span>
                                </li>
                            </ul>
                        </div>
                    )}


                    {activeTab === "methodology" && (
                        <div className=" grid md:grid-cols-2 gap-8">
                            {/* Technical Phase */}
                            <div className="bg-white p-6 rounded-lg shadow border border-gray-200 transition-all hover:shadow-xl">
                                <h2 className="text-2xl font-semibold text-green-600 mb-4">
                                    <span role="img" aria-label="lab">🔬</span> Technical Phase
                                </h2>
                                <ul className="list-disc list-inside text-lg text-gray-700 space-y-3">
                                    <li>Set up lab-scale fluidized bed granulation system.</li>
                                    <li>Collect NH₃ emission data from various conditions.</li>
                                    <li>Train Random Forest model for prediction.</li>
                                    <li>Apply PSO for optimization of production parameters.</li>
                                </ul>
                            </div>

                            {/* Social Phase */}
                            <div className="bg-white p-2 rounded-lg shadow-sm border-2 border-gray-300 transition-all hover:shadow-xl">
                                <h2 className="text-2xl font-semibold text-green-600 mb-4">
                                    <span role="img" aria-label="social">📊</span> Social Phase
                                </h2>
                                <ul className="list-disc list-inside text-lg text-gray-700 space-y-3">
                                    <li>Design and distribute survey to Malaysian farmers.</li>
                                    <li>Analyze awareness and willingness to adopt.</li>
                                    <li>Recommend awareness strategies and adoption plans.</li>
                                </ul>
                            </div>
                        </div>
                    )}


                    {activeTab === "questions" && (
                        <div className="">
                            <h2 className="text-3xl font-semibold text-green-600 mb-6">Research Questions & Answers</h2>
                            <div className="space-y-6">
                                {[{
                                    question: "Can AI models accurately predict ammonia emissions?",
                                    answer: "Yes, by training Random Forest models on lab-collected data, we can predict NH₃ levels under various conditions."
                                }, {
                                    question: "What are the optimal conditions to minimize NH₃ release?",
                                    answer: "Using PSO, we will identify ideal parameters like temperature and airflow to reduce NH₃ emissions during granulation."
                                }, {
                                    question: "What is the current level of awareness among farmers?",
                                    answer: "Preliminary results show limited awareness and hesitation due to lack of information and perceived cost barriers."
                                }, {
                                    question: "How can Islamic and SDG principles encourage adoption?",
                                    answer: "Environmental ethics in Islam and UN SDG 12 can be powerful motivators when included in awareness campaigns."
                                }].map((item, index) => (
                                    <div key={index} className="bg-white p-6 rounded-lg shadow border border-gray-200 transition-all hover:shadow-xl">
                                        <details className="group">
                                            <summary className="cursor-pointer font-semibold text-gray-600  text-xl group-hover:text-gray-800">
                                                <span role="img" aria-label="question">❓</span> {item.question}
                                            </summary>
                                            <p className="mt-3 text-gray-700 text-lg">{item.answer}</p>
                                        </details>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}


                    {activeTab === "timeline" && (
                        <div className="">
                            <h2 className="text-3xl font-semibold text-green-600 mb-6">Timeline</h2>
                            <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-3 text-gray-700">
                                <div className="bg-white p-2 rounded-lg shadow-sm border-2 border-gray-300 transition-all hover:shadow-xl">
                                    <h3 className="text-xl font-semibold text-green-700 flex items-center space-x-3">
                                        <span role="img" aria-label="calendar">📅</span>
                                        <span>Aug–Sep:</span>
                                    </h3>
                                    <p className="text-lg">Literature Review & Survey Design</p>
                                </div>
                                <div className="bg-white p-2 rounded-lg shadow-sm border-2 border-gray-300 transition-all hover:shadow-xl">
                                    <h3 className="text-xl font-semibold text-green-700 flex items-center space-x-3">
                                        <span role="img" aria-label="lab">🧪</span>
                                        <span>Oct–Nov:</span>
                                    </h3>
                                    <p className="text-lg">Lab Setup & Data Collection</p>
                                </div>
                                <div className="bg-white p-2 rounded-lg shadow-sm border-2 border-gray-300 transition-all hover:shadow-xl">
                                    <h3 className="text-xl font-semibold text-green-700 flex items-center space-x-3">
                                        <span role="img" aria-label="computer">💻</span>
                                        <span>Dec–Jan:</span>
                                    </h3>
                                    <p className="text-lg">AI Modeling & Optimization</p>
                                </div>
                                <div className="bg-white p-2 rounded-lg shadow-sm border-2 border-gray-300 transition-all hover:shadow-xl">
                                    <h3 className="text-xl font-semibold text-green-700 flex items-center space-x-3">
                                        <span role="img" aria-label="chart">📊</span>
                                        <span>Feb:</span>
                                    </h3>
                                    <p className="text-lg">Survey Analysis</p>
                                </div>
                                <div className="bg-white p-2 rounded-lg shadow-sm border-2 border-gray-300 transition-all hover:shadow-xl">
                                    <h3 className="text-xl font-semibold text-green-700 flex items-center space-x-3">
                                        <span role="img" aria-label="results">📈</span>
                                        <span>Mar:</span>
                                    </h3>
                                    <p className="text-lg">Result Compilation</p>
                                </div>
                                <div className="bg-white p-2 rounded-lg shadow-sm border-2 border-gray-300 transition-all hover:shadow-xl">
                                    <h3 className="text-xl font-semibold text-green-700 flex items-center space-x-3">
                                        <span role="img" aria-label="presentation">🎤</span>
                                        <span>Apr:</span>
                                    </h3>
                                    <p className="text-lg">Final Writing & Presentation</p>
                                </div>
                            </div>
                        </div>
                    )}


                    {activeTab === "expectedOutcomes" && (
                        <div className="">
                            <h2 className="text-3xl font-semibold text-green-600 mb-6">Expected Outcomes</h2>
                            <div className=" grid grid-cols-1 md:grid-cols-2   gap-3">
                                {[{
                                    outcome: "Accurate ammonia emission prediction model using AI.",
                                    icon: "🤖"
                                }, {
                                    outcome: "Optimized eco-friendly fertilizer production process.",
                                    icon: "🌱"
                                }, {
                                    outcome: "Farmer awareness insights and adoption strategies.",
                                    icon: "👩‍🌾"
                                }, {
                                    outcome: "Islamic and SDG-based educational recommendations.",
                                    icon: "📚"
                                }].map((item, index) => (
                                    <div key={index} className="bg-white p-6 rounded-lg shadow border border-gray-200 transition-all hover:shadow-xl">
                                        <div className="flex items-center space-x-3">
                                            <span className="text-green-600 text-2xl">{item.icon}</span>
                                            <span className="text-lg text-gray-700">{item.outcome}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}


                    {activeTab === "ethicalAlignment" && (
                        <div className="">
                            <h2 className="text-3xl font-semibold text-green-600 mb-6">Ethical & Islamic Alignment</h2>
                            <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-200 transition-all hover:shadow-xl">
                                <div className="flex items-center space-x-4 mb-4">
                                    <span className="text-green-600 text-3xl">☪️</span>
                                    <span className="text-xl text-gray-700 font-medium">
                                        Islamic Teachings & Sustainability
                                    </span>
                                </div>
                                <p className="text-lg text-gray-700 mt-4">
                                    Guided by Islamic teachings such as Al-Qasas 77 and Al-A’raf 56 that promote environmental protection, and aligned with UN SDG 12,
                                    this research integrates faith and sustainability in advancing agricultural practices.
                                </p>
                            </div>
                        </div>
                    )}

                    {activeTab === "literatureReview" && (
                        <div className="">
                            <ThesisDisplay />
                        </div>
                    )}

                    {activeTab === "reviewResults" && (
                        <div className="">
                            <ReviewResult />
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ThesisPlan;
