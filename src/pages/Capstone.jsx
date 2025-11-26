import React from 'react';
import ProjectCard from './ProjectCard';

// Example capstone — update with your actual capstone details
const capstone = {
  title: "African-Structured Banking System",
  description: `Planning, designing and prototyping a banking system tailored for African markets — focusing on accessibility, cultural context, and scalability.`,
  tools: "React / Flutter, Spring Boot, Cloud Design, SQL/NoSQL",
  liveLink: "#",
  repoLink: "https://github.com/your-username/african-banking-system",
  imgSrc: "",
};

export default function Capstone() {
  return (
    <div className="container mx-auto p-8">
      <h2 className="text-3xl font-semibold mb-6">Capstone Project</h2>
      <ProjectCard {...capstone} />
      <div className="mt-6">
        <h3 className="text-2xl font-medium mb-2">Architecture / Description</h3>
        <p>
          Describe your architecture, modules, database design, workflows, why you chose certain tools, and how this serves African markets.
        </p>
        {/* later you can embed images or diagrams */}
      </div>
    </div>
  );
}
