import React from "react";
import { CheckCircle, XCircle } from "lucide-react";

const Highlight = ({ children }) => (
    <span className="font-semibold text-gray-800 bg-gray-100 px-1 rounded">
        {children}
    </span>
);

const ComparisonTable = () => {
    return (
        <div className="p-6 bg-gradient-to-br from-gray-50 to-white rounded-2xl shadow-lg">
            {/* Title */}
            <h2 className="text-3xl font-bold mb-6 text-gray-800 text-center">
                📊 Pros & Cons Comparison
            </h2>

            {/* Table */}
            <div className="overflow-x-auto">
                <table className="min-w-full border border-gray-200 rounded-xl overflow-hidden">
                    <thead className="bg-gradient-to-r from-gray-100 to-gray-200">
                        <tr>
                            <th className="py-3 px-6 text-left text-sm font-semibold text-gray-700">
                                Aspect
                            </th>
                            <th className="py-3 px-6 text-left text-sm font-semibold text-gray-700">
                                Our Paper
                            </th>
                            <th className="py-3 px-6 text-left text-sm font-semibold text-gray-700">
                                Their Paper
                            </th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                        {[
                            {
                                aspect: "Focus Area",
                                yours: (
                                    <>
                                        Optimizes <Highlight>ammonia emissions</Highlight> in{" "}
                                        <Highlight>fertilizer production</Highlight>
                                    </>
                                ),
                                new: (
                                    <>
                                        Optimizes <Highlight>nitrate leaching</Highlight> from{" "}
                                        <Highlight>coated Urea Super Granules (USG)</Highlight> in
                                        agriculture
                                    </>
                                ),
                            },
                            {
                                aspect: "Optimization Method",
                                yours: (
                                    <>
                                        Uses <Highlight>Particle Swarm Optimization (PSO)</Highlight>{" "}
                                        for <Highlight>ammonia emission modeling</Highlight>
                                    </>
                                ),
                                new: (
                                    <>
                                        Uses <Highlight>machine learning</Highlight> algorithms (
                                        <Highlight>ANN, SVM, RF</Highlight>) and{" "}
                                        <Highlight>RSM</Highlight> for nitrate leaching prediction
                                    </>
                                ),
                            },
                            {
                                aspect: "Results",
                                yours: (
                                    <>
                                        Achieves high accuracy with{" "}
                                        <Highlight>MSE of 0.0973</Highlight> in emission prediction
                                    </>
                                ),
                                new: (
                                    <>
                                        <Highlight>RSM</Highlight> outperforms other models for
                                        nitrate leaching, with strong statistical validation
                                    </>
                                ),
                            },
                            {
                                aspect: "Sustainability Impact",
                                yours: (
                                    <>
                                        Focuses on{" "}
                                        <Highlight>reducing ammonia emissions</Highlight> during
                                        fertilizer production
                                    </>
                                ),
                                new: (
                                    <>
                                        Focuses on <Highlight>reducing nitrate leaching</Highlight>,
                                        enhancing fertilizer efficiency in agriculture
                                    </>
                                ),
                            },
                            {
                                aspect: "Real-World Application",
                                yours: (
                                    <span className="flex items-center gap-2">
                                        <XCircle className="w-4 h-4 text-red-500" />
                                        Limited <Highlight>real-world testing</Highlight> of the
                                        optimized model
                                    </span>
                                ),
                                new: (
                                    <span className="flex items-center gap-2">
                                        <CheckCircle className="w-4 h-4 text-green-500" />
                                        More <Highlight>practical applications</Highlight> in
                                        optimizing agricultural practices
                                    </span>
                                ),
                            },
                            {
                                aspect: "Novelty",
                                yours: (
                                    <>
                                        <Highlight>PSO</Highlight> optimization technique in a
                                        manufacturing context
                                    </>
                                ),
                                new: (
                                    <>
                                        Uses common <Highlight>ML techniques</Highlight> (ANN, SVM,
                                        RF) for agricultural modeling
                                    </>
                                ),
                            },
                            {
                                aspect: "Optimization Factors",
                                yours: (
                                    <>
                                        Focuses on <Highlight>pressure</Highlight>,{" "}
                                        <Highlight>binder feed rate</Highlight>, and{" "}
                                        <Highlight>inlet temperature</Highlight>
                                    </>
                                ),
                                new: (
                                    <>
                                        Focuses on <Highlight>coating material proportions</Highlight> and{" "}
                                        <Highlight>curing time</Highlight>
                                    </>
                                ),
                            },
                            {
                                aspect: "Model Validation",
                                yours: (
                                    <>
                                        Uses <Highlight>MSE</Highlight> as the key validation measure
                                    </>
                                ),
                                new: (
                                    <>
                                        Uses multiple metrics (<Highlight>RMSE, MAE, NSE, WI</Highlight>) for
                                        thorough model evaluation
                                    </>
                                ),
                            },
                        ].map((row, index) => (
                            <tr
                                key={index}
                                className={`hover:bg-gray-50 transition ${index % 2 === 0 ? "bg-white" : "bg-gray-50"
                                    }`}
                            >
                                <td className="py-4 px-6 text-sm font-medium text-gray-700">
                                    {row.aspect}
                                </td>
                                <td className="py-4 px-6 text-sm text-gray-600">{row.yours}</td>
                                <td className="py-4 px-6 text-sm text-gray-600">{row.new}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Summary */}
            <div className="mt-6 p-5 bg-blue-50 border border-blue-100 rounded-xl">
                <h3 className="font-semibold text-lg text-blue-800 mb-2">🔎 Summary</h3>
                <p className="text-gray-700 leading-relaxed">
                    <span className="font-medium text-blue-700">Your Paper:</span> Focuses
                    on optimizing the <Highlight>fertilizer production</Highlight> process
                    using <Highlight>PSO</Highlight> to improve{" "}
                    <Highlight>ammonia emission</Highlight> modeling, achieving high
                    accuracy but needing more <Highlight>real-world testing</Highlight>.
                    <br />
                    <span className="font-medium text-green-700">New Paper:</span> Focuses
                    on <Highlight>agriculture</Highlight> and optimizing{" "}
                    <Highlight>nitrate leaching</Highlight> from USGs using{" "}
                    <Highlight>ML algorithms</Highlight>, with{" "}
                    <Highlight>RSM</Highlight> providing strong results and more{" "}
                    <Highlight>practical applications</Highlight>.
                </p>
            </div>
        </div>
    );
};

export default ComparisonTable;
