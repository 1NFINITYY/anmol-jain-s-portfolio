import Img1 from './project-image/16-1.jpg';
import Img2 from './project-image/16-2.jpg';
import Img3 from './project-image/16-3.jpg';

export default function FaceDetectionCard() {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-2xl shadow-2xl border border-gray-200">
      <h2 className="text-2xl md:text-3xl font-bold text-blue-600 mb-4 flex items-center gap-2">
        📷 Real-Time Face Detection with OpenCV
      </h2>

      <div className="space-y-4 text-gray-700">

        <section>
          <h3 className="font-semibold text-lg">📝 Project Description:</h3>
          <p>
            This project demonstrates a real-time face detection system using OpenCV. It utilizes Haar Cascade Classifiers to identify and highlight human faces from live webcam feed using bounding boxes.
          </p>
        </section>

        <section>
          <h3 className="font-semibold text-lg">🧠 How It Works:</h3>
          <ul className="list-disc list-inside ml-2">
            <li>Loads Haar cascade XML file for face recognition</li>
            <li>Captures live video using <code>cv2.VideoCapture(0)</code></li>
            <li>Converts frames to grayscale and runs <code>detectMultiScale()</code></li>
            <li>Draws bounding boxes on detected faces in real-time</li>
          </ul>
        </section>

        <section>
          <h3 className="font-semibold text-lg">🔧 Key Components:</h3>
          <ul className="list-disc list-inside ml-2">
            <li><code>cv2.CascadeClassifier()</code> – loads face detection model</li>
            <li><code>cv2.VideoCapture()</code> – webcam integration</li>
            <li><code>cv2.rectangle()</code> – draw face bounding boxes</li>
            <li><code>detect_bounding_box()</code> – reusable detection logic</li>
          </ul>
        </section>

        <section>
          <h3 className="font-semibold text-lg">✅ Skills Demonstrated:</h3>
          <ul className="list-disc list-inside ml-2">
            <li>Real-time video/image processing</li>
            <li>Hands-on experience with OpenCV</li>
            <li>Understanding of classical computer vision algorithms</li>
            <li>UI responsiveness and frame rendering</li>
          </ul>
        </section>

        <section>
          <h3 className="font-semibold text-lg">🚀 Extensions You Could Add:</h3>
          <ul className="list-disc list-inside ml-2">
            <li>Eye and smile detection</li>
            <li>Emotion or mask recognition using ML classifiers</li>
            <li>Save snapshots of detected faces</li>
          </ul>
        </section>

        <section>
                  <h3 className="font-semibold text-lg">🖼 Image Suggestions:</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-2">
                              <div className="bg-gray-100 rounded-lg overflow-hidden shadow">
                                <a href={Img1} target="_blank" rel="noopener noreferrer">
                                  <img src={Img1} alt="Facial Recognition" className="w-full h-32 object-cover" />
                                </a>
                                <div className="p-2 text-sm font-medium text-center">Facial Recognition</div>
                              </div>
                              <div className="bg-gray-100 rounded-lg overflow-hidden shadow">
                                <a href={Img2} target="_blank" rel="noopener noreferrer">
                                  <img src={Img2} alt="Face Detection" className="w-full h-32 object-cover" />
                                </a>
                                <div className="p-2 text-sm font-medium text-center">Face Detection</div>
                              </div>
                              <div className="bg-gray-100 rounded-lg overflow-hidden shadow">
                                <a href={Img3} target="_blank" rel="noopener noreferrer">
                                  <img src={Img3} alt="Deep Learning Pipeline" className="w-full h-32 object-cover" />
                                </a>
                                <div className="p-2 text-sm font-medium text-center">Deep Learning Pipeline</div>
                              </div>
                            </div>
                </section>

      </div>
    </div>
  );
}
