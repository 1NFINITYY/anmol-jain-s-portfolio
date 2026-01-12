import { useState } from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaLinkedin } from "react-icons/fa";

const API_URL = import.meta.env.VITE_API_URL;

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch(`${API_URL}/api/contact`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, message }),
      });

      const result = await res.json();

      if (result.success) {
        alert("Message sent! Check your email 📩");
        setName("");
        setEmail("");
        setMessage("");
      } else {
        alert("Failed to send message");
      }
    } catch (error) {
      alert("Server error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white py-12 px-6">
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 bg-white p-10 rounded-3xl shadow-lg">

        {/* Contact Info */}
        <div className="space-y-6">
          <h2 className="text-3xl font-bold text-gray-800 mb-6 border-b pb-2">Contact</h2>

          <div className="flex items-center space-x-4 text-gray-700">
            <FaPhoneAlt className="text-indigo-600 text-xl" />
            <span className="text-lg">+91-7566442492</span>
          </div>

          <div className="flex items-center space-x-4 text-gray-700">
            <FaEnvelope className="text-indigo-600 text-xl" />
            <span className="text-lg">ajanmol22@gmail.com</span>
          </div>

          <div className="flex items-start space-x-4 text-gray-700">
            <FaMapMarkerAlt className="text-indigo-600 text-xl mt-1" />
            <span className="text-lg">
              S.R. Computer Line, Englishpura, <br /> Sehore (M.P.)
            </span>
          </div>

          <div className="flex items-center space-x-4 text-gray-700">
            <FaLinkedin className="text-indigo-600 text-xl" />
            <a
              href="https://www.linkedin.com/in/anmoljain-dataanalytics22"
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg text-indigo-700 underline"
            >
              linkedin.com/in/anmoljain-dataanalytics22
            </a>
          </div>
        </div>

        {/* Contact Form */}
        <div>
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Send a Message</h3>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Your Name"
              className="w-full p-3 rounded-xl border border-gray-300"
              required
            />
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your Email"
              className="w-full p-3 rounded-xl border border-gray-300"
              required
            />
            <textarea
              rows="5"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Your Message"
              className="w-full p-3 rounded-xl border border-gray-300"
              required
            ></textarea>
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-indigo-600 text-white py-3 rounded-xl font-semibold hover:bg-indigo-700 transition"
            >
              {loading ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>

      </div>
    </div>
  );
};

export default Contact;
