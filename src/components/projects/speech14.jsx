import Img1 from './project-image/14-1.jpg';
import Img2 from './project-image/14-2.jpg';
import Img3 from './project-image/14-3.jpg';

export default function SpeechToTextCard() {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-2xl shadow-2xl border border-gray-200">
      <h2 className="text-2xl md:text-3xl font-bold text-indigo-600 mb-4 flex items-center gap-2">
        🗣️ Speech-to-Text Conversion Using Python (Final Project)
      </h2>

      <div className="space-y-4 text-gray-700">

        <section>
          <h3 className="font-semibold text-lg">🔹 Project Overview:</h3>
          <p>
            Developed a robust Speech-to-Text (STT) system that transcribes audio input into readable and structured text using ML and NLP techniques.
          </p>
        </section>

        <section>
          <h3 className="font-semibold text-lg">✅ Key Features:</h3>
          <ul className="list-disc list-inside ml-2">
            <li>Supports input from <strong>.wav and other audio formats</strong></li>
            <li><strong>SpeechRecognition</strong> library for capturing & processing audio</li>
            <li><strong>pydub</strong> and <strong>wave</strong> for audio manipulation</li>
            <li>Integrated with <strong>Google Web Speech API</strong> for transcription</li>
            <li>Preprocessing includes <strong>noise reduction</strong> and segmentation</li>
            <li>Handles errors gracefully like silent or poor-quality audio</li>
          </ul>
        </section>

        <section>
          <h3 className="font-semibold text-lg">🔍 Outcome:</h3>
          <p>
            Generated human-readable transcripts with <strong>high accuracy and low latency</strong>. Built a system scalable to real-time or file-based STT tasks.
          </p>
        </section>

        <section>
          <h3 className="font-semibold text-lg">🧰 Tools & Technologies:</h3>
          <p>
            Python, SpeechRecognition, pydub, wave, Google Web Speech API
          </p>
        </section>

        <section>
          <h3 className="font-semibold text-lg">💡 Real-World Applications:</h3>
          <ul className="list-disc list-inside ml-2">
            <li>Voice-enabled assistants (e.g., Alexa, Siri-like apps)</li>
            <li>Podcast, lecture, and meeting transcription services</li>
            <li>Assistive technology for the hearing impaired</li>
          </ul>
        </section>

        <section>
                  <h3 className="font-semibold text-lg">🖼 Image Suggestions:</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-2">
                              <div className="bg-gray-100 rounded-lg overflow-hidden shadow">
                                <a href={Img1} target="_blank" rel="noopener noreferrer">
                                  <img src={Img1} alt="Speech Recognition Accuracy OverTime" className="w-full h-32 object-cover" />
                                </a>
                                <div className="p-2 text-sm font-medium text-center">Speech Recognition Accuracy OverTime</div>
                              </div>
                              <div className="bg-gray-100 rounded-lg overflow-hidden shadow">
                                <a href={Img2} target="_blank" rel="noopener noreferrer">
                                  <img src={Img2} alt="Speech Recognition Accuracy OverTime" className="w-full h-32 object-cover" />
                                </a>
                                <div className="p-2 text-sm font-medium text-center">Speech Recognition Accuracy OverTime</div>
                              </div>
                              <div className="bg-gray-100 rounded-lg overflow-hidden shadow">
                                <a href={Img3} target="_blank" rel="noopener noreferrer">
                                  <img src={Img3} alt="Voice Amplitude Over Time" className="w-full h-32 object-cover" />
                                </a>
                                <div className="p-2 text-sm font-medium text-center">Voice Amplitude Over Time</div>
                              </div>
                            </div>
                </section>

      </div>
    </div>
  );
}
