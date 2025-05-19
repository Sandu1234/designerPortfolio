import React from 'react';
import './AchievementsScroll.css';

const achievements = [
  {
    title: 'Certified of Completion of UI/UX for Beginners',
    issuer: 'Great Learning',
    year: '2024',
    link: 'https://drive.google.com/file/d/1-opyPekLc1ShN1sX7cx0bAXuLUCdNIGz/view',
  },
  {
    title: 'Certified of Completion of Learning Angular',
    issuer: 'LinkedIn Learning',
    year: '2024',
    link: 'https://drive.google.com/file/d/1JHRO23_SpmLgC785kLz1W7O_K-Cqlv6z/view',
  },
  {
    title: 'Certification Of Completion What Is Generative AI',
    issuer: 'LinkedIn Learning',
    year: '2024',
    link: 'https://drive.google.com/file/d/1fTQwKRdKcZ6OEJm3qYcelrZTzV08Q2-u/view',
  },
  {
    title: 'Certified in Core JAVA Design Patterns',
    issuer: 'Coursera',
    year: '2024',
    link: 'https://drive.google.com/file/d/1YTlDDe28q9lw_WTkgW-sOgu6LzPFRvJ4/view',
  },
  {
    title: 'Certified in C Programming Language',
    issuer: 'Sololearn',
    year: '2021',
    link: 'https://drive.google.com/file/d/1MAz9Qjg9ccqYS-gu05Kd15aCaRzX__a0/view',
  },
  {
    title: 'Certified in HTML Programming Language',
    issuer: 'Sololearn',
    year: '2021',
    link: 'https://drive.google.com/file/d/1wYemYoEFYBB8JEjEZ8fPjS9yChA-fojx/view',
  },
  {
    title: 'Certified in CSS Programming Language',
    issuer: 'Sololearn',
    year: '2021',
    link: 'https://drive.google.com/file/d/1fsx5W_pm-lETbIxHk-IRT7AHAEamu0Nz/view',
  },
  {
    title: 'Certified in JavaScript',
    issuer: 'Sololearn',
    year: '2021',
    link: 'https://drive.google.com/file/d/1grwl7jTtAHS6MSs-xGFFWuGpV8lLJO13/view',
  },
  {
    title: 'Certified in PHP',
    issuer: 'Sololearn',
    year: '2021',
    link: 'https://drive.google.com/file/d/1quAM7EwWZNY-ViiucGUutnSB0l_UjZBe/view',
  },
  {
    title: 'Certified in SQL',
    issuer: 'Sololearn',
    year: '2021',
    link: 'https://drive.google.com/file/d/1x0HA2EleelyTskMtm91F3hgLVYSH0c1M/view',
  },
  {
    title: 'Certified in Responsive Web',
    issuer: 'Sololearn',
    year: '2021',
    link: 'https://drive.google.com/file/d/1fB9qYW519p_GQ6y743ITL7siyZaMnw2g/view',
  },
  {
    title: 'Certified in Generative AI',
    issuer: 'LinkedIn Learning',
    year: '2024',
    link: 'https://drive.google.com/file/d/1ABLHDURhdIuNhTwuSmsqNWFtpR72esas/view',
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
