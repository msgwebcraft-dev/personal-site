import React from "react";

const Hero = () => {
  return (
    <section
      id="home"
      className="h-screen flex flex-col justify-center items-center text-center 
                 bg-gradient-to-r from-purple-700 via-pink-600 to-red-500 
                 text-white px-6"
    >
      <h2 className="text-3xl md:text-7xl font-extrabold mb-8 leading-tight">
        AI · Fullstack · Cloud
      </h2>
      <p className="text-xl md:text-2xl max-w-2xl mb-12 leading-relaxed">
        I build modern, scalable, and user‑focused web & mobile apps. 
        Let&apos;s turn your ideas into impactful digital products.
      </p>
      <a
        href="#projects"
        className="bg-yellow-400 hover:bg-yellow-300 text-gray-900 font-bold 
                   px-10 py-4 rounded-lg transition text-lg shadow-md"
      >
        Explore My Work
      </a>
    </section>
  );
};

export default Hero;
