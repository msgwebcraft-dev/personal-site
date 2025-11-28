import React from 'react';

const skillCategories = {
  "Front-End": ["HTML", "CSS", "JavaScript", "Ionic", "Angular", "React"],
  "Back-End / API": [".NET", "C#", "Python", "Java Spring Boot"],
  "Cloud & Security": ["Firebase", "OAuth 2.0", "AWS (learning)", "Azure (learning)"],
  "DevOps & Infra": ["Docker", "Git", "CI/CD", "Vercel", "Linux / Ubuntu"],
  "Data & Math": ["Applied Mathematics", "Algorithms & Data Structures", "SQL", "Modelling"],
};

const badgeColors = [
  "bg-blue-100 text-blue-800",
  "bg-green-100 text-green-800",
  "bg-purple-100 text-purple-800",
  "bg-yellow-100 text-yellow-800",
  "bg-red-100 text-red-800",
  "bg-pink-100 text-pink-800",
  "bg-indigo-100 text-indigo-800",
];

export default function Skills() {
  return (
    <div className="container mx-auto p-8 rounded-xl shadow-lg 
                    bg-gradient-to-r from-pink-200 via-purple-200 to-blue-200">
      <h2 className="text-3xl font-semibold mb-6 text-gray-900">Skills</h2>
      {Object.entries(skillCategories).map(([category, skills]) => (
        <div key={category} className="mb-6">
          <h3 className="text-xl font-medium mb-3 text-gray-800">{category}</h3>
          <div className="flex flex-wrap gap-3">
            {skills.map((s, idx) => (
              <span
                key={s}
                className={`px-4 py-2 rounded-full font-medium shadow-sm ${badgeColors[idx % badgeColors.length]}`}
              >
                {s}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
