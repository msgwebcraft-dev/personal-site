import React from "react";

export default function Contact() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-cyan-700 via-blue-800 to-indigo-900 dark:from-cyan-800 dark:via-blue-900 dark:to-indigo-1000 text-white flex flex-col items-center justify-center p-8 text-center space-y-6">
      <h2 className="text-4xl font-bold">Contact</h2>

      <p className="text-lg">
        Email:{" "}
        <a
          href="mailto:mmeligabrieldyantyil@gmail.com"
          className="text-yellow-300 underline"
        >
          mmeligabrieldyantyil@gmail.com
        </a>
      </p>

      <p className="text-lg">
        GitHub:{" "}
        <a
          href="https://github.com/MmelIGaba"
          target="_blank"
          rel="noopener noreferrer"
          className="text-yellow-300 underline"
        >
          @MmelIGaba
        </a>
      </p>

      <p className="text-lg">
        LinkedIn:{" "}
        <a
          href="https://www.linkedin.com/in/your-profile"
          target="_blank"
          rel="noopener noreferrer"
          className="text-yellow-300 underline"
        >
          Profile
        </a>
      </p>

      <p className="mt-6">
        <a
          href="https://drive.google.com/file/d/1QMRI62VWNebooKroMFU87nohICbEW7gN/view?usp=sharing"
          download
          className="px-6 py-3 bg-yellow-400 text-gray-900 font-semibold rounded-lg shadow-md hover:bg-yellow-300 transition"
        >
          Download CV
        </a>
      </p>
    </div>
  );
}
