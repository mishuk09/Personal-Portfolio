import { useEffect, useState } from "react";
import SurveyAuth from "./SurveyAuth";
import GallerryTab from "./GallerryTab";
import Summary from "./Summary";

const SurveyDashboard = () => {
    const [data, setData] = useState([]);
    const [modal, setModal] = useState(false);
    const [loading, setLoading] = useState(true);

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);
    const [showLoginModal, setShowLoginModal] = useState(false);

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

    return (
        <>
            {modal && (
                <div className="fixed inset-0 bg-black bg-opacity-50 h-screen flex items-center justify-center z-50">
                    <SurveyAuth onClose={() => setModal(false)} />
                </div>
            )}
            {showLoginModal && (
                <div className="fixed inset-0 bg-black bg-opacity-50 h-screen flex items-center justify-center z-50">
                    <Summary onClose={() => setShowLoginModal(false)} />
                </div>
            )}

            <div className="pt-2    ">
                <h1 className="text-3xl font-bold text-blue-900 text-center mb-8">📊 Survey Dashboard</h1>

                {/* Summary Cards */}
                <div className="grid grid-cols-1 md:p-4 sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6 mb-10">

                    <SummaryCard title="📋 Total Responses" value={data.length} loading={loading} />
                    <SummaryCard title="👨 Male" value={data.filter(d => d.demographics?.gender === "Male").length} loading={loading} />
                    <SummaryCard title="👩 Female" value={data.filter(d => d.demographics?.gender === "Female").length} loading={loading} />

                    <div className="flex flex-col gap-2 items-center justify-center bg-white border border-gray-200 rounded-xl shadow-sm p-3 hover:shadow-md transition">
                        <button
                            className="bg-blue-600 text-white font-medium py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-200 w-full"
                            onClick={() => setModal(true)}
                        >
                            ➕ Add Survey
                        </button>
                        <button
                            className="bg-green-500 text-white font-medium py-2 px-4 rounded-lg hover:bg-green-600 transition duration-200 w-full"
                            onClick={() => setShowLoginModal(true)}

                        >
                            Summary
                        </button>
                    </div>
                </div>

                {/* Table or Loading */}
                <div className="bg-white md:m-4  rounded shadow-md overflow-x-auto min-h-[200px] flex items-center justify-center">
                    {loading ? (
                        <div className="text-center">
                            <div className="animate-spin rounded-full h-8 w-8 border-t-4 border-blue-600 border-solid mx-auto mb-2"></div>
                            <p className="text-sm text-gray-600">Loading survey data...</p>
                        </div>
                    ) : (
                        <>
                            <div className="w-full   h-[400px] overflow-y-auto">
                                <h2 className="text-xl p-2 font-semibold text-blue-800">🧾 Individual Responses</h2>
                                <table className="min-w-full   text-sm border-collapse">
                                    <thead className="bg-blue-600 text-white sticky top-0 z-10">
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
                                        {[...data]
                                            .sort(() => Math.random() - 0.5) // This line randomizes the array
                                            .map((entry, index) => {
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
                        <div className="bg-white p-4 rounded-lg relative max-w-lg w-full max-h-[70vh] overflow-y-auto">
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

            <GallerryTab />
           
        </>
    );
};

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



export default SurveyDashboard;
