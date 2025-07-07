import React from 'react';

const AddsurveyData = () => {
    return (

        <div className="max-w-7xl mx-auto p-4 bg-white rounded-md shadow-md">
            {/* Header */}
            <div className="bg-blue-900 text-white py-4 px-6 rounded-t-md">
                <h2 className="text-xl font-semibold">Survey Form for Research</h2>
            </div>

            {/* Title */}
            <div className="text-center my-6">
                <h3 className="text-2xl font-bold">“Farmer’s Awareness and Readiness Towards Green Fertilizer”</h3>
            </div>

            {/* Section A */}
            <div className="space-y-6">
                <h4 className="text-lg font-semibold text-blue-900">Section A: Demographic Information</h4>

                {/* Age */}
                <div>
                    <label className="font-semibold">Age:</label>
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-2 mt-2">
                        {["Below 25", "25-34", "35-44", "45-54", "50 & above"].map(age => (
                            <label className="flex items-center space-x-2" key={age}>
                                <input type="checkbox" className="form-checkbox" />
                                <span>{age}</span>
                            </label>
                        ))}
                    </div>
                </div>

                {/* Gender */}
                <div>
                    <label className="font-semibold">Gender:</label>
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 mt-2">
                        {["Male", "Female", "Prefer not to say"].map(gender => (
                            <label className="flex items-center space-x-2" key={gender}>
                                <input type="checkbox" className="form-checkbox" />
                                <span>{gender}</span>
                            </label>
                        ))}
                    </div>
                </div>

                {/* Education Level */}
                <div>
                    <label className="font-semibold">Highest Education Level:</label>
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 mt-2">
                        {["No Education", "Primary", "Secondary", "Tertiary (Colle/Unive)", "Vocational"].map(level => (
                            <label className="flex items-center space-x-2" key={level}>
                                <input type="checkbox" className="form-checkbox" />
                                <span>{level}</span>
                            </label>
                        ))}
                    </div>
                </div>

                {/* Type of Farming */}
                <div>
                    <label className="font-semibold">Type of Farming:</label>
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 mt-2">
                        {["Paddy", "Palm oil", "Rubber", "Mixed crops", "Livestock", "Fruits", "Vegetables"].map(type => (
                            <label className="flex items-center space-x-2" key={type}>
                                <input type="checkbox" className="form-checkbox" />
                                <span>{type}</span>
                            </label>
                        ))}
                    </div>
                </div>

                {/* Size of Farm */}
                <div>
                    <label className="font-semibold">Size of Farm:</label>
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 mt-2">
                        {["Less than 2 hect", "2–5 hectares", "6–10 hectares", "More than 10 hectares"].map(size => (
                            <label className="flex items-center space-x-2" key={size}>
                                <input type="checkbox" className="form-checkbox" />
                                <span>{size}</span>
                            </label>
                        ))}
                    </div>
                </div>

                {/* Years of Experience */}
                <div>
                    <label className="font-semibold">Years of Farming Experience:</label>
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 mt-2">
                        {["Less than 5 years", "5–10 years", "11–20 years", "More than 20 years"].map(year => (
                            <label className="flex items-center space-x-2" key={year}>
                                <input type="checkbox" className="form-checkbox" />
                                <span>{year}</span>
                            </label>
                        ))}
                    </div>
                </div>
            </div>
        </div>

    );
};

export default AddsurveyData;