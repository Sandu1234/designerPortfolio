// src/components/Work.jsx
import React, { useRef, useEffect, useState } from 'react';
import './Work.css';
import { Link } from 'react-router-dom';
import img8 from '../assets/8.png';
import img2 from '../assets/2.png';
import img3 from '../assets/3.png';
import img10 from '../assets/10.png';
import img11 from '../assets/11.png';
import img12 from '../assets/12.png';

const projects = [
  {
    title: 'Smart Payment Tracker – Dark Mode UI Design',
    date: 'May 2023',
    tags: ['Innovation', 'Experience Design'],
    image: img2,
    span: 'tall',
    link: 'https://www.behance.net/gallery/223515887/Smart-Payment-Tracker-Dark-Mode-UI-Design',

  },
  {
    title: 'Elephant House Superheroes Competition Official Website',
    date: 'Jan 2025',
    tags: ['Branding', 'Web Design'],
    image: img8,
    span: 'wide',
    link: 'https://ehsuperheroes.lk',

  },
  {
    title: 'Fit Sixes Cricket Fiesta Mobile App',
    date: 'Jun 2023',
    tags: ['Competition', 'Motion'],
    image: img3,
    span: '',
    link: 'https://www.behance.net/gallery/215438625/FIT-SIXES-2023',

  },
  {
    title: 'Skin Care Product Website',
    date: 'Mar 2023',
    tags: ['Branding'],
    image: img10,
    span: '',
    link: 'https://www.behance.net/gallery/217519019/Skin-Care-Product-Website',

  },
  {
    title: 'Minimalist Productivity Dashboard',
    date: 'Jan 2025',
    tags: ['Product', 'Dashboard'],
    image: img11,
    span: '',
    link: 'https://www.behance.net/gallery/223512273/MindBalance-A-Minimalist-Productivity-Dashboard',

  },
  {
    title: 'Online Shopping Site',
    date: 'Mar 2023',
    tags: ['E-Commerce'],
    image: img12,
    span: '',
    link: 'https://www.behance.net/gallery/221622097/Online-Shopping-Site',

  },
];

const Work = () => {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.2,
        rootMargin: '0px 0px -100px 0px',
      }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="work"
      ref={sectionRef}
      className={visible ? 'animate' : ''}
    >
      <div className="work-header">
        <h2 className="work-title">Work</h2>
        <Link to="/fullwork" className="see-more">
          See more →
        </Link>
      </div>

      <div className="bento-grid">
  {projects.map((project, index) => (
    <a
      href={project.link}
      target="_blank"
      rel="noopener noreferrer"
      key={index}
      className={`bento-card ${project.span}`}
    >
      <img src={project.image} alt={project.title} />
      <div className="tags">
        <span>{project.date}</span>
        {project.tags.map((tag, i) => (
          <span key={i}>{tag}</span>
        ))}
      </div>
      <h3>{project.title}</h3>
    </a>
  ))}
</div>
    </section>
  );
};

export default Work;
