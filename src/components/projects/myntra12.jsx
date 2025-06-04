import Img1 from './project-image/12-1.jpg';
import Img2 from './project-image/12-2.jpg';
import Img3 from './project-image/12-3.jpg';

export default function MyntraClassificationCard() {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-2xl shadow-2xl border border-gray-200">
      <h2 className="text-2xl md:text-3xl font-bold text-indigo-600 mb-4 flex items-center gap-2">
        🛍️ Myntra Product Classification Model (Machine Learning)
      </h2>

      <div className="space-y-4 text-gray-700">

        <section>
          <h3 className="font-semibold text-lg">🔹 Project Overview:</h3>
          <p>
            Built a machine learning model using real-world e-commerce data inspired by Myntra to predict product categories or user behavior based on structured product attributes.
          </p>
        </section>

        <section>
          <h3 className="font-semibold text-lg">✅ Key Highlights:</h3>
          <ul className="list-disc list-inside ml-2">
            <li><strong>Objective:</strong> Classify products using metadata like price, brand, ratings, discounts.</li>
            <li><strong>Data Handling:</strong> Null value treatment, categorical encoding, and feature scaling.</li>
            <li><strong>Modeling:</strong> Logistic Regression, Random Forest, and XGBoost with hyperparameter tuning via GridSearchCV.</li>
            <li><strong>Evaluation:</strong> Metrics included accuracy, F1-score, ROC-AUC, and cross-validation.</li>
            <li><strong>Visualization:</strong> Used Seaborn and Matplotlib to display feature importance and performance metrics.</li>
          </ul>
        </section>

        <section>
          <h3 className="font-semibold text-lg">🧰 Tools & Technologies:</h3>
          <p>Python, Pandas, Scikit-learn, XGBoost, Jupyter Notebook, Seaborn, Matplotlib</p>
        </section>

        <section>
          <h3 className="font-semibold text-lg">🔍 Outcome:</h3>
          <p>
            Final model supports inventory classification and recommendation engines, enabling platforms like Myntra to enhance personalized shopping experiences and operational efficiency.
          </p>
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
                                  <img src={Img2} alt="Gender Analysis" className="w-full h-32 object-cover" />
                                </a>
                                <div className="p-2 text-sm font-medium text-center">Gender Analysis</div>
                              </div>
                              <div className="bg-gray-100 rounded-lg overflow-hidden shadow">
                                <a href={Img3} target="_blank" rel="noopener noreferrer">
                                  <img src={Img3} alt="City Analysis" className="w-full h-32 object-cover" />
                                </a>
                                <div className="p-2 text-sm font-medium text-center">City Analysis </div>
                              </div>
                            </div>
                </section>

      </div>
    </div>
  );
}
