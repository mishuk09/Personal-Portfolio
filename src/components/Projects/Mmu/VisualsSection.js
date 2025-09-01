import { BarChart3, ScatterChart, Radar } from "lucide-react";

export default function VisualsSection() {
    const visuals = [
        {
            title: "Taylor Diagrams",
            desc: "Showcases how well each ML model matches observed data in terms of correlation and variability.",
            icon: <BarChart3 className="w-10 h-10 text-blue-600" />,
        },
        {
            title: "Radar Charts",
            desc: "Visual comparison of multiple performance metrics (MAE, RMSE, R², NSE, WI) across models.",
            icon: <Radar className="w-10 h-10 text-green-600" />,
        },
        {
            title: "Scatter Plots",
            desc: "Displays predicted vs. actual nitrate leaching values to check model accuracy.",
            icon: <ScatterChart className="w-10 h-10 text-purple-600" />,
        },
    ];

    return (
        <section className="py-12   bg-white shadow rounded">
            <div className="max-w-6xl mx-auto px-6">
                <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
                    Visuals
                </h2>
                <div className="grid md:grid-cols-3 gap-6">
                    {visuals.map((v, idx) => (
                        <div
                            key={idx}
                            className="shadow-lg rounded-2xl border bg-white hover:shadow-2xl hover:scale-[1.02] transition-transform duration-300"
                        >
                            <div className="flex flex-col items-center text-center p-6 space-y-4">
                                {v.icon}
                                <h3 className="text-xl font-semibold text-gray-700">
                                    {v.title}
                                </h3>
                                <p className="text-gray-600 text-sm leading-relaxed">
                                    {v.desc}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
