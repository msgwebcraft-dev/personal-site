import React from "react";

const skillCategories = {
  "Front-End": ["HTML", "CSS", "JavaScript", "Ionic", "Angular", "React"],
  "Back-End / API": [".NET", "C#", "Python", "Java Spring Boot"],
  "Cloud & Security": ["Firebase", "OAuth 2.0", "AWS (learning)", "Azure (learning)"],
  "DevOps & Infra": ["Docker", "Git", "CI/CD", "Vercel", "Linux / Ubuntu"],
  "Data & Math": ["Applied Mathematics", "Algorithms & Data Structures", "SQL", "Modelling"],
};

export default function AboutSkills() {
  return (
    <div className="min-h-screen bg-black text-gray-100 py-16 px-6 md:px-12">

      {/* ABOUT ME SECTION */}
      <section className="max-w-5xl mx-auto text-center md:text-left mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-cyan-300 animate-fade-in">
          About Me
        </h2>

        <p className="text-lg md:text-xl mb-4 text-gray-300 animate-fade-in delay-100 leading-relaxed">
          I’m a software developer and systems creator, passionate about
          building scalable, cloud‑ready applications and weaving modern
          engineering practices into every project.
        </p>

        <p className="text-lg md:text-xl mb-6 text-gray-300 animate-fade-in delay-200 leading-relaxed">
          My focus is crafting systems that are performant, maintainable, and trustworthy — 
          with deep curiosity in AI/ML, DevOps automation, and cloud-native architectures.
        </p>

        <p className="text-lg md:text-xl mb-6 text-gray-300 animate-fade-in delay-300 leading-relaxed">
          Each project is a forge: ideas, code, and machines come together to create systems
          that are practical, elegant, and built to last.
        </p>

        <div className="animate-fade-in delay-400">
          <h3 className="text-2xl font-semibold mb-3 text-cyan-200">Goals</h3>
          <ul className="text-lg md:text-xl mb-6 text-gray-400 animate-fade-in delay-300 leading-relaxed list-disc list-inside">
            <li>Expand into AI/ML & cloud-native solutions</li>
            <li>Advance cloud engineering with container orchestration & serverless computing</li>
            <li>Deliver high-quality, trustworthy software</li>
            <li>Integrate mechanical, electrical, and intelligent systems</li>
          </ul>
        </div>
      </section>

      {/* SKILLS SECTION */}
      <section className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-semibold text-center mb-8 text-cyan-300 animate-fade-in">
          Skills
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Object.entries(skillCategories).map(([category, skills]) => (
            <div key={category} className="bg-[#111111] p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-semibold mb-4 text-gray-200">{category}</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-300">
                {skills.map((skill) => (
                  <li key={skill}>{skill}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
              {/* CV Download */}
      <p className="mt-6">
        <a
          href="https://drive.google.com/file/d/1QMRI62VWNebooKroMFU87nohICbEW7gN/view?usp=sharing"
          download
          className="px-6 py-3 bg-cyan-200 text-gray-900 font-semibold rounded-lg shadow-md hover:bg-cyan-300 transition"
        >
          Download CV
        </a>
      </p></div>
      </section>

      {/* Simple fade-in animation */}
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in { animation: fadeIn 0.8s forwards; }
        .animate-fade-in.delay-100 { animation-delay: 0.1s; }
        .animate-fade-in.delay-200 { animation-delay: 0.2s; }
        .animate-fade-in.delay-300 { animation-delay: 0.3s; }
        .animate-fade-in.delay-400 { animation-delay: 0.4s; }
      `}</style>
    </div>
  );
}
