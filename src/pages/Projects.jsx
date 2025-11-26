import React from 'react';
import ProjectCard from './ProjectCard';

// Example project list — update with your actual projects
const projects = [
  {
    title: "Student Progress Tracker",
    description: "Visualize course grades and attendance with charts and filters.",
    tools: "React, Chart.js, Firebase",
    liveLink: "#",
    repoLink: "https://github.com/your-username/student-progress-tracker",
    imgSrc: "",  // optional screenshot path
  },
  {
    title: "Hairdresser Booking Platform",
    description: "Map-based search and booking system for local hairdressers.",
    tools: "Flutter (frontend), Spring Boot (backend), Google Maps API",
    liveLink: "#",
    repoLink: "https://github.com/your-username/hairdresser-booking",
    imgSrc: "",
  },
  // add more projects here ...
];

export default function Projects() {
  return (
    <div className="container mx-auto p-8">
      <h2 className="text-3xl font-semibold mb-6">Projects</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {projects.map(p => (
          <ProjectCard key={p.title} {...p} />
        ))}
      </div>
    </div>
  );
}
