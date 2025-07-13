import React, { useEffect, useState } from 'react';

const GalleryTab = () => {
    const [images, setImages] = useState([]);
    const [tabIndex, setTabIndex] = useState(0);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("https://survey-backend-3ppk.onrender.com/get/surveys");
                const result = await response.json();
                setImages(result);
            } catch (err) {
                console.error("❌ Failed to fetch data", err);
            }
        };

        fetchData();
    }, []);

    

    return (
        <div className="p-2 md:p-4 mt-10 max-w-7xl mx-auto">
            <h1 className="text-3xl font-bold mb-6 text-center">🖼️ Survey Image Gallery</h1>

            {/* Tab Buttons */}
            <div className="flex flex-col sm:flex-row justify-center items-center w-full gap-2 md:gap-4 mb-6">
                <button
                    className={`w-full sm:w-auto px-5 py-2 rounded-md font-medium transition-all duration-300 ${tabIndex === 0
                        ? 'bg-blue-700 text-white shadow'
                        : 'bg-gray-200 hover:bg-gray-300 text-gray-800'
                        }`}
                    onClick={() => setTabIndex(0)}
                >
                    📷 View Gallery
                </button>
                <button
                    className={`w-full sm:w-auto px-5 py-2 rounded-md font-medium transition-all duration-300 ${tabIndex === 1
                        ? 'bg-blue-700 text-white shadow'
                        : 'bg-gray-200 hover:bg-gray-300 text-gray-800'
                        }`}
                    onClick={() => setTabIndex(1)}
                >
                    📝 View Form
                </button>
            </div>

            {/* Tab Content */}
            {tabIndex === 0 && (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 h-[450px] overflow-y-auto">
                    {images.map((image, index) => (
                        <div key={index} className="border rounded shadow hover:shadow-lg transition duration-200">
                            <img
                                src={image.images || image.imgUrl}
                                alt={`Survey ${index}`}
                                className="w-full h-48 object-cover rounded-t"
                            />
                        </div>
                    ))}
                    {images.length === 0 && (
                        <p className="col-span-full text-center text-gray-500 text-lg">🚫 No images found</p>
                    )}
                </div>
            )}

            {tabIndex === 1 && (
                <div className="max-w-7xl mx-auto bg-white border rounded-lg shadow-md p-6 mt-6">
                    <h2 className="text-2xl font-semibold mb-4 text-center">View Form</h2>


                </div>
            )}
        </div>
    );
};

export default GalleryTab;
