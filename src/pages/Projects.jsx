import React, { useState, useEffect } from "react";
import AddProjectModal from "../components/AddProjectModal";

const initialProjects = [
  {
    title: "Plaas Stop",
    description:
      "A geospatial e-commerce platform bridging the gap between agricultural producers and buyers. Plaasstop utilizes geolocation and public data scraping to map local farms, allowing users to discover verified vendors and unclaimed farm leads in their vicinity for direct, transparent trade",
    tools:
      "React, Node, Firebase, Google Maps API, Geolocation API, Web Scraping, Python",
    liveLink: "https://farmstop.mmeligabriel.online",
    repoLink: "https://github.com/MmelIGaba/FarmStop",
    imgSrc:
      "https://github.com/MmelIGaba/Portfolio-images/blob/main/public/images/image.png?raw=true",
  },
  {
    title: "PrepCheck",
    description:
      "An application for preparing and checking readiness for exams or tasks.",
    tools: "React, Express, PostgreSQL",
    liveLink: "https://prepcheck-1.onrender.com/",
    repoLink: "https://github.com/MmelIGaba/PrepCheck",
    imgSrc:
      "https://github.com/MmelIGaba/Portfolio-images/blob/main/public/images/prep.png?raw=true",
  },
  {
    title: "RetailPulse",
    description:
      "A data analyst tool for retail insights and pulse monitoring.",
    tools: "Streamlit, Python, Pandas",
    liveLink: "https://retailpulse-04.streamlit.app/",
    repoLink: "https://github.com/MmelIGaba/RetailPulse",
    imgSrc:
      "https://github.com/MmelIGaba/Portfolio-images/blob/main/public/images/retail.png?raw=true",
  },
  {
    title: "PomoTask",
    description:
      "A productivity app using Pomodoro technique for task management.",
    tools: "React, Node.js, MongoDB",
    liveLink: "https://calm-cliff-0b992cc03.3.azurestaticapps.net/",
    repoLink: "https://github.com/itsleonbro/PomoTask",
    imgSrc:
      "https://github.com/MmelIGaba/Portfolio-images/blob/main/public/images/pomotask.png?raw=true",
  },
];

const PASSWORD = "ChristIsKing"; // Assuming noone will see this :)

export default function Projects() {
  const [projects, setProjects] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("projects")) || [];

    const merged = [
      ...stored,
      ...initialProjects.filter(
        (p) => !stored.some((s) => s.title === p.title)
      ),
    ];

    setProjects(merged);
    localStorage.setItem("projects", JSON.stringify(merged));
  }, []);

  const handleAddButton = () => {
    const input = prompt("Enter password to add a project:");
    if (input === PASSWORD) {
      setIsModalOpen(true);
    } else {
      alert("Incorrect password!");
    }
  };

  return (
    <section className="relative py-24 px-6 flex flex-col items-center">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl w-full">
        {projects.map((proj) => (
          <div
            key={proj.repoLink || proj.title}
            className="bg-[#002630] rounded-xl border border-cyan-900 shadow-lg overflow-hidden transform transition-all duration-500 hover:scale-105 hover:shadow-cyan-500"
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
              <p className="text-gray-300 text-center text-sm">
                {proj.description}
              </p>
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
        onClick={handleAddButton}
        className="fixed bottom-6 right-6 bg-yellow-500/30 text-gray-900 font-bold p-4 rounded-full shadow-lg hover:bg-yellow-500/50 transition"
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
  );
}
