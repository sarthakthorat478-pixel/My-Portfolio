import React from "react";

function Projects() {
  const projectList = [
    {
      title: "E-Commerce Website",
      description: "A fully responsive e-commerce website built using React.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcI3liz4WZWQwpYyENgHz8dvit8xFylliTmg&s"
    },
    {
      title: "Weather App",
      description: "Weather forecasting app using API integration.",
      image: "https://t3.ftcdn.net/jpg/04/91/54/18/360_F_491541875_c0vIhFwHnRZvmRfJELvJxtSQbRDOwbGC.jpg"
    },
    {
      title: "Movie Search App",
      description: "Search movies and view details using React.",
      image: "https://screenshots.codesandbox.io/mocenb/1.png"
    }
  ];

  return (
    <>
      <h2>Projects</h2>
      <div style={{ display: "flex", justifyContent: "center", gap: "20px", flexWrap: "wrap" }}>
        {projectList.map((project, index) => (
          <div key={index} style={{ width: "300px", padding: "15px", background: "#fff", borderRadius: "8px" }}>
            <img 
              src={project.image} 
              alt={project.title} 
              loading="lazy"
              style={{ width: "100%", borderRadius: "5px" }}
            />
            <h3>{project.title}</h3>
            <p>{project.description}</p>
          </div>
        ))}
      </div>
    </>
  );
}

export default Projects;
