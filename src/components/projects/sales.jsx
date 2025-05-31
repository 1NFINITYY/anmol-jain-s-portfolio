export default function SalesForecastCard() {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-2xl shadow-2xl border border-gray-200">
      <h2 className="text-2xl md:text-3xl font-bold text-blue-600 mb-4 flex items-center gap-2">
        📈 Sales Forecasting Using Time Series Analysis
      </h2>

      <div className="space-y-4 text-gray-700">
        <section>
          <h3 className="font-semibold text-lg">🔹 Project Summary:</h3>
          <p>
            Built a time series forecasting model to predict future sales of a retail company using historical monthly sales data.
          </p>
        </section>

        <section>
          <h3 className="font-semibold text-lg">🔹 Why I Did This:</h3>
          <p>
            Accurate sales forecasting helps businesses manage inventory and finances better. I wanted to explore ARIMA and Prophet models for predictive analytics.
          </p>
        </section>

        <section>
          <h3 className="font-semibold text-lg">🔹 Tools Used:</h3>
          <ul className="list-disc list-inside ml-2">
            <li>Python (Pandas, Statsmodels, FBProphet)</li>
            <li>Matplotlib, Seaborn</li>
          </ul>
        </section>

        <section>
          <h3 className="font-semibold text-lg">🔹 Key Insights:</h3>
          <ul className="list-disc list-inside ml-2">
            <li>Seasonal trends showed consistent dips in February.</li>
            <li>Prophet model had lower MAE than ARIMA.</li>
            <li>Holidays and promotions influenced sales spikes.</li>
          </ul>
        </section>

        <section>
          <h3 className="font-semibold text-lg">🖼 Image Suggestions:</h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-2">
            <div className="bg-gray-100 rounded-lg overflow-hidden shadow">
              <img
                src="https://via.placeholder.com/300x200?text=Time+Series+Plot"
                alt="Time Series Line Plot"
                className="w-full h-32 object-cover"
              />
              <div className="p-2 text-sm font-medium text-center">Time Series Line Plot</div>
            </div>
            <div className="bg-gray-100 rounded-lg overflow-hidden shadow">
              <img
                src="https://via.placeholder.com/300x200?text=Forecast+vs+Actual"
                alt="Forecast vs Actual"
                className="w-full h-32 object-cover"
              />
              <div className="p-2 text-sm font-medium text-center">Forecast vs Actual Plot</div>
            </div>
            <div className="bg-gray-100 rounded-lg overflow-hidden shadow">
              <img
                src="https://via.placeholder.com/300x200?text=Prophet+Components"
                alt="Prophet Components"
                className="w-full h-32 object-cover"
              />
              <div className="p-2 text-sm font-medium text-center">Prophet Components Plot</div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
