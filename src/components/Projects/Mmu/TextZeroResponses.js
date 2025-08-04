import React, { useEffect, useState } from "react";
import axios from "axios";

const TextZeroResponses = () => {
    const [textZeroList, setTextZeroList] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchSurveys = async () => {
            try {
                const response = await axios.get("https://survey-backend-3ppk.onrender.com/get/surveys");

                // Debug: See the actual structure
                console.log("Full API Response:", response.data);

                // Extract text-0 from each survey
                const extracted = response.data.map((survey) => {
                    return survey.textAnswers?.["text-5"];
                });

                // Filter out undefined/null/empty responses
                const filtered = extracted.filter((item) => item && item.trim() !== "");

                setTextZeroList(filtered);
            } catch (error) {
                console.error("Error fetching survey data:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchSurveys();
    }, []);

    return (
        <div className="max-w-4xl mx-auto p-6 bg-gray-50 min-h-screen">
            <h2 className="text-2xl font-bold mb-6 text-blue-800 text-center">📌 All "text-2" Responses</h2>

            {loading ? (
                <p className="text-center text-gray-500">Loading...</p>
            ) : textZeroList.length === 0 ? (
                <p className="text-center text-gray-500">No data found.</p>
            ) : (
                <ul className="space-y-4">
                    {textZeroList.map((text, index) => (
                        <li
                            key={index}
                            className="bg-white p-4 rounded-lg shadow border-l-4 border-blue-500 text-gray-800"
                        >
                            <span className="font-semibold text-blue-600">#{index + 1}:</span> {text}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default TextZeroResponses;
