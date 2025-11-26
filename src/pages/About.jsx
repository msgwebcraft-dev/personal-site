import React from 'react';

export default function About() {
  return (
    <div className="container mx-auto p-8">
      <h2 className="text-3xl font-semibold mb-4">About Me</h2>
      <p>
        I’m a Web Developer Contractor and BSc student in Applied Mathematics & Computer Science.  
        I have experience in front-end (HTML, CSS, Ionic, Angular), back-end (.NET, APIs), cloud & security (Firebase, OAuth 2.0), and versatile soft skills.  
      </p>
      <p className="mt-4">
        I’m dedicated to building performant, maintainable and scalable web applications — and constantly learning new tools & technologies.
      </p>
      <h3 className="mt-6 font-semibold">Goals</h3>
      <ul className="list-disc list-inside">
        <li>Expand into AI/ML & cloud-native solutions</li>
        <li>Create African-structured banking systems & fintech apps</li>
        <li>Deliver high-quality software for clients via MSGWebWorks</li>
      </ul>
    </div>
  );
}
