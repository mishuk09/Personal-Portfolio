import React, { useState } from 'react';

const AddsurveyData = ({ onClose }) => {
    const [img, setImg] = useState(null);
    const [loading, setLoading] = useState(false);

    const [formData, setFormData] = useState({
        demographics: {},
        awareness: {},
        readiness: {},
        textAnswers: {}
    });

    const demographicItems = [
        { key: "age", label: "Age:", options: ["Below 25", "25-34", "35-44", "45-54", "50 & above"] },
        { key: "gender", label: "Gender:", options: ["Male", "Female", "Prefer not to say"] },
        { key: "education", label: "Highest Education Level:", options: ["No Education", "Primary", "Secondary", "Tertiary (College/Univ)", "Vocational"] },
        { key: "farmingType", label: "Type of Farming:", options: ["Paddy", "Palm oil", "Rubber", "Mixed crops", "Livestock", "Fruits", "Vegetables"] },
        { key: "farmSize", label: "Size of Farm:", options: ["Less than 2 hect", "2–5 hectares", "6–10 hec", "More than 10 hec"] },
        { key: "experience", label: "Years of Farming Experience:", options: ["Less than 5 years", "5–10 years", "11–20 years", "More than 20"] },
    ];

    const questions = [
        "I am aware of what green (environmentally friendly) fertilizer is.",
        "Green fertilizers are better for the environment than traditional fertilizers.",
        "I have received information or training about green fertilizers.",
        "I understand the potential long-term benefits of using green fertilizer.",
        "I know where to buy green fertilizers.",
        "I believe the use of chemical fertilizers has long-term negative effects on soil health.",
        "I have heard about green fertilizers from agricultural officers, extension workers, or government programs."
    ];

    const questions2 = [
        "I am ready to use green fertilizer on my farm.",
        "I believe green fertilizer is cost-effective.",
        "I am willing to attend training programs on green fertilizer use.",
        "I would switch to green fertilizer if it were subsidized or provided at a discount.",
        "I trust that green fertilizer can provide comparable yields to chemical fertilizers.",
        "I am willing to participate in pilot programs for testing green fertilizer.",
        "I would consider using green fertilizer if other farmers in my community adopt it.",
        "I am concerned that switching to green fertilizer might reduce my crop yield initially."
    ];

    const openEndedQuestions = [
        "What do you understand by the term green fertilizer?",
        "In your opinion, what are the main advantages and disadvantages of using green fertilizer?",
        "What challenges would prevent you from adopting green fertilizer?",
        "What support (training, financial aid, policy) would encourage you to use green fertilizer?",
        "Do you have any suggestions to help promote the use of green fertilizer among local farmers?",
        "What role do you think the government, cooperatives, or agricultural agencies should play in promoting green fertilizer?"
    ];

    const handleDemographicChange = (key, value) => {
        setFormData(prev => ({
            ...prev,
            demographics: {
                ...prev.demographics,
                [key]: value
            }
        }));
    };

    const handleRatingChange = (index, value) => {
        setFormData(prev => ({
            ...prev,
            awareness: {
                ...prev.awareness,
                [`question-${index}`]: value
            }
        }));
    };

    const handleRatingChange2 = (index, value) => {
        setFormData(prev => ({
            ...prev,
            readiness: {
                ...prev.readiness,
                [`question2-${index}`]: value
            }
        }));
    };

    const handleTextChange = (index, value) => {
        setFormData(prev => ({
            ...prev,
            textAnswers: {
                ...prev.textAnswers,
                [`text-${index}`]: value
            }
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        const submissionData = new FormData();

        submissionData.append("demographics", JSON.stringify(formData.demographics));
        submissionData.append("awareness", JSON.stringify(formData.awareness));
        submissionData.append("readiness", JSON.stringify(formData.readiness));
        submissionData.append("textAnswers", JSON.stringify(formData.textAnswers));

        if (img) {
            submissionData.append("images", img); // backend expects "images"
        }

        try {
            const response = await fetch("https://survey-backend-3ppk.onrender.com/api/survey", {
                method: "POST",
                body: submissionData
            });

            if (response.ok) {
                alert("Survey submitted successfully!");
                setFormData({
                    demographics: {},
                    awareness: {},
                    readiness: {},
                    textAnswers: {}
                });
                setImg(null);
                setLoading(false);
            } else {
                alert("Submission failed.");
            }
        } catch (error) {
            console.error("Error submitting form:", error);
            alert("An error occurred while submitting the survey.");
        }
    };

    return (
        <div className="relative max-w-5xl mx-auto p-6 bg-white rounded shadow">
            <button
                onClick={onClose}
                className="absolute top-4 right-4 text-red-600 hover:text-gray-800 z-50"
            >
                ✖
            </button>

            <form onSubmit={handleSubmit} className="relative h-[500px] overflow-y-auto mt-10 space-y-6">

                <h2 className="text-2xl font-bold text-blue-900">Section A: Demographic Information</h2>
                {demographicItems.map((item, i) => (
                    <div key={i} className="flex flex-col md:flex-row md:items-start gap-2 border-b pb-2">
                        <label className="md:w-1/4 font-medium text-gray-700">{item.label}</label>
                        <div className="flex flex-wrap gap-3">
                            {item.options.map(opt => (
                                <label key={opt} className="flex items-center gap-1 text-sm text-gray-600">
                                    <input
                                        type="radio"
                                        required
                                        name={item.key}
                                        value={opt}
                                        checked={formData.demographics[item.key] === opt}
                                        onChange={() => handleDemographicChange(item.key, opt)}
                                        className="form-radio"
                                    />
                                    {opt}
                                </label>
                            ))}
                        </div>
                    </div>
                ))}

                <h2 className="text-xl font-bold text-blue-900">🌿 Rating Questions Set 1</h2>
                {questions.map((q, i) => (
                    <div key={i} className="flex flex-col md:flex-row md:items-center justify-between border-b  leading-3">
                        <p className="text-gray-700 font-medium">{i + 1}. {q}</p>
                        <div className="flex gap-4 mt-1">
                            {[1, 2, 3, 4, 5].map(score => (
                                <label key={score} className="flex items-center gap-1">
                                    <input
                                        type="radio"
                                        required
                                        name={`question-${i}`}
                                        value={score}
                                        checked={formData.awareness[`question-${i}`] === `${score}`}
                                        onChange={() => handleRatingChange(i, `${score}`)}
                                        className="form-radio"
                                    />
                                    {score}
                                </label>
                            ))}
                        </div>
                    </div>
                ))}

                <h2 className="text-xl font-bold text-blue-900">🌿 Rating Questions Set 2</h2>
                {questions2.map((q, i) => (
                    <div key={i} className="flex flex-col md:flex-row md:items-center justify-between border-b leading-3">
                        <p className="text-gray-700 font-medium">{i + 1}. {q}</p>
                        <div className="flex gap-4 ">
                            {[1, 2, 3, 4, 5].map(score => (
                                <label key={score} className="flex items-center gap-1">
                                    <input
                                        type="radio"
                                        required
                                        name={`question2-${i}`}
                                        value={score}
                                        checked={formData.readiness[`question2-${i}`] === `${score}`}
                                        onChange={() => handleRatingChange2(i, `${score}`)}
                                        className="form-radio"
                                    />
                                    {score}
                                </label>
                            ))}
                        </div>
                    </div>
                ))}

                <h2 className="text-xl font-bold text-blue-900">📝 Open-ended Questions</h2>
                {openEndedQuestions.map((q, i) => (
                    <div key={i} className="  p-1">
                        <label className="block font-medium text-gray-700  ">
                            {i + 1}. {q}
                        </label>
                        <textarea
                            rows={3}
                            className="w-full p-1 h-10 border border-gray-300 bg-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Type your answer..."
                            value={formData.textAnswers[`text-${i}`] || ""}
                            onChange={(e) => handleTextChange(i, e.target.value)}
                        />
                    </div>
                ))}

                <div>
                    <label className="block text-sm font-medium text-gray-700">Upload Image</label>
                    <input
                        type="file"
                        name="image"
                        accept="image/*"
                        onChange={(e) => setImg(e.target.files[0] || null)}
                     
                        className="mt-1 block w-full p-1 bg-gray-300 text-sm border border-gray-300 rounded"
                    />
                </div>

                <div className="text-center mt-6">
                    <button
                        type="submit"
                        disabled={loading}
                        className="bg-blue-900 text-white px-6 py-2 rounded hover:bg-blue-800 flex items-center justify-center gap-2"
                    >
                        {loading ? (
                            <>
                                <svg
                                    className="animate-spin h-5 w-5 text-white"
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
                                Submitting...
                            </>
                        ) : (
                            "Submit"
                        )}
                    </button>

                </div>
            </form>
        </div>
    );
};

export default AddsurveyData;
