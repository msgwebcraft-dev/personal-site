import React from "react";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center p-8 text-center space-y-6">
      <h1 className="text-5xl font-bold">Mmela Gabriel Dyantyi</h1>

      {/* Roles */}
      <p className="text-2xl font-semibold">
        Software Developer · DevOps Engineer · Cloud & AI Enthusiast
      </p>

      {/* Short bio */}
      <p className="text-lg max-w-2xl">
        I build clear, reliable systems across the stack. I like cloud,
        AI, Fullstack and modern engineering to solve real digital problems.
      </p>
    </div>
  );
}
