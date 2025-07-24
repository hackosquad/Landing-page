import { useState } from "react";
import { collection, addDoc, Timestamp } from "firebase/firestore";
import { db } from "../firebase"; // adjust path
import { motion } from "framer-motion";

const Contact = () => {
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      await addDoc(collection(db, "contactMessages"), {
        email,
        subject,
        message,
        createdAt: Timestamp.now(),
      });
      setSuccess(true);
      setEmail("");
      setSubject("");
      setMessage("");
    } catch (error) {
      console.error("Error sending message:", error);
    }
    setLoading(false);
  };

  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-red-900/20 via-black to-black opacity-80 z-0" />
      <div className="relative z-10 py-16 lg:py-24 px-4 mx-auto max-w-screen-md">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-white">
            Contact <span className="text-red-500">Us</span>
          </h2>
          <p className="mb-8 lg:mb-16 text-gray-300 sm:text-xl">
            Got a technical issue? Want to send feedback? Let us know.
          </p>
        </motion.div>

        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="space-y-8"
        >
          <div>
            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-200">
              Your email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="shadow-sm bg-[#1a1a1a] border border-gray-800 text-white text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5 placeholder-gray-500"
              placeholder="name@company.com"
              required
            />
          </div>
          <div>
            <label htmlFor="subject" className="block mb-2 text-sm font-medium text-gray-200">
              Subject
            </label>
            <input
              type="text"
              id="subject"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              className="block p-3 w-full text-sm text-white bg-[#1a1a1a] rounded-lg border border-gray-800 shadow-sm focus:ring-red-500 focus:border-red-500 placeholder-gray-500"
              placeholder="Let us know how we can help you"
              required
            />
          </div>
          <div>
            <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-200">
              Your message
            </label>
            <textarea
              id="message"
              rows={6}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="block p-2.5 w-full text-sm text-white bg-[#1a1a1a] rounded-lg border border-gray-800 shadow-sm focus:ring-red-500 focus:border-red-500 placeholder-gray-500"
              placeholder="Leave a comment..."
              required
            />
          </div>
          <div className="flex justify-center">
            <button
              type="submit"
              disabled={loading}
              className="py-3 px-8 text-sm font-medium text-white rounded-lg bg-red-600 hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-red-500/50 transition-all duration-200 transform hover:scale-105"
            >
              {loading ? "Sending..." : "Send message"}
            </button>
          </div>

          {success && (
            <p className="text-green-400 text-center">Message sent successfully!</p>
          )}
        </motion.form>
      </div>
      <div className="absolute top-0 right-0 -translate-y-1/2 w-96 h-96 bg-red-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 translate-y-1/2 w-96 h-96 bg-red-600/10 rounded-full blur-3xl pointer-events-none" />
    </section>
  );
};

export default Contact;

