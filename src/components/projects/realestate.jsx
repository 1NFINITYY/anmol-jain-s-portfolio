export default function RealEstateCard() {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-2xl shadow-2xl border border-gray-200">
      <h2 className="text-2xl md:text-3xl font-bold text-green-600 mb-4 flex items-center gap-2">
        🏠 Real Estate Price Prediction
      </h2>

      <div className="space-y-4 text-gray-700">
        <section>
          <h3 className="font-semibold text-lg">🔹 Project Summary:</h3>
          <p>
            Predicted house prices based on features like location, square footage, and amenities using regression models.
          </p>
        </section>

        <section>
          <h3 className="font-semibold text-lg">🔹 Why I Did This:</h3>
          <p>
            Real estate is a high-stakes market where price prediction can significantly help buyers and investors.
          </p>
        </section>

        <section>
          <h3 className="font-semibold text-lg">🔹 Tools Used:</h3>
          <ul className="list-disc list-inside ml-2">
            <li>Python (Scikit-learn, Pandas)</li>
            <li>Linear Regression, XGBoost</li>
          </ul>
        </section>

        <section>
          <h3 className="font-semibold text-lg">🔹 Key Insights:</h3>
          <ul className="list-disc list-inside ml-2">
            <li>Location and number of bathrooms had highest feature importance.</li>
            <li>XGBoost outperformed Linear Regression by 12% in RMSE.</li>
          </ul>
        </section>

        <section>
          <h3 className="font-semibold text-lg">🖼 Image Suggestions:</h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-2">
            <div className="bg-gray-100 rounded-lg overflow-hidden shadow">
              <img
                src="https://via.placeholder.com/300x200?text=Feature+Importance+Bar+Chart"
                alt="Feature Importance Bar Chart"
                className="w-full h-32 object-cover"
              />
              <div className="p-2 text-sm font-medium text-center">Feature Importance Bar Chart</div>
            </div>
            <div className="bg-gray-100 rounded-lg overflow-hidden shadow">
              <img
                src="https://via.placeholder.com/300x200?text=Predicted+vs+Actual+Prices"
                alt="Predicted vs Actual"
                className="w-full h-32 object-cover"
              />
              <div className="p-2 text-sm font-medium text-center">Predicted vs Actual Prices</div>
            </div>
            <div className="bg-gray-100 rounded-lg overflow-hidden shadow">
              <img
                src="https://via.placeholder.com/300x200?text=Map+of+House+Locations"
                alt="House Map"
                className="w-full h-32 object-cover"
              />
              <div className="p-2 text-sm font-medium text-center">Map of House Locations</div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
