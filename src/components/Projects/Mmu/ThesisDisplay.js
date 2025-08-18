import React from "react";

const thesisData = [
    {
        "author_name": "S. O. Duffuaa",
        "title": "A Mathematical Optimization Model for Chemical Production at Saudi Arabia Fertilizer Company",
        "problem_statement": "This paper develops an economic optimization model for chemical production at SAFCO, specifically for ammonia and urea. It aims to minimize the production cost while meeting the required production targets using optimal reactor settings.",
        "model_algorithm_used": ["Particle Swarm Optimization (PSO)", "Quadratic Polynomial Model"]
    },
    {
        "author_name": "Norhidayah Mohamad, Nor Azlina Ab. Aziz, Anith Khairunnisa Ghazali, and Mohd. Rizal Salleh",
        "title": "Improving Ammonia Emission Model of Urea Fertilizer Fluidized Bed Granulation System using Particle Swarm Optimization for Sustainable Fertilizer Manufacturing Practice",
        "problem_statement": "The urea fertilizer manufacturing process, specifically the fluidized bed granulation system, releases ammonia into the environment. This ammonia contributes to eutrophication and acidification in ecosystems, potentially causing significant environmental harm. The challenge lies in accurately modeling ammonia emissions from this system to optimize the granulation process for sustainable fertilizer production while minimizing ammonia release.",
        "model_algorithm_used": ["Descriptive Statistics", "Ordered Regression (Ordinal Regression)"]
    },
    {
        "author_name": "Luo, W.; Li, Y.; Yang, Z.; Wang, Y.; Chen, J.; Xiao, X.; Chen, Y.; Wei, C.; Zou, Z.",
        "title": "Water and Nitrogen Balance under Various Water and Fertilizer Regulation Modes",
        "problem_statement": "The study investigates the water and nitrogen balance in paddy fields under different irrigation and nitrogen fertilizer application modes. The primary goal is to determine an optimal mode for paddy fields that reduces water usage, minimizes pollution, enhances fertilizer efficiency, and reduces gas emissions.",
        "model_algorithm_used": ["Tukey’s Test", "Redundancy Analysis (RDA)", "Principal Component Analysis (PCA)", "Quantitative PCR (qPCR)"]
    },
    {
        "author_name": "Alam, M.M., Mohd Ekhwan, T., Siwar, C., Molla, R.I., Talib, B.",
        "title": "The Impacts of Agricultural Supports for Climate Change Adaptation: Farm Level Assessment Study on Paddy Farmers",
        "problem_statement": "The study addresses the challenges of climate change adaptation for paddy farmers in Malaysia. Despite various government and NGO supports, farmers' adaptability remains low, and the study seeks to assess how these external supports impact the farmers' capability to adapt to climate change.",
        "model_algorithm_used": ["Particle Swarm Optimization (PSO)", "PID Controller Tuning", "System Identification", "Genetic Algorithm (GA)", "Linear Decreasing Inertia Weight (LDW-PSO)"]
    },
    {
        "author_name": "Zhang, Y.; Li, D.; Zhang, K.; Xiao, F.; Li, Y.; Du, Y.; Xue, Y.; Zhang, L.; Gong, P.; Song, Y.; et al.",
        "title": "The Effects of Long-Term Application of Stabilized and Coated Urea on Soil Chemical Properties, Microbial Community Structure, and Functional Genes in Paddy Fields",
        "problem_statement": "The study aims to evaluate the long-term impacts of different stabilized and coated urea fertilizers on soil properties, microbial composition, and functional genes in paddy fields. Specifically, it looks at changes in soil pH, organic matter, total nitrogen, phosphorus, potassium, and the structure of microbial communities (bacteria, fungi, and their related functional genes) after 16 years of fertilizer application.",
        "model_algorithm_used": ["311-A Optimization Regression Design", "Regression Analysis"]
    },
    {
        "author_name": "Alireza Alfi, Hamidreza Modares",
        "title": "System Identification and Control Using Adaptive Particle Swarm Optimization",
        "problem_statement": "The paper aims to improve the system identification and PID controller design by introducing a novel Adaptive Particle Swarm Optimization (APSO) algorithm. The challenge is to find optimal system parameters and control parameters efficiently, particularly addressing the shortcomings of traditional Particle Swarm Optimization (PSO) like slow convergence and tendency to get trapped in local minima. The goal is to enhance convergence speed and solution accuracy while minimizing computational burden.",
        "model_algorithm_used": ["Slow- and Controlled-Release Nanofertilizers (SRNFs & CRNFs)", "Nanocomposites"]
    },
    {
        "author_name": "Guangqing Li, Zhujie Xie, Xueqin Yao, Xuehao Chen",
        "title": "Study on the Mathematical Model of the Effects of NPK on Winter Cauliflower",
        "problem_statement": "The paper addresses the need to optimize the fertilization practices for cauliflower production by studying the effects of nitrogen (N), phosphorus (P), and potassium (K) on the yield, appearance eligibility ratio, and glucosinolate content of cauliflower. Over-fertilization has negative effects on the environment and yield, and a balanced approach is necessary for sustainable cultivation.",
        "model_algorithm_used": ["Review Synthesis", "Slow- and Controlled-Release Fertilizers"]
    },
    {
        "author_name": "Sidhartha Sekhar Swain, Tapan Kumar Khura, Pramod Kumar Sahoo, Kapil Atmaram Chobhe, Nadhir Al-Ansari, Hari Lal Kushwaha, Nand Lal Kushwaha, Kanhu Charan Panda, Satish Devram Lande, Chandu Singh",
        "title": "Proportional impact prediction model of coating material on nitrate leaching of slow-release Urea Super Granules (USG) using machine learning and RSM technique",
        "problem_statement": "The study aims to address the challenge of efficient nitrate leaching prediction for Urea Super Granules (USG), a slow-release fertilizer, which is important for minimizing groundwater pollution and improving fertilizer usage efficiency. Past methods have failed to model nitrate leaching effectively, and this research explores advanced techniques for accurate prediction and optimization of nitrate leaching based on various coating materials and their proportions.",
        "model_algorithm_used": ["Artificial Neural Network (ANN)", "Support Vector Machine (SVM)", "Random Forest (RF)", "M5P Model Tree (M5P)", "Reduced Error Pruning Tree (REPTree)", "Response Surface Methodology (RSM)"]
    },
    {
        "author_name": "Muhammad Alızada, Sıtkı Ozturk",
        "title": "PID and Fuzzy Logic Control of Ball and Beam System Using Particle Swarm Optimization",
        "problem_statement": "The ball and beam system (BBS) is a classic control problem where a ball is placed on a beam, and the objective is to control the position of the ball by adjusting the angle of the beam. The challenge lies in controlling the system's nonlinear dynamics to prevent the ball from losing its equilibrium. This research focuses on using PID and fuzzy logic control strategies to manage the BBS, with optimization performed using Particle Swarm Optimization (PSO) to improve system performance.",
        "model_algorithm_used": ["PID Controller", "Fuzzy Logic Controller (FLC)", "Particle Swarm Optimization (PSO)"]
    },
    {
        "author_name": "Mohammad Farid Saaid, Ahmad Ihsan Mohd Yassin, Nooritawati Md Tahir",
        "title": "Particle Swarm Optimization (PSO) Model for Hydroponics pH Control System",
        "problem_statement": "In hydroponic systems, maintaining an optimal pH level is critical for plant growth. The pH level of water is affected by the addition of nutrients, which is difficult to control due to the nonlinearity of the system. This study aims to optimize the pH control system using Particle Swarm Optimization (PSO) to accurately adjust the pH levels in a hydroponic setup.",
        "model_algorithm_used": ["Particle Swarm Optimization (PSO)", "Nonlinear Autoregressive Exogenous (NARX) Model"]
    },
    {
        "author_name": "Sreenivasa Rao M, Venkaiah N",
        "title": "Parametric Optimization in Machining of Nimonic-263 Alloy Using RSM and Particle Swarm Optimization",
        "problem_statement": "Machining of nickel-based alloys, particularly Nimonic-263, is challenging due to their hardness at elevated temperatures and high corrosion resistance. The aim of this study was to optimize the Wire Electrical Discharge Machine (WEDM) process parameters for Nimonic-263 alloy to improve performance measures like Material Removal Rate (MRR) and Surface Roughness (SR).",
        "model_algorithm_used": ["Response Surface Methodology (RSM)", "Central Composite Face-Centered Design (CCFCD)", "ANOVA", "Particle Swarm Optimization (PSO)"]
    },
    {
        "author_name": "M. Norhidayah, A. Shaaban, M. F. Dimin, M. Y. Norazlina, O. Rostam",
        "title": "Optimization of Biodegradable Urea Production Process to Minimize Ammonia Release through Response Surface Method Experimental Design",
        "problem_statement": "This study focuses on minimizing ammonia (NH3) emission during the biodegradable urea production process. Ammonia release is a significant environmental concern in urea fluidized bed granulation plants. The objective is to optimize the granulation process to reduce ammonia emissions while ensuring the quality of the produced granules.",
        "model_algorithm_used": ["Response Surface Methodology (RSM)", "Central Composite Design (CCD)"]
    },
    {
        "author_name": "Yanle Guo, Min Zhang, Zhiguang Liu, Xiaofei Tian, Shugang Zhang, Chenhao Zhao, Hao Lu",
        "title": "Modeling and Optimizing the Synthesis of Urea-formaldehyde Fertilizers and Analyses of Factors Affecting these Processes",
        "problem_statement": "Previous research on urea-formaldehyde fertilizer synthesis has been based on single-factor tests or orthogonal experimental designs, which resulted in low precision and large ranges of process parameters. This study aims to optimize the synthesis of urea-formaldehyde fertilizers, focusing on improving nitrogen release properties and controlling the ratio of nitrogen insoluble in hot or cold water.",
        "model_algorithm_used": ["Central Composite Design (CCD)", "Response Surface Methodology (RSM)", "Quadratic Polynomial Models"]
    },
    {
        "author_name": "Akter, A.; Islam, M.R.; Islam, M.R.; Islam, M.A.; Hasan, S.L.; Uddin, S.; Rahman, M.M.",
        "title": "Methods of Urea Fertilizer Application Influence Growth, Yield, and Nitrogen Use Efficiency of Transplanted Aman Rice",
        "problem_statement": "The study investigates how different urea application methods affect the growth, yield, and nitrogen use efficiency (NUE) of transplanted Aman rice. Urea's efficiency in rice production is limited due to nitrogen losses (e.g., volatilization and denitrification) from improper application methods, and the study aims to identify more effective techniques.",
        "model_algorithm_used": ["Randomized Complete Block Design (RCBD)", "Nitrogen Use Efficiency (NUE)", "Apparent Nitrogen Recovery (ANR)"]
    },
    {
        "author_name": "Julian Landauer, Andreas Kugi, Andreas Steinböck",
        "title": "Mathematical modelling of an electrostatic oiling machine for steel strips",
        "problem_statement": "The electrostatic oiling machine (EOM) is used in hot-dip galvanizing lines to apply a protective oil film on steel strips. The oil film thickness must be within specified limits to prevent defects in the steel strip. However, previous measurements revealed that the oil film thickness often exceeds these limits. The causes for these deviations were unclear. This paper develops a mathematical model to investigate the root causes of the non-uniformity in oil film thickness and to optimize the oiling process.",
        "model_algorithm_used": ["Two-Dimensional Steady-State Numerical Model", "Poisson’s Equation", "Navier-Stokes Equations", "Droplet Break-Up Model", "ANSYS Fluent"]
    },
    {
        "author_name": "S.K. Basu, Naveen Kumar",
        "title": "Mathematical model and computer simulation for release of nutrients from coated fertilizer granules",
        "problem_statement": "The study focuses on understanding the controlled release of nutrients from coated fertilizer granules. It aims to investigate the effects of granule radius, diffusion coefficient, and contact area with soil on the saturation and release times of the nutrients. The paper also explores how evaporation loss influences the saturation time, and how these factors can help in manufacturing optimal fertilizer granules and guiding farmers in their selection.",
        "model_algorithm_used": ["Diffusion Equations", "Explicit Finite Difference Scheme", "Numerical Simulation", "Evaporation Factor"]
    },
    {
        "author_name": "Korsakov, K.; Stepanov, A.; Pozdnyakov, L.; Yakimenko, O.",
        "title": "Humate-Coated Urea as a Tool to Decrease Nitrogen Losses in Soil",
        "problem_statement": "The study aims to evaluate the effectiveness of three types of urea fertilizers—conventional urea (U), humate-coated urea (U_HA), and urea treated with the urease inhibitor NBPT (U_UI)—in reducing nitrogen (N) losses in soil, such as ammonia volatilization, nitrate leaching, and N2O emissions. Additionally, the study investigates the effects of these fertilizers on soil biological activity, particularly microbial communities.",
        "model_algorithm_used": ["Laboratory Experiment", "One-Way ANOVA", "Fisher’s LSD Test"]
    },
    {
        "author_name": "Sussy Veliz Moraga, Marta P. Villa, Diego E. Bertín, Ivana M. Cotabarren, Juliana Piña, Marisa Pedernera, Verónica Bucalá",
        "title": "Fluidized-bed melt granulation: The effect of operating variables on process performance and granule properties",
        "problem_statement": "This paper investigates fluidized-bed melt granulation (FBMG) for producing granules with urea as both seed and binder. The goal is to evaluate the effects of operating variables like seed size, bed temperature, binder flowrate, and air flowrates on granulation efficiency and the properties of the product, such as size distribution, coating and agglomeration, and crushing strength. The focus is on finding operating conditions that avoid lump formation and low-quality granules.",
        "model_algorithm_used": ["Fluidized-Bed Melt Granulation (FBMG)", "Population Balance Equation (PBE)"]
    },
    {
        "author_name": "Supriadi Putra, Khozin Mu'tamar, Zulkarnain",
        "title": "Estimation of Parameters in the SIR Epidemic Model Using Particle Swarm Optimization",
        "problem_statement": "The paper addresses the challenge of estimating the parameters in the Susceptible, Infected, Resistant (SIR) epidemic model using Particle Swarm Optimization (PSO). The SIR model is typically used for tracking disease spread, but the system of nonlinear differential equations does not have an analytical solution, making parameter estimation complex. The objective is to use PSO to estimate the parameters of the SIR model effectively.",
        "model_algorithm_used": ["SIR Epidemic Model", "Particle Swarm Optimization (PSO)", "Euler Method"]
    },
    {
        "author_name": "M. S. Alam and M. O. Tokhi",
        "title": "Dynamic Modelling of a Single-Link Flexible Manipulator System: A Particle Swarm Optimisation Approach",
        "problem_statement": "The paper focuses on applying the Particle Swarm Optimisation (PSO) algorithm to model the dynamics of a single-link flexible manipulator system. Flexible manipulators are lightweight and cost-effective, but their modelling is challenging due to their flexibility and dynamic behaviour. The study aims to improve the modelling of such systems using the PSO algorithm, addressing issues like system tracking, stability, and capturing the system's dynamics accurately.",
        "model_algorithm_used": ["Particle Swarm Optimization (PSO)", "Autoregressive Moving Average (ARMA) Model", "Time-Varying Acceleration Coefficient (TVAC)"]
    },
    {
        "author_name": "Samar Swify, Dovile Avizienyte, Romas Mazeika, Zita Braziene",
        "title": "Comparative Study: Effect of Urea-Sulfur Fertilizers on Nitrogen Uptake and Maize Productivity",
        "problem_statement": "This study investigates how combining urea with sulfur-based fertilizers (ammonium sulfate, calcium sulfate, and urea cocrystals) can enhance nitrogen uptake and improve maize productivity. The research seeks to compare conventional urea with sulfur-enriched urea fertilizers to assess their effectiveness in reducing nitrogen losses, increasing nitrogen uptake, and improving maize yields.",
        "model_algorithm_used": ["Randomized Complete Block Design (RCBD)", "ANOVA", "Duncan's Test", "Correlation Analysis"]
    },
    {
        "author_name": "Katie E. Wyer, David B. Kelleghan, Victoria Blanes-Vidal, Günther Schauberger, Thomas P. Curran",
        "title": "Ammonia Emissions from Agriculture and Their Contribution to Fine Particulate Matter: A Review of Implications for Human Health",
        "problem_statement": "This paper examines the significant contribution of ammonia (NH3) emissions from agriculture to fine particulate matter (PM2.5) formation, which in turn affects human health. NH3 is a major contributor to respiratory diseases and asthma, and this review explores its sources, impacts on air quality, and potential health risks.",
        "model_algorithm_used": ["Systematic Literature Review", "Agricultural NH3 Emissions", "PM2.5 Formation"]
    },
    {
        "author_name": "Yuhui Shi and Russell Eberhart",
        "title": "A Modified Particle Swarm Optimizer",
        "problem_statement": "This paper introduces a new parameter, inertia weight, into the original Particle Swarm Optimization (PSO) algorithm to improve its performance. It explores how different inertia weight values affect the algorithm's ability to find the global optimum efficiently in optimization problems.",
        "model_algorithm_used": ["Modified Particle Swarm Optimization (PSO)"]
    },
    {
        "author_name": "Raziyeh Mosayebi and Fariba Bahrami",
        "title": "A Modified Particle Swarm Optimization Algorithm for Parameter Estimation of a Biological System",
        "problem_statement": "The paper addresses the challenge of parameter estimation in biological system models, where many parameters lack physical interpretation and accurate estimation is crucial. The authors aim to develop a method to estimate the parameters of nonlinear biological models with high precision.",
        "model_algorithm_used": ["Modified Particle Swarm Optimization (PSO)", "Decomposition Technique"]
    }


];

