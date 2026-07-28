import React, { useEffect, useState } from 'react';
import FAQComponent from './FAQComponent';
import LoadingSmall from '../Utills/LoadingSmall';

const SummaryCard = ({ title, value, loading }) => (
    <div className="bg-white border-2 border-blue-500 hover:scale-105 duration-200 cursor-pointer p-3 rounded-xl shadow flex flex-col items-center justify-center hover:shadow-md transition min-h-[88px]">
        <h2 className="text-lg font-medium text-gray-500 text-center">{title}</h2>
        {loading ? (
            <LoadingSmall />
        ) : (
            <p className="text-3xl font-bold text-blue-800 text-center">{value}</p>
        )}
    </div>
);



const PostSurveySummary = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [activeTab, setActiveTab] = useState("age");

    const tabItems = [
        { id: "age", label: "🎂 Age" },
        { id: "education", label: "🎓 Education" },
        { id: "farmingType", label: "🌾 Type of Farming" },
        { id: "farmingSize", label: "📐 Size of Farming" },
        { id: "experience", label: "👨‍🌾 Experience" },
        { id: "understanding", label: "🚀 Rate level of Understanding (AI)" },
    ];

    // Fetch post-survey data
    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                const response = await fetch("http://localhost:5000/get/postsurveys");
                if (!response.ok) {
                    throw new Error(`Failed to fetch post surveys: ${response.status}`);
                }
                const result = await response.json();
                setData(Array.isArray(result) ? result : []);
            } catch (err) {
                console.error("Failed to fetch post-survey data", err);
                setData([]);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    // Normalize labels to make matching resilient to spacing/dashes/wording changes.
    const normalize = (str) =>
        String(str || "")
            .toLowerCase()
            .replace(/[\s\-–—]/g, "")
            .replace(/&/g, "and");

    const isSameGroup = (value, target) => {
        const normalizedValue = normalize(value);
        const normalizedTarget = normalize(target);

        // Prevent empty values from matching everything.
        if (!normalizedValue || !normalizedTarget) {
            return false;
        }

        return (
            normalizedValue === normalizedTarget ||
            normalizedValue.includes(normalizedTarget) ||
            normalizedTarget.includes(normalizedValue)
        );
    };

    const countAgeGroup = (groupLabel) => {
        const normalizedTarget = normalize(groupLabel);
        return data.filter(d => isSameGroup(d.demographics?.age, normalizedTarget)).length;
    };

    const countEducationGroup = (groupLabel) => {
        const normalizedTarget = normalize(groupLabel);
        return data.filter(d => isSameGroup(d.demographics?.education, normalizedTarget)).length;
    };


    const countFarmingType = (typeLabel) => {
        const normalizedTarget = normalize(typeLabel);
        return data.filter((d) => normalize(d.demographics?.farmingType) === normalizedTarget).length;
    };



    const countFarmSizeGroup = (groupLabel) => {
        return data.filter((d) => isSameGroup(d.demographics?.farmSize, groupLabel)).length;
    };

    const countExperienceGroup = (groupLabel) => {
        return data.filter((d) => isSameGroup(d.demographics?.experience, groupLabel)).length;
    };
    const countUnderstandingGroup = (groupLabel) => {
        return data.filter((d) => isSameGroup(d.demographics?.understand, groupLabel)).length;
    };

    const toNumericList = (section) => {
        if (Array.isArray(section)) {
            return section.map(Number).filter((v) => Number.isFinite(v));
        }

        if (section && typeof section === "object") {
            return Object.values(section)
                .map(Number)
                .filter((v) => Number.isFinite(v));
        }

        return [];
    };

    const calculateOverallAverage = (keys) => {
        let totalScore = 0;
        let totalCount = 0;

        data.forEach((entry) => {
            keys.forEach((key) => {
                const values = toNumericList(entry?.[key]);
                values.forEach((num) => {
                    totalScore += num;
                    totalCount += 1;
                });
            });
        });

        if (totalCount === 0) return "N/A";
        return (totalScore / totalCount).toFixed(2);
    };

    const sectionSummaries = [
        { title: "Knowledge & Understanding", key: "knowledgeUnderstanding", icon: "🧠" },
        { title: "Perceived Usefulness", key: "perceivedUsefulness", icon: "💡" },
        { title: "Trust in AI", key: "trustInAI", icon: "🤝" },
        { title: "Adoption Intention", key: "adoptionIntention", icon: "🚀" },
        { title: "Future of AI", key: "futureOfAI", icon: "🔮" },
        { title: "Overall Evaluation", key: "overallEvaluation", icon: "⭐" },
    ].map((item) => ({
        ...item,
        average: calculateOverallAverage([item.key]),
    }));


    return (
        <div className='bg-blue-50 '>

            <div className="max-w-7xl mx-auto pt-28 pb-10 ">
                {/* Title & Description */}
                <div className="mb-8 text-center">
                    <h2 className="text-4xl font-bold text-blue-700 mb-2">📝 Post-Survey Summary</h2>
                    <p className="text-gray-600  md:text-base font-medium">
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
                                <SummaryCard title="📚 Vocational" value={countEducationGroup("Vocational")} loading={loading} />
                            </div>
                        </div>
                    )}
                    {activeTab === "farmingType" && (
                        <div>
                            <h3 className="text-xl font-semibold mb-4">🌾 Type of Farming</h3>
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
                                <SummaryCard title="🌿 Mixed Crops" value={countFarmingType("Mixed crops")} loading={loading} />
                                <SummaryCard title="🌾 Paddy" value={countFarmingType("Paddy")} loading={loading} />
                                <SummaryCard title="🪵 Palm Oil" value={countFarmingType("Palm oil")} loading={loading} />
                                <SummaryCard title="🟤 Rubber" value={countFarmingType("Rubber")} loading={loading} />
                                <SummaryCard title="🐄 Livestock" value={countFarmingType("Livestock")} loading={loading} />
                                <SummaryCard title="🥬 Vegetables" value={countFarmingType("Vegetables")} loading={loading} />
                                <SummaryCard title="🍇 Fruits" value={countFarmingType("Fruits")} loading={loading} />
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
                    {activeTab === "understanding" && (
                        <div>
                            <h3 className="text-xl font-semibold mb-4">🚀 AI Understanding Level</h3>
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 mb-10">
                                <SummaryCard title="⚪ Nil" value={countUnderstandingGroup("Nil")} loading={loading} />
                                <SummaryCard title="🔵 Basic" value={countUnderstandingGroup("Basic")} loading={loading} />
                                <SummaryCard title="🟡 Moderate" value={countUnderstandingGroup("Moderate")} loading={loading} />
                                <SummaryCard title="🟢 Good" value={countUnderstandingGroup("Good")} loading={loading} />
                                <SummaryCard title="🟣 Expert" value={countUnderstandingGroup("Expert")} loading={loading} />
                            </div>
                        </div>
                    )}
                </div>
            </div>

            <div className="max-w-7xl mx-auto pt-14 pb-14  ">
                <div className="flex flex-col items-center justify-center rounded-xl border-2 border-gray-300 bg-white shadow p-8">
                    <h1 className="text-3xl font-bold text-center text-blue-800 mb-6">
                        📊 Post-Survey Section Averages
                    </h1>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-4 w-full">
                        {sectionSummaries.map((section) => (
                            <div
                                key={section.key}
                                className="flex flex-col items-center justify-center bg-blue-600 text-white rounded-xl shadow-md p-6 transition hover:scale-[1.02] duration-300"
                            >
                                <h2 className="text-lg font-semibold mb-2 text-center">
                                    {section.icon} {section.title}
                                </h2>
                                {loading ? (
                                    <LoadingSmall />
                                ) : (
                                    <p className="text-4xl font-bold">{section.average}</p>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            {/* <TextZeroResponses /> */}
            <FAQComponent />
            <a href='/thesisplan' className='mt-6 pb-6 no-underline mx-auto flex items-center justify-center border bg-blue-500 border-blue-600 text-white py-2 px-4   hover:bg-blue-600 hover:text-white transition duration-300'>Thesis Plan</a>




        </div>
    );
};

export default PostSurveySummary;
