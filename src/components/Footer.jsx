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
          <a href="#contact">Contact</a>
          <a href="#blog">Blog</a>
        </div>
        <div className="footer-col">
          <a href="https://instagram.com" target="_blank" rel="noreferrer">Instagram</a>
          <a href="https://twitter.com" target="_blank" rel="noreferrer">Twitter</a>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer">LinkedIn</a>
          <a href="https://behance.net" target="_blank" rel="noreferrer">Behance</a>
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
