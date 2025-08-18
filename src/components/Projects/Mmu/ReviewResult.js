import React from "react";

const paperData = [
    {
        algorithm: "Particle Swarm Optimization (PSO)",
        papers: ["Paper [1]", "Paper [4]", "Paper [9]", "Paper [10]", "Paper [11]", "Paper [12]", "Paper [13]", "Paper [14]", "Paper [15]", "Paper [16]", "Paper [17]"]
    },
    {
        algorithm: "Modified Particle Swarm Optimization (PSO)",
        papers: ["Paper [18]", "Paper [19]"]
    },
    {
        algorithm: "Response Surface Methodology (RSM)",
        papers: ["Paper [7]", "Paper [11]", "Paper [13]"]
    },
    {
        algorithm: "Central Composite Design (CCD)",
        papers: ["Paper [10]", "Paper [13]"]
    },
    {
        algorithm: "Genetic Algorithm (GA)",
        papers: ["Paper [4]"]
    },
    {
        algorithm: "Artificial Neural Network (ANN)",
        papers: ["Paper [8]"]
    }
];

const ReviewResult = () => {
    return (
        <div className="max-w-5xl mx-auto py-12 px-6">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
                📑 Papers Categorized by Algorithm
            </h2>

            <div className="overflow-x-auto shadow-lg rounded-2xl border border-gray-200">
                <table className="min-w-full text-sm">
                    <thead className="bg-gradient-to-r from-blue-100 to-blue-200">
                        <tr>
                            <th className="px-6 py-3 text-left text-gray-700 font-semibold">#</th>
                            <th className="px-6 py-3 text-left text-gray-700 font-semibold">Algorithm</th>
                            <th className="px-6 py-3 text-left text-gray-700 font-semibold">Papers</th>
                            <th className="px-6 py-3 text-center text-gray-700 font-semibold">Count</th>
                        </tr>
                    </thead>
                    <tbody>
                        {paperData.map((item, index) => (
                            <tr
                                key={index}
                                className={`${index % 2 === 0 ? "bg-white" : "bg-gray-50"
                                    } hover:bg-blue-50 transition`}
                            >
                                <td className="px-6 py-3 font-medium">{index + 1}</td>
                                <td className="px-6 py-3 font-semibold text-blue-600">{item.algorithm}</td>
                                <td className="px-6 py-3 text-gray-700">
                                    {item.papers.join(", ")}
                                </td>
                                <td className="px-6 py-3 text-center font-bold text-gray-800">
                                    {item.papers.length}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ReviewResult;
