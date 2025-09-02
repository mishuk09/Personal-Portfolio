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
import ModelsSection from "./ModelsSection";
import ComparisonTable from "./ComparisonTable";
import DatasetTab from "./DatasetTab";



const ThesisSummary = () => {
    const [modalOpen, setModalOpen] = React.useState(false);

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
                            Proportional Impact Prediction Model of Coating Material on
                            <span className="font-bold bg-yellow-200 text-black px-1 rounded"> Nitrate Leaching</span>
                            of Slow-Release <span className="font-bold">Urea Super Granules (USG)</span>
                            Using <span className="font-bold bg-yellow-200 text-black px-1 rounded">Machine Learning</span>
                            and <span className="font-bold bg-yellow-200 text-black px-1 rounded">RSM Technique</span>
                        </a>
                    </h3>

                    {/* Description */}
                    <p className="text-gray-700 leading-relaxed text-justify">
                        This research introduces <span className="font-bold bg-yellow-200 text-black px-1 rounded">machine learning models</span>
                        to predict <span className="font-bold bg-yellow-200 text-black px-1 rounded">nitrate leaching</span>
                        from <span className="font-bold">Urea Super Granules (USG)</span> coated with different materials.
                        The study emphasizes optimizing coating techniques to reduce leaching, enhance
                        <span className="font-bold"> fertilizer efficiency</span>, and safeguard
                        <span className="font-bold"> groundwater</span> from contamination.
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
                        <li>
                            <span className="font-bold bg-yellow-200 px-1 rounded">T1</span> ➝ USG with{" "}
                            <span className="relative group font-bold cursor-pointer text-blue-700 hover:underline">
                                bentonite clay
                                <span className="absolute left-0 bottom-full mb-1 hidden group-hover:block w-56 bg-gray-900 text-white text-sm rounded-lg px-3 py-2 shadow-lg z-10">
                                    🟤 Acts as a <strong>binding agent</strong>, helping to coat USG granules effectively.
                                </span>
                            </span>{" "}
                            and{" "}
                            <span className="relative group font-bold cursor-pointer text-green-700 hover:underline">
                                neem oil
                                <span className="absolute left-0 bottom-full mb-1 hidden group-hover:block w-56 bg-gray-900 text-white text-sm rounded-lg px-3 py-2 shadow-lg z-10">
                                    🌿 Known to <strong>improve nitrogen uptake</strong> and reduce losses.
                                </span>
                            </span>{" "}
                            (without heat)
                        </li>

                        <li>
                            <span className="font-bold bg-yellow-200 px-1 rounded">T2</span> ➝ USG with{" "}
                            <span className="relative group font-bold cursor-pointer text-blue-700 hover:underline">
                                bentonite clay
                                <span className="absolute left-0 bottom-full mb-1 hidden group-hover:block w-56 bg-gray-900 text-white text-sm rounded-lg px-3 py-2 shadow-lg z-10">
                                    🟤 Provides <strong>structural stability</strong> to the coating.
                                </span>
                            </span>{" "}
                            and{" "}
                            <span className="relative group font-bold cursor-pointer text-green-700 hover:underline">
                                neem oil
                                <span className="absolute left-0 bottom-full mb-1 hidden group-hover:block w-56 bg-gray-900 text-white text-sm rounded-lg px-3 py-2 shadow-lg z-10">
                                    🌿 Helps in <strong>slow release of nitrogen</strong> when heated.
                                </span>
                            </span>{" "}
                            (with heat)
                        </li>

                        <li>
                            <span className="font-bold bg-yellow-200 px-1 rounded">T3</span> ➝ USG with{" "}
                            <span className="relative group font-bold cursor-pointer text-yellow-700 hover:underline">
                                sulfur
                                <span className="absolute left-0 bottom-full mb-1 hidden group-hover:block w-56 bg-gray-900 text-white text-sm rounded-lg px-3 py-2 shadow-lg z-10">
                                    🟡 Used to <strong>slow nutrient release</strong> and enhance efficiency.
                                </span>
                            </span>{" "}
                            and{" "}
                            <span className="relative group font-bold cursor-pointer text-amber-700 hover:underline">
                                acacia oil
                                <span className="absolute left-0 bottom-full mb-1 hidden group-hover:block w-56 bg-gray-900 text-white text-sm rounded-lg px-3 py-2 shadow-lg z-10">
                                    🟠 Works as a <strong>natural binder</strong>, improving coating adhesion.
                                </span>
                            </span>
                        </li>
                    </ul>

                    <p className="mt-4 text-gray-700 text-justify">
                        The use of these specific coatings was chosen for their potential to{" "}
                        <strong>optimize nitrogen release</strong> from{" "}
                        <strong>Urea Super Granules (USG)</strong> and{" "}
                        <strong>reduce nitrate leaching</strong>.
                    </p>

                    <p className="mt-4">
                        Goals:{" "}
                        <span className="font-bold bg-yellow-200 px-1 rounded">Predict nitrate leaching</span>,{" "}
                        <span className="font-bold">optimize coating</span>, and guide{" "}
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
                    <img
                        onClick={() => setModalOpen(true)}
                        src={dataimg}
                        alt="Data Collection"
                        className="mb-4 h-60 rounded border border-gray-300 cursor-pointer"
                    />
                    <p className="mb-4 text-gray-700">
                        <span className="font-bold bg-yellow-200 px-1 rounded">Inputs</span>: <span className="font-bold">Neem/Acacia oil</span>, <span className="font-bold">Clay/Sulfur</span>, <span className="font-bold">Curing time</span>. <br />
                        <span className="font-bold bg-yellow-200 px-1 rounded">Output</span>: <span className="font-bold">Nitrate leaching</span> measured over <span className="font-bold bg-yellow-200 px-1 rounded">32 days</span> using <span className="font-bold">spectrophotometry</span>.
                    </p>
                    <p className="text-gray-700">
                        The data was collected through the <span className="font-bold">cadmium reduction method</span>, which is used to determine <span className="font-bold">nitrate concentration</span> in the leachate.
                        After the soil columns were saturated and the fertilizers were applied, the leachate was collected at regular intervals (<span className="font-bold">every 8 days</span>) for <span className="font-bold">32 days</span>.
                        The <span className="font-bold">spectrophotometric analysis</span> of the leachate enabled precise measurement of nitrate levels, allowing the study to track nutrient release over time and evaluate the effectiveness of the different coating treatments.
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
                        <ModelsSection />


                        {/* <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3 mt-3">
                            {[

                                { name: "ANN", desc: "Artificial Neural Network", icon: "🤖" },
                                { name: "SVM", desc: "Support Vector Machine", icon: "📊" },
                                { name: "RF", desc: "Random Forest", icon: "🌳" },
                                { name: "M5P", desc: "M5 Model Tree", icon: "🌲" },
                                { name: "REPTree", desc: "Reduced Error Pruning Tree", icon: "🪵" },
                                { name: "RSM", desc: "Response Surface Methodology", icon: "📐" },
                            ].map((model, i) => (
                                <div
                                    key={i}
                                    className="p-4 bg-white rounded shadow-md hover:shadow-xl transition-transform transform hover:-translate-y-1"
                                >
                                    <h3 className="text-xl font-semibold text-blue-700">
                                        <span className="mr-2">{model.icon}</span>{model.name}
                                    </h3>
                                    <p className="mt-2 text-gray-600">{model.desc}</p>
                                </div>
                            ))}
                        </div> */}
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
                    <p className="text-gray-700 mb-6">
                        <span className="font-bold bg-yellow-200 px-1 rounded">RSM</span> performed best overall due to its ability to handle a small number of variables effectively, providing <span className="font-bold">accurate predictions</span> with fewer experimental trials.
                        <span className="font-bold bg-yellow-200 px-1 rounded"> RF</span> and <span className="font-bold bg-yellow-200 px-1 rounded">M5P</span> also showed strong performance.
                        However, <span className="font-bold">ANN</span> and <span className="font-bold">SVM</span> were less accurate, likely due to the <span className="font-bold">smaller dataset</span> used in the study.
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
                        <span className="font-bold bg-yellow-200 text-black px-1 rounded">RSM</span> proved most effective in predicting and optimizing
                        <span className="font-bold bg-yellow-200 text-black px-1 rounded"> minimum nitrate leaching</span>.
                        The optimized parameters included a combination of <span className="font-bold">neem/acacia oil</span>,
                        <span className="font-bold">clay/sulfur</span>, and <span className="font-bold">age of the coating</span>,
                        demonstrating significant improvements in <span className="font-bold">fertilizer efficiency</span> and
                        <span className="font-bold"> reduced pollution</span>.
                        These findings support <span className="font-bold">sustainable agriculture</span> 🌍, benefiting
                        <b> farmers</b>, <b> researchers</b>, and <b> policymakers</b> by promoting better fertilizer practices
                        and minimizing environmental impact.
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
                        <li>
                            👨‍🌾 <span className="font-bold bg-yellow-200 px-1 rounded">Farmers</span> ➝
                            Adopt <span className="font-bold">optimized coatings</span> for better yield.
                        </li>
                        <li>
                            🔬 <span className="font-bold bg-yellow-200 px-1 rounded">Researchers</span> ➝
                            Apply <span className="font-bold">ML</span> to <span className="font-bold">sustainable agriculture</span>
                            and explore <span className="font-bold">alternative biopolymers</span> or <span className="font-bold">synthetic materials</span> for coatings.
                        </li>
                        <li>
                            🏛️ <span className="font-bold bg-yellow-200 px-1 rounded">Policymakers</span> ➝
                            Use findings to guide <span className="font-bold">regulations</span> promoting
                            <span className="font-bold"> sustainable fertilizer practices</span>.
                        </li>
                    </ul>
                </motion.section>

                {/* <PaperComparison /> */}
                <ComparisonTable />

                <DatasetTab />

            </main>
        </div>
    );
};

export default ThesisSummary;
