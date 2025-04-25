import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <header className="header">
    <div className="header-container">
    <Link to="/" className="logo">
  Sandamini Nayanathara
</Link>
      <div className="header-right">
        <nav>
          <ul className="nav-links">
            <li><a href="#work">Work</a></li>
            <li><a href="#Intro">About</a></li>
            <li><a href="#blog">Blog</a></li>
          </ul>
        </nav>
        <div className="cta-button">
          <a href="#contact">
            Let’s talk <span className="arrow">→</span>
          </a>
        </div>
      </div>
    </div>
  </header>
);

export default Header;
