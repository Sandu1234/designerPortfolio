import React from 'react';
import './AchievementsScroll.css';

const achievements = [
  {
    title: 'Certified of Completion of UI/UX for Beginners',
    issuer: 'Great Learning',
    year: '2024',
    link: '#',
  },
  {
    title: 'Certified of Completion of Learning Angular',
    issuer: 'LinkedIn Learning',
    year: '2024',
    link: '#',
  },
  {
    title: 'Certification Of Completion What Is Generative AI',
    issuer: 'LinkedIn Learning',
    year: '2024',
    link: '#',
  },
  {
    title: 'Certified in Core JAVA Design Patterns',
    issuer: 'Coursera',
    year: '2024',
    link: '#',
  },
  {
    title: 'Certified in C Programming Language',
    issuer: 'Sololearn',
    year: '2021',
    link: '#',
  },
  {
    title: 'Certified in HTML Programming Language',
    issuer: 'Sololearn',
    year: '2021',
    link: '#',
  },
  {
    title: 'Certified in CSS Programming Language',
    issuer: 'Sololearn',
    year: '2021',
    link: '#',
  },
  {
    title: 'Certified in JavaScript',
    issuer: 'Sololearn',
    year: '2021',
    link: '#',
  },
  {
    title: 'Certified in PHP',
    issuer: 'Sololearn',
    year: '2021',
    link: '#',
  },
  {
    title: 'Certified in SQL',
    issuer: 'Sololearn',
    year: '2021',
    link: '#',
  },
  {
    title: 'Certified in Responsive Web',
    issuer: 'Sololearn',
    year: '2021',
    link: '#',
  },
  {
    title: 'Certified in Python',
    issuer: 'Sololearn',
    year: '2021',
    link: '#',
  },
];

const Achievements = () => (
  <section id="achievements">
    <div className="achievements-header">
      <h2 className="achievements-title">Achievements &amp; Certificates</h2>
    </div>
    <div className="achievements-grid">
      {achievements.map((cert, index) => (
        <a
          href={cert.link}
          className="achievement-card"
          key={index}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h3>{cert.title}</h3>
          <p>Awarded by {cert.issuer}</p>
          <p className="year">{cert.year}</p>
        </a>
      ))}
    </div>
  </section>
);

export default Achievements;
