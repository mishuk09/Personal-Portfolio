import React, { useEffect, useState } from 'react';
import LoadingSmall from '../Utills/LoadingSmall';

const GalleryTab = () => {
    const [images, setImages] = useState([]);
    const [tabIndex, setTabIndex] = useState(0);
    const [loading, setLoading] = useState(true);
    const [selectedImage, setSelectedImage] = useState(null); // For storing selected image for modal
    const [isModalOpen, setIsModalOpen] = useState(false); // To manage modal visibility

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

    // Shuffle images randomly
    const shuffleImages = (imageUrls) => {
        for (let i = imageUrls.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [imageUrls[i], imageUrls[j]] = [imageUrls[j], imageUrls[i]];
        }
    };

    // Open modal with the selected image
    const openModal = (imageUrl) => {
        setSelectedImage(imageUrl);
        setIsModalOpen(true);
    };

    // Close the modal
    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedImage(null);
    };

    return (
        <div className="border bg-white rounded border-gray-300 md:p-4 mt-10 max-w-7xl mx-auto">
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
            {loading ? (
               <div className="text-center items-center justify-center flex flex-col h-64">
                            <LoadingSmall />
                            <p className="text-sm text-gray-600 mt-2">Loading survey data...</p>
                        </div>
            ) : (
                tabIndex === 0 && (
                    <div className="grid grid-cols-2 sm:grid-cols-2 border border-gray-300 rounded md:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-6 h-[450px] overflow-y-auto">
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

                            // Shuffle images before rendering
                            shuffleImages(validImageUrls);

                            return validImageUrls.length === 0 ? (
                                <p className="col-span-full text-center text-gray-500 text-lg">
                                    🚫 No valid images found
                                </p>
                            ) : (
                                validImageUrls.map((url, index) => (
                                    <div
                                        key={index}
                                        className="border rounded shadow hover:shadow-lg transition duration-200"
                                        onClick={() => openModal(url)} // Open modal on image click
                                    >
                                        <img
                                            src={url}
                                            alt={`Survey ${index}`}
                                            className="w-full h-48 object-cover rounded-t cursor-pointer"
                                        />
                                    </div>
                                ))
                            );
                        })()}
                    </div>
                )
            )}

            {/* Modal for Image Viewing */}
            {isModalOpen && (
                <div className="fixed inset-0 bg-gray-900 bg-opacity-75 flex justify-center items-center z-50">
                    <div className="relative bg-white p-6 rounded-lg max-w-3xl w-full">
                        <button
                            className="absolute top-2 right-2  text-gray-700"
                            onClick={closeModal}
                        >
                            X
                        </button>
                         <img
                            src={selectedImage}
                            alt="Selected Image"
                            className="w-full h-auto max-h-[80vh] object-contain"
                        />
                    </div>
                </div>
            )}

            {/* Form Tab Placeholder */}
            {tabIndex === 1 && (
                <div className="max-w-7xl mx-auto bg-white border rounded-lg shadow-md p-6 mt-6">
                    <h2 className="text-2xl font-semibold mb-4 text-center">Form updating........</h2>
                </div>
            )}
        </div>
    );
};

export default GalleryTab;
