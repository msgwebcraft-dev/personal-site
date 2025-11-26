import React from "react";

export default function Home() {
  return (
    <div className="container mx-auto p-8 text-center space-y-6">
      <h1 className="text-5xl font-bold mb-2">Mmela Gabriel Dyantyi</h1>

      {/* Roles in priority order */}
      <p className="text-2xl font-semibold mb-4">
        Software Developer | DevOps Engineer | Cloud & AI Enthusiast
      </p>

      {/* Short bio */}
      <p className="text-lg max-w-2xl mx-auto">
        I’m a software developer, DevOps tinkerer, and lifelong problem-solver.
        I build systems that just work, clear, maintainable, and reliable. 
        </p>
        <p>
        I move across the stack, tinker with new frameworks, and love automating
        the boring parts of software. I’m passionate about using cloud, AI, and
        modern engineering to solve real problems, especially in African fintech
        and productivity.
      </p>

      {/* Key skills / highlights */}
      <div className="mt-6 flex flex-wrap justify-center gap-4">
        <span className="px-4 py-2 bg-blue-100 rounded-full text-blue-800">
          JavaScript / TypeScript
        </span>
        <span className="px-4 py-2 bg-green-100 rounded-full text-green-800">
          .NET / C#
        </span>
        <span className="px-4 py-2 bg-purple-100 rounded-full text-purple-800">
          React / Angular
        </span>
        <span className="px-4 py-2 bg-yellow-100 rounded-full text-yellow-800">
          Firebase / Cloud
        </span>
        <span className="px-4 py-2 bg-red-100 rounded-full text-red-800">
          DevOps & CI/CD
        </span>
      </div>

      {/* Call-to-action */}
      <div className="mt-8 flex justify-center gap-6">
        <a
          href="/about"
          className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
        >
          About Me
        </a>
        <a
          href="/projects"
          className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
        >
          Projects
        </a>
      </div>
    </div>
  );
}
