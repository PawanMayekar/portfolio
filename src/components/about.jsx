import React from 'react';

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <h2 className="section-heading">About Me</h2>
        <div className="about-content">
          <div className="about-grid">
            <div className="about-text">
              <p>
                Hello! I'm <span className="highlight">Pawan Mayekar</span>, a passionate Software Developer based in Navi Mumbai, 
                specializing in building robust and innovative applications.
              </p>
              <p>
                Currently working as an <span className="highlight">Executive Software Developer</span> at <span className="company">SD Corporation Holdings Pvt Ltd</span>, 
                I'm focused on full-stack development using Django and React Native. 
                With a strong foundation in Advanced Python Programming and Web Development,
                I bring a unique blend of technical expertise and creative problem-solving to every project.
              </p>
              <p>
                I have experience in developing web and mobile applications, including store management systems, 
                ticketing systems, and appointment scheduling platforms. I'm committed to writing 
                clean, efficient code and constantly learning new technologies to stay at the 
                forefront of software development.
              </p>
              <div className="contact-info">
                <p>
                  <i className="fas fa-map-marker-alt"></i>
                  Navi Mumbai, India
                </p>
                <p>
                  <i className="fas fa-phone-alt"></i>
                  <a href="tel:+919082010126">+91 9082010126</a>
                </p>
                <p>
                  <i className="fas fa-envelope"></i>
                  <a href="mailto:pawanmws11@gmail.com">pawanmws11@gmail.com</a>
                </p>
              </div>
              

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
