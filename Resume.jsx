import React from "react";

function Resume() {
  return (
    <>
      <h2>Resume</h2>
      <p>You can download my resume below:</p>
      <a 
        href="/resume.pdf" 
        target="_blank" 
        rel="noopener noreferrer"
        style={{
          display: "inline-block",
          padding: "10px 20px",
          background: "#222",
          color: "white",
          textDecoration: "none",
          borderRadius: "5px",
          marginTop: "10px"
        }}
      >
        Download Resume
      </a>
    </>
  );
}

export default Resume;
