export default function DashboardSummaryCard() {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-2xl shadow-2xl border border-gray-200">
      <h2 className="text-2xl md:text-3xl font-bold text-indigo-600 mb-4 flex items-center gap-2">
        📊 Interactive Sales Dashboard Summary
      </h2>

      <div className="space-y-4 text-gray-700">

        <section>
          <h3 className="font-semibold text-lg">📈 1. Sales Trend (Line Chart):</h3>
          <p>
            Sales showed moderate fluctuation between 2015–2017 with a strong upward spike in 2018, peaking in November. Key spikes occurred in Feb 2016, Dec 2017, and mid-2018.
          </p>
        </section>

        <section>
          <h3 className="font-semibold text-lg">🌍 2. Sales by Region (Donut Chart):</h3>
          <ul className="list-disc list-inside ml-2">
            <li>🔵 Central – $710,219.68 (31%)</li>
            <li>🟡 East – $432,656.91 (22%)</li>
            <li>🟢 West – $661,578.73 (30%)</li>
            <li>🔴 South – $309,155.46 (17%)</li>
          </ul>
          <p className="mt-1">
            <strong>Top:</strong> Central (31%) | <strong>Lowest:</strong> South (17%)
          </p>
        </section>

        <section>
          <h3 className="font-semibold text-lg">📊 3. Product Share (Bar Chart):</h3>
          <p>Top-performing Sub-Categories: Phones, Chairs, Storage, Binders, Copiers.</p>
          <p>🟢 Focus on bundling, upselling, and regional marketing for these product heroes.</p>
        </section>

        <section>
          <h3 className="font-semibold text-lg">📦 4. Sales by Segmentation (Tree Map):</h3>
          <ul className="list-disc list-inside ml-2">
            <li>🔶 Corporate: Largest block – 🥇 Top segment</li>
            <li>🟩 Home Office: Medium – Moderate sales</li>
            <li>🔴 Consumer: Smallest – Lowest contribution</li>
          </ul>
          <p>🔎 Corporate dominates — consider B2B loyalty programs & account management improvements.</p>
        </section>

        <section>
          <h3 className="font-semibold text-lg">🗺 5. Sales by State (Bar Chart):</h3>
          <p>
            High sales from: California, New York, Texas, Florida <br />
            Low sales from: Wyoming, Montana, North Dakota, Delaware
          </p>
          <p>📍 Expand outreach in strong states and re-strategize for weak regions.</p>
        </section>

        <section>
          <h3 className="font-semibold text-lg">🎛 6. Filters & Interactivity:</h3>
          <p>Region, Segment, Category, Sub-category, Year, State — perfect for real-time drill-downs and storytelling during presentations.</p>
        </section>

        <section>
          <h3 className="font-semibold text-lg">✅ Key Insights & Recommendations:</h3>
          <ul className="list-disc list-inside ml-2">
            <li><strong>2018 Surge:</strong> Peak year—leverage successful campaigns.</li>
            <li><strong>Top Focus:</strong> Regions: Central & West | Segment: Corporate | Products: Phones, Chairs, Storage</li>
            <li><strong>Opportunities:</strong> Boost South region & low-sales states. Promote underperforming categories through offers or bundling.</li>
          </ul>
        </section>

        <section>
          <h3 className="font-semibold text-lg">🖼 Image Suggestions:</h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-2">
            <div className="bg-gray-100 rounded-lg overflow-hidden shadow">
              <img
                src="https://via.placeholder.com/300x200?text=Line+Chart"
                alt="Sales Trend Line Chart"
                className="w-full h-32 object-cover"
              />
              <div className="p-2 text-sm font-medium text-center">Sales Trend Over Time</div>
            </div>
            <div className="bg-gray-100 rounded-lg overflow-hidden shadow">
              <img
                src="https://via.placeholder.com/300x200?text=Donut+Chart"
                alt="Sales by Region"
                className="w-full h-32 object-cover"
              />
              <div className="p-2 text-sm font-medium text-center">Regional Sales Distribution</div>
            </div>
            <div className="bg-gray-100 rounded-lg overflow-hidden shadow">
              <img
                src="https://via.placeholder.com/300x200?text=Tree+Map"
                alt="Segment Sales Treemap"
                className="w-full h-32 object-cover"
              />
              <div className="p-2 text-sm font-medium text-center">Segment-wise Contribution</div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
