import React from 'react';

const Hero = () => {
  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <h1>Hi, I'm <span>Moise Benineza</span><br />Creative Developer</h1>
        <p>Software Engineering student with skills in web development, IT support, HTML, CSS, JavaScript, and React. Passionate about building efficient, user-friendly digital solutions and expanding technical expertise through hands-on projects.</p>
        <button onClick={scrollToProjects} className="btn">View My Work</button>
      </div>
    </section>
  );
};

export default Hero;