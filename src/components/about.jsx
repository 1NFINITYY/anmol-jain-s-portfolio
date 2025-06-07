import React from "react";
import { FaGraduationCap, FaBriefcase } from "react-icons/fa";
import { UserCircle } from "lucide-react";
import eImg from './images/anmol.jpg';

const About = () => {
  return (
    <div className="min-h-screen bg-gray-50 px-6 py-12 md:px-20">
      <div className="max-w-5xl mx-auto space-y-12">
        
        {/* Header */}
        <section className="text-center">
          <h1 className="text-5xl font-bold text-gray-800 mb-4">About Me</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            I’m a data-driven individual with a knack for storytelling through numbers. I help businesses uncover insights,
            identify trends, and make informed decisions using tools like SQL, Python, Excel, and Power BI. Currently pursuing a PGDM in Data Analytics.
          </p>
        </section>

        {/* Main Card */}
        <section className="bg-white shadow-xl rounded-3xl p-6 md:p-10 flex flex-col md:flex-row items-center md:space-x-10">
          <img
            src={eImg}
            alt="Profile"
            className="w-40 h-40 rounded-full object-cover mb-6 md:mb-0"
          />
          <div className="text-gray-700 text-center md:text-left">
            <h2 className="text-2xl font-semibold">Anmol Jain</h2>
            <p className="mt-2">
              Aspiring Data Analyst with hands-on internship and project experience. I enjoy transforming raw data into visual
              stories that solve business problems and guide strategy. I bring attention to detail, structure, and curiosity into every dataset I explore.
            </p>
          </div>
        </section>

        {/* Experience Section */}
        <section>
          <h3 className="text-3xl font-semibold text-gray-800 mb-6 flex items-center">
            <FaBriefcase className="mr-3 text-blue-500" />
            Experience
          </h3>
          <div className="bg-white rounded-xl shadow-md p-6 space-y-2 border-l-4 border-blue-500">
            <h4 className="font-bold text-lg text-gray-700">
              Data Analyst Intern – Cognifyz Technologies
            </h4>
            <p className="text-sm text-gray-500">Nov 2024 – Jan 2025 | India</p>
            <ul className="list-disc ml-5 text-gray-600 space-y-1 mt-2">
              <li>Analyzed cuisine and city trends to support strategic planning.</li>
              <li>Built pricing models that improved revenue forecast accuracy by 15%.</li>
              <li>Evaluated delivery metrics, leading to a 10% boost in service quality.</li>
              <li>Used Power BI to present findings with impactful visual dashboards.</li>
              <li>
                View project on{" "}
                <a
                  href="https://github.com/ajnmoljain/AnmolJain/blob/main/cognifyz.ipynb"
                  target="_blank"
                  className="text-blue-600 underline"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
              </li>
            </ul>
          </div>
        </section>

        {/* Education Section */}
        <section>
          <h3 className="text-3xl font-semibold text-gray-800 mb-6 flex items-center">
            <FaGraduationCap className="mr-3 text-green-600" />
            Education
          </h3>
          <div className="space-y-4">
            <div className="bg-white rounded-xl shadow-md p-6 border-l-4 border-green-600">
              <h4 className="font-bold text-lg text-gray-700">PGDM in Data Analytics</h4>
              <p className="text-sm text-gray-500">Doon Business School, Dehradun</p>
              <p className="text-sm text-gray-500">July 2023 – Present</p>
            </div>
            <div className="bg-white rounded-xl shadow-md p-6 border-l-4 border-green-600">
              <h4 className="font-bold text-lg text-gray-700">B.Sc. in Biotechnology</h4>
              <p className="text-sm text-gray-500">Barkatullah Vishwavidyalaya, Bhopal</p>
              <p className="text-sm text-gray-500">May 2019 – May 2022</p>
            </div>
            <div className="mt-16 text-center">
          <div className="inline-block bg-white p-6 rounded-2xl shadow hover:shadow-xl transition-all duration-300">
            <UserCircle className="mx-auto text-blue-500" size={50} />
            <h4 className="text-lg font-semibold mt-2">Open to Opportunities</h4>
            <p className="text-sm text-gray-600">
              Ready to contribute to real-world analytics projects and explore data-driven roles.
            </p>
          </div>
        </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
