import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';
import './Navigation.css';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navigation">
      <div className="nav-content">
        <Link to="/" className="nav-logo">
          <img src="/fundeo-logo.png" alt="Fundeo Logo" className="logo" />
        </Link>
        
        <div className={`hamburger ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>

        <div className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/campaigns" className="nav-link">Campaigns</Link>
          <Link to="/about" className="nav-link">About</Link>
          
          <div className="nav-auth">
            <ThemeToggle />
            <Link to="/login" className="nav-button login">Login</Link>
            <Link to="/signup" className="nav-button signup">Sign Up</Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation; 