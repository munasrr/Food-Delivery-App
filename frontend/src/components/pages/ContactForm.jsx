import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import toast from "react-hot-toast";
import { Mail } from "lucide-react";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement your form submission logic here
    toast.success("Message sent successfully!");
  };

  return (
    <>
      <Header />
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-gray-100 to-gray-200 p-4">
        <div className="w-full mt-24 max-w-lg p-8 space-y-6 bg-white rounded-lg shadow-xl">
          <h2 className="text-4xl font-bold text-center text-primary flex items-center justify-center gap-2">
            <Mail size={28} />
            Contact Us
          </h2>
          <p className="text-center text-text">
            We'd love to hear from you! Please fill out the form below to get in
            touch.
          </p>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                placeholder="Name"
                className="w-full px-4 py-3 border bg-gray-200 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-red-500 dark:focus:ring-red-400"
              />
            </div>
            <div>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                placeholder="Email"
                className="w-full px-4 py-3 border bg-gray-200 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-red-500 dark:focus:ring-red-400"
              />
            </div>
            <div>
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
                placeholder="Message"
                rows="5"
                className="w-full px-4 py-3 border bg-gray-200 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-red-500 dark:focus:ring-red-400"
              />
            </div>
            <button
              type="submit"
              className="w-full py-3 mt-4 text-white bg-red-600 rounded-lg shadow-lg hover:bg-red-700 dark:bg-red-500 dark:hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 dark:focus:ring-red-400"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ContactForm;
