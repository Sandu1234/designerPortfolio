import React from 'react';
import './Work.css';
import { Link } from 'react-router-dom';
import img1 from '../assets/1.jpeg';

const projects = [
  {
    title: 'Arriving at the station of great literature',
    date: 'May 2023',
    tags: ['Branding', 'Experience Design'],
    image: img1,
    span: 'tall',
  },
  {
    title: 'Connecting the flavour of nature for promo',
    date: 'Apr 2023',
    tags: ['Branding', 'Web Design'],
    image: img1,
    span: 'wide',
  },
  {
    title: 'Minimalist Website Concept',
    date: 'Jun 2023',
    tags: ['Webflow', 'Motion'],
    image: img1,
    span: '',
  },
  {
    title: 'Typographic Identity',
    date: 'Mar 2023',
    tags: ['Branding'],
    image: img1,
    span: '',
  },
  {
    title: 'Minimalist Website Concept',
    date: 'Jun 2023',
    tags: ['Webflow', 'Motion'],
    image: img1,
    span: '',
  },
  {
    title: 'Typographic Identity',
    date: 'Mar 2023',
    tags: ['Branding'],
    image: img1,
    span: '',
  },
];

const Work = () => (
  <section id="work">
    <div className="work-header">
      <h2 className="work-title">Work</h2>
      <Link to="/fullwork" className="see-more">See more →</Link>
      </div>

    <div className="bento-grid">
      {projects.map((project, index) => (
        <div className={`bento-card ${project.span}`} key={index}>
          <img src={project.image} alt={project.title} />
          <div className="tags">
            <span>{project.date}</span>
            {project.tags.map((tag, i) => (
              <span key={i}>{tag}</span>
            ))}
          </div>
          <h3>{project.title}</h3>
        </div>
      ))}
    </div>
  </section>
);

export default Work;
