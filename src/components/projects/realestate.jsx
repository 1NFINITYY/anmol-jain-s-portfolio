import Img1 from './project-image/7-1.jpg';
import Img2 from './project-image/7-2.jpg';
import Img3 from './project-image/7-3.jpg';

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
                        <a href={Img1} target="_blank" rel="noopener noreferrer">
                          <img src={Img1} alt="Co-linearity Graph" className="w-full h-32 object-cover" />
                        </a>
                        <div className="p-2 text-sm font-medium text-center">Co-linearity Graph</div>
                      </div>
                      <div className="bg-gray-100 rounded-lg overflow-hidden shadow">
                        <a href={Img2} target="_blank" rel="noopener noreferrer">
                          <img src={Img2} alt="Confusion Matrix" className="w-full h-32 object-cover" />
                        </a>
                        <div className="p-2 text-sm font-medium text-center">Confusion Matrix</div>
                      </div>
                      <div className="bg-gray-100 rounded-lg overflow-hidden shadow">
                        <a href={Img3} target="_blank" rel="noopener noreferrer">
                          <img src={Img3} alt="Model Accuracy Graph" className="w-full h-32 object-cover" />
                        </a>
                        <div className="p-2 text-sm font-medium text-center">Model Accuracy Graph </div>
                      </div>
                    </div>
        </section>
      </div>
    </div>
  );
}
