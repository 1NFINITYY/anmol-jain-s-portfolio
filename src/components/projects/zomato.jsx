import zomato1Img from './project-image/zomato1.jpg';
import zomato2Img from './project-image/zomato2.jpg';

export default function ZomatoCard() {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-2xl shadow-2xl border border-gray-200">
      <h2 className="text-2xl md:text-3xl font-bold text-red-600 mb-4 flex items-center gap-2">
        🍽️ Zomato Restaurant Ratings Analysis
      </h2>

      <div className="space-y-4 text-gray-700">
        <section>
          <h3 className="font-semibold text-lg">🔹 Project Summary:</h3>
          <p>
            Understanding how various factors like location, price, and online delivery influence restaurant ratings on Zomato.
          </p>
        </section>

        <section>
          <h3 className="font-semibold text-lg">🔹 Why I Did This:</h3>
          <p>
            Zomato is one of India's leading restaurant platforms. I wanted to uncover what drives a high restaurant rating and whether online delivery and pricing played a major role.
          </p>
        </section>

        <section>
          <h3 className="font-semibold text-lg">🔹 Tools Used:</h3>
          <ul className="list-disc list-inside ml-2">
            <li>Python (Pandas, Matplotlib, Seaborn)</li>
            <li>Power BI</li>
            <li>Jupyter Notebook</li>
          </ul>
        </section>

        <section>
          <h3 className="font-semibold text-lg">🔹 Key Insights:</h3>
          <ul className="list-disc list-inside ml-2">
            <li>Restaurants offering online delivery had 18% higher average ratings.</li>
            <li>Locations like Gurgaon and New Delhi had the highest concentration of high-rated eateries.</li>
            <li>High price range didn't always mean high ratings — value for money mattered more.</li>
          </ul>
        </section>

        <section>
          <h3 className="font-semibold text-lg">🔹 Visual Ideas:</h3>
          <ul className="list-disc list-inside ml-2">
            <li>Map chart showing city-wise restaurant distribution.</li>
            <li>Bar chart: Average rating by price range.</li>
            <li>Scatter plot: Rating vs. Number of reviews.</li>
          </ul>
        </section>

        <section>
          <h3 className="font-semibold text-lg">🖼 Image Suggestions:</h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-2">
            <div className="bg-gray-100 rounded-lg overflow-hidden shadow">
              <a href={zomato1Img} target="_blank" rel="noopener noreferrer">
              <img
                src={zomato1Img}
                alt="Dashboard"
                className="w-full h-32 object-cover"
              />
              </a>
              <div className="p-2 text-sm font-medium text-center">Data Dashboard 1</div>
            </div>
            <div className="bg-gray-100 rounded-lg overflow-hidden shadow">
              <a href={zomato2Img} target="_blank" rel="noopener noreferrer">
              <img
                src={zomato2Img}
                alt="Dashboard"
                className="w-full h-32 object-cover"
              />
              </a>
              <div className="p-2 text-sm font-medium text-center">Data Dashboard 2</div>
            </div>
            
          </div>
        </section>
      </div>
    </div>
  );
}
