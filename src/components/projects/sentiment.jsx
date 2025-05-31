export default function SentimentAnalysisCard() {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-2xl shadow-2xl border border-gray-200">
      <h2 className="text-2xl md:text-3xl font-bold text-pink-600 mb-4 flex items-center gap-2">
        💬 E-commerce Product Review Sentiment Analysis
      </h2>

      <div className="space-y-4 text-gray-700">
        <section>
          <h3 className="font-semibold text-lg">🔹 Project Summary:</h3>
          <p>
            Performed sentiment analysis on thousands of product reviews to determine customer satisfaction.
          </p>
        </section>

        <section>
          <h3 className="font-semibold text-lg">🔹 Why I Did This:</h3>
          <p>
            I wanted to explore how natural language processing can convert raw customer feedback into actionable business insights.
          </p>
        </section>

        <section>
          <h3 className="font-semibold text-lg">🔹 Tools Used:</h3>
          <ul className="list-disc list-inside ml-2">
            <li>Python (NLTK, TextBlob, WordCloud)</li>
            <li>TF-IDF, Logistic Regression</li>
          </ul>
        </section>

        <section>
          <h3 className="font-semibold text-lg">🔹 Key Insights:</h3>
          <ul className="list-disc list-inside ml-2">
            <li>70% reviews were positive, especially for electronics.</li>
            <li>Common negative terms: “late delivery”, “damaged”, “poor packaging”.</li>
          </ul>
        </section>

        <section>
          <h3 className="font-semibold text-lg">🖼 Image Suggestions:</h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-2">
            <div className="bg-gray-100 rounded-lg overflow-hidden shadow">
              <img
                src="https://via.placeholder.com/300x200?text=Word+Cloud"
                alt="Word Cloud"
                className="w-full h-32 object-cover"
              />
              <div className="p-2 text-sm font-medium text-center">Positive & Negative Word Clouds</div>
            </div>
            <div className="bg-gray-100 rounded-lg overflow-hidden shadow">
              <img
                src="https://via.placeholder.com/300x200?text=Sentiment+Pie+Chart"
                alt="Sentiment Pie Chart"
                className="w-full h-32 object-cover"
              />
              <div className="p-2 text-sm font-medium text-center">Sentiment Distribution Pie Chart</div>
            </div>
            <div className="bg-gray-100 rounded-lg overflow-hidden shadow">
              <img
                src="https://via.placeholder.com/300x200?text=TF-IDF+Keywords"
                alt="TF-IDF Chart"
                className="w-full h-32 object-cover"
              />
              <div className="p-2 text-sm font-medium text-center">TF-IDF Keyword Chart</div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
