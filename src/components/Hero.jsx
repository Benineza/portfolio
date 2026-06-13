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
        <p>I create beautiful and functional websites and applications. With a passion for clean code and innovative design, I bring ideas to life in the digital space.</p>
        <button onClick={scrollToProjects} className="btn">View My Work</button>
      </div>
    </section>
  );
};

export default Hero;