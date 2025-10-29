import React from 'react';

const Projects = () => {
  const projects = [
    {
      title: 'Student Progress Tracker',
      description: 'Visual academic dashboard built with Firebase, Tailwind, and JavaScript.',
      link: '#'
    },
    {
      title: 'E-commerce Platform',
      description: 'Full-stack online store with React, Node.js, and MongoDB.',
      link: '#'
    },
    {
      title: 'Weather App',
      description: 'Real-time weather application using OpenWeatherMap API.',
      link: '#'
    }
  ];

  return (
    <section id="projects" className="py-32 bg-primary">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-text text-center mb-16">My Projects</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
          {projects.map((project, index) => (
            <div key={index} className="bg-secondary p-8 rounded-lg border border-accent hover:border-accent/50 transition-all duration-300 hover:transform hover:scale-105">
              <h3 className="text-2xl font-bold text-text mb-6">{project.title}</h3>
              <p className="text-text mb-8 leading-relaxed">{project.description}</p>
              <a href={project.link} className="inline-block text-accent font-bold hover:text-accent/80 transition-colors text-lg">View Project →</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
