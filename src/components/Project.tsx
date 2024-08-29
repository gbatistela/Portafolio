import React from "react";

interface ProjectProps {
  title: string;
  description: string;
  url: string;
}

const Project: React.FC<ProjectProps> = ({ title, description, url }) => {
  return (
    <div className="project-card">
      <h3>{title}</h3>
      <p>{description}</p>
      <a href={url} target="_blank" rel="noopener noreferrer">
        View on GitHub
      </a>
    </div>
  );
};

export default Project;
