import React from "react";

export default function Reflection() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-orange-500 via-pink-500 to-red-600 text-white flex flex-col items-center justify-center p-10 text-center space-y-6">
      <h2 className="text-4xl font-bold">Reflection</h2>

      <p className="text-lg max-w-2xl">
        This portfolio represents my journey as a developer.  
        <strong className="block mt-2">What I learned:</strong>  
        Working with modern frontend and backend tools, structuring full‑stack projects, and balancing studies with freelance work.
      </p>

      <p className="text-lg max-w-2xl">
        <strong className="block mt-2">Strengths:</strong>  
        Fast learner, eager to adopt DevOps practices, strong math & CS foundation, and a problem‑solving mindset.
      </p>

      <p className="text-lg max-w-2xl">
        <strong className="block mt-2">Future Goals:</strong>  
        Expand into AI/ML and cloud‑native solutions, advance DevOps automation, and grow MSGWebWorks into a reliable dev agency.
      </p>
    </div>
  );
}
