import React, { useEffect, useRef } from 'react';
import './Footer.css';

const Footer = () => {
  const titleRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          titleRef.current.classList.add('animate-in');
        }
      },
      { threshold: 0.5 }
    );

    if (titleRef.current) {
      observer.observe(titleRef.current);
    }

    return () => {
      if (titleRef.current) {
        observer.unobserve(titleRef.current);
      }
    };
  }, []);

  return (
    <footer className="footer">
      <div className="footer-top">
        <h1 ref={titleRef} className="footer-title">
          {"Let's talk".split('').map((char, i) => (
            <span
              key={i}
              className="footer-letter"
              style={{ animationDelay: `${i * 0.05}s` }}
            >
              {char === ' ' ? '\u00A0' : char}
            </span>
          ))}
        </h1>

        <div className="footer-form">
          <p>Leave an email and I’ll get back to you</p>
          <form>
            <input type="email" placeholder="Email" />
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>

      <div className="footer-links">
        <div className="footer-col">
          <a href="#work">Work</a>
          <a href="#about">About</a>
          <a href="https://mail.google.com/mail/?view=cm&to=sandunayanathara99@gmail.com">Contact</a>
          <a href="https://medium.com/@sandunayanathara99">Blog</a>
        </div>
        <div className="footer-col">
          <a href="https://www.instagram.com/orbitech_official?igsh=MWUzNmMwcDJxODFlbw==&utm_source=ig_contact_invite
" target="_blank" rel="noreferrer">Instagram</a>
          <a href="https://github.com/Sandu1234" target="_blank" rel="noreferrer">Github</a>
          <a href="https://www.linkedin.com/in/sandamini-nayanathara/" target="_blank" rel="noreferrer">LinkedIn</a>
          <a href="https://www.behance.net/sandaminayanat" target="_blank" rel="noreferrer">Behance</a>
        </div>
      </div>

      <div className="footer-bottom">
        <span>Cookies and privacy</span>
        <span>&copy; {new Date().getFullYear()} Sandamini Nayanathara. All Rights Reserved</span>
      </div>
    </footer>
  );
};

export default Footer;
