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
      I'm a results-driven UI/UX Designer and Software Engineer with 5+ years of experience creating seamless digital experiences across eCommerce, SaaS, and FinTech platforms. With a strong foundation in both design and development, I specialize in brand identity, responsive web design, and Webflow development—always with a sharp eye for typography, accessibility, and motion.
</p>
      <p>
      From leading UX strategies for AI-powered healthcare platforms like BreastGuard to building engaging websites for major brands like Elephant House, I thrive at the intersection of design, technology, and user research. I also enjoy mentoring aspiring designers and contributing to the design community through blogs and workshops.
      </p>
      <p>
Beyond work, I’m passionate about photography, traveling, running, resistance training, and volleyball.
</p>
    </div>
  </section>
);

export default About;
