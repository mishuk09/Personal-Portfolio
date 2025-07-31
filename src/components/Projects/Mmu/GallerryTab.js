import React, { useEffect, useState } from 'react';

const GalleryTab = () => {
    const [images, setImages] = useState([]);
    const [tabIndex, setTabIndex] = useState(0);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                const response = await fetch("https://survey-backend-3ppk.onrender.com/get/surveys");
                const result = await response.json();
                setImages(result);
            } catch (err) {
                console.error("❌ Failed to fetch data", err);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    // Filter only entries with images
    const validImages = images.filter(
        (img) => img.images || img.imgUrl
    );

    return (
        <div className="border border-gray-300 md:p-4 mt-10 pb-10 mb-10 max-w-7xl mx-auto">
            <h1 className="text-2xl md:text-3xl font-bold mt-6 mb-6 text-center">🖼️ Survey Image Gallery</h1>

            {/* Tab Buttons */}
            <div className="flex flex-col p-2 sm:flex-row justify-center items-center w-full gap-2 mb-6">
                <button
                    className={`w-full sm:w-auto px-5 py-2 rounded-md font-medium transition-all duration-300 ${tabIndex === 0
                        ? 'bg-blue-700 text-white shadow-sm'
                        : 'bg-gray-200 hover:bg-gray-300 text-gray-800'
                        }`}
                    onClick={() => setTabIndex(0)}
                >
                    📷 View Gallery
                </button>
                <button
                    className={`w-full sm:w-auto px-5 py-2 rounded-md font-medium transition-all duration-300 ${tabIndex === 1
                        ? 'bg-blue-700 text-white shadow-sm'
                        : 'bg-gray-200 hover:bg-gray-300 text-gray-800'
                        }`}
                    onClick={() => setTabIndex(1)}
                >
                    📝 View Form
                </button>
            </div>

            {/* Tab Content */}
            {/* Tab Content */}
            {loading ? (
                <div className="flex justify-center items-center h-64">
                    <svg
                        className="animate-spin h-10 w-10 text-blue-600"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                    >
                        <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                        ></circle>
                        <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                        ></path>
                    </svg>
                </div>
            ) : (
                tabIndex === 0 && (
                    <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-6 h-[450px] overflow-y-auto">
                        {(() => {
                            const validImageUrls = [];

                            images.forEach((img) => {
                                if (Array.isArray(img.images)) {
                                    img.images.forEach((url) => {
                                        if (typeof url === "string" && url.trim() !== "") {
                                            validImageUrls.push(url);
                                        }
                                    });
                                } else if (typeof img.imgUrl === "string" && img.imgUrl.trim() !== "") {
                                    validImageUrls.push(img.imgUrl);
                                }
                            });

                            for (let i = validImageUrls.length - 1; i > 0; i--) {
                                const j = Math.floor(Math.random() * (i + 1));
                                [validImageUrls[i], validImageUrls[j]] = [validImageUrls[j], validImageUrls[i]];
                            }

                            return validImageUrls.length === 0 ? (
                                <p className="col-span-full text-center text-gray-500 text-lg">
                                    🚫 No valid images found
                                </p>
                            ) : (
                                validImageUrls.map((url, index) => (
                                    <div
                                        key={index}
                                        className="border rounded shadow hover:shadow-lg transition duration-200"
                                    >
                                        <img
                                            src={url}
                                            alt={`Survey ${index}`}
                                            className="w-full h-48 object-cover rounded-t"
                                        />
                                    </div>
                                ))
                            );
                        })()}
                    </div>
                )
            )}




            {/* Form Tab Placeholder */}
            {tabIndex === 1 && (
                <div className="max-w-7xl mx-auto bg-white border rounded-lg shadow-md p-6 mt-6">
                    <h2 className="text-2xl font-semibold mb-4 text-center">  Form updating........</h2>
                    {/* Add form content here if needed */}
                </div>
            )}
        </div>
    );
};

export default GalleryTab;
