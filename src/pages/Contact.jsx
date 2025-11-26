import React from 'react';

export default function Contact() {
  return (
    <div className="container mx-auto p-8">
      <h2 className="text-3xl font-semibold mb-4">Contact</h2>
      <p>Email: <a href="mailto:your.email@example.com" className="text-blue-600">your.email@example.com</a></p>
      <p>GitHub: <a href="https://github.com/your-username" target="_blank" rel="noopener noreferrer" className="text-blue-600">@your-username</a></p>
      <p>LinkedIn: <a href="https://www.linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer" className="text-blue-600">Profile</a></p>
      <p className="mt-4">
        <a href="/resume.pdf" download className="px-4 py-2 bg-blue-600 text-white rounded">Download CV</a>
      </p>
    </div>
  );
}
