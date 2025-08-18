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
];

const ReviewResult = () => {
    return (
        <div className="max-w-7xl mx-auto py-12 px-6">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
                📊 Paper Distribution by Algorithm
            </h2>

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
