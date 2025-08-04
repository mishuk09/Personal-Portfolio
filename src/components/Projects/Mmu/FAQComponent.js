import React, { useState } from "react";

const FAQComponent = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const faqs = [
        {
            question: "What do you understand by the term green fertilizer?",
            answers: [
                {
                    title: "Eco-Friendly",
                    answer: "The new fertilizer is made from natural materials like compost and cow dung, so it’s good for the environment and doesn’t contain harmful chemicals."
                },
                {
                    title: "Less Chemicals",
                    answer: "It has fewer chemicals than regular fertilizers, which helps protect the environment and promotes sustainability."
                },
                {
                    title: "Uses Organic Waste",
                    answer: "The fertilizer is made from organic waste, making it cheap and good for the planet."
                },
                {
                    title: "Long-Term Benefits",
                    answer: "It helps keep the soil healthy and supports farming in a way that doesn’t harm the land."
                },
                {
                    title: "Biodegradable",
                    answer: "It breaks down naturally and is eco-friendly, improving soil health and reducing pollution."
                },
                {
                    title: "Helps Crops Grow",
                    answer: "It boosts crop production and plant health by giving natural nutrients without harmful chemicals."
                },
                {
                    title: "Safe for Soil and Crops",
                    answer: "It’s good for both crops and soil, unlike harmful chemical fertilizers."
                },
                {
                    title: "Sustainable Tech",
                    answer: "It’s part of green initiatives that focus on eco-friendly farming solutions."
                },
                {
                    title: "Combination of Natural and Chemical",
                    answer: "It mixes natural and chemical elements for better results with fewer downsides."
                },
                {
                    title: "Affordable",
                    answer: "This green fertilizer is cost-effective and provides a better, more sustainable option for farmers than traditional fertilizers."
                }
            ]
        },

        {
            question: "In your opinion, what are the main advantages and disadvantages of using green fertilizer?",
            answers: [
                {
                    title: "Environmental Benefits",
                    answer: "Advantages: The fertilizer is good for the environment. It helps reduce nitrogen and pollution while supporting sustainability."
                },
                {
                    title: "Slow Results",
                    answer: "Disadvantages: The fertilizer works slowly, gradually improving the soil and crops, but results won’t be seen immediately."
                },
                {
                    title: "Soil Health Improvement",
                    answer: "Advantages: It makes the soil healthier by improving its quality over time, though it may take a while to see results."
                },
                {
                    title: "Time and Effectiveness",
                    answer: "Disadvantages: It may take longer to show results compared to chemical fertilizers, and its effectiveness can vary."
                },
                {
                    title: "Promotes Long-Term Benefits",
                    answer: "Advantages: It is a good choice for long-term farming, improving soil health and crop production over time."
                },
                {
                    title: "Cost Considerations",
                    answer: "Disadvantages: While it has long-term benefits, it can be costly to use."
                },
                {
                    title: "Sustainability Focus",
                    answer: "Advantages: It supports sustainability by reducing environmental harm and promoting eco-friendly practices."
                },
                {
                    title: "Growth Conditions",
                    answer: "Disadvantages: It may require specific growing conditions, which could limit its use in certain areas."
                },
                {
                    title: "Improved Nutrient Supply",
                    answer: "Advantages: It provides natural nutrients to crops, boosting their growth without harmful chemicals."
                },
                {
                    title: "Ease of Use",
                    answer: "Disadvantages: The fertilizer is easy to use but may require ongoing maintenance and could be slow to show effects."
                }
            ]
        }
        ,
        {
            question: "What challenges would prevent you from adopting green fertilizer?",
            answers: [
                {
                    title: "Fear of Poor Results",
                    answer: "Some are worried the fertilizer might not give good results or harm crops."
                },
                {
                    title: "Concerns Over Cost",
                    answer: "Many are concerned about the high cost of the fertilizer."
                },
                {
                    title: "Initial Hesitation",
                    answer: "Some prefer to use small amounts first because they’re unsure about the results."
                },
                {
                    title: "Fear of Losing a Season",
                    answer: "There’s a fear of losing a whole crop season if the fertilizer doesn't work as expected."
                },
                {
                    title: "Lack of Knowledge",
                    answer: "Many feel unsure because they don’t have enough information or training on how to use it."
                },
                {
                    title: "Doubt About Effectiveness",
                    answer: "Some are doubtful about whether the fertilizer will work well in their fields."
                },
                {
                    title: "Difficulty in Application",
                    answer: "It’s challenging to apply the fertilizer correctly, especially on large fields."
                },
                {
                    title: "Trust Issues",
                    answer: "Some don’t trust that the product will deliver the promised results."
                },
                {
                    title: "Availability Issues",
                    answer: "Many have trouble finding the fertilizer in local shops or markets."
                },
                {
                    title: "Fear of Long-Term Effects",
                    answer: "There are concerns about the possible long-term effects on soil health and crop production."
                }
            ]
        }
        ,
        {
            question: "What support (training, financial aid, policy) would encourage you to use green fertilizer?",
            answers: [
                {
                    title: "Training",
                    answer: "Many people said training is important to help farmers use the new fertilizer effectively."
                },
                {
                    title: "Financial Aid",
                    answer: "Financial help like loans or subsidies was suggested to make the fertilizer more affordable."
                },
                {
                    title: "Training and Financial Aid Combined",
                    answer: "Some people said both training and financial aid are needed to encourage fertilizer use."
                },
                {
                    title: "Government Support",
                    answer: "Farmers suggested that government discounts, loans, and programs could help with adoption."
                },
                {
                    title: "Practical Learning",
                    answer: "Real-life examples, workshops, and farmer-to-farmer demos were recommended for better learning."
                },
                {
                    title: "Workshops and Demos",
                    answer: "Many suggested organizing workshops, training camps, and hands-on demos for better understanding."
                },
                {
                    title: "Accessibility",
                    answer: "People asked for easier access to the fertilizer and training materials, both online and in local markets."
                },
                {
                    title: "Supporting Materials",
                    answer: "Providing training materials like booklets, charts, videos, and guides was also suggested."
                },
                {
                    title: "Community Support",
                    answer: "Farmers recommended peer support, with experienced farmers guiding others to share knowledge."
                },
                {
                    title: "Free Samples and Trial Offers",
                    answer: "Offering free samples, machine support, or trial packs could help farmers try the product first."
                }
            ]
        },
        {
            question: "Do you have any suggestions to help promote the use of green fertilizer among local farmers?",
            answers: [
                {
                    title: "Negotiation and Communication",
                    answer: "Talk to neighbors and negotiate with others to promote the fertilizer."
                },
                {
                    title: "Training and Awareness",
                    answer: "Organize training, local meetings, and rural-level sessions to educate farmers."
                },
                {
                    title: "Results-Driven Promotion",
                    answer: "Share success stories and show good results to inspire others to use the fertilizer."
                },
                {
                    title: "Visual Promotion",
                    answer: "Use banners, posters, and decorations at local events and markets to raise awareness."
                },
                {
                    title: "Social Media and Radio",
                    answer: "Use social media, radio, and TV to spread the word to a wider audience."
                },
                {
                    title: "Experts and Demonstrations",
                    answer: "Invite experts for field demonstrations and provide clear guidance for better adoption."
                },
                {
                    title: "Door-to-Door Campaign",
                    answer: "Conduct door-to-door campaigns and village meetings to directly reach farmers."
                },
                {
                    title: "Subsidies and Rewards",
                    answer: "Offer subsidies, rewards, or financial support to encourage the use of the product."
                },
                {
                    title: "Model Farms and Field Visits",
                    answer: "Invite farmers to model farms or organize field visits to show the results firsthand."
                },
                {
                    title: "Local Community Engagement",
                    answer: "Promote the fertilizer through farming groups, agriculture fairs, and local committees to build trust."
                }
            ]
        },
        {
            question: "What role do you think the government, cooperatives, or agricultural agencies should play in promoting green fertilizer?",
            answers: [
                {
                    title: "Government Training",
                    answer: "The government should arrange training and awareness programs for farmers."
                },
                {
                    title: "Rural-Level Training",
                    answer: "Training programs specific to rural areas should be organized to educate farmers locally."
                },
                {
                    title: "Support from Agricultural Agencies",
                    answer: "Agricultural agencies should provide training and promote green farming techniques."
                },
                {
                    title: "Free Tools and Samples",
                    answer: "Providing free tools and samples can encourage farmers to adopt green fertilizers."
                },
                {
                    title: "Promotion and Paid Advertising",
                    answer: "The government and cooperatives should use paid ads, TV, and banners to raise awareness."
                },
                {
                    title: "Farmer Support and Financial Aid",
                    answer: "Financial aid, rewards, and support programs can help farmers adopt new farming techniques."
                },
                {
                    title: "Mobile Vans and Field Demos",
                    answer: "Mobile vans and field demonstrations can help educate farmers about the fertilizer."
                },
                {
                    title: "Local Leadership and Education",
                    answer: "Train local village leaders and provide training in local languages for better understanding."
                },
                {
                    title: "Fertilizer Accessibility",
                    answer: "Make green fertilizers affordable and accessible by distributing through cooperatives and local vendors."
                },
                {
                    title: "Community Events and Awareness",
                    answer: "Organize farmer events and field days, and offer rewards to encourage green farming."
                }
            ]
        },
    ];

    const toggleAnswer = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <div className="container mx-auto p-6 max-w-3xl">
            <h1 className="text-4xl font-bold text-center text-gray-900 mb-10">
                Open-ended Questions Summary
            </h1>
            <div className="space-y-6">
                {faqs.map((faq, index) => (
                    <div
                        key={index}
                        className="bg-white border-2 border-blue-500 shadow-sm rounded-lg p-6 transition hover:shadow-lg"
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
                                {faq.answers.map((answer, idx) => (
                                    <div key={idx} className="border-b border-gray-300">
                                        <h3 className="font-semibold text-lg text-gray-800"> ✅ {answer.title}:</h3>
                                        <p className="text-gray-700">&nbsp;&nbsp;&nbsp; -- {answer.answer}</p>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>



    );
};

export default FAQComponent;
