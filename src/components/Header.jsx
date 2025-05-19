/* Responsive Header Component */

// src/components/Header.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <header className="header">
      <div className="header-container">
        <Link to="/" className="logo">
          Sandamini Nayanathara
        </Link>

        {/* Hamburger for mobile */}
        <button
          className={`hamburger ${menuOpen ? 'open' : ''}`}
          onClick={() => setMenuOpen(prev => !prev)}
          aria-label="Toggle navigation"
        >
          <span />
          <span />
          <span />
        </button>

        <nav className={`nav-links-container ${menuOpen ? 'open' : ''}`}>  
          <ul className="nav-links">
            <li><a href="#work" onClick={() => setMenuOpen(false)}>Work</a></li>
            <li><Link to="#about" onClick={() => setMenuOpen(false)}>About</Link></li>
            <li><Link to="https://medium.com/@sandunayanathara99" onClick={() => setMenuOpen(false)}>Blog</Link></li>
          </ul>
          <div className="cta-button">
            <a href="https://mail.google.com/mail/?view=cm&to=sandunayanathara99@gmail.com" onClick={() => setMenuOpen(false)}>
              Let’s talk <span className="arrow">→</span>
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;