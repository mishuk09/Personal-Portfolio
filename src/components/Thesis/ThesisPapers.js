import { useEffect, useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';

// 👇 Now set the worker properly
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const ThesisPapers = () => {

    // Inside your ThesisPapers component
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => setWindowWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);
    const papers = [
        {
            title: "🧠 Brain Tumor Detection using AI/ML - Review Paper",
            description: "📄 A comprehensive review of AI/ML techniques used for brain tumor detection from medical imaging data.",
            link: "/pdfs/Integrating Artificial Intelligence with MRI and Multiclass Classification (CNN, ANN)(Review).pdf",
        },
        {
            title: "🧪 Brain Tumor Detection using AI/ML - Original Research",
            description: "📄 My original research work proposing a CNN-based model for early brain tumor detection from MRI scans.",
            link: "/pdfs/Brain tumor detection using aiml.pdf",
        },
        {
            title: "🌍 Artificial Intelligence for NGO Development",
            description: "📄 An exploration of how AI technologies can empower non-governmental organizations for better decision-making and social impact.",
            link: "/pdfs/Artificial Intelegence for NGO.pdf",
        },
    ];

    return (
        <div className="bg-gray-100 min-h-screen">
            <div className="max-w-7xl mx-auto px-1 md:px-4 py-12">
                {/* Header Section */}
                <div className="text-center mb-10 mt-24">
                    <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
                        📚 Welcome to My Thesis Archive
                    </h1>
                    <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
                        Explore my academic research projects. I’m passionate about AI/ML, IoT, Healthcare, and Smart Systems.
                    </p>
                </div>

                {/* Thesis Papers Section */}
                <div className="grid gap-4 md:gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {papers.map((paper, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-lg border border-gray-200 p-6   hover:shadow-xl transition duration-300 flex flex-col h-[600px]"
                        >
                            <h2 className="text-xl font-semibold text-gray-800 mb-2">
                                {paper.title}
                            </h2>
                            <p className="text-gray-600 flex-grow">{paper.description}</p>

                            {/* PDF Preview */}
                            <div className="mt-4 border rounded overflow-hidden w-full">
                                <Document
                                    file={paper.link}
                                    onLoadError={(error) => console.error('Error loading PDF:', error)}
                                >
                                    {/* <Page pageNumber={1} />
                                     */}
                                    <Page pageNumber={1} width={windowWidth > 768 ? 350 : windowWidth - 80} />

                                </Document>
                            </div>

                            {/* View Full PDF Button */}
                            <a
                                href={paper.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="mt-4 flex items-center justify-center    bg-blue-600 text-white font-medium py-2 px-4 rounded-lg hover:bg-blue-700 transition"
                            >
                                📑 View Full PDF
                            </a>
                        </div>
                    ))}
                </div>

                {/* Footer Section */}
                <div className="mt-16 text-center">
                    <p className="text-gray-500">
                        🎯 More exciting research coming soon. Stay tuned!
                    </p>
                </div>
            </div>
        </div>
    );
};

export default ThesisPapers;
