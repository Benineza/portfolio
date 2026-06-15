import React from 'react';

const Contact = () => {
  return (
    <section id="contact">
      <div className="section-title">
        <h2>Get In Touch</h2>
      </div>
      <div className="contact-content">
        <div className="contact-info">
          <h3>Let's work together</h3>
          <p>I'm always interested in new opportunities and collaborations. Feel free to reach out if you have a project in mind.</p>

          <div className="contact-item">
            <i className="fas fa-envelope"></i>
            <div>
              <h4>Email</h4>
              <p>benineza.moise@gmail.com</p>
            </div>
          </div>

          <div className="contact-item">
            <i className="fas fa-phone"></i>
            <div>
              <h4>Phone</h4>
              <p>0780539886</p>
            </div>
          </div>

          <div className="contact-item">
            <i className="fas fa-map-marker-alt"></i>
            <div>
              <h4>Location</h4>
              <p>Kigali, Rwanda</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;