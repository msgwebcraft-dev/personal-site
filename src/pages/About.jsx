import React from "react";

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-indigo-900 via-purple-900 to-pink-900 text-white flex flex-col items-center justify-center p-8 text-center space-y-6">
      <h2 className="text-4xl font-bold">About Me</h2>

      <p className="text-lg max-w-2xl">
        I’m a software developer passionate about building scalable, cloud‑ready applications 
        and integrating modern engineering practices. My experience spans front‑end frameworks 
        (HTML, CSS, Ionic, Angular, React), back‑end development (.NET, APIs, Python, Java Spring Boot), 
        and cloud & security tools (Firebase, OAuth 2.0, Docker, CI/CD).
      </p>

      <p className="text-lg max-w-2xl">
        I focus on creating systems that are performant, maintainable, and trustworthy — with a 
        strong interest in cloud engineering, AI/ML, and DevOps automation.
      </p>

      <div>
        <h3 className="text-2xl font-semibold mb-3">Goals</h3>
        <ul className="list-disc list-inside text-left max-w-md mx-auto space-y-2">
          <li>Expand into AI/ML & cloud‑native solutions</li>
          <li>Advance cloud engineering with container orchestration & serverless computing</li>
          <li>Deliver high‑quality, trust‑forward software for clients and communities</li>
        </ul>
      </div>
    </div>
  );
}
