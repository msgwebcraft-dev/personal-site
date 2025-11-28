import React from 'react';
import ProjectCard from './ProjectCard';

const capstone = {
  title: "PrepCheck – AI-Powered Career Readiness Platform",
  description: `PrepCheck is an AI-powered CV analysis and career readiness platform. It provides instant, intelligent feedback across professionalism, projects, technical skills, soft skills, and education. Users receive actionable recommendations and can interact with PrepPal, a conversational AI assistant for guidance.`,
  tools: "React 18, Vite, Node.js, Express, Google Gemini AI, Docker, Kubernetes, GitHub Actions",
  liveLink: "https://prepcheck-1.onrender.com/",
  repoLink: "https://github.com/MmelIGaba/PrepCheck",
  presentationLink: "https://capeitinitiative-my.sharepoint.com/:p:/g/personal/boipelo_ngakane_capaciti_org_za/IQA9nDaKMFHrQLYv51VjuOziAeThw2cHWM0hI93p8iiBUDk?e=SXMVrv",
  imgSrc: "",
};

export default function Capstone() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-teal-400 via-pink-300 to-yellow-300 text-gray-900 flex flex-col items-center justify-center p-10 text-center space-y-8">
      <h2 className="text-4xl font-bold">Capstone Project</h2>
      <ProjectCard {...capstone} />
      <div className="mt-6 max-w-3xl">
        <h3 className="text-2xl font-semibold mb-3">Architecture / Description</h3>
        <p className="mb-4">
          PrepCheck follows a containerised microservices architecture with separate frontend and backend services. 
          The frontend (React + Vite) delivers a responsive, modern UI with data visualisation and dark/light mode support. 
          The backend (Node.js + Express) handles CV uploads, text extraction, validation, and integrates with Google Gemini AI for analysis. 
          Both services are containerised with Docker and orchestrated via Kubernetes for scalability, resilience, and secure secrets management.
        </p>
        <p className="mb-4">
          CI/CD is automated with GitHub Actions, building and pushing Docker images to Docker Hub, and deploying to OpenShift with rolling updates and health checks. 
          PrepPal, the conversational AI assistant, provides context-aware guidance and personalised recommendations to users.
        </p>
        <p>
          <strong>Presentation:</strong>{" "}
          <a
            href={capstone.presentationLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-700 underline font-medium"
          >
            View Capstone Presentation
          </a>
        </p>
      </div>
    </div>
  );
}
