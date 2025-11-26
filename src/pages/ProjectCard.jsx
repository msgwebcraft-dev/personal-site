import React from 'react';
import PropTypes from 'prop-types';

export default function ProjectCard({ title, description, tools, liveLink, repoLink, imgSrc }) {
  return (
    <div className="border-2 border-brandOrange rounded-xl p-6 shadow-playful dark:bg-gray-800 dark:text-white transition hover:scale-105 hover:shadow-lg">
      {imgSrc && <img src={imgSrc} alt={title} className="mb-4 w-full object-cover rounded-lg border-2 border-brandOrange" />}
      <h3 className="text-2xl font-bold mb-2">{title}</h3>
      <p className="mb-2">{description}</p>
      {tools && <p className="italic text-sm mb-2">Tools: {tools}</p>}
      <div className="flex space-x-4 mt-4">
        {liveLink && <a href={liveLink} target="_blank" rel="noopener noreferrer" className="text-brandOrange dark:text-white font-semibold">Live</a>}
        {repoLink && <a href={repoLink} target="_blank" rel="noopener noreferrer" className="text-brandOrange dark:text-white font-semibold">Code</a>}
      </div>
    </div>
  );
}

ProjectCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  tools: PropTypes.string,
  liveLink: PropTypes.string,
  repoLink: PropTypes.string,
  imgSrc: PropTypes.string,
};

ProjectCard.defaultProps = {
  tools: '',
  liveLink: '',
  repoLink: '',
  imgSrc: '',
};
