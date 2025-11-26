import React from "react";
import PropTypes from "prop-types";

export default function ProjectCard({
  title,
  description,
  tools,
  liveLink,
  repoLink,
  imgSrc,
}) {
  return (
    <div className="border rounded-lg p-4 shadow-md">
      {imgSrc && (
        <img
          src={imgSrc}
          alt={title}
          className="mb-4 w-full object-cover rounded"
        />
      )}
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="mb-2">{description}</p>
      {tools && <p className="italic text-sm mb-2">Tools: {tools}</p>}
      <div className="flex space-x-4">
        {liveLink && (
          <a
            href={liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600"
          >
            Live
          </a>
        )}
        {repoLink && (
          <a
            href={repoLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600"
          >
            Code
          </a>
        )}
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
  tools: "",
  liveLink: "",
  repoLink: "",
  imgSrc: "",
};
