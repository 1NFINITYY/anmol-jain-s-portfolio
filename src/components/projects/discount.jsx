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
              <img
                src="https://via.placeholder.com/300x200?text=Discount+Matrix"
                alt="Discount Matrix"
                className="w-full h-32 object-cover"
              />
              <div className="p-2 text-sm font-medium text-center">Discount Matrix Table</div>
            </div>
            <div className="bg-gray-100 rounded-lg overflow-hidden shadow">
              <img
                src="https://via.placeholder.com/300x200?text=Lookup+Mapping"
                alt="Lookup Mapping"
                className="w-full h-32 object-cover"
              />
              <div className="p-2 text-sm font-medium text-center">Lookup Mapping Logic</div>
            </div>
            <div className="bg-gray-100 rounded-lg overflow-hidden shadow">
              <img
                src="https://via.placeholder.com/300x200?text=Final+Price+Calc"
                alt="Price Calculation"
                className="w-full h-32 object-cover"
              />
              <div className="p-2 text-sm font-medium text-center">Final Price Calculation</div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

