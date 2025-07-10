import React, { useState } from 'react';

const AddsurveyData = ({ onClose }) => {
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

        try {
            const response = await fetch("http://localhost:5000/api/survey", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(formData)
            });

            if (response.ok) {
                alert("Survey submitted successfully!");
                setFormData({ demographics: {}, awareness: {}, readiness: {}, textAnswers: {} });
            } else {
                alert("Submission failed.");
            }
        } catch (error) {
            console.error(error);
            alert("An error occurred while submitting the survey.");
        }
    };

    return (
        <div className="relative max-w-5xl mx-auto p-6 bg-white rounded shadow">
            {/* Close button OUTSIDE form */}
            <button
                onClick={onClose}
                className="absolute top-4 right-4 text-red-600 hover:text-gray-800 z-50"
            >
                ✖
            </button>

            <form onSubmit={handleSubmit} className="relative h-[500px] overflow-y-auto mt-10 space-y-2">

                <h2 className="text-2xl font-bold text-blue-900 mb-4">Section A: Demographic Information</h2>
                {demographicItems.map((item, i) => (
                    <div key={i} className="flex flex-col border-b  pb-1 border-gray-200 md:flex-row md:items-start md:gap-1">
                        <label className="w-full md:w-1/5 font-semibold text-gray-700">
                            {item.label}
                        </label>

                        <div className="w-full md:w-2/3 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-1">

                            {item.options.map(opt => (
                                <label key={opt} className="flex items-center space-x-1 text-gray-600">
                                    <input
                                        type="radio"
                                        required
                                        name={item.key}
                                        value={opt}
                                        checked={formData.demographics[item.key] === opt}
                                        onChange={() => handleDemographicChange(item.key, opt)}
                                        className="form-radio text-blue-600"
                                    />
                                    <span className="text-sm">{opt}</span>
                                </label>
                            ))}
                        </div>
                    </div>
                ))}

                <h2 className="text-2xl pt-8 pb-2   border-b  font-bold text-blue-900">🌿 Rating Questions Set 1</h2>
                {questions.map((q, i) => (
                    <div key={i} className="flex flex-col md:flex-row md:items-center justify-between border-b pb-1">
                        {/* Question */}
                        <div className="md:w-2/3 text-gray-800 font-medium">{i + 1}. {q}</div>
                        <div className="md:w-1/3 flex justify-start md:justify-end gap-4 mt-3 md:mt-0">
                            {[1, 2, 3, 4, 5].map(score => (
                                <label key={score} className="flex items-center space-x-1">
                                    <input
                                        type="radio"
                                        required
                                        name={`question-${i}`}
                                        value={score}
                                        checked={formData.awareness[`question-${i}`] === `${score}`}
                                        onChange={() => handleRatingChange(i, `${score}`)}
                                        className="form-radio text-blue-600"
                                    />
                                    <span>{score}</span>
                                </label>
                            ))}
                        </div>
                    </div>
                ))}

                <h2 className="text-2xl pt-8 pb-6 font-bold text-blue-900">🌿 Rating Questions Set 2</h2>
                {questions2.map((q, i) => (
                    <div key={i} className="flex flex-col md:flex-row md:items-center justify-between border-b pb-1">
                        <label className="md:w-2/3 text-gray-800 font-medium">{i + 1}. {q}</label>
                        <div className="md:w-1/3 flex justify-start md:justify-end gap-4 mt-3 md:mt-0">
                            {[1, 2, 3, 4, 5].map(score => (
                                <label key={score} className="flex items-center space-x-1">
                                    <input
                                        type="radio"
                                        name={`question2-${i}`}
                                        required
                                        value={score}
                                        checked={formData.readiness[`question2-${i}`] === `${score}`}
                                        onChange={() => handleRatingChange2(i, `${score}`)}
                                        className="form-radio text-blue-600"
                                    />
                                    <span>{score}</span>
                                </label>
                            ))}
                        </div>
                    </div>
                ))}

                <h2 className="text-2xl pt-8 pb-6 font-bold text-blue-900">📝 Written Response</h2>
                {openEndedQuestions.map((q, i) => (
                    <div key={i} className='space-y-6'>
                        <label className="block font-medium text-gray-800 mb-1">
                            {i + 1}. {q}
                        </label>
                        <textarea
                            rows={3}
                            className="w-full min-h-10 max-h-12 p-2  bg-gray-100 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition"

                            placeholder="Type your answer..."
                            value={formData.textAnswers[`text-${i}`] || ""}
                            onChange={(e) => handleTextChange(i, e.target.value)}
                        />
                    </div>
                ))}

                <div className="text-center">
                    <button type="submit" className="bg-blue-900 text-white px-6 py-2 rounded hover:bg-blue-800">
                        Submit
                    </button>
                </div>
            </form>
        </div>
    );
};

export default AddsurveyData;
