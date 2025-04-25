import React from 'react';
import './Services.css';

const services = [
  {
    title: 'Digital First Branding',
    description:
      "I specialise in creating digital-first branding that captures your brand's essence and connects with your audience across all digital platforms. From logos to social media graphics, I design cohesive brand identities that resonate in the online world, ensuring your brand remains consistent, memorable, and impactful in the digital age.",
  },
  {
    title: 'Web Design & Development',
    description:
      "I design and develop user-friendly websites that blend aesthetics with functionality. Each site is tailored to meet your specific needs, with responsive layouts and intuitive navigation. My goal is to create an engaging online experience that not only looks great but also drives results and keeps users coming back.",
  },
  {
    title: 'UI/UX Design',
    description:
      "I craft intuitive and visually stunning interfaces, ensuring seamless user journeys across web and mobile platforms. From wireframes to final design, I align each touchpoint with user needs and business goals.",
  },
  {
    title: 'Creative Direction',
    description:
      "I provide strategic design leadership, guiding the visual storytelling of your brand. Whether it's a campaign, launch, or product, I ensure the creative output is aligned, effective, and inspiring.",
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
