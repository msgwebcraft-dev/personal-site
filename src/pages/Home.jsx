import React from "react";
import { useNavigate } from "react-router-dom"; // assuming you use react-router

export default function Home() {
  const navigate = useNavigate();

  const handleArrowClick = () => {
    // Navigate to /projects page
    navigate("/projects");
  };

  return (
    <div className="bg-[#0a0a0c] text-gray-200 font-mono min-h-screen flex flex-col">
      {/* HERO */}
      <section className="flex flex-col items-center justify-center h-screen text-center px-6">
        <h1 className="text-4xl md:text-6xl font-semibold tracking-wide">
          Mmela Gabriel Dyantyi
        </h1>

        <h2 className="text-xl md:text-2xl mt-2 text-gray-400 italic">
        Software · DevOps · Cloud 
        </h2>

        <p className="max-w-2xl mt-6 text-gray-300 leading-relaxed">
          “I build quietly. In the hours when the world sleeps,<br />
          I shape things that will outlive me.<br />
          My work exists at the intersection of code, machines,<br />
          intelligence, and memory. I create systems that push<br />
          humanity forward — even if my name is forgotten.”
        </p>

        <div
          className="mt-10 animate-bounce text-gray-500 cursor-pointer text-4xl"
          onClick={handleArrowClick}
          title="Go to Projects"
        >
          ▼
        </div>
      </section>
    </div>
  );
}
