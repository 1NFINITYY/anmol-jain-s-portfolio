import { Link } from "react-router-dom";
import { ArrowRight, Download } from "lucide-react";

export default function Home() {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/resume.pdf";
    link.download = "AnmolJain_Resume.pdf";
    link.click();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white flex flex-col justify-center items-center px-4">
      {/* Hero Section */}
      <div className="text-center max-w-3xl space-y-6">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight animate-fade-in-up">
          Welcome to <span className="text-pink-500">My Portfolio</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-300 animate-fade-in-up delay-100">
          A showcase of my data science and machine learning.
        </p>

        <div className="flex justify-center flex-wrap gap-4 mt-6">
          <Link
            to="/projects"
            className="bg-pink-600 hover:bg-pink-700 text-white px-6 py-3 rounded-full flex items-center gap-2 transition-all duration-300"
          >
            View Projects <ArrowRight className="w-4 h-4" />
          </Link>
          <Link
            to="/contact"
            className="border border-gray-400 hover:border-white text-gray-300 hover:text-white px-6 py-3 rounded-full transition-all duration-300"
          >
            Contact Me
          </Link>
          <button
            onClick={handleDownload}
            className="bg-blue-600 hover:bg-blue-700 active:scale-95 active:bg-blue-800 text-white px-6 py-3 rounded-full flex items-center gap-2 transition-all duration-200 shadow-md cursor-pointer"
          >
            <Download className="w-4 h-4" />
            Download Resume
          </button>
        </div>
      </div>
    </div>
  );
}
