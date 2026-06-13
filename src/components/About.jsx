import React from 'react';

const About = () => {
  const skills = ['HTML/CSS', 'JavaScript', 'React', 'Tailwind CSS', 'Frontend Development', 'Backend Development', 'Responsive Design'];

  const techStack = [
    { name: 'HTML', icon: 'fab fa-html5', color: '#E34F26' },
    { name: 'CSS', icon: 'fab fa-css3-alt', color: '#1572B6' },
    { name: 'JavaScript', icon: 'fab fa-js', color: '#F7DF1E' },
    { name: 'React', icon: 'fab fa-react', color: '#61DAFB' },
    { name: 'PostgreSQL', icon: 'fas fa-database', color: '#336791' },
    { name: 'Postman', icon: 'fas fa-paper-plane', color: '#FF6C37' },
    { name: 'Git', icon: 'fab fa-git-alt', color: '#F05032' },
    { name: 'GitHub', icon: 'fab fa-github', color: '#181717' },
    { name: 'Java', icon: 'fab fa-java', color: '#007396' },
    { name: 'VS Code', icon: 'fas fa-code', color: '#007ACC' },
    { name: 'Vite', icon: 'fas fa-bolt', color: '#646CFF' }
  ];

  return (
    <section id="about">
      <div className="section-title">
        <h2>About Me</h2>
      </div>
      <div className="about-content">
        <div className="about-text">
          <h3>Discover my journey</h3>
          <p>I'm a passionate developer with over 5 years of experience creating digital solutions. My expertise spans front-end and back-end development, with a focus on creating seamless user experiences.</p>
          <p>I believe in the power of technology to transform ideas into reality and am constantly learning new technologies to stay at the forefront of the industry.</p>

          <div className="skills">
            {skills.map((skill, index) => (
              <div key={index} className="skill">{skill}</div>
            ))}
          </div>
        </div>
        
        <div className="about-techstack">
          <h3>My Tech Stack</h3>
          <div className="techstack-grid">
            {techStack.map((tech, index) => (
              <div key={index} className="tech-item">
                <i className={tech.icon} style={{ color: tech.color }}></i>
                <span>{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;