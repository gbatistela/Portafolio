import React from "react";
import Project from "./Project";

const ProjectList: React.FC = () => {
  const projects = [
    {
      title: "Project 1",
      description: "Description for project 1",
      url: "https://github.com/yourusername/project1",
    },
    {
      title: "Project 2",
      description: "Description for project 2",
      url: "https://github.com/yourusername/project2",
    },
  ];

  return (
    <section id="projects">
      <h2>My Projects</h2>
      {projects.map((project, index) => (
        <Project
          key={index}
          title={project.title}
          description={project.description}
          url={project.url}
        />
      ))}
    </section>
  );
};

export default ProjectList;
