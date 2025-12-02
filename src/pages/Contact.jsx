import React from "react";
import { useForm, ValidationError } from "@formspree/react";
import { FaGithub, FaLinkedin, FaEnvelope, FaWhatsapp } from "react-icons/fa";

export default function Contact() {
  const [state, handleSubmit] = useForm("meoykzap");

  return (
<div className="min-h-screen bg-transparent text-white flex flex-col items-center justify-center p-8 text-center space-y-10">
      <h2 className="text-4xl font-bold">Get in Touch</h2>

      <p className="text-lg max-w-xl">
        I’d love to hear from you, whether it’s a project idea, collaboration, or just to say hi!
      </p>

      {/* Contact Form */}
      {state.succeeded ? (
        <p className="text-cyan-300 text-lg font-medium">Thanks for your submission!</p>
      ) : (
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-md space-y-4 bg-gray-800 p-6 rounded-lg shadow-lg"
        >
          <input
            id="name"
            type="text"
            name="name"
            placeholder="Your Name"
            className="w-full px-4 py-2 rounded-md bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-cyan-400"
            required
          />

          <label htmlFor="email" className="block text-left text-sm text-cyan-300">
            Email Address
          </label>
          <input
            id="email"
            type="email"
            name="email"
            placeholder="Your Email"
            className="w-full px-4 py-2 rounded-md bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-cyan-400"
            required
          />
          <ValidationError prefix="Email" field="email" errors={state.errors} />

          <label htmlFor="message" className="block text-left text-sm text-cyan-300">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            placeholder="Your Message"
            rows="4"
            className="w-full px-4 py-2 rounded-md bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-cyan-400"
            required
          ></textarea>
          <ValidationError prefix="Message" field="message" errors={state.errors} />

          <button
            type="submit"
            disabled={state.submitting}
            className={`w-full px-6 py-3 font-semibold rounded-md shadow-md transition ${
              state.submitting
                ? "bg-cyan-300 text-gray-500 cursor-not-allowed"
                : "bg-cyan-400 text-gray-900 hover:bg-cyan-300"
            }`}
          >
            {state.submitting ? "Sending..." : "Send Message"}
          </button>
        </form>
      )}

      {/* Social Links */}
      <div className="flex space-x-6 text-2xl">
        <a href="mailto:mmeligabrieldyantyil@gmail.com" className="hover:text-cyan-400 transition">
          <FaEnvelope />
        </a>
        <a href="https://github.com/MmelIGaba" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition">
          <FaGithub />
        </a>
        <a href="https://shorturl.at/TBFt5" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition">
          <FaLinkedin />
        </a>
        <a href="https://wa.me/0835044366" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition">
          <FaWhatsapp />
        </a>
      </div>
    </div>
  );
}
