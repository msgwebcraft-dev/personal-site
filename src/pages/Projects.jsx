import React, { useState, useEffect } from "react";
import ProjectCard from "./ProjectCard";
import AddProjectModal from "../components/AddProjectModal";

// Initial projects
const initialProjects = [
  {
    title: "PomoTask",
    description: "A productivity app using Pomodoro technique for task management.",
    tools: "React, Node.js, MongoDB",
    liveLink: "https://calm-cliff-0b992cc03.3.azurestaticapps.net/",
    repoLink: "https://github.com/itsleonbro/PomoTask",
    imgSrc: "assets/PomoTask.png",
  },
  {
    title: "PrepCheck",
    description: "An application for preparing and checking readiness for exams or tasks.",
    tools: "React, Express, PostgreSQL",
    liveLink: "https://prepcheck-1.onrender.com/",
    repoLink: "https://github.com/MmelIGaba/PrepCheck",
    imgSrc: "public/assets/prepcheck.png",
  },
  {
    title: "RetailPulse",
    description: "A data analyst tool for retail insights and pulse monitoring.",
    tools: "Streamlit, Python, Pandas",
    liveLink: "https://retailpulse-04.streamlit.app/",
    repoLink: "https://github.com/MmelIGaba/RetailPulse",
    imgSrc: "public/assets/retail.png",
  },
];

export default function Projects() {
  const [projects, setProjects] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const storedProjects = localStorage.getItem("projects");
    if (storedProjects) {
      setProjects(JSON.parse(storedProjects));
    } else {
      setProjects(initialProjects);
      localStorage.setItem("projects", JSON.stringify(initialProjects));
    }
  }, []);

  const handleAddProject = (newProject) => {
    const updatedProjects = [...projects, newProject];
    setProjects(updatedProjects);
    localStorage.setItem("projects", JSON.stringify(updatedProjects));
  };

  return (
    <section
      id="projects"
      className="min-h-screen bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 
                 text-white flex flex-col items-center justify-center p-10 text-center space-y-8"
    >
      <h2 className="text-4xl font-bold">Projects</h2>

      <div className="grid md:grid-cols-2 gap-6 max-w-5xl w-full">
        {projects.map((p, index) => (
          <ProjectCard key={index} {...p} />
        ))}
      </div>

      <button
        onClick={() => setIsModalOpen(true)}
        className="fixed bottom-6 right-6 bg-yellow-400 text-gray-900 font-bold 
                   p-4 rounded-full shadow-lg hover:bg-yellow-300 transition"
        title="Add Project"
      >
        +
      </button>

      <AddProjectModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onAddProject={handleAddProject}
      />
    </section>
  );
}
