import React from "react";
import { motion } from "framer-motion";
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
import { BookOpen, Database, Cog, CheckCircle } from "lucide-react";

const ThesisSummary = () => {
    // Pie chart data for ML model usage
    const modelData = [
        { name: "ANN", value: 20 },
        { name: "SVM", value: 15 },
        { name: "Random Forest", value: 25 },
        { name: "M5P", value: 10 },
        { name: "REPTree", value: 10 },
        { name: "RSM", value: 20 },
    ];
    const COLORS = ["#2563eb", "#10b981", "#f59e0b", "#ef4444", "#7c3aed", "#14b8a6"];

    // Bar chart data for coatings
    const coatingData = [
        { type: "T1: Clay + Neem Oil", nitrate: 60 },
        { type: "T2: Clay + Neem Oil + Heat", nitrate: 40 },
        { type: "T3: Sulfur + Acacia Oil", nitrate: 30 },
    ];

    return (
        <div className="min-h-screen mt-16 bg-gradient-to-br from-green-50 to-blue-50 text-gray-800">
            {/* Header */}
            <header className="bg-gradient-to-r from-green-600 to-blue-600 text-white py-20 shadow-lg">
                <div className="max-w-5xl mx-auto text-center px-6">
                    <h1 className="text-4xl md:text-5xl font-bold">
                        🌱 Nitrate Leaching Prediction Study
                    </h1>
                    <p className="mt-2 text-lg opacity-90">
                        Optimizing Urea Super Granules (USG) Coatings using Machine Learning
                    </p>
                </div>
            </header>

            {/* Content */}
            <main className="max-w-5xl mx-auto px-6 py-10 space-y-10">
                {/* Section 1: Study Scope */}
                <motion.section
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="bg-white p-6 md:p-8 rounded-2xl shadow-md"
                >
                    <h2 className="flex items-center gap-2 text-2xl font-semibold text-blue-600 mb-4">
                        <BookOpen className="w-6 h-6 text-green-500" /> 1. Study Scope
                    </h2>
                    <ul className="list-disc list-inside space-y-2 text-gray-700 leading-relaxed">
                        <li>Predict nitrate leaching from coated USG using ML.</li>
                        <li>Compare algorithms: ANN, SVM, RF, M5P, REPTree, RSM.</li>
                        <li>Optimize coatings for efficiency & sustainability.</li>
                        <li>Provide insights for <b>farmers 👨‍🌾</b> and <b>policy makers 🏛️</b>.</li>
                    </ul>
                </motion.section>

                {/* Section 2: Data */}
                <motion.section
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    className="bg-white p-6 md:p-8 rounded-2xl shadow-md"
                >
                    <h2 className="flex items-center gap-2 text-2xl font-semibold text-blue-600 mb-4">
                        <Database className="w-6 h-6 text-green-500" /> 2. Data
                    </h2>
                    <p className="mb-4 text-gray-700">
                        Experimental data collected from coating USG with oils, clays, sulfur,
                        and curing times. Nitrate leaching measured using spectrophotometer.
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-gray-700 leading-relaxed">
                        <li>Inputs: Neem/Acacia oil, Bentonite clay/Sulfur, Curing time.</li>
                        <li>Output: Nitrate leaching over 32 days.</li>
                        <li>
                            Coating types tested:
                            <ul className="list-disc ml-6 space-y-1">
                                <li>T1 ➝ Clay + Neem Oil (no heat)</li>
                                <li>T2 ➝ Clay + Neem Oil (with heat)</li>
                                <li>T3 ➝ Sulfur + Acacia Oil</li>
                            </ul>
                        </li>
                    </ul>

                    {/* Bar Chart */}
                    <div className="w-full h-72 mt-6">
                        <ResponsiveContainer>
                            <BarChart data={coatingData}>
                                <XAxis dataKey="type" />
                                <YAxis />
                                <Tooltip />
                                <Legend />
                                <Bar dataKey="nitrate" fill="#10b981" radius={[6, 6, 0, 0]} />
                            </BarChart>
                        </ResponsiveContainer>
                    </div>
                </motion.section>

                {/* Section 3: Methods */}
                <motion.section
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="bg-white p-6 md:p-8 rounded-2xl shadow-md"
                >
                    <h2 className="flex items-center gap-2 text-2xl font-semibold text-blue-600 mb-4">
                        <Cog className="w-6 h-6 text-green-500" /> 3. Methods
                    </h2>
                    <p className="mb-4 text-gray-700">
                        Soil-column experiments with coated USG ➝ irrigated ➝ leachate analyzed.
                        ML models trained & validated with RMSE, MAE, NSE, WI, and R metrics.
                    </p>

                    {/* Pie Chart */}
                    <div className="w-full h-80 mt-6">
                        <ResponsiveContainer>
                            <PieChart>
                                <Pie
                                    data={modelData}
                                    cx="50%"
                                    cy="50%"
                                    outerRadius={120}
                                    dataKey="value"
                                    label
                                >
                                    {modelData.map((entry, index) => (
                                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                    ))}
                                </Pie>
                                <Tooltip />
                                <Legend />
                            </PieChart>
                        </ResponsiveContainer>
                    </div>
                </motion.section>

                {/* Conclusion */}
                <motion.section
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.9 }}
                    className="bg-gradient-to-r from-green-600 to-blue-600 p-6 md:p-8 rounded-2xl shadow-md text-white"
                >
                    <h2 className="flex items-center gap-2 text-2xl font-semibold mb-4">
                        <CheckCircle className="w-6 h-6 text-white" /> Conclusion
                    </h2>
                    <p className="text-lg leading-relaxed">
                        Machine Learning models successfully predicted nitrate leaching and
                        identified optimal USG coatings 🌍. This study supports{" "}
                        <b>sustainable agriculture</b> with reduced environmental impact and
                        provides valuable insights for <b>researchers, farmers, and policymakers</b>.
                    </p>
                </motion.section>
            </main>
        </div>
    );
};

export default ThesisSummary;
