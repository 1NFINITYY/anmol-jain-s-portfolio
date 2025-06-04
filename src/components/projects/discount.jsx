import Img1 from './project-image/9-1.jpg';
import Img2 from './project-image/9-2.jpg';
import Img3 from './project-image/9-3.jpg';

export default function DiscountExcelCard() {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-2xl shadow-2xl border border-gray-200">
      <h2 className="text-2xl md:text-3xl font-bold text-indigo-600 mb-4 flex items-center gap-2">
        🧮 Dynamic Discount Calculation Using Excel
      </h2>

      <div className="space-y-4 text-gray-700">
        <section>
          <h3 className="font-semibold text-lg">🔹 Project Overview:</h3>
          <p>
            Developed an interactive discount calculator in Excel to automate price adjustments based on Discount and Customer categories. Utilized functions like <strong>INDEX, MATCH, VLOOKUP</strong>, and structured references for dynamic calculations.
          </p>
        </section>

        <section>
          <h3 className="font-semibold text-lg">🔹 Key Features:</h3>
          <ul className="list-disc list-inside ml-2">
            <li>Dynamic discount retrieval using INDEX-MATCH based on category selections.</li>
            <li>Final price calculation using structured arithmetic expressions.</li>
            <li>VLOOKUP for quick category mapping.</li>
          </ul>
        </section>

        <section>
          <h3 className="font-semibold text-lg">🔹 Excel Formulas Used:</h3>
          <ul className="list-disc list-inside ml-2 font-mono text-sm text-gray-600">
            <li>=INDEX(Discounts, MATCH(C11, Discount_Categories, 0), MATCH(D11, Customer_Categories, 0))</li>
            <li>=[@[Retail Price]] * (1 - H6)</li>
            <li>=VLOOKUP(D4, $G$4:$H$7, 2)</li>
          </ul>
        </section>

        <section>
          <h3 className="font-semibold text-lg">🔹 Skills Demonstrated:</h3>
          <ul className="list-disc list-inside ml-2">
            <li>📊 Data modeling with discount matrices</li>
            <li>🔗 Relational lookups with VLOOKUP and structured table references</li>
            <li>🧠 Logical thinking for Excel-based automation</li>
          </ul>
        </section>

        <section>
          <h3 className="font-semibold text-lg">🖼 Image Suggestions:</h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-2">
                      <div className="bg-gray-100 rounded-lg overflow-hidden shadow">
                        <a href={Img1} target="_blank" rel="noopener noreferrer">
                          <img src={Img1} alt="Document Matrix" className="w-full h-32 object-cover" />
                        </a>
                        <div className="p-2 text-sm font-medium text-center">Document Matrix</div>
                      </div>
                      <div className="bg-gray-100 rounded-lg overflow-hidden shadow">
                        <a href={Img3} target="_blank" rel="noopener noreferrer">
                          <img src={Img3} alt="LOOKUP Formulae" className="w-full h-32 object-cover" />
                        </a>
                        <div className="p-2 text-sm font-medium text-center">LOOKUP Formulae</div>
                      </div>
             </div>
        </section>
      </div>
    </div>
  );
}

