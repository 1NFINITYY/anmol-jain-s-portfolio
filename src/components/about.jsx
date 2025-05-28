import React from "react";
import { Briefcase, GraduationCap, UserCircle } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen px-6 py-16 bg-gray-50 text-gray-800">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <h2 className="text-4xl font-bold mb-4 text-center">About Me</h2>
        <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12">
          Aspiring Data Analyst with internship and project experience, seeking to apply analytical and technical expertise in a dynamic IT environment. Proficient in SQL, Python, Power BI, and Excel with a passion for turning raw data into actionable insights. Eager to support business growth through data-driven decision-making.
        </p>

        {/* Cards Section */}
        <div className="grid md:grid-cols-2 gap-10">
          {/* Experience */}
          <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300">
            <div className="flex items-center gap-3 mb-4 text-indigo-600">
              <Briefcase size={28} />
              <h3 className="text-xl font-bold">Experience</h3>
            </div>
            <h4 className="font-semibold">Data Analyst Intern</h4>
            <p className="text-sm text-gray-600 mb-1">
              Cognifyz Technologies, India | Nov 2024 – Jan 2025
            </p>
            <ul className="list-disc pl-5 text-gray-700 text-sm space-y-1 mt-2">
              <li>Analyzed cuisine & city trends to support decision-making.</li>
              <li>Developed pricing models, improved forecast accuracy by 15%.</li>
              <li>Evaluated delivery performance, boosting service by 10%.</li>
              <li>Suggested enhancements via restaurant rating analysis.</li>
            </ul>
          </div>

          {/* Education */}
          <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300">
            <div className="flex items-center gap-3 mb-4 text-emerald-600">
              <GraduationCap size={28} />
              <h3 className="text-xl font-bold">Education</h3>
            </div>
            <div className="mb-4">
              <h4 className="font-semibold">PGDM in Data Analytics</h4>
              <p className="text-sm text-gray-600">
                Doon Business School, Dehradun <br /> July 2023 – Present
              </p>
            </div>
            <div>
              <h4 className="font-semibold">B.Sc. in Biotechnology</h4>
              <p className="text-sm text-gray-600">
                Barkatullah Vishwavidyalaya, Bhopal <br /> May 2019 – May 2022
              </p>
            </div>
          </div>
        </div>

        {/* Optional Profile Card */}
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
    </div>
  );
};

export default About;

