export default function MediBotCard() {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-2xl shadow-2xl border border-gray-200">
      <h2 className="text-2xl md:text-3xl font-bold text-red-600 mb-4 flex items-center gap-2">
        🩺 MediBot – AI-Powered Healthcare Chatbot for Cardiac Patients
      </h2>

      <div className="space-y-4 text-gray-700">

        <section>
          <p className="text-sm italic text-gray-500">
            <strong>Project Type:</strong> Capstone / Personal Project | <strong>Domain:</strong> Healthcare, AI, NLP, Chatbot
          </p>
          <p><strong>Tools & Tech:</strong> Python, Streamlit, NLP (NLTK, spaCy), scikit-learn, pandas, SQLite/Firebase, TensorFlow/Keras (optional), Dialogflow</p>
        </section>

        <section>
          <h3 className="font-semibold text-lg">✅ Project Overview:</h3>
          <p>
            MediBot is a smart healthcare assistant designed for cardiac patients. It provides safe, reliable, AI-powered responses to patient queries, offering lifestyle guidance, symptom checks, emergency prompts, and more—simulating a virtual doctor.
          </p>
        </section>

        <section>
          <h3 className="font-semibold text-lg">🎯 Objectives:</h3>
          <ul className="list-disc list-inside ml-2">
            <li>Enhance healthcare accessibility and engagement</li>
            <li>Help patients understand symptoms and medications</li>
            <li>Reduce load on healthcare staff through AI automation</li>
          </ul>
        </section>

        <section>
          <h3 className="font-semibold text-lg">🔧 Key Features:</h3>
          <ul className="list-disc list-inside ml-2">
            <li>NLP-based understanding and intent classification</li>
            <li>Symptom checker with red-flag detection</li>
            <li>Cardiac health tips and dietary recommendations</li>
            <li>Emergency guidance with escalation prompts</li>
            <li>Conversation logging with secure storage</li>
            <li>Streamlit-based clean web interface</li>
          </ul>
        </section>

        <section>
          <h3 className="font-semibold text-lg">🧠 How It Works:</h3>
          <ul className="list-disc list-inside ml-2">
            <li>Medical text preprocessing with NLP (tokenization, lemmatization, etc.)</li>
            <li>ML models classify intents from user input</li>
            <li>Combines rule-based logic and trained models to respond</li>
            <li>Streamlit connects frontend UI with backend logic and database</li>
          </ul>
        </section>

        <section>
          <h3 className="font-semibold text-lg">📊 Challenges Solved:</h3>
          <ul className="list-disc list-inside ml-2">
            <li>Accurate domain-specific intent recognition</li>
            <li>Maintaining balance between medical accuracy and friendly tone</li>
            <li>Built custom keyword pipelines for high relevance</li>
          </ul>
        </section>

        <section>
          <h3 className="font-semibold text-lg">📈 Impact:</h3>
          <ul className="list-disc list-inside ml-2">
            <li>Boosted awareness around cardiac care</li>
            <li>Calmed patient anxiety through factual, AI-driven advice</li>
            <li>Supported early detection of risky symptoms</li>
          </ul>
        </section>

        <section>
          <h3 className="font-semibold text-lg">🏁 Outcome:</h3>
          <p>
            A locally deployed prototype chatbot ready for real-world use. Can be adapted to other domains with minor retraining. A strong foundation toward a scalable AI-based healthcare assistant.
          </p>
        </section>

      </div>
    </div>
  );
}
