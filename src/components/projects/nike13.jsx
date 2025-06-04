export default function NikeNexusCard() {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-2xl shadow-2xl border border-gray-200">
      <h2 className="text-2xl md:text-3xl font-bold text-indigo-600 mb-4 flex items-center gap-2">
        👟 Nike Nexus – Air Jordan Sales Analytics Dashboard
      </h2>

      <div className="space-y-4 text-gray-700">

        <section>
          <h3 className="font-semibold text-lg">🔹 Project Overview:</h3>
          <p>
            A Power BI interactive dashboard to analyze the sales performance and customer perception of the Nike Air Jordan 10 Retro. Designed with Nike’s visual branding in mind, it represents an end-to-end business intelligence workflow — from data prep to impactful visual storytelling.
          </p>
        </section>

        <section>
          <h3 className="font-semibold text-lg">🔧 Core Features & Insights:</h3>
          <ul className="list-disc list-inside ml-2">
            <li><strong>Units Sold:</strong> 4,770 (visually highlighted)</li>
            <li><strong>Revenue Trend:</strong> Peak in Aug–Sept, then steady decline — signals seasonality or launch impact</li>
            <li><strong>Regional Sales:</strong> South leads (1,852 units), followed by Southeast, West, and Northeast</li>
            <li><strong>Time-Series Analysis:</strong> Includes region-wise bar chart and monthly profit line graph</li>
            <li><strong>Customer Sentiment:</strong> Avg Rating 4.7/5 from 223 reviews — high product satisfaction</li>
          </ul>
        </section>

        <section>
          <h3 className="font-semibold text-lg">🎨 Design & UI Elements:</h3>
          <ul className="list-disc list-inside ml-2">
            <li>Nike-inspired layout with clean branding and product focus</li>
            <li>Custom icons and intuitive layout for KPIs and navigation</li>
            <li>Simulated multi-page dashboard experience with buttons</li>
          </ul>
        </section>

        <section>
          <h3 className="font-semibold text-lg">🛠 Tools & Techniques:</h3>
          <ul className="list-disc list-inside ml-2">
            <li><strong>Power BI:</strong> Core tool for modeling and visuals</li>
            <li><strong>DAX:</strong> Used for dynamic KPIs like ratings and sales</li>
            <li><strong>Power Query:</strong> For data cleaning and transformation</li>
            <li><strong>Data Modeling:</strong> One-to-many with lookup tables</li>
            <li><strong>Visualization Best Practices:</strong> Minimal clutter, strong color logic, group-wise metrics</li>
          </ul>
        </section>

        <section>
          <h3 className="font-semibold text-lg">✅ Skills Highlighted:</h3>
          <ul className="list-disc list-inside ml-2">
            <li>Business Intelligence & Data Analysis</li>
            <li>Interactive Dashboard Design</li>
            <li>Retail Analytics & Customer Insights</li>
            <li>Data Cleaning, Modeling & DAX</li>
            <li>Visual Storytelling</li>
          </ul>
        </section>

        <section>
          <h3 className="font-semibold text-lg">🖼 Image Suggestions:</h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-2">
            <div className="bg-gray-100 rounded-lg overflow-hidden shadow">
              <img
                src="https://via.placeholder.com/300x200?text=Nike+Sales+Overview"
                alt="Sales Overview"
                className="w-full h-32 object-cover"
              />
              <div className="p-2 text-sm font-medium text-center">Sales KPIs View</div>
            </div>
            <div className="bg-gray-100 rounded-lg overflow-hidden shadow">
              <img
                src="https://via.placeholder.com/300x200?text=Regional+Bar+Chart"
                alt="Regional Bar Chart"
                className="w-full h-32 object-cover"
              />
              <div className="p-2 text-sm font-medium text-center">Regional Sales Chart</div>
            </div>
            <div className="bg-gray-100 rounded-lg overflow-hidden shadow">
              <img
                src="https://via.placeholder.com/300x200?text=Customer+Ratings"
                alt="Customer Sentiment Metrics"
                className="w-full h-32 object-cover"
              />
              <div className="p-2 text-sm font-medium text-center">Customer Sentiment</div>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}
