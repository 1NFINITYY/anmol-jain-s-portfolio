import sales1Img from './project-image/sales4-1.jpg';
import sales2Img from './project-image/sales4-2.jpg';
import sales3Img from './project-image/sales4-3.jpg';

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
              <a href={sales1Img} target="_blank" rel="noopener noreferrer">
                            <img
                             src={sales1Img}
                              alt="Sales Analysis by Year"
                              className="w-full h-32 object-cover"
                            />
              </a>
              <div className="p-2 text-sm font-medium text-center">Sales Analysis by Year</div>
            </div>
            <div className="bg-gray-100 rounded-lg overflow-hidden shadow">
              <a href={sales2Img} target="_blank" rel="noopener noreferrer">
                            <img
                             src={sales2Img}
                              alt="Channel Analysis"
                              className="w-full h-32 object-cover"
                            />
              </a>
              <div className="p-2 text-sm font-medium text-center">Channel Analysis</div>
            </div>
            <div className="bg-gray-100 rounded-lg overflow-hidden shadow">
              <a href={sales3Img} target="_blank" rel="noopener noreferrer">
                            <img
                             src={sales3Img}
                              alt="Correlation Matrix"
                              className="w-full h-32 object-cover"
                            />
              </a>
              <div className="p-2 text-sm font-medium text-center">Correlation Matrix</div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
