import React, { Suspense, lazy } from "react";
import "./Portfolio.css";

// Lazy Loaded Components
const About = lazy(() => import("./sections/About"));
const Projects = lazy(() => import("./sections/Projects"));
const Skills = lazy(() => import("./sections/Skills"));
const Resume = lazy(() => import("./sections/Resume"));
const Contact = lazy(() => import("./sections/Contact"));

function Portfolio() {
  return (
    <div className="container">
      
      <header className="header">
        <h1>My Portfolio</h1>
        <nav>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#skills">Skills</a>
          <a href="#resume">Resume</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <Suspense fallback={<h2>Loading...</h2>}>
        <section id="about"><About /></section>
        <section id="projects"><Projects /></section>
        <section id="skills"><Skills /></section>
        <section id="resume"><Resume /></section>
        <section id="contact"><Contact /></section>
      </Suspense>

      <footer className="footer">
        <p>© 2026 My Portfolio | All Rights Reserved</p>
      </footer>

    </div>
  );
}

export default Portfolio;
