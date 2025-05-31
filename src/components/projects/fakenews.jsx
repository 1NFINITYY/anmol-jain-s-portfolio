export default function FakeNewsCard() {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-2xl shadow-2xl border border-gray-200">
      <h2 className="text-2xl md:text-3xl font-bold text-emerald-600 mb-4 flex items-center gap-2">
        📰 Fake News Detection using NLP
      </h2>

      <div className="space-y-4 text-gray-700">
        <section>
          <h3 className="font-semibold text-lg">🔹 Project Summary:</h3>
          <p>
            Used Natural Language Processing (NLP) to classify news articles as fake or real.
          </p>
        </section>

        <section>
          <h3 className="font-semibold text-lg">🔹 Why I Did This:</h3>
          <p>
            With misinformation spreading faster than facts, I wanted to explore how data science can help flag misleading content online.
          </p>
        </section>

        <section>
          <h3 className="font-semibold text-lg">🔹 Tools Used:</h3>
          <ul className="list-disc list-inside ml-2">
            <li>Python (NLTK, Sklearn, Pandas)</li>
            <li>TF-IDF Vectorizer, Logistic Regression</li>
            <li>Flask (for basic web deployment)</li>
          </ul>
        </section>

        <section>
          <h3 className="font-semibold text-lg">🔹 Key Insights:</h3>
          <ul className="list-disc list-inside ml-2">
            <li>Fake news articles used more sensational and emotional words.</li>
            <li>Logistic Regression gave better results than Naive Bayes.</li>
            <li>Preprocessing like lemmatization and stop-word removal boosted model accuracy.</li>
          </ul>
        </section>

        <section>
          <h3 className="font-semibold text-lg">🔹 Visual Ideas:</h3>
          <ul className="list-disc list-inside ml-2">
            <li>WordClouds for fake vs real news</li>
            <li>Bar chart: Accuracy of different models</li>
            <li>Sample prediction table</li>
          </ul>
        </section>

        <section>
          <h3 className="font-semibold text-lg">🖼 Image Suggestions:</h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-2">
            <div className="bg-gray-100 rounded-lg overflow-hidden shadow">
              <img
                src="https://via.placeholder.com/300x200?text=WordCloud"
                alt="Word Cloud"
                className="w-full h-32 object-cover"
              />
              <div className="p-2 text-sm font-medium text-center">Word Cloud Visualization</div>
            </div>
            <div className="bg-gray-100 rounded-lg overflow-hidden shadow">
              <img
                src="https://via.placeholder.com/300x200?text=TF-IDF+vs+BoW"
                alt="TF-IDF vs BoW"
                className="w-full h-32 object-cover"
              />
              <div className="p-2 text-sm font-medium text-center">TF-IDF vs BoW Chart</div>
            </div>
            <div className="bg-gray-100 rounded-lg overflow-hidden shadow">
              <img
                src="https://via.placeholder.com/300x200?text=Flask+App+Demo"
                alt="Flask App Screenshot"
                className="w-full h-32 object-cover"
              />
              <div className="p-2 text-sm font-medium text-center">Flask App Screenshot</div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
