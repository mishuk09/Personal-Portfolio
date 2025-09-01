import { useState } from "react";
import 'katex/dist/katex.min.css';
import { BlockMath } from 'react-katex';
import { Brain, FunctionSquare } from "lucide-react";

export default function ModelsTabs() {
    const [activeTab, setActiveTab] = useState("ai");

    return (
        <div className="w-full mt-10">
            {/* Tabs Header */}
            <div className="flex justify-center gap-4 mb-6">
                <button
                    onClick={() => setActiveTab("ai")}
                    className={`flex  w-full h-6 md:h-20  items-center gap-2 px-6 py-2 rounded font-semibold shadow-md transition-all 
          ${activeTab === "ai" ? "bg-blue-600 text-white shadow-lg" : "bg-white text-blue-600 border"}`}
                >
                    <Brain className="w-5 h-5" /> AI Models
                </button>
                <button
                    onClick={() => setActiveTab("rsm")}
                    className={`flex w-full h-6 md:h-20  items-center gap-2 px-6 py-2 rounded font-semibold shadow-md transition-all 
          ${activeTab === "rsm" ? "bg-blue-600 text-white shadow-lg" : "bg-white text-blue-600 border"}`}
                >
                    <FunctionSquare className="w-5 h-5" /> RSM
                </button>
            </div>

            {/* Tab Content */}
            <div className="p-6 bg-white rounded shadow-lg transition-all duration-500">
                {activeTab === "ai" && (
                    <div className="space-y-5 p-6">
                        <h2 className="text-2xl font-bold text-blue-700">🤖 AI Models (ANN, SVM, RF, M5P, REPTree)</h2>
                        <p className="text-gray-700">
                            These AI models are used for <strong>predicting nitrate leaching</strong>
                            based on input variables. Their performance is evaluated using the following metrics:
                        </p>

                        <ul className="grid sm:grid-cols-2 gap-3 text-gray-700 mt-3">
                            <li className="bg-gray-50 p-3 rounded-lg shadow-sm">📊 <strong>RMSE</strong> (Root Mean Square Error)</li>
                            <li className="bg-gray-50 p-3 rounded-lg shadow-sm">📉 <strong>MAE</strong> (Mean Absolute Error)</li>
                            <li className="bg-gray-50 p-3 rounded-lg shadow-sm">⚡ <strong>NSE</strong> (Nash-Sutcliffe Efficiency)</li>
                            <li className="bg-gray-50 p-3 rounded-lg shadow-sm">📐 <strong>WI</strong> (Willmott Index)</li>
                            <li className="bg-gray-50 p-3 rounded-lg shadow-sm">📈 <strong>R²</strong> (Coefficient of Determination)</li>
                        </ul>

                        {/* Equations */}
                        <div className="  p-6 rounded border-2 border-blue-500 shadow-inner space-y-6">
                            <h3 className="text-2xl font-semibold text-blue-600">📐 Mathematical Notation</h3>

                            <div className="space-y-4 divide-y divide-gray-300">
                                <div className="pt-2">
                                    <p className="font-medium text-gray-800">RMSE:</p>
                                    <BlockMath math="RMSE = \sqrt{\frac{1}{n} \sum_{i=1}^{n} (y_{\text{pred},i} - y_{\text{obs},i})^2}" />
                                </div>
                                <div className="pt-2">
                                    <p className="font-medium text-gray-800">MAE:</p>
                                    <BlockMath math="MAE = \frac{1}{n} \sum_{i=1}^{n} |y_{\text{pred},i} - y_{\text{obs},i}|" />
                                </div>
                                <div className="pt-2">
                                    <p className="font-medium text-gray-800">NSE:</p>
                                    <BlockMath math="NSE = 1 - \frac{\sum_{i=1}^{n} (y_{\text{pred},i} - y_{\text{obs},i})^2}{\sum_{i=1}^{n} (y_{\text{obs},i} - \overline{y_{\text{obs}}})^2}" />
                                </div>
                                <div className="pt-2">
                                    <p className="font-medium text-gray-800">WI:</p>
                                    <BlockMath math="WI = 1 - \frac{\sum_{i=1}^{n} (y_{\text{pred},i} - y_{\text{obs},i})^2}{\sum_{i=1}^{n} (|y_{\text{pred},i} - \overline{y_{\text{pred}}}| + |y_{\text{obs},i} - \overline{y_{\text{obs}}}|)^2}" />
                                </div>
                                <div className="pt-2">
                                    <p className="font-medium text-gray-800">R²:</p>
                                    <BlockMath math="R^2 = 1 - \frac{\sum_{i=1}^{n} (y_{\text{obs},i} - y_{\text{pred},i})^2}{\sum_{i=1}^{n} (y_{\text{obs},i} - \overline{y_{\text{obs}}})^2}" />
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {activeTab === "rsm" && (
                    <div className="space-y-6 p-6 animate-fadeIn">
                        {/* Title */}
                        <h2 className="text-3xl font-extrabold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                            📐 RSM (Response Surface Methodology)
                        </h2>

                        {/* Intro */}
                        <p className="text-gray-700 leading-relaxed">
                            The <strong>Response Surface Methodology (RSM)</strong> applies
                            <span className="text-blue-600 font-medium"> First-order</span> and
                            <span className="text-blue-600 font-medium"> Second-order polynomial models</span>
                            to describe relationships between input variables and the output
                            (<em>nitrate leaching</em>).
                        </p>

                        {/* First-order */}
                        <div className="p-5 rounded bg-white border border-gray-300 shadow-md  hover:shadow-xl transition-all">
                            <h3 className="text-xl font-semibold text-blue-700 mb-2">
                                🔹 First-order Polynomial Model
                            </h3>
                            <BlockMath math="y = \beta_0 + \beta_1 x_1 + \beta_2 x_2 + \beta_3 x_3 + \epsilon" />
                            <p className="text-sm text-gray-600 mt-2">
                                Captures the <strong>linear effect</strong> of variables on nitrate leaching.
                            </p>
                        </div>

                        {/* Second-order */}
                        <div className="p-5 rounded bg-white border border-gray-300 shadow-md te hover:shadow-xl transition-all">
                            <h3 className="text-xl font-semibold text-indigo-700 mb-3">
                                🔸 Second-order Polynomial Model
                            </h3>
                            <BlockMath math="y = \beta_0 + \beta_1 x_1 + \beta_2 x_2 + \beta_3 x_3 + \beta_{11} x_1^2 + \beta_{22} x_2^2 + \beta_{33} x_3^2 + \beta_{12} x_1 x_2 + \epsilon" />
                            <p className="text-sm text-gray-600 mt-2">
                                Incorporates <strong>quadratic terms</strong> and
                                <strong> interaction effects</strong> for non-linear optimization.
                            </p>
                        </div>

                        {/* Conclusion */}
                        <p className="text-gray-700 leading-relaxed mt-4 border-l-4 border-blue-500 pl-4">
                            ✅ These models help in <strong>optimizing nitrate leaching</strong>
                            by finding the best combination of input variables.
                        </p>
                    </div>
                )}

            </div>
        </div>
    );
}
