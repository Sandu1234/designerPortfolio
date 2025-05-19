import React from 'react';
import Header from './Header';          
import './Work.css';
import img1 from '../assets/1.png';
import img2 from '../assets/2.png';
import img3 from '../assets/3.png';
import img4 from '../assets/4.png';
import img5 from '../assets/5.png';
import img6 from '../assets/6.png';
import img7 from '../assets/7.png';
import img8 from '../assets/8.png';
import img9 from '../assets/9.png';
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
    title: 'Productivity Management AI tool',
    date: 'Apr 2023',
    tags: ['Branding', 'Innovation'],
    image: img1,
    span: 'wide',
    link: 'https://www.behance.net/gallery/223515887/Smart-Payment-Tracker-Dark-Mode-UI-Design',

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
    title: 'Space Theme Website',
    date: 'Mar 2023',
    tags: ['Branding'],
    image: img4,
    span: '',
    link: 'https://www.behance.net/gallery/215442407/Space-Theme-Website',

  },
  {
    title: 'Mood Based Nature Escape App',
    date: 'Jun 2023',
    tags: ['Camping', 'Motion'],
    image: img5,
    span: '',
    link: 'https://www.behance.net/gallery/223417467/Travel-In-Tents-A-Mood-Based-Nature-Escape-App',

  },
  {
    title: 'BreastGuard Medical Webapp',
    date: 'Mar 2024',
    tags: ['Medical'],
    image: img6,
    span: '',
    link: 'https://breastguard.netlify.app',

  },
  {
    title: 'Orbitech Global Official Website',
    date: 'Mar 2025',
    tags: ['Branding', 'Experience Design'],
    image: img7,
    span: 'tall',
    link: 'https://orbitechglobal.com',

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
    title: 'The Railway View Villa Official Website',
    date: 'Feb 2025',
    tags: ['Branding', 'Hotel'],
    image: img9,
    span: '',
    link: 'https://therailwayviewvilla.com',

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

const Work = () => (
  <>
    <Header />  {/* ✅ Add Header on top */}

    <section id="work">
      <div className="work-header">
        <h2 className="work-title">Work</h2>
        {/* <Link to="/fullwork" className="see-more">See more →</Link> ✅ use Link */}
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
  </>
);

export default Work;
