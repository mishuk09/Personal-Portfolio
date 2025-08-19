import React from "react";
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
} from "recharts";

const paperData = [
    { algorithm: "Particle Swarm Optimization (PSO)", count: 11 },
    { algorithm: "Modified Particle Swarm Optimization (PSO)", count: 2 },
    { algorithm: "Response Surface Methodology (RSM)", count: 3 },
    { algorithm: "Central Composite Design (CCD)", count: 2 },
    { algorithm: "Genetic Algorithm (GA)", count: 1 },
    { algorithm: "Artificial Neural Network (ANN)", count: 1 },
    { algorithm: "ANOVA", count: 3 },
    { algorithm: "ALFAM2 Model", count: 2 },
    { algorithm: "Critical Load Approach", count: 2 },
    { algorithm: "Swiss Nitrogen Deposition (SND) Model", count: 2 },
];

const ReviewResult = () => {
    return (
        <div className="max-w-7xl mx-auto py-10 px-6">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
                📊 Review Summary
            </h2>

            {/* <p className="text-lg text-gray-700 font-semibold">Total Reviews: 36</p>
            <p className="text-lg text-gray-700">Model/Algorithm Count: {paperData.reduce((acc, item) => acc + item.count, 0)}</p> */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:max-w-2xl mx-auto mb-4">
                {/* Total Reviews */}
                <div className="flex w-full items-center justify-between bg-gray-50 border-2 border-blue-500 px-5 py-3 rounded-xl hover:shadow-md transition">
                    <span className="text-gray-700 font-medium">Total Reviews</span>
                    <span className="text-2xl font-bold text-blue-600">36</span>
                </div>

                {/* Model / Algorithm Count */}
                <div className="flex w-full items-center justify-between bg-gray-50 border-2 border-blue-500 px-5 py-3 rounded-xl hover:shadow-md transition">
                    <span className="text-gray-700 font-medium">Model / Algorithm Count</span>
                    <span className="text-2xl font-bold text-green-600">
                        {paperData.reduce((acc, item) => acc + item.count, 0)}
                    </span>
                </div>
            </div>



            <ResponsiveContainer width="100%" height={500}>
                <BarChart
                    data={paperData}
                    margin={{ top: 20, right: 30, left: 0, bottom: 60 }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis
                        dataKey="algorithm"
                        angle={-25} // rotate labels for readability
                        textAnchor="end"
                        interval={0} // show all labels
                        height={80} // extra space for long names
                    />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="count" fill="#3b82f6" radius={[8, 8, 0, 0]} />
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
};

export default ReviewResult;
