import React, { useEffect, useState } from 'react';

// ✅ SummaryCard Component
const SummaryCard = ({ title, value, loading }) => (
    <div className="bg-white min-h-22 p-3 rounded-xl shadow flex flex-col items-center justify-center hover:shadow transition min-h-[80px]">
        <h2 className="text-sm font-medium text-gray-500 text-center">{title}</h2>
        {loading ? (
            <div className="mt-3 h-8 w-8 border-2 border-blue-500 border-t-transparent border-r-transparent rounded-full animate-spin ease-linear duration-700"></div>
        ) : (
            <p className="text-3xl font-bold text-blue-800 text-center">{value}</p>
        )}
    </div>
);

const SurveySummary = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

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
            (d) => d.demographics?.experience?.trim().toLowerCase() === groupLabel.trim().toLowerCase()
        ).length;
    };


    return (
        <>
            <div className="p-4 bg-gray-50 min-h-screen">
                <h1 className="text-2xl font-bold mb-6 text-center">📋 Summary of Survey - Age Groups</h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
                    <SummaryCard title="👶 Below 25" value={countAgeGroup("Below 25")} loading={loading} />
                    <SummaryCard title="🧑 25 - 34" value={countAgeGroup("25-34")} loading={loading} />
                    <SummaryCard title="🧔 35 - 44" value={countAgeGroup("35-44")} loading={loading} />
                    <SummaryCard title="🧓 45 - 54" value={countAgeGroup("45-54")} loading={loading} />
                    <SummaryCard title="👴 50 & above" value={countAgeGroup("50 & above")} loading={loading} />

                </div>
            </div>
            <div className="p-4 bg-gray-50 min-h-screen">
                <h1 className="text-2xl font-bold mb-6 text-center">📋 Summary - Education Levels</h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
                    <SummaryCard title="📘 Primary" value={countEducationGroup("Primary")} loading={loading} />
                    <SummaryCard title="📗 Secondary" value={countEducationGroup("Secondary")} loading={loading} />
                    <SummaryCard title="🎓 Tertiary" value={countEducationGroup("Tertiary (College/Univ)")} loading={loading} />
                    <SummaryCard title="📚 Others" value={countEducationGroup("Others")} loading={loading} />
                </div>

            </div>
            <div className="p-4 bg-gray-50 min-h-screen">
                <h1 className="text-2xl font-bold mb-6 text-center">🌾 Farming Type Breakdown</h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
                    <SummaryCard title="🌿 Mixed Crops" value={countFarmingType("Mixed crops")} loading={loading} />
                    <SummaryCard title="🌾 Paddy" value={countFarmingType("Paddy")} loading={loading} />
                    <SummaryCard title="🥬 Vegetables" value={countFarmingType("Vegetables")} loading={loading} />
                    <SummaryCard title="🍇 Fruits" value={countFarmingType("Fruits")} loading={loading} />
                    <SummaryCard title="🪵 Others" value={countFarmingType("Others")} loading={loading} />
                </div>


            </div>
            <div className="p-4 bg-gray-50 min-h-screen">
                <h1 className="text-2xl font-bold mb-6 text-center">🌾 Farm Size Distribution</h1>
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
            <div className="p-4 bg-gray-50 min-h-screen">


                <h1 className="text-2xl font-bold mb-6 text-center">🌾 Years of Experiences</h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
                    <SummaryCard title="🌱 Less than 1 Year" value={countExperienceGroup("Less than 1 year")} loading={loading} />
                    <SummaryCard title="🌿 1–5 Years" value={countExperienceGroup("1–5 years")} loading={loading} />
                    <SummaryCard title="🌾 5–10 Years" value={countExperienceGroup("5–10 years")} loading={loading} />
                    <SummaryCard title="🌳 More than 10 Years" value={countExperienceGroup("More than 10 years")} loading={loading} />


                </div>
            </div>
        </>
    );
};

export default SurveySummary;