// const ThesisCard = ({ data }) => (
//     <div className="bg-white shadow-lg rounded-lg p-6 my-4 w-full md:w-1/2 lg:w-1/3">
//         <h2 className="text-2xl font-semibold mb-4 text-blue-600">{data.title}</h2>
//         <p className="text-gray-700 mb-4 font-semibold">Author(s): {data.author_name}</p>
//         <p className="text-gray-600 mb-4">{data.problem_statement}</p>
//         <div>
//             <p className="font-semibold text-gray-800">Model/Algorithm Used:</p>
//             <ul className="list-disc pl-5 text-gray-600">
//                 {data.model_algorithm_used.map((algorithm, index) => (
//                     <li key={index} className="text-sm">{algorithm}</li>
//                 ))}
//             </ul>
//         </div>
//     </div>
// );

const ThesisDisplay = () => {
    return (
        <div className="   ">
            <h1 className="text-4xl font-bold text-center text-blue-700 mb-8">
                📚 Thesis Papers Collection
            </h1>

            <div className="overflow-x-auto shadow rounded border border-gray-200">
                <table className="min-w-full text-left text-sm">
                    <thead className="bg-gradient-to-r from-blue-100 to-blue-200 sticky top-0">
                        <tr>
                            <th className="px-6 py-3 text-gray-700 font-semibold">#</th>
                            <th className="px-6 py-3 text-gray-700 font-semibold">Author(s)</th>
                            <th className="px-6 py-3 text-gray-700 font-semibold">Title</th>
                            <th className="px-6 py-3 text-gray-700 font-semibold">Problem Statement</th>
                            <th className="px-6 py-3 text-gray-700 font-semibold">Model/Algorithm Used</th>
                        </tr>
                    </thead>
                    <tbody>
                        {thesisData.map((data, index) => (
                            <tr
                                key={index}
                                className={`${index % 2 === 0 ? "bg-white cursor-pointer" : "bg-blue-50"
                                    } hover:bg-blue-50 transition duration-200`}
                            >
                                <td className="px-6 py-3 font-semibold text-gray-800">
                                   [{index + 1}]  
                                </td>
                                <td className="px-6 py-3 font-medium text-gray-800">
                                    {data.author_name}
                                </td>
                                <td className="px-6 py-3 text-gray-700">{data.title}</td>
                                <td className="px-6 py-3 text-gray-600">{data.problem_statement}</td>
                                <td className="px-6 py-3">
                                    <ul className="list-disc pl-5 text-gray-700">
                                        {data.model_algorithm_used.map((algorithm, idx) => (
                                            <li key={idx}>{algorithm}</li>
                                        ))}
                                    </ul>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>

    );
};

export default ThesisDisplay;
