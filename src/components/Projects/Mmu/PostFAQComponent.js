import React, { useState } from "react";

const PostFAQComponent = () => {
    const [activeIndex, setActiveIndex] = useState(null);

        const faqs = [
                {
                        question: "What was the most valuable thing you learned from today's workshop?",
                        answers: [
                                "AI helps reduce the environmental harm of chemical fertilizers and pesticides.",
                                "AI can predict and prevent the environmental damage caused by ammonia (NH3) pollution.",
                                "AI and Machine Learning make fertilizer production more efficient and sustainable.",
                                "AI is essential for driving efficiency and growth in agriculture.",
                                "We need more campaigns to educate people about AI's benefits in agriculture.",
                                "AI ensures accurate use of fertilizers, reducing waste and increasing profitability.",
                                "AI provides scientific insights to help make data-driven farming decisions.",
                                "AI will be widely integrated for future research and long-term agricultural development.",
                                "Knowing AI's positive role gives me confidence in using sustainable agricultural products.",
                                "I learned the basics of AI and how to use it to increase crop production.",
                        ],
                },
                {
                        question: "In your opinion, what challenges might be faced in adopting AI for sustainable agriculture?",
                        answers: [
                                "High Costs: AI is currently too expensive for traditional farmers to implement.",
                                "Low Tech Literacy: Many grassroots farmers lack the education to operate AI tools.",
                                "Lack of Training: There is a shortage of skilled personnel and AI training programs.",
                                "Poor Infrastructure: Lack of internet and electricity in rural areas limits AI use.",
                                "Low Awareness: Insufficient outreach leads to unawareness in rural environments.",
                                "Resistance to Change: Traditional farmers are often hesitant to adopt new technologies.",
                                "Risk of Misuse: Without proper understanding, AI can lead to incorrect decisions.",
                                "Data Issues: Gathering accurate data to get reliable AI advice remains difficult.",
                                "Resource Intensive: AI infrastructure consumes large amounts of electricity and water.",
                                "Transition Challenges: Smoothly integrating AI without disrupting traditional farming is difficult.",
                        ],
                },
                {
                        question: "Do you have any suggestions for improving AI awareness among agricultural students?",
                        answers: [
                                "Update Curriculum: Add AI chapters to textbooks and introduce e-learning modules.",
                                "Host Seminars: Organize regular AI workshops and weekly college presentations.",
                                "Field Demonstrations: Set up practical projects to show how AI works in reality.",
                                "Grassroots Campaigns: Expand AI awareness outreach to the village level.",
                                "Teach Proper Use: Train users to input accurate data to avoid wrong AI results.",
                                "Government Support: Involve the government to expand and fund AI awareness programs.",
                                "Highlight Practical Benefits: Emphasize AI's success in tasks like sustainable fertilizer management.",
                                "Showcase Environmental Perks: Demonstrate how AI prevents pollution while maintaining crop yields.",
                                "Continuous Updates: Regularly share the latest AI information and multimedia projects.",
                                "Train Future Leaders: Focus on preparing current students to lead future AI adoption.",
                        ],
                },
        ];

    const toggleAnswer = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <div className=" max-w-7xl mx-auto  mb-10 ">
            <h1 className="text-4xl font-bold text-center text-gray-900 mb-10">
                Open-ended Questions Summary
            </h1>
            <div className="space-y-6">
                {faqs.map((faq, index) => (
                    <div
                        key={index}
                        className="bg-white border-2   border-gray-300 shadow-sm rounded-lg p-6 transition hover:shadow-lg"
                    >
                        <button
                            onClick={() => toggleAnswer(index)}
                            className="w-full text-left text-xl font-semibold text-gray-700 hover:text-gray-900 focus:outline-none flex justify-between items-center"
                        >
                            <span>{faq.question}</span>
                            <span className="text-2xl font-bold">
                                {activeIndex === index ? "−" : "+"}
                            </span>
                        </button>
                        {activeIndex === index && (
                            <div
                                className="mt-4 space-y-4 overflow-hidden transition-all duration-500 ease-in-out"
                                style={{
                                    maxHeight: activeIndex === index ? "1000px" : "0px",
                                    transition: "max-height 0.5s ease-in-out, opacity 0.5s ease-in-out",
                                    opacity: activeIndex === index ? 1 : 0,
                                }}
                            >
                                <ul className="space-y-3">
                                    {faq.answers.map((answer, idx) => (
                                        <li key={idx} className="border-b border-gray-300 pb-3 text-gray-700">
                                            <span className="font-semibold text-gray-800">{idx + 1}.</span> {answer}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>



    );
};

export default PostFAQComponent;
