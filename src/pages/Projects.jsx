import React, { useState, useEffect } from "react";
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

  return (
    <div className="relative bg-[#00111a] text-gray-200 min-h-screen">

      {/* Water-like background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="w-full h-full bg-gradient-to-b from-[#00111a] via-[#001820] to-[#002630] animate-pulse-slow"></div>
      </div>

      {/* Projects Section */}
      <section className="relative py-24 px-6 flex flex-col items-center">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl w-full">
          {projects.map((proj, idx) => (
            <div
              key={idx}
              className="bg-[#002630] rounded-xl border border-cyan-900 shadow-lg overflow-hidden
                         transform transition-all duration-500 hover:scale-105 hover:shadow-cyan-500"
            >
              {/* HEADER */}
              <div className="p-4 border-b border-cyan-700">
                <h4 className="text-xl font-bold text-white">{proj.title}</h4>
              </div>

              {/* BODY */}
              <div className="p-4 flex flex-col items-center space-y-2">
                {proj.imgSrc && (
                  <img
                    src={proj.imgSrc}
                    alt={proj.title}
                    className="w-full h-48 object-cover rounded-lg border border-cyan-700 transition-transform duration-500 hover:scale-110"
                  />
                )}
                <p className="text-gray-300 text-center text-sm">{proj.description}</p>
              </div>

              {/* FOOTER */}
              <div className="p-4 border-t border-cyan-700 flex justify-between">
                {proj.liveLink && (
                  <a
                    href={proj.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-cyan-400 hover:underline text-sm transition"
                  >
                    Live
                  </a>
                )}
                {proj.repoLink && (
                  <a
                    href={proj.repoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-cyan-400 hover:underline text-sm transition"
                  >
                    Repo
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Add Project Button */}
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
          onAddProject={(newProj) => {
            const updated = [...projects, newProj];
            setProjects(updated);
            localStorage.setItem("projects", JSON.stringify(updated));
          }}
        />
      </section>

      {/* Tailwind custom animation */}
      <style>{`
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.85; }
          50% { opacity: 1; }
        }
        .animate-pulse-slow { animation: pulse-slow 8s ease-in-out infinite; }
      `}</style>
    </div>
  );
}