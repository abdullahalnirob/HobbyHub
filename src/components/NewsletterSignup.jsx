import React from "react";
import { FaEnvelope } from "react-icons/fa";

const NewsletterSignup = () => {
  return (
    <section className="bg-white py-16 px-4">
      <div className="max-w-3xl mx-auto bg-white border border-gray-300 shadow-lg rounded-lg p-8 text-center">
        <div className="flex justify-center mb-4 text-blue-500 text-4xl">
          <FaEnvelope />
        </div>

        <h2 className="text-2xl sm:text-3xl font-bold text-black mb-2">
          Join the Hoobyhub Newsletter
        </h2>
        <p className="text-sm text-blue-500 mb-6">
          Be the first to know about new groups, trending hobbies, and exclusive
          community updates.
        </p>

        <form className="flex flex-col sm:flex-row items-center gap-4">
          <input
            type="email"
            required
            placeholder="Enter your email"
            className="flex-1 px-4 py-3 border border-black rounded-md text-blue-500 placeholder-blue-300 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
          />
          <button
            type="submit"
            className="bg-blue-500 cursor-pointer text-white px-6 py-3 rounded-md hover:bg-blue-600 transition-all w-full sm:w-auto"
          >
            Subscribe
          </button>
        </form>

        <p className="mt-4 text-xs text-blue-500">
          We respect your privacy. No spam, ever.
        </p>
      </div>
    </section>
  );
};

export default NewsletterSignup;
