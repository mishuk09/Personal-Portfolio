import React from "react";
import {
    Database,
    Shuffle,
    TreeDeciduous,
    Cpu,
    BarChart2,
    
    ListChecks,
    X,
} from "lucide-react";

import KaTeX from "@matejmazur/react-katex";  // Default export
import 'katex/dist/katex.min.css'; // Import KaTeX CSS

const MathDisplay = ({ latex }) => (
  <div className="font-mono text-lg text-gray-700 block my-2 overflow-x-auto">
    {/* Use KaTeX to render LaTeX */}
    <KaTeX math={latex} />
  </div>
);

// const Step = ({ icon: Icon, title, description, className = "" }) => (
//     <div
//         className={`flex items-start space-x-5 p-6 border border-gray-200 rounded-lg shadow-sm hover:shadow-lg transition-shadow bg-white ${className}`}
//     >
//         <div className="text-indigo-600 mt-1">
//             <Icon size={36} />
//         </div>
//         <div>
//             <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
//             <p
//                 className="text-gray-700 whitespace-pre-line leading-relaxed"
//                 dangerouslySetInnerHTML={{ __html: description }}
//             />
//         </div>
//     </div>
// );


const Step = ({ icon: Icon, title, description, className = "" }) => (
    <div
        className={`flex items-start space-x-5 p-6 border border-gray-200 rounded-lg shadow-sm hover:shadow-lg transition-shadow bg-white ${className}`}
    >
        <div className="text-indigo-600 mt-1">
            <Icon size={36} />
        </div>
        <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
            <p
                className="text-gray-700 whitespace-pre-line leading-relaxed"
                dangerouslySetInnerHTML={{ __html: description }}
            />
        </div>
    </div>
);  

