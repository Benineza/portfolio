import React from 'react';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'E-Commerce Website',
      description: 'A fully responsive e-commerce platform with shopping cart, payment integration, and user authentication.',
      liveDemo: '#',
      sourceCode: '#'
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'A productivity application for managing tasks with drag-and-drop functionality and team collaboration features.',
      liveDemo: '#',
      sourceCode: '#'
    },
    {
      id: 3,
      title: 'DSH Innovations',
      description: 'A fully responsive sports news platform featuring article live scores/news updates and SEO-friendly responsive design.',
      liveDemo: '#',
      sourceCode: '#'
    }
  ];

  return (
    <section id="projects">
      <div className="section-title">
        <h2>My Projects</h2>
      </div>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={project.id} className="project-card">
            <div className="project-img">Project {project.id}</div>
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