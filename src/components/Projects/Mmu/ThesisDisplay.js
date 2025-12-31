import React from "react";

const thesisData = [

    {
        "author_name": "Sidhartha Sekhar Swain, Tapan Kumar Khura, Pramod Kumar Sahoo, Kapil Atmaram Chobhe, Nadhir Al-Ansari, Hari Lal Kushwaha, Nand Lal Kushwaha, Kanhu Charan Panda, Satish Devram Lande, Chandu Singh",
        "title": "Proportional impact prediction model of coating material on nitrate leaching of slow-release Urea Super Granules (USG) using machine learning and RSM technique",
        "problem_statement": "The study aims to address the challenge of efficient nitrate leaching prediction for Urea Super Granules (USG), a slow-release fertilizer, which is important for minimizing groundwater pollution and improving fertilizer usage efficiency. Past methods have failed to model nitrate leaching effectively, and this research explores advanced techniques for accurate prediction and optimization of nitrate leaching based on various coating materials and their proportions.",
        "model_algorithm_used": ["Artificial Neural Network (ANN)", "Support Vector Machine (SVM)", "Random Forest (RF)", "M5P Model Tree (M5P)", "Reduced Error Pruning Tree (REPTree)", "Response Surface Methodology (RSM)"]
    },
    {
        "author_name": "Norhidayah Mohamad, Nor Azlina Ab. Aziz, Anith Khairunnisa Ghazali, and Mohd. Rizal Salleh",
        "title": "Improving Ammonia Emission Model of Urea Fertilizer Fluidized Bed Granulation System using Particle Swarm Optimization for Sustainable Fertilizer Manufacturing Practice",
        "problem_statement": "The urea fertilizer manufacturing process, specifically the fluidized bed granulation system, releases ammonia into the environment. This ammonia contributes to eutrophication and acidification in ecosystems, potentially causing significant environmental harm. The challenge lies in accurately modeling ammonia emissions from this system to optimize the granulation process for sustainable fertilizer production while minimizing ammonia release.",
        "model_algorithm_used": ["Descriptive Statistics", "Ordered Regression (Ordinal Regression)"]
    },



    {
        "author_name": "S. O. Duffuaa",
        "title": "A Mathematical Optimization Model for Chemical Production at Saudi Arabia Fertilizer Company",
        "problem_statement": "This paper develops an economic optimization model for chemical production at SAFCO, specifically for ammonia and urea. It aims to minimize the production cost while meeting the required production targets using optimal reactor settings.",
        "model_algorithm_used": ["Particle Swarm Optimization (PSO)", "Quadratic Polynomial Model"]
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
    },

    {
        "author_name": "Toluwase Oreoluwa Adegoke, Tae-il Moon, and Hyun-Hwoi Ku",
        "title": "Ammonia emission from sandy loam soil amended with manure compost and urea",
        "problem_statement": "This study evaluates the effect of different nitrogen (N) application rates on ammonia (NH₃) emission and soil properties when sandy loam soil is amended with manure compost and urea. The investigation seeks to understand the impact of nitrogen application on ammonia volatilization and to determine a strategy for reducing NH₃ emissions and improving soil fertility.",
        "model_algorithm_used": ["One-way ANOVA", "Duncan's multiple range tests"]
    },
    {
        "author_name": "Christof Ammann and Alex Valach",
        "title": "Ammonia Emissions from Swiss Agriculture and their Effects on Atmospheric Chemistry and Ecosystems",
        "problem_statement": "Ammonia (NH3) is a significant atmospheric pollutant due to its contribution to the formation of secondary inorganic aerosols and its impacts on (semi-)natural ecosystems. The primary emission source in Switzerland is livestock agriculture, where NH3 is volatilized from ammonium in animal manure. This discrepancy affects the understanding of NH3 deposition and its adverse impacts on ecosystems such as eutrophication and acidification.",
        "model_algorithm_used": ["Agrammon emission model", "Swiss Nitrogen Deposition (SND) model", "Critical Load Exceedance approach"]
    },
    {
        "author_name": "Karin Andersson, Sofia Delin, Johanna Pedersen, Sasha D. Hafner, Tavs Nyord",
        "title": "Ammonia emissions from untreated, separated and digested cattle slurry – Effects of slurry type and application strategy on a Swedish clay soil",
        "problem_statement": "This study investigates how different slurry types (untreated cattle slurry, separated liquid fraction, and biogas digestate) and application methods (trailing hoses, trailing shoes, acidified slurry application, and slurry injection) affect ammonia emissions.",
        "model_algorithm_used": ["Wind tunnels", "ALFAM2 Model"]
    },
    {
        "author_name": "Nils Carsten Thomas Ellersiek, Hans-Werner Olfs",
        "title": "An Incubation System for the Simulation of Ammonia Emissions from Soil Surface-Applied Slurry: Effect of pH and Acid Type",
        "problem_statement": "This paper develops an incubation system to measure ammonia emissions from liquid organic fertilizers applied to soil surfaces, assessing the impact of pH value and acid type on ammonia emission reduction.",
        "model_algorithm_used": ["Incubation system", "Statistical analysis using ANOVA"]
    },
    {
        "author_name": "Melina Lamkowsky, Frederic Ang, Miranda P.M. Meuwissen",
        "title": "Can Dutch dairy farmers finance investments to reduce ammonia emissions?",
        "problem_statement": "This paper explores whether Dutch dairy farmers can finance investments in technologies to reduce ammonia emissions, which pose a threat to biodiversity in the Netherlands.",
        "model_algorithm_used": ["Literature review", "Empirical analysis", "Accountancy data analysis"]
    },
    {
        "author_name": "Johanna Pedersen, Tavs Nyord",
        "title": "Effect of low-dose acidification of slurry digestate on ammonia emissions after field application",
        "problem_statement": "This study investigates the effect of low-dose acidification of slurry digestate on ammonia emissions after field application, comparing emissions from different application techniques.",
        "model_algorithm_used": ["Dynamic flux chambers", "ANOVA", "Tukey's test"]
    },
    {
        "author_name": "Rolandas Bleizgys, Arvydas Povilaitis, Juozas Pekarskas, Vilma Naujokienė",
        "title": "Effectiveness of the Sustainable Manure Pile Model for Ammonia Emission and Soil",
        "problem_statement": "The study evaluates the effectiveness of a sustainable manure pile model in reducing ammonia emissions and nutrient leaching, assessing its environmental impact.",
        "model_algorithm_used": ["Experimental setup", "Static chamber measurements", "Soil sampling", "ANOVA"]
    },
    {
        "author_name": "Khadim Dawar, Atif Dawar, Muhammad Tariq, Ishaq Ahmad Mian, Asim Muhammad, Laiba Farid, Shadman Khan, Kashif Khan, Shah Fahad, Subhan Danish, Abdullah Ahmed Al-Ghamdi, Mohamed S. Elshikh, Muhammad Tahzeeb-ul-Hassan",
        "title": "Enhancing nitrogen use efficiency and yield of maize (Zea mays L.) through Ammonia volatilization mitigation and nitrogen management approaches",
        "problem_statement": "The study examines the effects of sulfur-coated urea (SCU) and sulfur from gypsum on ammonia (NH₃) emissions, nitrogen use efficiency (NUE), and maize productivity under alkaline calcareous soil conditions.",
        "model_algorithm_used": ["Field Experiment", "ANOVA", "Fisher LSD test"]
    },
    {
        "author_name": "Peng Xu et al.",
        "title": "Fertilizer management for global ammonia emission reduction",
        "problem_statement": "This paper addresses ammonia emissions from crop production, particularly rice, wheat, and maize fields, aiming to develop a machine learning model to estimate global NH₃ emissions and identify emission hotspots.",
        "model_algorithm_used": ["Machine learning models (random forest)", "AI and data-driven approaches"]
    },
    {
        "author_name": "Chen, Y.; Zhang, L.; Zhao, Y.; Zhang, L.; Zhang, J.; Liu, M.; Zhou, M.; Luo, B.",
        "title": "High-Resolution Ammonia Emissions from Nitrogen Fertilizer Application in China during 2005–2020",
        "problem_statement": "The study estimates ammonia emissions from synthetic nitrogen fertilizer in China between 2005 and 2020, focusing on spatial, seasonal, and interannual variations.",
        "model_algorithm_used": ["Bottom-up method", "Emission factors", "Spatial distribution model"]
    },
    {
        "author_name": "Héctor García-Gómez, Rasmus Einarsson, Mark Theobald, Eduardo Aguilera, Tania Carrasco-Molina, Victoria Gil, Benjamín S. Gimeno, Coralina Hernández, Luis Lassaletta, Isaura Rábago, Hans J.M. van Grinsven, Marta G. Vivanco, Alberto Sanz-Cobena",
        "title": "Impact of Changing Agricultural Management on the Exceedance of Empirical Critical Loads of Nitrogen in Terrestrial Habitats of Southwestern Europe",
        "problem_statement": "This study assesses the impact of improved agricultural management on ammonia emissions and nitrogen deposition in southwestern Europe, aiming to reduce eutrophication in ecosystems.",
        "model_algorithm_used": ["Integrated spatial modeling", "CHIMERE model", "Critical load exceedance methodology"]
    },
    {
        "author_name": "Sasha D. Hafner, Johanna Pedersen, Roland Fuß, et al.",
        "title": "Improved tools for estimation of ammonia emission from field-applied animal slurry: Refinement of the ALFAM2 model and database",
        "problem_statement": "This paper presents updates to the ALFAM2 model for more accurate ammonia emission predictions from slurry applied to agricultural fields, introducing a new ammonia sink.",
        "model_algorithm_used": ["ALFAM2 model", "Bootstrap approach"]
    },
    // second set of 12
    {
        "author_name": "Cashman, O.; Casey, I.; Sorley, M.; Forrestal, P.; Styles, D.; Wall, D.; Burchill, W.; Humphreys, J.",
        "title": "Lowering the greenhouse gas and ammonia emissions from grassland-based dairy production",
        "problem_statement": "Grassland-based dairy systems contribute significantly to greenhouse gas (GHG) and ammonia emissions in Ireland. Rising intensification with high artificial fertilizer nitrogen inputs increases emissions, conflicting with climate targets. The study evaluates how adopting best practices (reduced AFN, clover BFN, improved slurry application, and herd genetics) can lower emissions while maintaining productivity.",
        "model_algorithm_used": ["Life Cycle Assessment (LCA)", "Mass-flow model for ammonia"]
    },
    {
        "author_name": "Sefeedpari, P.; Pishgar-Komleh, S.H.; Aarnink, A.J.A.",
        "title": "Model Adaptation and Validation for Estimating Methane and Ammonia Emissions from Fattening Pig Houses: Effect of Manure Management System",
        "problem_statement": "Methane (CH4) and ammonia (NH3) emissions from pig farming are major environmental concerns. Existing models are limited and costly to validate. This study adapts and validates predictive models to estimate emissions under different manure management systems and evaluate mitigation strategies.",
        "model_algorithm_used": ["MESPRO model", "ANIPRO model"]
    },
    {
        "author_name": "Aguirre-Villegas, H.A.; Besson, C.; Larson, R.A.",
        "title": "Modeling ammonia emissions from manure in conventional, organic, and grazing dairy systems and practices to mitigate emissions",
        "problem_statement": "Livestock manure contributes ~60% of ammonia emissions. Measuring is costly, and results are inconsistent across systems. This study models emissions for representative dairy systems in Wisconsin, compares mitigation strategies, and assesses how functional units affect emission intensity estimates.",
        "model_algorithm_used": ["Farm-level simulation model", "IPCC Tier 2 emission factors"]
    },
    {
        "author_name": "Chen, H.; Zhou, H.; Sun, Y.; Liu, X.; Wu, Q.; Chi, D.",
        "title": "Nitrogen-loaded biochar for environmental management: Enhancing nitrogen utilization balance in farmland, mitigating ammonia volatilization, and improving fertilizer efficiency",
        "problem_statement": "Excess nitrogen fertilizer in rice production causes NH3 volatilization and low fertilizer efficiency. Conventional biochar can increase NH3 losses, while acid-treated biochar is costly. This study tests nitrogen-loaded biochar (NLB) to reduce volatilization, improve soil N balance, and sustain rice yields.",
        "model_algorithm_used": ["Critical nitrogen dilution curve", "Path analysis model"]
    },
    {
        "author_name": "Mielcarek-Bocheńska, P.; Rzeźnik, W.",
        "title": "Reducing Ammonia Emissions in Polish Agriculture, the Implementation of the NEC Directive, and the Context of Sustainable Development—Pilot Studies",
        "problem_statement": "Polish agriculture produces over 96% of national ammonia emissions, mostly from manure and fertilizers. The NEC Directive requires reductions, but farmers’ awareness and adoption of low-emission practices are limited. This study examines farm practices and farmer knowledge about ammonia mitigation.",
        "model_algorithm_used": ["Survey questionnaire", "Chi-square (χ²) test"]
    },
    {
        "author_name": "Schoof, J.; Fuß, R.; Wulf, S.; Pacholski, A.",
        "title": "Regionalized ammonia emission abatement by urease inhibitor treatment of urea for agro-environmental conditions of Western Central Europe",
        "problem_statement": "Urea fertilizer causes high NH3 losses. Urease inhibitors (UIs) are mandated in the EU, but inventories assume 70% abatement without regional calibration. This study derives region-specific abatement factors for Western Central Europe.",
        "model_algorithm_used": ["Linear mixed-effects model", "Meta-analysis of field data"]
    },
    {
        "author_name": "Wang, Y.; Nemitz, E.; Tomlinson, S.J.; Carnell, E.J.; Yao, L.; Scheffler, J.; Liska, T.; Pearson, C.; Dragosits, U.; Venkataraman, C.; Balasubramanian, S.; Beck, R.; Sutton, M.A.; Vieno, M.",
        "title": "Response of South Asia PM2.5 pollution to ammonia emission changes and associated impacts on human health",
        "problem_statement": "South Asia experiences extreme PM2.5 pollution, but the role of NH3 emissions in PM2.5 formation is understudied. This research evaluates how NH3 reductions affect air quality, health, and economic costs.",
        "model_algorithm_used": ["WRF-EMEP atmospheric model", "Global Exposure Mortality Model (GEMM)"]
    },
    {
        "author_name": "Woo, J.; Song, S.; Kang, S.; Jeon, E.-C.",
        "title": "Study on Enhanced Methods for Calculating NH₃ Emissions from Fertilizer Application in Agriculture Sector",
        "problem_statement": "South Korea’s NH3 inventory is based on foreign factors, ignoring crop-specific practices and over-fertilization. This leads to inaccurate emission estimates. The study develops improved inventory methods reflecting local farming systems.",
        "model_algorithm_used": ["Fertilizer supply-based inventory method", "Nitrogen application-based inventory method"]
    },
    {
        "author_name": "Hu, Y.; Flessa, H.; Vos, C.; Fuß, R.; Schmidhalter, U.",
        "title": "Successful NH₃ abatement policies and regulations in German agriculture",
        "problem_statement": "German agriculture emits ~95% of national ammonia, mainly from livestock and fertilizer. EU directives mandate reductions, but progress was slow until recent regulations (DüV 2017/2020, TA-Luft 2021). This study evaluates their effectiveness.",
        "model_algorithm_used": ["National emission inventory (Thünen Institute)", "Py-GAS-EM scenario model"]
    },
    {
        "author_name": "Adegoke, T.O.; Ku, H.-H.",
        "title": "Temperature response of ammonia emission from sandy loam soil amended with manure compost and urea",
        "problem_statement": "Temperature and N application rates jointly affect ammonia volatilization, but few studies analyze their combined effect. This work investigates NH3 emissions from urea and compost treatments across temperatures.",
        "model_algorithm_used": ["Arrhenius equation", "Dynamic chamber method"]
    },
    {
        "author_name": "dos Santos Diniz, M.H.; Ferreira, F.C.; Ferreira, A.S.",
        "title": "Temporal change of urea biochemical transformations and temperature sensitivity of ammonia volatilization in soil textural classes in the Brazilian Cerrado",
        "problem_statement": "Urea AV losses in tropical soils exceed 40%, worsened by high temps and sandy soils. The study analyzes how soil texture, urea dose, and temperature regulate transformations and AV sensitivity (Q10).",
        "model_algorithm_used": ["Gaussian model for AV peaks", "van’t Hoff equation (Q10)"]
    },
    {
        "author_name": "Cashman, O.; Casey, I.; Humphreys, J.",
        "title": "The economic performance of grassland-based milk production using best practices to lower greenhouse gas and ammonia emissions",
        "problem_statement": "Irish dairy farms rely heavily on AFN, increasing GHG and ammonia emissions. Farmers may resist low-emission practices unless profitability is ensured. This study compares intensive vs best-practice systems in terms of economics and productivity.",
        "model_algorithm_used": ["Whole-farm economic model", "Systems-scale farm experiments"]
    },
    //random forest model 
    {
        "author_name": "Sailesh Sigdel, Heather D. Karsten, Curtis J. Dell, Ronald J. Hoover",
        "title": "Evaluation of Ammonia Volatilization and Corn Silage Yield Response to Liquid Anaerobic Digestate Application Methods",
        "problem_statement": "Compare NH3 volatilization and corn silage yields between surface broadcasting vs shallow-disk injection of liquid anaerobic digestate, to reduce NH3 losses and improve N retention/yield.",
        "model_algorithm_used": ["Conditional Random Forest (RF)"],
        "application_of_random_forest_model": "RF identified key drivers of NH3 loss and yield (e.g., soil temperature, digestate solids, NH4+-N concentration, application method)."
    },
    {
        "author_name": "A. Marongiu, A. G. Collalto, G. G. Distefano, E. Angelino",
        "title": "Application of Machine Learning to Estimate Ammonia Atmospheric Emissions and Concentrations",
        "problem_statement": "Improve precision of NH3 emission and concentration estimates for air-quality management by accounting for meteorology and emission changes.",
        "model_algorithm_used": ["Random Forest (RF)"],
        "application_of_random_forest_model": "Iteratively predicted NH3 concentrations/emissions using site measurements and meteorological variables."
    },


    {
        "author_name": "Yutong Wang, Wenmei Tao, Yimeng Liu",
        "title": "Assessment of Ship Carbon Emission Reduction Technology Based on Analytical Hierarchy and Machine Learning Models",
        "problem_statement": "Rank and evaluate five ship carbon-reduction technologies considering performance vs operational drawbacks.",
        "model_algorithm_used": ["Analytic Hierarchy Process (AHP)", "Random Forest (RF)", "Logistic Regression (LR)"],
        "application_of_random_forest_model": "Used alongside AHP/LR to compare/predict technology performance; contributed to ranking robustness."
    },
    {
        "author_name": "Z. Wang, S. Liu, Y. Ruan, Q. Wang, Z. Zhang",
        "title": "Comparison of Biochar- and Lime-Adjusted pH Changes in N2O Emissions and Associated Microbial Communities in a Tropical Tea Plantation Soil",
        "problem_statement": "Assess how biochar vs lime affect N2O emissions and soil microbial communities in tea plantation soil.",
        "model_algorithm_used": ["Random Forest (RF)"],
        "application_of_random_forest_model": "RF showed fungal nirK copy number, soil pH, AOB/comammox amoA abundances as dominant N2O predictors."
    },
    {
        "author_name": "Rui Tao, Hanjie Zhang, Xiuping Gu, Baowei Hu, Jun Li, Guixin Chu",
        "title": "DEHP exposure suppressed the community diversity and abundance of ammonia-oxidizers and mitigated N2O emissions in an alkaline soil",
        "problem_statement": "Quantify effects of DEHP on AOB/AOA communities and N2O emissions in alkaline soil.",
        "model_algorithm_used": ["Random Forest (RF)", "Partial Least Squares Path Modeling (PLS-PM)"],
        "application_of_random_forest_model": "RF highlighted AOB Shannon index, soil pH, and gene copies as key N2O predictors; linked DEHP impacts via microbial shifts."
    },
    {
        "author_name": "Yongchun Liu, Junlei Zhan, Feixue Zheng, Boying Song, Yusheng Zhang, Wei Ma, Chenjie Hua, Jiali Xie, Xiaolei Bao, Chao Yan, Federico Bianchi, Tuukka Petäjä, Aijun Ding, Yu Song, Hong He, Markku Kulmala",
        "title": "Dust emission reduction enhanced gas-to-particle conversion of ammonia in the North China Plain",
        "problem_statement": "Explain ammonia-to-ammonium conversion under high aerosol loading and reduced dust in the North China Plain.",
        "model_algorithm_used": ["Random Forest (RF)", "ISORROPIA II"],
        "application_of_random_forest_model": "RF ranked 23 met/chemical drivers of aerosol pH; identified reduced alkali/alkaline earth metals as major acidity driver."
    },
    {
        "author_name": "L. Fang, H. Singh, T. Ohashi, M. Sanno, G. Lin, E. Yilmaz, M. Ichiyanagi, T. Suzuki",
        "title": "Effect of ML Algorithms on Prediction of In-Cylinder Combustion Pressure of Ammonia–Oxygen in a Constant-Volume Chamber",
        "problem_statement": "Predict ammonia combustion pressure across equivalence ratios to address slow burn/ignition issues.",
        "model_algorithm_used": ["Random Forest (RF)", "Artificial Neural Networks (ANN)", "Linear Regression (LR)"],
        "application_of_random_forest_model": "RF used for step-1 pressure prediction across φ; benchmarked against ANN/LR (LR achieved best RMSE/R²)."
    },
    {
        "author_name": "Q. Ma, Y. Li, J. Xue, D. Cheng, Z. Li",
        "title": "Effects of Turning Frequency on Ammonia Emission during the Composting of Chicken Manure and Soybean Straw",
        "problem_statement": "Optimize turning frequency to reduce NH3 emission, N loss, and manage microbial dynamics during composting.",
        "model_algorithm_used": ["Microbial community analyses", "AOB/AOA profiling", "Statistical analyses (R/SPSS)", "Random Forest (RF)"],
        "application_of_random_forest_model": "RF identified microbial taxa most associated with NH3 emission patterns across turning frequencies."
    },
    {
        "author_name": "P. Xu, G. Li, Y. Zheng, J. C. H. Fung, A. Chen, Z. Zeng, H. Shen, M. Hu, J. Mao, Y. Zheng, X. Cui, Z. Guo, Y. Chen, L. Feng, S. He, X. Zhang, A. K. H. Lau, S. Tao, B. Z. Houlton",
        "title": "Fertilizer management for global ammonia emission reduction",
        "problem_statement": "Develop crop-specific NH3 emission factors and optimize fertilizer management globally to cut NH3 emissions.",
        "model_algorithm_used": ["Random Forest (RF)", "Spatial optimization"],
        "application_of_random_forest_model": "RF predicted crop-specific EF at 5-arcmin using climate, soil, crop, irrigation, fertilization, tillage features; informed global mitigation."
    },
    {
        "author_name": "Sabrina Hempel, Julian Adolphs, Niels Landwehr, David Janke, Thomas Amon",
        "title": "How Training Data and Modeling Choice Affect Estimation of Ammonia Emissions from a Naturally Ventilated Dairy Barn—Classical Statistics vs Machine Learning",
        "problem_statement": "Reduce uncertainty in NH3 emission estimates from naturally ventilated barns by comparing classical vs ML models.",
        "model_algorithm_used": ["Ordinary Linear Regression", "Ridge Regression", "Gradient Boosting", "Random Forests", "ANN", "Gaussian Processes", "SVM"],
        "application_of_random_forest_model": "RF delivered most accurate, robust predictions across multiple periods, outperforming multilinear regression."
    },
    {
        "author_name": "Ruiming Xing, Baihua Li, Shirin Dora, Michael Whittaker, Janette Mathie",
        "title": "Hybrid ML Pipeline for Predicting Milk Yield, Milk Urea, and Ammonia Emissions in Livestock Farming",
        "problem_statement": "Improve dairy productivity while minimizing environmental impact via accurate prediction of milk yield/urea and inferred NH3 emissions.",
        "model_algorithm_used": ["Linear Regression", "SVM", "Random Forest (RF)", "AdaBoost", "ANN", "Stacking Ensemble"],
        "application_of_random_forest_model": "RF achieved high accuracy (reported ~R² 0.85) for milk yield/urea from biological/feeding data; supports indirect NH3 estimates."
    },
    {
        "author_name": "Yelim Choi, Kyunghoon Kim, Seonghwan Kim, Daekeun Kim",
        "title": "Identification of Odor Emission Sources in Urban Areas Using ML-Based Classification Models",
        "problem_statement": "Efficiently identify odor emission sources in dense urban settings to reduce time and cost vs traditional methods.",
        "model_algorithm_used": ["Decision Tree", "Random Forest (RF)"],
        "application_of_random_forest_model": "RF classified 11 sources with 99.23% accuracy; using six key compounds kept ~99.15% accuracy, enabling lean sensing."
    },
    {
        "author_name": "Amirali Shateri, Zhiyin Yang, Jianfei Xie",
        "title": "Impact of Ethanol and Methanol on NOx Emissions in Ammonia–Methane Combustion: ReaxFF Simulations and ML-Based Extrapolation",
        "problem_statement": "Assess how alcohol additives affect NOx in ammonia-methane combustion and extrapolate to unseen fuel blends.",
        "model_algorithm_used": ["ReaxFF MD", "Random Forest Regression (RFR)", "Gradient Boosting Regression", "SVR", "Fully Connected Neural Networks"],
        "application_of_random_forest_model": "RFR was best (R²≈0.993; MAE≈0.661) predicting NOx for both interpolated and extrapolated alcohol ratios."
    },
    {
        "author_name": "Xingshuai Tian, Minghao Zhuang, Yulong Yin, Jiahui Cong, Hao Ying, Yingcheng Wang, Zhenling Cui",
        "title": "High-resolution estimates of nitrogen loss pathways in China’s maize belt using RF models",
        "problem_statement": "Produce spatially explicit N loss estimates (multiple pathways) to guide local management and reduce environmental impact.",
        "model_algorithm_used": ["Random Forest (RF)"],
        "application_of_random_forest_model": "RF trained on 1,314 in-situ observations predicted EFs for N2, NO, N2O, NH3, NO3− leaching, and runoff across 1×1 km grids."
    },
    {
        "author_name": "Xinrui Ge, Martijn Schaap, Wim de Vries",
        "title": "Improving spatial and temporal variation of ammonia emissions for the Netherlands using livestock housing info and a Sentinel-2 crop map",
        "problem_statement": "Reduce uncertainties in regional NH3 emission estimates via high-resolution crop maps and housing data.",
        "model_algorithm_used": ["Random Forest (RF)", "INTEGRATOR", "TIMELINES", "LOTOS-EUROS"],
        "application_of_random_forest_model": "RF classified 12 agri land-cover classes from Sentinel-2, enabling fine-grained emission allocation."
    },
    {
        "author_name": "R. Lin, W. Liao, H. Liu, L. Yang, W. Chen, X. Wang",
        "title": "Integrating ML with Causal Inference to Improve Prediction of Ammonium Wet Deposition in the Pearl River Delta",
        "problem_statement": "Accurately estimate NHx wet deposition amid complex processes and spatial heterogeneity.",
        "model_algorithm_used": ["PC-MB causal discovery", "Spectral clustering", "Lasso", "Random Forest (RF)", "SVR", "CatBoost"],
        "application_of_random_forest_model": "RF captured nonlinear interactions; performed well but was outperformed by CatBoost on accuracy."
    },
    {
        "author_name": "Marie Louise Bornø, Regin Rønn, Flemming Ekelund",
        "title": "Is wood ash amendment a suitable mitigation strategy for N2O emissions from soil?",
        "problem_statement": "Determine how wood ash rate/soil type affect N2O emissions to evaluate mitigation potential.",
        "model_algorithm_used": ["Random Forest (RF)"],
        "application_of_random_forest_model": "RF highlighted final soil pH as dominant factor; moderate ash (3–9 t ha−1) reduced N2O in certain soils, high doses could increase it."
    },
    {
        "author_name": "E. Küçüktopçu, B. Cemek, H. Simsek",
        "title": "Machine Learning and Wavelet Transform: A Hybrid Approach to Predicting Ammonia Levels in Poultry Farms",
        "problem_statement": "Accurately predict NH3 in poultry houses to protect animal health and productivity.",
        "model_algorithm_used": ["Extreme Learning Machine (ELM)", "K-Nearest Neighbor (KNN)", "Random Forest (RF)", "Wavelet Transform (WT)"],
        "application_of_random_forest_model": "RF and RF-WT achieved best performance (MAE≈0.548 ppm; R≈0.976) using environmental/litter factors."
    },
    {
        "author_name": "Armand Favrot, Sophie Génermont, Céline Décuq, David Makowski",
        "title": "Machine learning for ammonia volatilization prediction and slurry application management",
        "problem_statement": "Predict NH3 volatilization from slurry under varied weather/manure to compare application methods.",
        "model_algorithm_used": ["Random Forest (RF)", "Gradient Boosting", "Lasso Regression"],
        "application_of_random_forest_model": "RF delivered best accuracy (RMSE≈4.51; r≈0.94), outperforming Lasso and ALFAM2 semi-empirical model."
    },
    {
        "author_name": "Akshaya Kumar Aliyana, S. K. Naveen Kumar, Pradeep Marimuthu, Aiswarya Baburaj, Michael Adetunji, Terrance Frederick, Praveen Sekhar, Renny Edwin Fernandez",
        "title": "Machine learning-assisted ammonium detection using ZnO/MWCNT impedance sensors",
        "problem_statement": "Improve NH4+ detection accuracy in complex matrices with ML-enhanced impedance sensing.",
        "model_algorithm_used": ["k-Nearest Neighbor", "Random Forest (RF)", "Neural Network", "Naïve Bayes", "Logistic Regression"],
        "application_of_random_forest_model": "RF predicted NH4+ from impedance spectra; transformed features (1/Z, derivative frequency) boosted performance vs ANN/kNN."
    },
    {
        "author_name": "Gregor Gnisia, Jan Weik, Reiner Ruser, Lisa Essich, Iris Lewandowski, Anthony Stein",
        "title": "ML-based prediction of nitrous oxide emissions from arable farming: Exploring management practices as predictors",
        "problem_statement": "Accurately predict N2O fluxes and identify impactful management variables for reporting/mitigation.",
        "model_algorithm_used": ["Random Forest (RF)", "XGBoost", "Feedforward Neural Network (FNN)"],
        "application_of_random_forest_model": "RF was best (lowest RMSE≈8.51); highlighted management features (e.g., Days after Hoeing) as influential."
    },
    {
        "author_name": "J. Sherman, E. Young, W. Jokela, B. Kieke",
        "title": "Manure Application Timing and Incorporation Effects on Ammonia and Greenhouse Gas Emissions in Corn",
        "problem_statement": "Evaluate surface vs injection and timing (pre-plant vs sidedress) on NH3/GHG emissions and crop performance.",
        "model_algorithm_used": ["General Linear Modeling (GLM)", "Generalized Linear Mixed Model (GLMM)"],
        "application_of_random_forest_model": "Not used; analysis relied on GLM/GLMM to quantify treatment effects."
    },
    {
        "author_name": "Hao Shi, Zebang Liu, Syed Mashruk, Mohammad Alnajideen, Ali Alnasif, Jing Liu, Agustin Valera-Medina",
        "title": "Modeling and optimization of ammonia/hydrogen/air premixed swirling flames for NOx control: A hybrid ML strategy",
        "problem_statement": "Predict and minimize NOx while maintaining flame stability for NH3/H2 blends.",
        "model_algorithm_used": ["XGBoost", "SVR", "NSGA-II"],
        "application_of_random_forest_model": "Not used; modeling used XGBoost/SVR; NSGA-II for multi-objective optimization."
    },
    {
        "author_name": "Eba Muluneh Sorecha, Renjie Ruan, Yue Yuan, Yaosheng Wang",
        "title": "Partial substitution of biogas slurry for chemical fertilizer increased wheat yield while alleviating N2O by improving soil quality and N-cycling genes",
        "problem_statement": "Test if partial BS substitution can boost yield/NUE and reduce N2O via soil quality and microbial regulation.",
        "model_algorithm_used": ["Metagenomics", "Structural Equation Modeling (SEM)", "Random Forest (RF)"],
        "application_of_random_forest_model": "RF ranked key soil factors (available N, total N, C, available P, MBC) linked to yield, NUE, and N2O."
    },
    {
        "author_name": "Tycho Jongenelen",
        "title": "Validation and Partial Dependency Analysis of RF Models for Ammonia Concentration Prediction",
        "problem_statement": "Validate RF models trained on different VCD datasets and analyze variable effects on NH3 concentrations.",
        "model_algorithm_used": ["Random Forest (RF)", "Partial Dependence Analysis"],
        "application_of_random_forest_model": "RF2-CrIS achieved lowest RMSE/highest correlation vs alternatives; PD showed VCD, BLH, manure timing as key effects."
    },
    {
        "author_name": "S. Peng, J. Zhu, Z. Liu, B. Hu, M. Wang, S. Pu",
        "title": "Prediction of Ammonia Concentration in a Pig House Based on ML Models and Environmental Parameters",
        "problem_statement": "Accurately predict NH3 in pig houses using environmental signals with traditional and deep models.",
        "model_algorithm_used": ["Random Forest (RF)", "LSTM", "RNN", "XGBoost", "SVM", "BPNN", "PSO (optimization)"],
        "application_of_random_forest_model": "RF ranked feature importance (e.g., CO2, H2O, indoor/outdoor T) to guide feature selection before DL training."
    },
    {
        "author_name": "K. He, H. Ding",
        "title": "Prediction of NOx Emissions in Thermal Power Plants Using a Dynamic Soft Sensor Based on RF and Just-in-Time Learning",
        "problem_statement": "Improve real-time NOx prediction for combustion optimization and environmental control.",
        "model_algorithm_used": ["Random Forest (RF)", "Just-in-Time Learning (JITL)", "Permutation Importance", "Moving Window PCA"],
        "application_of_random_forest_model": "RF handled high-dimensional process data, selected key variables via permutation importance, and built local JITL predictors."
    },
    {
        "author_name": "J. Hu, T. Liao, Y. Lü, Y. Wang, Y. He, W. Shen, X. Yang, X. Ji, Y. Pan",
        "title": "Quantifying the Influence of a Burn Event on Ammonia Concentrations Using a Machine-Learning Technique",
        "problem_statement": "Assess how burn events alter rural NH3 concentrations in the absence of direct field measurements.",
        "model_algorithm_used": ["Random Forest (RF)"],
        "application_of_random_forest_model": "RF predicted baseline (no-burn) NH3 from meteorology/time/air pollutants, enabling estimation of burn-related enhancements."
    },
    {
        "author_name": "Ahmed Madani, Mohammed Hagage, Salwa F. Elbeih",
        "title": "RF and Logistic Regression for Prediction of Groundwater Contamination Using Ammonia Concentration",
        "problem_statement": "Map groundwater contamination in Sohag, Egypt, using ML with NH3 as contamination index.",
        "model_algorithm_used": ["Random Forest (RF)", "Multivariate Logistic Regression (MLR)"],
        "application_of_random_forest_model": "RF classified contaminated zones with ~93% accuracy using predictors (Pb, Mg, Fe, Zn, etc.)."
    },
    {
        "author_name": "Nanchi Shen, Wenjin Wang, Jiani Tan, Qing Wang, Ling Huang, Yangjun Wang, Min Wang, Li Li",
        "title": "Roles of historical land use/cover and N-fertilizer changes on ammonia emissions in China (1990–2020)",
        "problem_statement": "Quantify spatiotemporal NH3 emissions from farmland due to LULC and N-fertilizer dynamics.",
        "model_algorithm_used": ["Scenario Analysis", "Emission Factor Method", "Remote Sensing (Landsat)"],
        "application_of_random_forest_model": "Not used; emissions computed via EF method with LULC scenarios."
    },
    {
        "author_name": "Jiande Huang, Jianjun Guo, Huilin Wu, Xinglong Zhang, Shuangyin Liu, Shahbaz Gul Hassan",
        "title": "Short-Term Prediction of Ammonia Levels in Geese Houses Based on Combined Feature Selector and Random Forest",
        "problem_statement": "Forecast NH3 in geese houses to mitigate environmental/health impacts.",
        "model_algorithm_used": ["Combined Feature Selector (MI + Relief-F)", "Random Forest (RF)", "K-fold CV Grid Search"],
        "application_of_random_forest_model": "RF performed NH3 prediction with hyperparameters tuned via CV; feature selector reduced dimensionality and improved accuracy."
    },
    {
        "author_name": "Jiande Huang, Shahbaz Gul Hassan, Longqin Xu, Shuangyin Liu",
        "title": "Short-term prediction of ammonia levels in goose houses via combined feature selector and random forest",
        "problem_statement": "Similar goal: short-term NH3 forecasting in goose houses for environmental control.",
        "model_algorithm_used": ["Combined Feature Selector (CFS)", "Random Forest (RF)", "K-fold CV Grid Search"],
        "application_of_random_forest_model": "RF tuned with CVGS for optimal parameters; combined with CFS for improved predictive performance."
    },
    {
        "author_name": "C. Xu, G. S. Yang, R. R. Wan, B. Li, Q. Ma, X. M. Lu, W. Lv",
        "title": "Spatiotemporal dynamics of ammonia nitrogen and its response to inflow river based on RF in northwest Taihu Lake, China",
        "problem_statement": "Model NH4+–N dynamics in lake and quantify inflow river impacts under eutrophication.",
        "model_algorithm_used": ["Random Forest (RF)"],
        "application_of_random_forest_model": "RF related lake NH4+–N to river inputs to support management under different nutrient-reduction scenarios."
    },
    {
        "author_name": "Jianguo Dong, Xiaona Liu, Ruixian Su, Huimin Xu, Tianyu Yu",
        "title": "TCN-Transformer Deep Network with Random Forest for Prediction of the Chemical Synthetic Ammonia Process",
        "problem_statement": "Predict key outputs (e.g., residual CO) in synthetic ammonia process where intermediates are hard to measure.",
        "model_algorithm_used": ["Random Forest (RF)", "Temporal Convolutional Network (TCN)", "Transformer"],
        "application_of_random_forest_model": "RF used for feature selection to cut redundancy and accelerate/strengthen deep model performance."
    },
    {
        "author_name": "Ștefan-Mihai Petrea, Alina Mogodan, Ira-Adeline Simionov, Aurelia Nica, Dragoș Sebastian Cristea, Mihaela Neculiță",
        "title": "Impact of the CAP on European Agricultural Sector Sustainability Using a Machine-Learning Approach",
        "problem_statement": "Assess CAP’s effects on sustainability indicators (GDP/GVA, payments, emissions, fertilizer use, etc.).",
        "model_algorithm_used": ["Multiple Linear Regression (MLR)", "Random Forest (RF)"],
        "application_of_random_forest_model": "RF provided variable-importance on factors influencing sustainability outcomes including NH3/CO2 emissions."
    },
    {
        "author_name": "Yingqiang Song, Mingzhu Ye, Zhao Zheng, Dexi Zhan, Wenxu Duan, Miao Lu, Zhenqi Song, Dengkuo Sun, Kaizhong Yao, Ziqi Ding",
        "title": "Tree-Structured Parzan Estimator–ML–Ordinary Kriging: Integrated Method for Soil Ammonia Spatial Prediction in the Yellow River Delta",
        "problem_statement": "Improve spatial prediction of soil NH3 flux by integrating remote sensing, air-quality data, and ML with spatial autocorrelation.",
        "model_algorithm_used": ["Tree-Structured Parzan Estimator (TPE)", "Random Forest (RF)", "GBDT", "XGBoost", "Ordinary Kriging"],
        "application_of_random_forest_model": "RF hyperparameters optimized via TPE; strong results though XGB outperformed RF (RF R² ≈ 71.78%)."
    },
    {
        "author_name": "Mao Xu, Ryota Matsumoto, Phuvasa Chanonmuang, Kazuhide Matsuda",
        "title": "Vertical profile measurements for ammonia in a Japanese deciduous forest using denuder sampling technique",
        "problem_statement": "Characterize NH3 concentrations/emissions near forest floor to improve bidirectional exchange/deposition estimates.",
        "model_algorithm_used": ["Denuder Sampling", "Correlation analyses with meteorology/LAI"],
        "application_of_random_forest_model": "Not used; study centered on measurement profiles and correlations."
    },
    {
        "author_name": "Hao Shi, Zebang Liu, Syed Mashruk, Mohammad Alnajideen, Ali Alnasif, Jing Liu, Agustin Valera-Medina",
        "title": "Modeling and optimization of ammonia/hydrogen/air premixed swirling flames for NOx control: A hybrid ML strategy",
        "problem_statement": "Same as item 23; apply hybrid ML to predict/optimize NOx for NH3/H2 flames.",
        "model_algorithm_used": ["XGBoost", "SVR", "NSGA-II"],
        "application_of_random_forest_model": "Not used; RF absent in this hybrid modeling/optimization pipeline."
    },
    {
        "author_name": "Alberto Finzi, Ali Heidarzadeh Vazifehkhoran, Elio Dinuccio, Roberto Ambrosini, Giorgio Provolo",
        "title": "Acidification of livestock slurry and digestate to reduce NH3 emissions: Predicting H2SO4 dosage and pH trends from composition",
        "problem_statement": "Predict acid dosage and pH rebound post-acidification to manage NH3 mitigation in slurries/digestates.",
        "model_algorithm_used": ["Random Forests (RF)", "Regression Trees (RT)"],
        "application_of_random_forest_model": "RF/RT predicted required H2SO4 dose and pH at 1–2 weeks using chemical-physical composition features."
    }








];


const ThesisDisplay = () => {
    return (
        <div className="">
            <h1 className="text-4xl font-bold text-center text-blue-700 mt-4 mb-8">
                📚 Thesis Papers Collection
            </h1>

            <div className="overflow-x-auto shadow rounded border border-gray-200 h-[600px] overflow-y-auto">
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
                                <td className="px-6 py-3 text-gray-600">
                                    {data.problem_statement}
                                </td>
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
