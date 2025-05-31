export default function ChurnPredictionCard() {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-2xl shadow-2xl border border-gray-200">
      <h2 className="text-2xl md:text-3xl font-bold text-indigo-600 mb-4 flex items-center gap-2">
        📉 Customer Churn Prediction for a Telecom Company
      </h2>

      <div className="space-y-4 text-gray-700">
        <section>
          <h3 className="font-semibold text-lg">🔹 Project Summary:</h3>
          <p>
            Built a machine learning model to predict which customers are likely to leave the telecom service using demographic and usage data.
          </p>
        </section>

        <section>
          <h3 className="font-semibold text-lg">🔹 Why I Did This:</h3>
          <p>
            Customer retention is cheaper than acquisition. So I built this model to help companies identify churn risks before it's too late.
          </p>
        </section>

        <section>
          <h3 className="font-semibold text-lg">🔹 Tools Used:</h3>
          <ul className="list-disc list-inside ml-2">
            <li>Python (Scikit-learn, Pandas)</li>
            <li>Logistic Regression, Decision Tree</li>
            <li>Confusion Matrix, ROC-AUC</li>
          </ul>
        </section>

        <section>
          <h3 className="font-semibold text-lg">🔹 Key Insights:</h3>
          <ul className="list-disc list-inside ml-2">
            <li>Long call durations and higher monthly charges were strong churn indicators.</li>
            <li>Model achieved 83% accuracy with Logistic Regression.</li>
            <li>Senior citizens were 30% more likely to churn.</li>
          </ul>
        </section>

        <section>
          <h3 className="font-semibold text-lg">🔹 Visual Ideas:</h3>
          <ul className="list-disc list-inside ml-2">
            <li>ROC Curve comparing models</li>
            <li>Heatmap of feature importance</li>
            <li>Confusion Matrix</li>
          </ul>
        </section>

        <section>
          <h3 className="font-semibold text-lg">🖼 Image Suggestions:</h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-2">
            <div className="bg-gray-100 rounded-lg overflow-hidden shadow">
              <img
                src="https://via.placeholder.com/300x200?text=Flowchart"
                alt="Churn Model Flowchart"
                className="w-full h-32 object-cover"
              />
              <div className="p-2 text-sm font-medium text-center">Churn Model Flowchart</div>
            </div>
            <div className="bg-gray-100 rounded-lg overflow-hidden shadow">
              <img
                src="https://via.placeholder.com/300x200?text=ROC+%26+Confusion+Matrix"
                alt="ROC and Confusion Matrix"
                className="w-full h-32 object-cover"
              />
              <div className="p-2 text-sm font-medium text-center">ROC & Confusion Matrix</div>
            </div>
            <div className="bg-gray-100 rounded-lg overflow-hidden shadow">
              <img
                src="https://via.placeholder.com/300x200?text=Dashboard"
                alt="Churn Dashboard"
                className="w-full h-32 object-cover"
              />
              <div className="p-2 text-sm font-medium text-center">Churn Flag Dashboard</div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
