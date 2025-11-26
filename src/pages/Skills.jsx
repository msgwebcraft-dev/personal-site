import React from 'react';

const skillCategories = {
  "Front-End": ["HTML", "CSS", "JavaScript", "Ionic", "Angular", "React"],
  "Back-End / API": [".NET", "C#", "Python", "Java Spring Boot"],
  "Cloud & Security": ["Firebase", "OAuth 2.0", "AWS (learning)", "Azure (learning)"],
  "DevOps & Infra": ["Docker", "Git", "CI/CD", "Vercel", "Linux / Ubuntu"],
  "Data & Math": ["Applied Mathematics", "Algorithms & Data Structures", "SQL", "Modelling"],
};

export default function Skills() {
  return (
    <div className="container mx-auto p-8">
      <h2 className="text-3xl font-semibold mb-6">Skills</h2>
      {Object.entries(skillCategories).map(([category, skills]) => (
        <div key={category} className="mb-4">
          <h3 className="text-xl font-medium">{category}</h3>
          <ul className="list-disc list-inside ml-4">
            {skills.map(s => (
              <li key={s}>{s}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
