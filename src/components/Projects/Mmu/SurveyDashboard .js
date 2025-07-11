import { useEffect, useState } from "react";
import AddsurveyData from "./AddsurveyData";
import SurveyAuth from "./SurveyAuth";

const SurveyDashboard = () => {
    const [data, setData] = useState([]);
    const [modal, setModal] = useState(false);
    const [loading, setLoading] = useState(true);

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);

    const openModal = (imgUrl) => {
        setSelectedImage(imgUrl);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedImage(null);
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                const response = await fetch("http://localhost:5000/get/surveys");
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

    return (
        <>
            {modal && (
                <div className="fixed inset-0 bg-black bg-opacity-50 h-screen flex items-center justify-center z-50">
                    <SurveyAuth onClose={() => setModal(false)} />
                </div>
            )}

            <div className="p-2 sm:py-6 bg-gray-100 min-h-screen">
                <h1 className="text-3xl font-bold text-blue-900 text-center mb-8">📊 Survey Dashboard</h1>

                {/* Summary Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6 mb-10">
                    <SummaryCard title="📋 Total Responses" value={data.length} />
                    <SummaryCard title="👨 Male" value={data.filter(d => d.demographics?.gender === "Male").length} />
                    <SummaryCard title="👩 Female" value={data.filter(d => d.demographics?.gender === "Female").length} />
                    <div className="flex items-center justify-center bg-white border border-gray-200 rounded-xl shadow-sm p-6 hover:shadow-md transition">
                        <button
                            className="bg-blue-600 text-white font-medium py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-200 w-full"
                            onClick={() => setModal(true)}
                        >
                            ➕ Add Survey
                        </button>
                    </div>
                </div>

                {/* Table or Loading */}
                <div className="bg-white p-4 rounded-xl shadow-md overflow-x-auto min-h-[200px] flex items-center justify-center">
                    {loading ? (
                        <div className="text-center">
                            <div className="animate-spin rounded-full h-8 w-8 border-t-4 border-blue-600 border-solid mx-auto mb-2"></div>
                            <p className="text-sm text-gray-600">Loading survey data...</p>
                        </div>
                    ) : (
                        <>
                            <div className="w-full">
                                <h2 className="text-xl font-semibold text-blue-800 mb-4">🧾 Individual Responses</h2>
                                <table className="min-w-full text-sm border-collapse">
                                    <thead className="bg-blue-600 text-white">
                                        <tr>
                                            <th className="px-4 py-2">#</th>
                                            <th className="px-4 py-2">👤 Age</th>
                                            <th className="px-4 py-2">⚥ Gender</th>
                                            <th className="px-4 py-2">🎓 Education</th>
                                            <th className="px-4 py-2">🌱 Awareness Avg</th>
                                            <th className="px-4 py-2">🚀 Readiness Avg</th>
                                            <th className="px-4 py-2">📷 Photo</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {data.map((entry, index) => {
                                            const awarenessValues = Object.values(entry.awareness || {}).map(Number);
                                            const readinessValues = Object.values(entry.readiness || {}).map(Number);
                                            const awarenessAvg = awarenessValues.length
                                                ? (awarenessValues.reduce((a, b) => a + b, 0) / awarenessValues.length).toFixed(1)
                                                : "-";
                                            const readinessAvg = readinessValues.length
                                                ? (readinessValues.reduce((a, b) => a + b, 0) / readinessValues.length).toFixed(1)
                                                : "-";

                                            return (
                                                <tr key={entry._id || index} className="hover:bg-gray-50 border-b">
                                                    <td className="px-4 py-2">{index + 1}</td>
                                                    <td className="px-4 py-2">{entry.demographics?.age || "-"}</td>
                                                    <td className="px-4 py-2">{entry.demographics?.gender || "-"}</td>
                                                    <td className="px-4 py-2">{entry.demographics?.education || "-"}</td>
                                                    <td className="px-4 py-2">{awarenessAvg}</td>
                                                    <td className="px-4 py-2">{readinessAvg}</td>
                                                    <td className="px-4 py-2">
                                                        {entry.images?.length > 0 ? (
                                                            <img
                                                                src={entry.images[0]}
                                                                alt="Survey"
                                                                className="w-6 h-6 object-cover rounded cursor-pointer hover:scale-110 transition-transform duration-200"
                                                                onClick={() => openModal(entry.images[0])}
                                                            />
                                                        ) : (
                                                            "-"
                                                        )}
                                                    </td>
                                                </tr>
                                            );
                                        })}
                                    </tbody>
                                </table>
                            </div>
                        </>
                    )}
                </div>

                {/* Modal for image preview */}
                {isModalOpen && (
                    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                        <div className="bg-white p-4 rounded-lg relative max-w-lg w-full">
                            <button
                                onClick={closeModal}
                                className="absolute top-1 right-2 text-sm text-red-500   "
                            >
                                ✖
                            </button>
                            <img src={selectedImage} alt="Full Survey" className="w-full h-auto rounded" />
                        </div>
                    </div>
                )}
            </div>
        </>
    );
};

// ✅ SummaryCard Component
const SummaryCard = ({ title, value }) => (
    <div className="bg-white h-22 p-3 rounded-xl shadow flex flex-col items-center justify-center hover:shadow transition">
        <h2 className="text-sm font-medium text-gray-500 text-center">{title}</h2>
        <p className="text-3xl font-bold text-blue-800 text-center">{value}</p>
    </div>
);

export default SurveyDashboard;
