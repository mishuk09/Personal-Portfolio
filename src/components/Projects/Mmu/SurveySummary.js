import React, { useEffect, useState } from 'react';

const SummaryCard = ({ title, value, loading }) => (
    <div className="bg-white border-2 border-blue-500 p-3 rounded-xl shadow flex flex-col items-center justify-center hover:shadow-md transition min-h-[88px]">
        <h2 className="text-lg font-medium text-gray-500 text-center">{title}</h2>
        {loading ? (
            <div className="mt-3 h-8 w-8 border-2 border-blue-500 border-t-transparent border-r-transparent rounded-full animate-spin"></div>
        ) : (
            <p className="text-3xl font-bold text-blue-800 text-center">{value}</p>
        )}
    </div>
);



const SurveySummary = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [activeTab, setActiveTab] = useState("age");

    const tabItems = [
        { id: "age", label: "🎂 Age" },
        { id: "education", label: "🎓 Education" },
        { id: "farmingType", label: "🌾 Type of Farming" },
        { id: "farmingSize", label: "📐 Size of Farming" },
        { id: "experience", label: "👨‍🌾 Experience" },
    ];

    // 🔁 Fetch survey data
    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                const response = await fetch("https://survey-backend-3ppk.onrender.com/get/surveys");
                const result = await response.json();
                setData(result);
            } catch (err) {
                console.error("Failed to fetch data", err);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    // 📊 Count number of respondents by age group
    const normalize = (str) => str?.toLowerCase().replace(/\s+/g, '');

    const countAgeGroup = (groupLabel) => {
        const normalizedTarget = normalize(groupLabel);
        return data.filter(d => normalize(d.demographics?.age) === normalizedTarget).length;
    };

    const countEducationGroup = (groupLabel) => {
        const normalize = (str) => str?.toLowerCase().replace(/\s+/g, '');
        const normalizedTarget = normalize(groupLabel);
        return data.filter(d => normalize(d.demographics?.education) === normalizedTarget).length;
    };


    const countFarmingType = (typeLabel) => {
        const normalize = (str) => str?.toLowerCase().replace(/\s+/g, '');
        const normalizedTarget = normalize(typeLabel);
        return data.filter(d => normalize(d.demographics?.farmingType) === normalizedTarget).length;
    };



    const countFarmSizeGroup = (groupLabel) => {
        return data.filter(
            (d) => d.demographics?.farmSize?.trim().toLowerCase() === groupLabel.trim().toLowerCase()
        ).length;
    };

    const countExperienceGroup = (groupLabel) => {
        return data.filter(
            (d) =>
                d.demographics?.experience?.trim().toLowerCase() ===
                groupLabel.trim().toLowerCase()
        ).length;
    };


    const calculateAverageAwareness = () => {
        let totalScore = 0;
        let totalCount = 0;

        data.forEach((entry) => {
            const awareness = entry?.awareness;
            if (awareness) {
                Object.values(awareness).forEach((val) => {
                    const num = parseInt(val);
                    if (!isNaN(num)) {
                        totalScore += num;
                        totalCount++;
                    }
                });
            }
        });

        if (totalCount === 0) return 0;
        return (totalScore / totalCount).toFixed(2); // rounded to 2 decimal places
    };


    const readinessScores = data?.map((entry) => {
        const readinessValues = Object.values(entry.readiness || {});
        const numericValues = readinessValues.map(Number).filter(v => !isNaN(v));
        const total = numericValues.reduce((sum, val) => sum + val, 0);
        const count = numericValues.length;
        return { total, count };
    });

    const totalReadiness = readinessScores?.reduce((acc, curr) => {
        return {
            total: acc.total + curr.total,
            count: acc.count + curr.count,
        };
    }, { total: 0, count: 0 });

    const readinessAverage = totalReadiness?.count > 0
        ? (totalReadiness.total / totalReadiness.count).toFixed(2)
        : 'N/A';


    return (
        <div className='bg-gray-50 '>

            <div className="max-w-7xl mx-auto pt-28 pb-10 px-4">
                {/* Title & Description */}
                <div className="mb-8 text-center">
                    <h2 className="text-3xl font-bold text-blue-700 mb-2">📝 Survey Summary</h2>
                    <p className="text-gray-600 text-sm md:text-base font-medium">
                        View a breakdown of the respondent's profile based on age, education,
                        farming type, and more.
                    </p>
                </div>

                {/* Tabs */}
                <div className="flex flex-wrap border-b border-gray-300 justify-center gap-2 md:gap-4">
                    {tabItems.map((tab) => (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            className={`px-4 py-2 text-lg font-semibold border-b-2 transition-all duration-200
              ${activeTab === tab.id
                                    ? "border-blue-500 text-blue-600"
                                    : "border-transparent text-gray-500 hover:text-blue-500"
                                }`}
                        >
                            {tab.label}
                        </button>
                    ))}
                </div>

                {/* Tab Content */}
                <div className="mt-6 bg-white p-6 rounded-lg shadow border-2 border-gray-300 text-gray-800">
                    {activeTab === "age" && (
                        <div>
                            <h3 className="text-xl font-semibold mb-4">🎂 Age Distribution</h3>
                            <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
                                <SummaryCard title="👶 Below 25" value={countAgeGroup("Below 25")} loading={loading} />
                                <SummaryCard title="🧑 25 - 34" value={countAgeGroup("25-34")} loading={loading} />
                                <SummaryCard title="🧔 35 - 44" value={countAgeGroup("35-44")} loading={loading} />
                                <SummaryCard title="🧓 45 - 54" value={countAgeGroup("45-54")} loading={loading} />
                                <SummaryCard title="👴 50 & above" value={countAgeGroup("50 & above")} loading={loading} />

                            </div>
                        </div>
                    )}
                    {activeTab === "education" && (
                        <div>
                            <h3 className="text-xl font-semibold mb-4">🎓 Educational Background</h3>
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
                                <SummaryCard title="📘 Primary" value={countEducationGroup("Primary")} loading={loading} />
                                <SummaryCard title="📗 Secondary" value={countEducationGroup("Secondary")} loading={loading} />
                                <SummaryCard title="🎓 Tertiary" value={countEducationGroup("Tertiary (College/Univ)")} loading={loading} />
                                <SummaryCard title="📚 Others" value={countEducationGroup("Others")} loading={loading} />
                            </div>
                        </div>
                    )}
                    {activeTab === "farmingType" && (
                        <div>
                            <h3 className="text-xl font-semibold mb-4">🌾 Type of Farming</h3>
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
                                <SummaryCard title="🌿 Mixed Crops" value={countFarmingType("Mixed crops")} loading={loading} />
                                <SummaryCard title="🌾 Paddy" value={countFarmingType("Paddy")} loading={loading} />
                                <SummaryCard title="🥬 Vegetables" value={countFarmingType("Vegetables")} loading={loading} />
                                <SummaryCard title="🍇 Fruits" value={countFarmingType("Fruits")} loading={loading} />
                                <SummaryCard title="🪵 Others" value={countFarmingType("Others")} loading={loading} />
                            </div>
                        </div>
                    )}
                    {activeTab === "farmingSize" && (
                        <div>
                            <h3 className="text-xl font-semibold mb-4">📐 Size of Farming Land</h3>
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
                                <SummaryCard
                                    title="🌿 Less than 2 hectares"
                                    value={countFarmSizeGroup("Less than 2 hect")}
                                    loading={loading}
                                />
                                <SummaryCard
                                    title="🌿 2–5 hectares"
                                    value={countFarmSizeGroup("2–5 hectares")}
                                    loading={loading}
                                />
                                <SummaryCard
                                    title="🌿 6–10 hectares"
                                    value={countFarmSizeGroup("6–10 hec")}
                                    loading={loading}
                                />
                                <SummaryCard
                                    title="🌾 More than 10 hectares"
                                    value={countFarmSizeGroup("More than 10 hec")} // matches your DB string exactly
                                    loading={loading}
                                />


                            </div>
                        </div>
                    )}
                    {activeTab === "experience" && (
                        <div>
                            <h3 className="text-xl font-semibold mb-4">👨‍🌾 Years of Experience</h3>
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
                                <SummaryCard title="🟢 Less than 5 years" value={countExperienceGroup("Less than 5 years")} loading={loading} />
                                <SummaryCard title="🔵 5–10 years" value={countExperienceGroup("5–10 years")} loading={loading} />
                                <SummaryCard title="🟡 11–20 years" value={countExperienceGroup("11–20 years")} loading={loading} />
                                <SummaryCard title="🔴 More than 20 years" value={countExperienceGroup("More than 20")} loading={loading} />

                            </div>
                        </div>
                    )}
                </div>
            </div>

            <div className="max-w-7xl mx-auto pt-14 pb-14 px-4 ">
                <div className="flex flex-col items-center justify-center rounded-xl border-2 border-gray-300 bg-white shadow p-8">
                    <h1 className="text-3xl font-bold text-center text-blue-800 mb-6">
                        📊 Summary of Awareness & Readiness
                    </h1>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-4 w-full max-w-2xl">
                        {/* Awareness Card */}
                        <div className="flex flex-col items-center justify-center bg-purple-600 text-white rounded-xl shadow-md p-6 transition hover:scale-[1.02] duration-300">
                            <h2 className="text-xl font-semibold mb-2">Awareness</h2>
                            <p className="text-4xl font-bold">{calculateAverageAwareness()}</p>
                        </div>

                        {/* Readiness Card */}
                        <div className="flex flex-col items-center justify-center bg-green-600 text-white rounded-xl shadow-md p-6 transition hover:scale-[1.02] duration-300">
                            <h2 className="text-xl font-semibold mb-2">Readiness</h2>
                            <p className="text-4xl font-bold">{readinessAverage}</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default SurveySummary;
