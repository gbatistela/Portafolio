import React from "react";
import Project from "./Project";

const ProjectList: React.FC = () => {
  const projects = [
    {
      title: "Proyecto new addres argentina",
      description:
        "Actualizamos a un cliente tablas mediante un pipeline con azure",
      url: "https://github.com/gbatistela/Proyecto_Azure-New-Address.git",
    },
    {
      title: "Telecomunicaciones Enacom",
      description:
        "Analice datos y saque conclusiones a traves de de un dashboards y Kpis",
      url: "https://github.com/gbatistela/PI_DA_Telecomunicaciones.git",
    },
    {
      title: "Steam Games",
      description:
        "Una aplicacion done se le puede hacer consultas y se puede hacer una recomendacion de juegos similares a traves de un modelo de machine learning",
      url: "https://github.com/gbatistela/ML_OPS_Steam_Games.git",
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
