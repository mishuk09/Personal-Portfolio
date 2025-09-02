import React, { useState } from "react";
import { Database, UserX, Lightbulb, CheckCircle } from "lucide-react";

const DatasetTab = () => {
    const [active, setActive] = useState(true);

    return (
        <div className="p-8 bg-gradient-to-br from-gray-50 via-white to-gray-100 rounded-3xl shadow-2xl backdrop-blur-sm">
            {/* Heading */}
            <h2 className="text-3xl font-extrabold text-center text-gray-900 mb-8">
                🤔 Dataset Handling Strategy
            </h2>

            {/* Tabs */}
            <div className="flex justify-center border-b border-gray-200 mb-6">
                <button
                    onClick={() => setActive(true)}
                    className={`flex items-center gap-2 px-6 py-3 text-base font-semibold rounded-t-2xl transition-all duration-300 ${active
                        ? "bg-blue-100 text-blue-800 border-b-4 border-blue-600 shadow-sm"
                        : "text-gray-500 hover:text-blue-600 hover:bg-gray-50"
                        }`}
                >
                    <UserX className="w-5 h-5" /> What if we don’t get dataset?
                </button>
            </div>

            {/* Content */}
            {active && (
                <div className="p-7 bg-white rounded-2xl border border-gray-100 shadow-lg animate-fadeIn">
                    <div className="flex items-start gap-4">
                        <div className="flex-shrink-0">
                            <Database className="w-10 h-10 text-blue-600" />
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-gray-900 flex items-center gap-2">
                                <Lightbulb className="w-6 h-6 text-yellow-500" />
                                Solution: Use Our Own Dataset
                            </h3>
                            <p className="mt-3 text-gray-700 leading-relaxed">
                                If we don’t receive a dataset from another user, <b>no problem</b> 🚫.
                                We can create and use our own dataset to ensure the model is trained, tested, and validated effectively.
                                Here’s our approach:
                            </p>

                            {/* Steps */}
                            <ul className="mt-5 space-y-3">
                                {[
                                    "Collect relevant data from experiments or simulations",
                                    "Preprocess the dataset (cleaning, normalization, feature extraction)",
                                    "Split into Training, Validation, and Testing sets",
                                    "Train and evaluate the model with consistent metrics",
                                    "Deploy 🚀 and improve as more data becomes available",
                                ].map((step, idx) => (
                                    <li
                                        key={idx}
                                        className="flex items-start gap-2 text-gray-800"
                                    >
                                        <CheckCircle className="w-5 h-5 text-green-600 mt-0.5" />
                                        <span>{step}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default DatasetTab;
