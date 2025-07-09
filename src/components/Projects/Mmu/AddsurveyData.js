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
        "How familiar are you with green fertilizers?",
        "How likely are you to adopt eco-friendly practices?",
        "How important is environmental sustainability to you?",
        "How often do you use chemical fertilizers?",
        "How confident are you in understanding farming innovations?",
        "How satisfied are you with your current farming methods?",
        "How willing are you to learn about organic alternatives?"
    ];

    const questions2 = [
        "How often do you attend agricultural training?",
        "How well do you understand government fertilizer policies?",
        "How do you rate support from local agricultural offices?",
        "How open are you to adopting new farming technology?",
        "How effective do you think green fertilizers are?",
        "How frequently do you consult with other farmers?",
        "How likely are you to recommend green fertilizers?"
    ];

    const openEndedQuestions = [
        "What do you know about green fertilizers?",
        "Have you ever used organic or eco-friendly fertilizers?",
        "What challenges do you face in adopting green fertilizer?",
        "How do you learn about new farming techniques?",
        "What support do you expect from the government or organizations?",
        "How do you think green fertilizers could benefit your farm?"
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
        <form onSubmit={handleSubmit} className="max-w-5xl mx-auto relative h-[500px] overflow-hidden overflow-y-auto  p-6 bg-white rounded shadow space-y-2">
            <button onClick={onClose} className="absolute top-4 right-4 text-red-600 hover:text-gray-800">
                ✖
            </button>
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
    );
};

export default AddsurveyData;
