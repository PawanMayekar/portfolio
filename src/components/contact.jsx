import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <div className="contact-content">
        <h2>Let's Connect</h2>
        <div className="contact-grid">
          <div className="contact-card">
            <h3>Professional Links</h3>
            <div className="contact-links">
              <a href="https://github.com/Pawanmatkar297" target="_blank" rel="noopener noreferrer" className="contact-link">
                <i className="fab fa-github"></i>
                <div className="contact-text">
                  <span>GitHub</span>
                  <p>Check out my code repositories and projects</p>
                </div>
              </a>
              <a href="https://www.linkedin.com/in/pawan-mayekar-1ba081242/" target="_blank" rel="noopener noreferrer" className="contact-link">
                <i className="fab fa-linkedin"></i>
                <div className="contact-text">
                  <span>LinkedIn</span>
                  <p>Connect with me professionally</p>
                </div>
              </a>
            </div>
          </div>
          
          <div className="contact-card">
            <h3>Contact Information</h3>
            <div className="contact-details">
              <div className="contact-item">
                <i className="fas fa-envelope"></i>
                <div className="contact-text">
                  <span>✉️ Email</span>
                  <a href="mailto:pawanmws11@gmail.com">pawanmws11@gmail.com</a>
                </div>
              </div>
              <div className="contact-item">
                <i className="fas fa-phone"></i>
                <div className="contact-text">
                  <span>📞 Phone</span>
                  <a href="tel:+919082010126">+91 9082010126</a>
                </div>
              </div>
              <div className="contact-item">
                <i className="fas fa-map-marker-alt"></i>
                <div className="contact-text">
                  <span>📍 Location</span>
                  <p>Navi Mumbai, India</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
