import Img1 from './project-image/10-1.jpg';
import Img2 from './project-image/10-2.jpg';
import Img3 from './project-image/10-3.jpg';

export default function SalesSummaryCard() {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-2xl shadow-2xl border border-gray-200">
      <h2 className="text-2xl md:text-3xl font-bold text-indigo-600 mb-4 flex items-center gap-2">
        📊 Individual Account Manager Sales Summary & Pivot Dashboard
      </h2>

      <div className="space-y-4 text-gray-700">
        <section>
          <h3 className="font-semibold text-lg">🔹 Account Manager Highlights:</h3>
          <ul className="list-disc list-inside ml-2">
            <li><strong>Aanya Zhang (NSW)</strong>: $44,694.57 total sales. Huge spike in Q3 2016 ($28,047.48).</li>
            <li><strong>Charlie Bui (NSW)</strong>: $16,088.43 total. Stronger in 2015, drop in 2016.</li>
            <li><strong>Connor Betts (VIC)</strong>: $89,680.70 total. Consistent top performer in both years.</li>
          </ul>
        </section>

        <section>
          <h3 className="font-semibold text-lg">🔹 Dashboard Insights (Pivot Table):</h3>
          <ul className="list-disc list-inside ml-2">
            <li><strong>Customer Type Share:</strong> Corporate (36%), Home Office (26%), Small Business (21%), Consumer (17%)</li>
            <li><strong>Sales Trend:</strong> NSW spike in Q3 2016; VIC steady; WA stable but lower.</li>
            <li><strong>Top Regions (2015–2016):</strong> NSW ($429k), VIC ($139k), WA ($48k)</li>
          </ul>
        </section>

        <section>
          <h3 className="font-semibold text-lg">🔹 Observations & Recommendations:</h3>
          <ul className="list-disc list-inside ml-2">
            <li>Top Performer: <strong>Connor Betts</strong> for consistent high sales.</li>
            <li>Focus on Corporate clients — they contribute the most revenue.</li>
            <li>Investigate drop in <strong>Charlie Bui’s</strong> 2016 performance.</li>
            <li>Keep leveraging Q3 spikes like Aanya’s 2016 success.</li>
          </ul>
        </section>

        <section>
                  <h3 className="font-semibold text-lg">🖼 Image Suggestions:</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-2">
                              <div className="bg-gray-100 rounded-lg overflow-hidden shadow">
                                <a href={Img1} target="_blank" rel="noopener noreferrer">
                                  <img src={Img1} alt="Excel Worksheet" className="w-full h-32 object-cover" />
                                </a>
                                <div className="p-2 text-sm font-medium text-center">Excel Worksheet</div>
                              </div>
                              <div className="bg-gray-100 rounded-lg overflow-hidden shadow">
                                <a href={Img2} target="_blank" rel="noopener noreferrer">
                                  <img src={Img2} alt="Dashboard" className="w-full h-32 object-cover" />
                                </a>
                                <div className="p-2 text-sm font-medium text-center">Dashboard</div>
                              </div>
                              <div className="bg-gray-100 rounded-lg overflow-hidden shadow">
                                <a href={Img3} target="_blank" rel="noopener noreferrer">
                                  <img src={Img3} alt="Excel Worksheet" className="w-full h-32 object-cover" />
                                </a>
                                <div className="p-2 text-sm font-medium text-center">Excel Worksheet </div>
                              </div>
                            </div>
                </section>
      </div>
    </div>
  );
}
