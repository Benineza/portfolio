import React from 'react';
import project3Image from '../assets/images/project-3.png';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'E-Commerce Website',
      description: 'A fully responsive e-commerce platform with shopping cart, payment integration, and user authentication.',
      liveDemo: '#',
      sourceCode: '#',
      image: null // No image for project 1
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'A productivity application for managing tasks with drag-and-drop functionality and team collaboration features.',
      liveDemo: '#',
      sourceCode: '#',
      image: null // No image for project 2
    },
    {
      id: 3,
      title: 'CMFI Rwanda - Church Website',
      description: 'A modern full-stack church website with React frontend, Spring Boot backend, PostgreSQL database, email integration, and dark mode. Features live social media feeds from Twitter/X and Instagram.',
      liveDemo: 'https://cmfirwanda.vercel.app/',
      sourceCode: 'https://github.com/Benineza/cmfi-website',
      image: project3Image
    }
  ];

  return (
    <section id="projects">
      <div className="section-title">
        <h2>My Projects</h2>
      </div>
      <div className="projects-grid">
        {projects.map((project) => (
          <div key={project.id} className="project-card">
            <div className="project-img">
              {project.image ? (
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="project-image"
                />
              ) : (
                `Project ${project.id}`
              )}
            </div>
            <div className="project-info">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="project-links">
                <a href={project.liveDemo} target="_blank" rel="noopener noreferrer">
                  <i className="fas fa-external-link-alt"></i> Live Demo
                </a>
                <a href={project.sourceCode} target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-github"></i> Source Code
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;