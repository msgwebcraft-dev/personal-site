import React, { useState } from "react";
import { Code, Server, Wrench, FileDown } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function About() {
  const navigate = useNavigate();
  const tabs = [
    { key: "front", name: "Front-End", icon: Code },
    { key: "backend", name: "Back-End / API", icon: Server },
    { key: "tools", name: "DevOps & Tools", icon: Wrench },
  ];

  const skills = {
    front: [
      { name: "HTML", desc: "Used in building responsive layouts for LitLink and VibeLink projects" },
      { name: "CSS", desc: "Styled multiple web apps with custom designs and Tailwind CSS" },
      { name: "JavaScript", desc: "Core scripting for dynamic web functionality and DOM manipulation" },
      { name: "React", desc: "Built front-ends for personal portfolio and VibeLink social media app" },
      { name: "Angular", desc: "Developed mobile-first apps and dashboards during internship and projects" },
      { name: "Ionic", desc: "Used for cross-platform mobile app development" },
      { name: "Tailwind CSS", desc: "Styled modern UI components across web projects" },
      { name: "Bootstrap", desc: "Quickly prototyped responsive interfaces" },
      { name: "Vite", desc: "Set up modern, fast front-end builds for web apps" },
      { name: "Next.js", desc: "Built SEO-friendly and server-side rendered pages" },
      { name: "Redux", desc: "State management for complex React apps" },
      { name: "TypeScript", desc: "Improved type safety in Angular and React projects" },
      { name: "Vue.js", desc: "Experimented with reactive components and SPA projects" },
    ],
    backend: [
      { name: "ASP.NET", desc: "Developed REST APIs and backend systems for e-commerce projects" },
      { name: "C#", desc: "Primary language for ASP.NET and .NET Core backend development" },
      { name: "Python", desc: "Scripts, APIs, and data analysis projects" },
      { name: "Spring Boot", desc: "Built backend services for LitLink mobile app" },
      { name: "C++", desc: "Algorithmic and systems-level projects at university" },
      { name: "Node.js", desc: "Server-side scripts and small web services" },
      { name: "Express", desc: "Built APIs and mock backends for prototypes" },
      { name: "MongoDB", desc: "Used in full-stack MERN prototypes and side projects" },
      { name: "SQL", desc: "Database design and querying for school and personal projects" },
      { name: "REST APIs", desc: "Integrated APIs across multiple web and mobile apps" },
      { name: "GraphQL", desc: "Implemented for flexible API queries in experimental projects" },
      { name: "Firebase", desc: "Backend-as-a-Service for authentication and hosting" },
      { name: "Django", desc: "Built small Python web apps and dashboards" },
      { name: "Flask", desc: "Lightweight backend APIs for learning and prototypes" },
      { name: "PostgreSQL", desc: "Database for school projects and backend prototypes" },
    ],
    tools: [
      { name: "Docker", desc: "Containerized apps for consistent development environments" },
      { name: "CI/CD", desc: "Implemented pipelines for deployment automation" },
      { name: "Ubuntu", desc: "Primary OS for development and server hosting" },
      { name: "Vercel", desc: "Hosted front-end apps and prototypes" },
      { name: "Git", desc: "Version control for all personal and team projects" },
      { name: "GitHub", desc: "Collaboration, CI, and code hosting" },
      { name: "GitLab", desc: "Used for DevOps pipelines and private repos" },
      { name: "Jenkins", desc: "Configured CI/CD pipelines for learning and prototyping" },
      { name: "Kubernetes", desc: "Experimented with container orchestration" },
      { name: "AWS", desc: "Hosted apps, databases, and cloud resources" },
      { name: "Azure", desc: "University and cloud experiments" },
      { name: "Terraform", desc: "Infrastructure as code for personal projects" },
      { name: "Ansible", desc: "Automated server setups for learning purposes" },
    ],
  };

  const [active, setActive] = useState("front");
  const [fade, setFade] = useState(false);
  const handleArrowClick = () => {
    navigate("/projects");
  };
  const handleTabClick = (key) => {
    setFade(true);
    setTimeout(() => {
      setActive(key);
      setFade(false);
    }, 150);
  };

  return (
    <div className="min-h-screen pt-32 px-6 text-gray-100 bg-transparent space-y-20">
      {/* About section */}
      <section className="max-w-5xl mx-auto space-y-8">
        <div className="flex items-center gap-6">
          <h1 className="text-4xl md:text-5xl font-bold text-cyan-300">About Me</h1>
        </div>

        {/* CV Download */}
        <a
          href="https://drive.google.com/file/d/1QMRI62VWNebooKroMFU87nohICbEW7gN/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-5 py-2 rounded-full text-sm border backdrop-blur-md bg-white/5 hover:bg-white/10 transition border-cyan-300 text-cyan-300 shadow-cyan-300/40 shadow-md"
        >
          <FileDown size={16} />
          Download CV
        </a>

        <p className="text-lg text-gray-300 leading-relaxed">
          I’m a software developer passionate about building scalable,
          cloud-ready applications and weaving modern engineering practices
          into every project.
        </p>

        <p className="text-lg text-gray-300 leading-relaxed">
          My focus is crafting systems that are performant, maintainable and
          trustworthy with deep curiosity in AI/ML and cloud-native
          architectures.
        </p>
      </section>

      {/* Skills */}
      <section className="max-w-5xl mx-auto mt-20 ">
        <h2 className="text-3xl md:text-4xl font-semibold text-center mb-10 text-cyan-300 items-center flex gap-3">
          Skills
        </h2>

        {/* TABS */}
        <div className="flex justify-center gap-6 mb-10 items-center">
          {tabs.map((t) => {
            const Icon = t.icon;
            return (
              <button
                key={t.key}
                onClick={() => handleTabClick(t.key)}
                className={`flex items-center gap-2 px-5 py-2 rounded-full text-sm border backdrop-blur-md bg-white/5 hover:bg-white/10 transition ${
                  active === t.key
                    ? "border-cyan-300 text-cyan-300 shadow-cyan-300/40 shadow-md"
                    : "border-gray-700 text-gray-400"
                }`}
              >
                <Icon size={16} />
                {t.name}
              </button>
            );
          })}
        </div>

        {/* SKILL BADGES */}
        <div
          className={`grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto transition-opacity duration-300 ${
            fade ? "opacity-0" : "opacity-100"
          }`}
        >
          {skills[active].map((skill) => (
            <div
              key={skill.name}
              className="justify-center p-4 border border-gray-700 rounded-lg max-w-4xl hover:border-cyan-300 transition"
            >
              <h3 className="text-xl font-semibold mb-2">{skill.name}</h3>
              <p className="text-gray-400 text-sm">{skill.desc}</p>
            </div>
          ))}

        </div>
          <div
          className="mt-10 animate-bounce text-gray-500 cursor-pointer text-4xl justify-center flex"
          onClick={handleArrowClick}
          title="Go to Projects"
        >
          ▼
        </div>
      </section>
    </div>
  );
}
