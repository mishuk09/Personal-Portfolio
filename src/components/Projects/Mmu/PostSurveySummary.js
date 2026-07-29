import React, { useEffect, useState } from 'react';
import FAQComponent from './FAQComponent';
import LoadingSmall from '../Utills/LoadingSmall';
import PostFAQComponent from './PostFAQComponent';

const SummaryCard = ({ title, value, loading }) => (
    <div className="bg-white border-2 border-blue-500 hover:scale-105 duration-200 cursor-pointer p-3 rounded-xl shadow flex flex-col items-center justify-center hover:shadow-md transition min-h-[88px]">
        <h2 className="text-sm sm:text-lg font-medium text-gray-500 text-center">{title}</h2>
        {loading ? (
            <LoadingSmall />
        ) : (
            <p className="text-sm sm:text-3xl font-bold text-blue-800 text-center">{value}</p>
        )}
    </div>
);



const PostSurveySummary = ({ onClose }) => {
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
                const response = await fetch("https://survey-backend-3ppk.onrender.com/get/postsurveys");
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
            .trim()
            .replace(/&/g, "and")
            .replace(/[\s\-–—_]+/g, "")
            .replace(/[^a-z0-9]/g, "");

    const groupAliasesMatch = (value, aliases) => {
        const normalizedValue = normalize(value);

        if (!normalizedValue) {
            return false;
        }

        return aliases.some((alias) => {
            const normalizedAlias = normalize(alias);

            return (
                normalizedValue === normalizedAlias ||
                normalizedValue.includes(normalizedAlias) ||
                normalizedAlias.includes(normalizedValue)
            );
        });
    };

    const countByAliases = (selector, aliases) =>
        data.filter((entry) => groupAliasesMatch(selector(entry), aliases)).length;

    const ageGroups = [
        { title: "👶 Below 25", aliases: ["Below 25"] },
        { title: "🧑 25–34", aliases: ["25-34", "25–34", "25 - 34"] },
        { title: "🧔 35–44", aliases: ["35-44", "35–44", "35 - 44"] },
        { title: "🧓 45–54", aliases: ["45-54", "45–54", "45 - 54"] },
        { title: "👴 50 & above", aliases: ["50 & above", "50 and above", "50+", "50 above"] },
    ];

    const educationGroups = [
        { title: "📘 Primary", aliases: ["Primary"] },
        { title: "📗 Secondary", aliases: ["Secondary", "secondary"] },
        { title: "🎓 Tertiary (Colle/Unive)", aliases: ["tertiary","Tertiary", "Tertiary (Colle/Unive)", "Tertiary (College/Univ)"] },
        { title: "📚 Vocational", aliases: ["Vocational","vocational"] },
    ];

    const farmingTypeGroups = [
        { title: "🌾 Paddy", aliases: ["Paddy"] },
        { title: "🪵 Palm Oil", aliases: ["Palm oil", "Palm Oil"] },
        { title: "🟤 Rubber", aliases: ["Rubber"] },
        { title: "🍇 Fruits", aliases: ["Fruits"] },
        { title: "🥬 Vegetables", aliases: ["Vegetables"] },
        { title: "🌿 Mixed Crops", aliases: ["Mixed crops", "Mixed Crops"] },
        { title: "🐄 Livestock", aliases: ["Livestock"] },
    ];

    const farmSizeGroups = [
        { title: "🌿 Less than 2 hect", aliases: ["Less than 2 hect", "Less than 2 hectares", "Less than 2 hecters"] },
        { title: "🌿 2–5 hectares", aliases: ["2–5 hectares", "2-5 hectares", "2 - 5 hectares"] },
        { title: "🌿 6–10 hectares", aliases: ["6–10 hec", "6–10 hectares", "6-10 hectares"] },
        { title: "🌾 More than 10 hectares", aliases: ["More than 10 hec", "More than 10 hectares", "More than 10 hec"] },
    ];

    const experienceGroups = [
        { title: "🟢 Less than 5 years", aliases: ["Less than 5 years"] },
        { title: "🔵 5–10 years", aliases: ["5–10 years", "5-10 years", "5 - 10 years"] },
        { title: "🟡 11–20 years", aliases: ["11–20 years", "11-20 years", "11 - 20 years"] },
        { title: "🔴 More than 20 years", aliases: ["More than 20 years", "More than 20"] },
    ];

    const understandingGroups = [
        { title: "⚪ Nil", aliases: ["Nil"] },
        { title: "🔵 Basic", aliases: ["Basic"] },
        { title: "🟡 Moderate", aliases: ["Moderate"] },
        { title: "🟢 Good", aliases: ["Good"] },
        { title: "🟣 Expert", aliases: ["Expert"] },
    ];

    const countAgeGroup = (groupLabel) =>
        countByAliases((entry) => entry.demographics?.age, ageGroups.find((group) => group.title === groupLabel)?.aliases || [groupLabel]);

    const countEducationGroup = (groupLabel) =>
        countByAliases((entry) => entry.demographics?.education, educationGroups.find((group) => group.title === groupLabel)?.aliases || [groupLabel]);

    const countFarmingType = (typeLabel) =>
        countByAliases((entry) => entry.demographics?.farmingType, farmingTypeGroups.find((group) => group.title === typeLabel)?.aliases || [typeLabel]);

    const countFarmSizeGroup = (groupLabel) =>
        countByAliases((entry) => entry.demographics?.farmSize, farmSizeGroups.find((group) => group.title === groupLabel)?.aliases || [groupLabel]);

    const countExperienceGroup = (groupLabel) =>
        countByAliases((entry) => entry.demographics?.experience, experienceGroups.find((group) => group.title === groupLabel)?.aliases || [groupLabel]);

    const countUnderstandingGroup = (groupLabel) =>
        countByAliases((entry) => {
            const demographics = entry.demographics || {};

            return (
                demographics.understanding ??
                demographics.understand ??
                demographics.Understanding ??
                demographics.Understand ??
                entry.understanding ??
                entry.understand
            );
        }, understandingGroups.find((group) => group.title === groupLabel)?.aliases || [groupLabel]);

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
        { title: "Knowledge & Understanding", keys: ["knowledgeUnderstanding", "KnowledgeUnderstanding"], icon: "🧠" },
        { title: "Perceived Usefulness", keys: ["perceivedUsefulness", "PerceivedUsefulness"], icon: "💡" },
        { title: "Trust in AI", keys: ["trustInAI", "TrustinAI"], icon: "🤝" },
        { title: "Adoption Intention", keys: ["adoptionIntention", "AdoptionIntention"], icon: "🚀" },
        { title: "Future of AI", keys: ["futureOfAI", "FutureofAIinAgriculture"], icon: "🔮" },
        { title: "Overall Evaluation", keys: ["overallEvaluation", "OverallEvaluation"], icon: "⭐" },
    ].map((item) => ({
        ...item,
        average: calculateOverallAverage(item.keys),
    }));


    return (
        <div className='bg-blue-50 '>

            <div className="max-w-7xl mx-auto pt-28 pb-10 px-2">
                {/* Title & Description */}
                <div className="mb-8 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-blue-700 mb-2">📝 Post-Survey Summary</h2>
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
                            className={`px-4 py-2 sm:text-lg font-semibold border-b-2 transition-all duration-200
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
                            <h3 className="text-lg sm:text-xl font-semibold mb-4">🎂 Age Distribution</h3>
                            <div className="grid  grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6 mb-10">
                                {ageGroups.map((group) => (
                                    <SummaryCard
                                        key={group.title}
                                        title={group.title}
                                        value={countAgeGroup(group.title)}
                                        loading={loading}
                                    />
                                ))}
                            </div>
                        </div>
                    )}
                    {activeTab === "education" && (
                        <div>
                            <h3 className="text-xl font-semibold mb-4">🎓 Educational Background</h3>
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
                                {educationGroups.map((group) => (
                                    <SummaryCard
                                        key={group.title}
                                        title={group.title}
                                        value={countEducationGroup(group.title)}
                                        loading={loading}
                                    />
                                ))}
                            </div>
                        </div>
                    )}
                    {activeTab === "farmingType" && (
                        <div>
                            <h3 className="text-xl font-semibold mb-4">🌾 Type of Farming</h3>
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
                                {farmingTypeGroups.map((group) => (
                                    <SummaryCard
                                        key={group.title}
                                        title={group.title}
                                        value={countFarmingType(group.title)}
                                        loading={loading}
                                    />
                                ))}
                            </div>
                        </div>
                    )}
                    {activeTab === "farmingSize" && (
                        <div>
                            <h3 className="text-xl font-semibold mb-4">📐 Size of Farming Land</h3>
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
                                {farmSizeGroups.map((group) => (
                                    <SummaryCard
                                        key={group.title}
                                        title={group.title}
                                        value={countFarmSizeGroup(group.title)}
                                        loading={loading}
                                    />
                                ))}


                            </div>
                        </div>
                    )}
                    {activeTab === "experience" && (
                        <div>
                            <h3 className="text-xl font-semibold mb-4">👨‍🌾 Years of Experience</h3>
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
                                {experienceGroups.map((group) => (
                                    <SummaryCard
                                        key={group.title}
                                        title={group.title}
                                        value={countExperienceGroup(group.title)}
                                        loading={loading}
                                    />
                                ))}

                            </div>
                        </div>
                    )}
                    {activeTab === "understanding" && (
                        <div>
                            <h3 className="text-xl font-semibold mb-4">🚀 AI Understanding Level</h3>
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 mb-10">
                                {understandingGroups.map((group) => (
                                    <SummaryCard
                                        key={group.title}
                                        title={group.title}
                                        value={countUnderstandingGroup(group.title)}
                                        loading={loading}
                                    />
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </div>

            <div className="max-w-7xl mx-auto pt-14 pb-14 px-2 ">
                <div className="flex flex-col items-center justify-center rounded-xl border-2 border-gray-300 bg-white shadow p-8">
                    <h1 className="text-xl md:text-3xl font-bold text-center  mb-6">
                        📊 Post-Survey Section Averages
                    </h1>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6 mt-4 w-full">
                        {sectionSummaries.map((section) => (
                            <div
                                key={section.title}
                                className="flex flex-col items-center justify-center bg-blue-600 text-white rounded-xl shadow-md p-6 transition hover:scale-[1.02] duration-300"
                            >
                                <h2 className="text-sm md:text-lg font-semibold mb-2 text-center">
                                    {section.icon} {section.title}
                                </h2>
                                {loading ? (
                                    <LoadingSmall />
                                ) : (
                                    <p className="text-2xl md:text-4xl font-bold">{section.average}</p>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            {/* <TextZeroResponses /> */}
            <PostFAQComponent />




        </div>
    );
};

export default PostSurveySummary;
