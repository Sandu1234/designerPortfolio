import React from 'react';
import './Services.css';

const services = [
  {
    title: 'Digital First Branding',
    description:
      "I build digital-first brand identities that go beyond just visuals strategically aligning every touchpoint with your brand's purpose. I help brands show up consistently and meaningfully across digital platforms, ensuring they’re instantly recognizable and built for scalability in today’s fast-paced environment.",
  },
  {
    title: 'Web Design & Development',
    description:
      "I design and develop fast, responsive, and visually compelling websites that combine strong UX foundations with frontend best practices. Every website is tailored to your goals optimized for performance, and engagement, whether you're launching a product, telling your story, or scaling an online presence.",
  },
  {
    title: 'UI/UX Design',
    description:
      "I create user-centered interfaces that are both functional and delightful. Leveraging design thinking, user research, and usability testing, I craft intuitive web and mobile experiences—from low-fidelity wireframes to high-fidelity prototypes that drive engagement, reduce friction, and align with your business outcomes.",
  },
  {
    title: 'Creative Direction',
    description:
      "I offer end-to-end creative direction, bringing cohesion and clarity to brand and product design efforts. Whether shaping a campaign narrative or leading cross-functional design execution, I ensure your visual identity and messaging are emotionally resonant, strategically sound, and creatively differentiated.",
  },
];

const Services = () => (
  <section id="services">
    <div className="services-header">
      <h2 className="services-title">Services</h2>
      {/* <a href="#more" className="see-more">See more →</a> */}
    </div>

    <div className="services-grid">
      {services.map((service, index) => (
        <div className="service-card" key={index}>
          <h3>{service.title}</h3>
          <p>{service.description}</p>
        </div>
      ))}
    </div>
  </section>
);

export default Services;
