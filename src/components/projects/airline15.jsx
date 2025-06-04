import Img1 from './project-image/15-1.jpg';
import Img2 from './project-image/15-2.jpg';
import Img3 from './project-image/15-3.jpg';

export default function AirlineSatisfactionCard() {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-2xl shadow-2xl border border-gray-200">
      <h2 className="text-2xl md:text-3xl font-bold text-blue-600 mb-4 flex items-center gap-2">
        ✈️ Airline Customer Satisfaction Analysis
      </h2>

      <div className="space-y-4 text-gray-700">

        <section>
          <h3 className="font-semibold text-lg">📝 Project Description:</h3>
          <p>
            A comprehensive analysis project to uncover key factors behind airline customer satisfaction. This project explores passenger feedback using real-world structured data, likely from a platform like Kaggle, to derive meaningful insights for airline service improvement.
          </p>
        </section>

        <section>
          <h3 className="font-semibold text-lg">🔧 Tools & Libraries:</h3>
          <ul className="list-disc list-inside ml-2">
            <li>Python</li>
            <li>pandas, numpy</li>
            <li>matplotlib, seaborn</li>
            <li>Excel (.xlsx) for data import</li>
          </ul>
        </section>

        <section>
          <h3 className="font-semibold text-lg">📊 Key Analysis Conducted:</h3>
          <ul className="list-disc list-inside ml-2">
            <li>Data loading, cleaning, and inspection using pandas</li>
            <li>EDA: frequency counts, histograms, distribution plots</li>
            <li>Correlation heatmaps to identify impactful features</li>
            <li>Key factors explored: travel type, service ratings, punctuality, overall satisfaction</li>
          </ul>
        </section>

        <section>
          <h3 className="font-semibold text-lg">✅ Skills Demonstrated:</h3>
          <ul className="list-disc list-inside ml-2">
            <li>Real-world Excel data handling and wrangling</li>
            <li>Insightful visualization using seaborn and matplotlib</li>
            <li>Interpreting customer feedback trends effectively</li>
          </ul>
        </section>

        <section>
          <h3 className="font-semibold text-lg">🔍 Possible Insights:</h3>
          <ul className="list-disc list-inside ml-2">
            <li>Business travelers tend to report higher satisfaction</li>
            <li>Flight punctuality directly influences review scores</li>
            <li>Comfort and Wi-Fi significantly impact user sentiment</li>
          </ul>
        </section>

        <section>
                  <h3 className="font-semibold text-lg">🖼 Image Suggestions:</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-2">
                              <div className="bg-gray-100 rounded-lg overflow-hidden shadow">
                                <a href={Img1} target="_blank" rel="noopener noreferrer">
                                  <img src={Img1} alt="Flight Price Distribution by Airline" className="w-full h-32 object-cover" />
                                </a>
                                <div className="p-2 text-sm font-medium text-center">Flight Price Distribution by Airline </div>
                              </div>
                              <div className="bg-gray-100 rounded-lg overflow-hidden shadow">
                                <a href={Img2} target="_blank" rel="noopener noreferrer">
                                  <img src={Img2} alt="Future Importance" className="w-full h-32 object-cover" />
                                </a>
                                <div className="p-2 text-sm font-medium text-center">Future Importance</div>
                              </div>
                              <div className="bg-gray-100 rounded-lg overflow-hidden shadow">
                                <a href={Img3} target="_blank" rel="noopener noreferrer">
                                  <img src={Img3} alt="Destination Analysis" className="w-full h-32 object-cover" />
                                </a>
                                <div className="p-2 text-sm font-medium text-center">Destination Analysis</div>
                              </div>
                            </div>
                </section>

      </div>
    </div>
  );
}
