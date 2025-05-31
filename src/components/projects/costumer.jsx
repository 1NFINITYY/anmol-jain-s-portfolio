export default function CustomerSegmentationCard() {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-2xl shadow-2xl border border-gray-200">
      <h2 className="text-2xl md:text-3xl font-bold text-purple-600 mb-4 flex items-center gap-2">
        🧠 Customer Segmentation using K-Means Clustering
      </h2>

      <div className="space-y-4 text-gray-700">
        <section>
          <h3 className="font-semibold text-lg">🔹 Project Summary:</h3>
          <p>
            Segmented customers into meaningful groups using K-Means clustering based on their purchasing behavior.
          </p>
        </section>

        <section>
          <h3 className="font-semibold text-lg">🔹 Why I Did This:</h3>
          <p>
            Segmentation allows companies to target each group more effectively, improving personalization and marketing strategies.
          </p>
        </section>

        <section>
          <h3 className="font-semibold text-lg">🔹 Tools Used:</h3>
          <ul className="list-disc list-inside ml-2">
            <li>Python (Sklearn, Pandas, Matplotlib)</li>
            <li>Elbow Method, Silhouette Score</li>
          </ul>
        </section>

        <section>
          <h3 className="font-semibold text-lg">🔹 Key Insights:</h3>
          <ul className="list-disc list-inside ml-2">
            <li>Identified 4 customer clusters: Budget Buyers, Premium Shoppers, Frequent Visitors, Occasional Buyers.</li>
            <li>Premium Shoppers contributed 35% of revenue.</li>
          </ul>
        </section>

        <section>
          <h3 className="font-semibold text-lg">🖼 Image Suggestions:</h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-2">
            <div className="bg-gray-100 rounded-lg overflow-hidden shadow">
              <img
                src="https://via.placeholder.com/300x200?text=Cluster+2D+Plot"
                alt="Cluster Visualization"
                className="w-full h-32 object-cover"
              />
              <div className="p-2 text-sm font-medium text-center">2D Cluster Visualization</div>
            </div>
            <div className="bg-gray-100 rounded-lg overflow-hidden shadow">
              <img
                src="https://via.placeholder.com/300x200?text=Radar+Chart"
                alt="Radar Chart"
                className="w-full h-32 object-cover"
              />
              <div className="p-2 text-sm font-medium text-center">Radar Chart of Cluster Behavior</div>
            </div>
            <div className="bg-gray-100 rounded-lg overflow-hidden shadow">
              <img
                src="https://via.placeholder.com/300x200?text=Customer+Profiles"
                alt="Customer Profiles"
                className="w-full h-32 object-cover"
              />
              <div className="p-2 text-sm font-medium text-center">Customer Profile Cards</div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
