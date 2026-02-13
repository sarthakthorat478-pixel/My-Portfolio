import React from "react";

function Skills() {
  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Node.js",
    "Git & GitHub"
  ];

  return (
    <>
      <h2>Skills</h2>
      <ul style={{ listStyle: "none", padding: "0" }}>
        {skills.map((skill, index) => (
          <li 
            key={index} 
            style={{
              margin: "10px 0",
              padding: "10px",
              background: "#00bcd4",
              color: "white",
              width: "200px",
              marginLeft: "auto",
              marginRight: "auto",
              borderRadius: "5px"
            }}
          >
            {skill}
          </li>
        ))}
      </ul>
    </>
  );
}

export default Skills;
