import React from "react";
import Project from "./Project";

const ProjectList: React.FC = () => {
  const projects = [
    {
      title: "App Movies",
      description:
        "Una aplicacion con FASTAPI donde se le puede hacer consultas sobre peliculas y tiene un modelo de machine learning de sistema de recomendacion donde le pasamos una pelicula y nos devuelve 5 peliculas similares",
      url: "https://app-movie-rrim.onrender.com/docs",
    },
    {
      title: "Proyecto new addres argentina",
      description:
        "Actualizamos a un cliente una base de datos de nuevos registros utilizando un pipeline con Azure data factoty, Databricks y Synapse Analitycs",
      url: "https://github.com/gbatistela/Proyecto_Azure-New-Address.git",
    },
    {
      title: "Telecomunicaciones Enacom",
      description:
        "Analice datos y conclusiones a traves de un dashboards y Kpis",
      url: "https://github.com/gbatistela/PI_DA_Telecomunicaciones.git",
    },
    {
      title: "Steam Games",
      description:
        "Una aplicacion donde se le puede hacer consultas y se puede hacer una recomendacion de juegos similares a traves de un modelo de machine learning",
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
