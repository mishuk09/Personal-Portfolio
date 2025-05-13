import React from "react";

const SingleCertificate = () => {
    const certificates = [
        {
            organization: "🏢 Internship at Riseuplabs.com",   // 🆕 New Company Added
            certificates: [
                {
                    title: "🛠️ Software Engineering Internship Certificate",
                    date: "August 2024",
                },
            ],
            href: "/riseuplabs",
        },
        {
            organization: "🎯 Google",
            certificates: [
                {
                    title: "📊 Data Analytics Professional SingleCertificate",
                    date: "March 2024",
                },

            ],
        },
        {
            organization: "🎓 Coursera",
            certificates: [
                {
                    title: "🤖 Machine Learning by Stanford University",
                    date: "February 2023",
                },

            ],
        },
        {
            organization: "☁️ Microsoft",
            certificates: [
                {
                    title: "🔰 Azure Fundamentals",
                    date: "December 2022",
                },
            ],
        },
    ];

    return (
        <div className="px-6 py-16 bg-gradient-to-b from-gray-50 to-gray-100 min-h-screen">
            <div className="max-w-7xl mx-auto">
                <h1 className="text-4xl mt-20 font-extrabold text-center text-gray-800 mb-2">
                    🎖️ My Certificates by Organization Wise
                </h1>
                <p className="text-center text-gray-600 mb-12 text-lg">
                    📚 A curated list of certifications organized by organization
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">

                    {certificates.map((org, index) => (
                        <div key={index} className="mb-12">
                            <h2 className="text-2xl font-bold text-gray-700 mb-6 border-b pb-2 border-gray-300">
                                {org.organization}
                            </h2>
                            <div className=" ">
                                {org.certificates.map((cert, idx) => (
                                    <a href={org.href} target="_blank" rel="noopener noreferrer" 
                                        key={idx}
                                        className="p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition duration-300 border"
                                    >
                                        <h3 className="text-xl font-semibold text-gray-800 mb-2">
                                            {cert.title}
                                        </h3>
                                        <p className="text-sm text-gray-500">{cert.date}</p>
                                    </a>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

        </div>
    );
};

export default SingleCertificate;
