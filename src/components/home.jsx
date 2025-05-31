import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white flex flex-col justify-center items-center px-4">
      {/* Hero Section */}
      <div className="text-center max-w-3xl space-y-6">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight animate-fade-in-up">
          Welcome to <span className="text-pink-500">My Portfolio</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-300 animate-fade-in-up delay-100">
          A showcase of my data science, machine learning, and full-stack projects.
        </p>

        <div className="flex justify-center gap-4 mt-6">
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
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="mt-16 animate-bounce">
        <svg
          className="w-6 h-6 text-pink-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </div>
    </div>
  );
}
