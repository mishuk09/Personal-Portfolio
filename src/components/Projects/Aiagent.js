import { useEffect, useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import { Eye } from "lucide-react";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";

// PDF worker
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const Aiagent = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

 const automations = [
    {
      title: "💸 Automated Money Transfer Flow",
      description:
        "Handles customer transfers with phone, email, region, and amount validation.",
      pdf: "/pdfs/twobtwo.pdf",
    },
    {
      title: "📋 WhatsApp Survey Automation Flow",
      description:
        "Collects survey responses via WhatsApp and stores answers step-by-step in Google Sheets.",
      pdf: "/pdfs/survey.pdf",
    },
    {
      title: "🔔 Customer Follow-Up Automation",
      description:
        "Automatically sends thank-you, follow-up, and service reminder messages based on schedule.",
      pdf: "/pdfs/smb.pdf",
    },
    {
      title: "💬 Telegram Payment Automation Flow",
      description:
        "Handles user interaction, registration, and payment processing via Telegram bot.",
      pdf: "/pdfs/telegram.pdf",
    },
  ];

  return (
    <div className="bg-blue-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-2 md:px-4 py-12">
        {/* Header */}
        <div className="text-center mb-12 mt-20">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
            ⚙️ n8n AI Agent & Automation Projects
          </h1>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Real-world automation workflows built using n8n, AI agents, WhatsApp
            Business APIs, and CRM integrations.
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {automations.map((item, index) => (
            <div
              key={index}
              className="bg-white h-[450px] rounded-xl border border-gray-200 p-6 hover:shadow-xl transition duration-300 flex flex-col  "
            >
              {/* Title */}
              <h2 className="text-xl font-semibold text-gray-800 mb-2">
                {item.title}
              </h2>

              {/* Description */}
              <p className="text-gray-600 flex-grow">
                {item.description}
              </p>

              {/* PDF Preview */}
              <div className="mt-4 border rounded overflow-hidden bg-gray-50">
                <Document
                  file={item.pdf}
                  onLoadError={(err) =>
                    console.error("PDF load error:", err)
                  }
                >
                  <Page
                    pageNumber={1}
                    width={windowWidth > 768 ? 340 : windowWidth - 80}
                  />
                </Document>
              </div>

              {/* View Button */}
              <a
                href={item.pdf}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 flex items-center no-underline justify-center gap-2 bg-blue-600 text-white font-medium py-2 px-4 rounded-lg hover:bg-blue-700 transition"
              >
                <Eye className="w-4 h-4" />
                View  PDF
              </a>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="mt-16 text-center">
          <p className="text-gray-500">
            🚀 More automation workflows coming soon.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Aiagent;
