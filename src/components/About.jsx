import React from 'react';
import './About.css';
import portrait from '../assets/me.jpg';

const About = () => (
  <section className="about">
    <div className="about-image">
      <img src={portrait} alt="Portrait" />
    </div>
    <div className="about-content">
      <h2>Hello there,<br />I'm Sandamini</h2>
      <p>
      I design bespoke brand identities and websites that fit each company like a well-tailored suit, ensuring your brand stands out digitally and physically. Specialising in brand identity design, I’m also a web designer and Webflow developer with a keen eye for typography and motion design.</p>

      <p>
      Outside work, I enjoy photography, travelling, and staying active through running, resistance training, and playing volleyball.      </p>
    </div>
  </section>
);

export default About;
