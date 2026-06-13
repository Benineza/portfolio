import React from 'react';

const Footer = () => {
  return (
    <footer>
      <div className="social-links">
        <a href="https://github.com/Benineza" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-github"></i>
        </a>
        <a href="https://www.linkedin.com/in/benineza/" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-linkedin"></i>
        </a>
        <a href="https://twitter.com/1Benineza" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-twitter"></i>
        </a>
        <a href="https://wa.me/250780539886" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-whatsapp"></i>
        </a>
      </div>
      <p className="copyright">© 2025 Moise Benineza All Rights Reserved.</p>
    </footer>
  );
};

export default Footer;