export default function RandomForestSimple() {
    // Your specific performance results (based on the provided output)
  const rfResults = {
    mse: '0.00805',
    r2: '0.974',
    mse_dt: '0.01519', // For comparison against the base model (Decision Tree)
    mse_lr: '0.33696', // For comparison against Linear Regression (Worst)
  };
    return (
        <div className="bg-blue-50">
            <section className="max-w-7xl mx-auto px-8 pt-32">
                <h1 className="text-4xl font-extrabold text-center text-gray-900 mb-14">
                    Using <span className="text-indigo-600">Random Forest Model</span> for Ammonia Emission Prediction
                </h1>

                <Step
                    icon={Database}
                    title="1. Prepare Data"
                    description={`- We can use our main process variables like <b>Pressure</b>, <b>Binder Feed Rate</b>, and <b>Temperature</b> as inputs.<br/>- Our goal here is to predict how much <b>Ammonia</b> will be released.<br/>- Let’s organize our measurements in a clear <b>table</b> for the model.`}
                />

                <Step
                    className="mt-3"
                    icon={Shuffle}
                    title="2. Split Data into Train and Test Sets"
                    description={`- We'll divide our data into two parts: one for <b>training</b>  and one for <b>testing</b> .<br/>- A common split is <b>70–80%</b> for training and the rest for testing.<br/>- Using <b>cross-validation</b> is a good idea, especially if we don’t have a lot of data.`}
                />

                <Step
                    className="mt-3"
                    icon={TreeDeciduous}
                    title="3. Set Up the Random Forest Model"
                    description={`- We'll use a <b>Random Forest Regressor</b>, which combines many <b>decision trees</b> together.<br/>- For smaller datasets, we can keep the number of <b>trees</b> between <b>5 and 30</b>.<br/>- It’s better to limit the <b>tree depth</b> so the model doesn’t <b>overfit</b>.<br/>- We can also set the <b>minimum samples per leaf</b> to 1 or 2 for more stable results.`}
                />

                <Step
                    className="mt-3"
                    icon={Cpu}
                    title="4. Train the Model"
                    description={`- Now we’ll <b>train</b> our Random Forest on the training data.<br/>- While training, we can tune parameters like the <b>number of trees</b> and <b>tree depth</b> to improve performance.<br/>- Using something like <b>5-fold cross-validation</b> helps us get more reliable results.`}
                />

                <Step
                    className="mt-3"
                    icon={BarChart2}
                    title="5. Check Model Performance"
                    description={`- Next, we’ll <b>test</b> the model on data it hasn’t seen before.<br/>- We’ll measure how well it performs using simple metrics:<br/> • <b>RMSE</b> (average size of errors)<br/> • <b>MAE</b> (average absolute errors)<br/> • <b>R²</b> (how much variation the model explains)<br/>- It’s also useful to plot <b>predicted vs actual values</b> to see how close we are.`}
                />

                {/* <Step
                    className="mt-3"
                    icon={Activity}
                    title="6. Understand What Affects Ammonia Release"
                    description={`- We can check <b>feature importance</b> scores from the model.<br/>- This shows us which <b>variables</b> have the biggest impact.<br/>- It helps us improve the process by focusing on <b>key factors</b>.<br/>- We should explain the results in <b>simple terms</b> so everyone can understand.`}
                /> */}

                <Step
                    className="mt-3"
                    icon={ListChecks}
                    title="Extra Tips for Small Data"
                    description={`- Since our dataset is <b>small</b>, <b>cross-validation</b> is extra important.<br/>- If possible, we can try generating <b>extra data</b> or use <b>bootstrapping</b>.<br/>- It’s always good to compare <b>Random Forest</b> results with simpler models like <b>Linear Regression</b>.<br/>- And don’t forget to mention any <b>limitations</b> caused by the small data size.`}
                />

                {/* Summary */}
                <div className="mt-10 p-6 border-l-4 border-indigo-600 bg-indigo-50 rounded-md">
                    <h2 className="text-2xl font-bold mb-3 text-indigo-700">Summary</h2>
                    <p className="text-gray-800 leading-relaxed">
                        <b>Random Forest</b> is a strong, easy-to-use model for predicting <b>Ammonia Emissions</b> from your process data.
                        It builds many simple <b>decision trees</b> and combines their answers to get better accuracy,
                        even when you have only a <b>small dataset</b>. Following these easy steps will help you
                        <b>build</b>, <b>test</b>, and <b>explain</b> your model effectively.
                    </p>
                </div>
            </section>
            <div className="p-8 bg-gray-50 min-h-screen">
      
      {/* HEADER AND PERFORMANCE SUMMARY */}
      <header className="mb-10 text-center">
        <h1 className="text-4xl font-extrabold text-indigo-700">
          Random Forest: Optimal Ammonia Emission Model
        </h1>
        <p className="mt-2 text-xl text-gray-600">
          Proof of Concept: Superior Accuracy Through Ensemble Learning
        </p>
      </header>

      {/* PERFORMANCE METRICS PROOF */}
      <section className="mb-12 p-6 bg-white rounded-xl shadow-lg border border-indigo-100">
        <h2 className="text-2xl font-bold text-indigo-600 mb-4">
          1. The Performance Proof
        </h2>
        <div className="flex justify-around items-center text-center">
          <div className="p-4 border-r">
            <p className="text-4xl font-extrabold text-green-600">{rfResults.mse}</p>
            <p className="text-sm text-gray-500">Lowest Mean Squared Error (MSE)</p>
          </div>
          <div className="p-4 border-r">
            <p className="text-4xl font-extrabold text-green-600">{rfResults.r2}</p>
            <p className="text-sm text-gray-500">Highest R² Score (97.4% Explained)</p>
          </div>
          <div className="p-4">
            <p className="text-xl font-bold text-red-500">
              {((rfResults.mse_dt / rfResults.mse) * 100).toFixed(0)}% More Accurate Than Single Tree
            </p>
            <p className="text-sm text-gray-500">Result of Variance Reduction</p>
          </div>
        </div>
      </section>

      {/* CORE MECHANISM: ENSEMBLE LEARNING */}
      <section className="mb-12 p-6 bg-white rounded-xl shadow-lg border border-blue-100">
        <h2 className="text-2xl font-bold text-blue-600 mb-4">
          2. The Core Mechanism: Ensemble (Committee of Experts)
        </h2>
        <div className="grid md:grid-cols-3 gap-6 mt-4">
          
          <div className="p-4 bg-blue-50 rounded-lg shadow-inner">
            <h3 className="font-semibold text-lg text-blue-800">Bagging & Variance Reduction</h3>
            <p className="text-sm text-gray-700 mt-1">
              Random Forest builds hundreds of Decision Trees, each trained on a random subset of data. This "Bootstrap Aggregating" prevents any single tree from memorizing the noise (overfitting).
            </p>
          </div>
          
          <div className="p-4 bg-blue-50 rounded-lg shadow-inner">
            <h3 className="font-semibold text-lg text-blue-800">Non-Linearity Advantage</h3>
            <p className="text-sm text-gray-700 mt-1">
              Chemical processes are curved (non-linear). RF uses non-linear trees to perfectly trace these complex relationships, unlike Linear Regression (MSE: {rfResults.mse_lr}) which only draws a straight line.
            </p>
          </div>
          
          <div className="p-4 bg-blue-50 rounded-lg shadow-inner">
            <h3 className="font-semibold text-lg text-blue-800">Final Prediction (Averaging)</h3>
            <p className="text-sm text-gray-700 mt-1">
              The final Ammonia prediction is the average of all individual predictions from the entire forest. This averaging effect cancels out random errors, ensuring high stability.
            </p>
          </div>
          
        </div>
        
        <h3 className="font-semibold text-lg text-blue-800 mt-6 mb-2">
          {/* Key Equation: RF Final Prediction ($\hat{Y}_{\text{RF}}$) */}
        </h3>
                       <MathDisplay latex="\hat{Y}_{\text{RF}}(\mathbf{X}) = \frac{1}{N_{\text{tree}}} \sum_{n=1}^{N_{\text{tree}}} h_n(\mathbf{X})" />

        <p className="text-sm text-gray-500 italic mt-1">
          Where $h_n(\mathbf{X})$ is the prediction of the $n$-th Decision Tree.
        </p>
      </section>

      {/* METRIC EQUATIONS AND DEFINITIONS */}
      <section className="p-6 bg-white rounded-xl shadow-lg border border-green-100">
        <h2 className="text-2xl font-bold text-green-600 mb-4">
          3. Evaluation Metrics Explained
        </h2>
        
        <div className="space-y-6">
          
          <div>
            <h3 className="font-semibold text-xl text-gray-800">Mean Squared Error (MSE)</h3>
            <p className="text-sm text-gray-600">
              Measures the average of the squared errors. It heavily penalizes large, infrequent mistakes.
            </p>
                            <MathDisplay latex="\text{MSE} = \frac{1}{n} \sum_{i=1}^{n} (Y_i - \hat{Y}_i)^2" />

          </div>

          <div>
            <h3 className="font-semibold text-xl text-gray-800">R² Score (Coefficient of Determination)</h3>
            <p className="text-sm text-gray-600">
              Measures the proportion of the variance in the target variable that is explained by the model (97.4% in your case).
            </p>
                <MathDisplay latex="R^2 = 1 - \frac{\sum (Y_i - \hat{Y}_i)^2}{\sum (Y_i - \bar{Y})^2}" />
          </div>
          
          <div>
            <h3 className="font-semibold text-xl text-gray-800">Cross-Validation (CV_MSE & CV_STD)</h3>
            <p className="text-sm text-gray-600">
              Calculated by averaging the MSE across 5 different test/train splits. A low CV Standard Deviation (CV_STD) confirms the model's high stability and reliability.
            </p>
          </div>
          
        </div>
      </section>

    </div>

        </div>
    );
}
