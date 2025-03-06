import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <div className="home">
      <section className="hero">
        <div className="hero-content">
          <h1>Welcome to Fundeo</h1>
          <p>Connecting innovative startups with visionary investors</p>
        </div>
      </section>

      <section className="features">
        <div className="feature-card">
          <h2>For Startups</h2>
          <p>Get the funding you need to bring your ideas to life</p>
        </div>
        <div className="feature-card">
          <h2>For Investors</h2>
          <p>Discover promising startups and investment opportunities</p>
        </div>
      </section>
    </div>
  );
};

export default Home; 