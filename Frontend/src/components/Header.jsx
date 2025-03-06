import React from 'react'
import './Header.css'

function Header() {
  return (
    <header className="app-header">
      <div className="header-container">
        <div className="logo-container">
          <img 
            src="/fundeo-logo.png" 
            alt="Fundeo Logo" 
            className="logo"
          />
        </div>

        <nav className="main-nav">
          <button className="nav-button">Home</button>
          <button className="nav-button">Campaigns</button>
          <button className="nav-button">About</button>
        </nav>

        <div className="auth-buttons">
          <button className="login-button">Login</button>
          <button className="signup-button">Sign Up</button>
        </div>
      </div>
    </header>
  )
}

export default Header