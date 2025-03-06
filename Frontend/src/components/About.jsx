import React from 'react';
import './About.css';

function About() {
  const teamMembers = [
    {
      name: "Sarah Johnson",
      role: "CEO & Founder",
      image: "https://placehold.co/200x200",
      description: "Former investment banker with a passion for democratizing startup funding"
    },
    {
      name: "David Chen",
      role: "CTO",
      image: "https://placehold.co/200x200",
      description: "Tech veteran with 15 years experience in fintech and blockchain"
    },
    {
      name: "Maria Rodriguez",
      role: "Head of Operations",
      image: "https://placehold.co/200x200",
      description: "Operations expert specializing in startup scaling and community building"
    }
  ];

  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="hero-content">
          <h1>About Fundeo</h1>
          <p>Bridging the gap between innovative startups and community investors</p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="mission-section">
        <div className="section-container">
          <h2>Our Mission</h2>
          <div className="mission-content">
            <div className="mission-text">
              <p>
                At Fundeo, we believe that great ideas deserve the chance to become reality. 
                Our mission is to democratize startup funding by connecting visionary entrepreneurs 
                with passionate investors from around the world.
              </p>
              <p>
                We're building a community where innovation meets opportunity, 
                where startups can thrive with the support of people who believe in their vision.
              </p>
            </div>
            <div className="mission-stats">
              <div className="stat-card">
                <h3>500+</h3>
                <p>Successful Campaigns</p>
              </div>
              <div className="stat-card">
                <h3>$50M+</h3>
                <p>Total Raised</p>
              </div>
              <div className="stat-card">
                <h3>50K+</h3>
                <p>Active Investors</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="values-section">
        <div className="section-container">
          <h2>Our Values</h2>
          <div className="values-grid">
            <div className="value-card">
              <div className="value-icon">🤝</div>
              <h3>Community First</h3>
              <p>Building strong connections between startups and supporters</p>
            </div>
            <div className="value-card">
              <div className="value-icon">💡</div>
              <h3>Innovation</h3>
              <p>Embracing new ideas and creative solutions</p>
            </div>
            <div className="value-card">
              <div className="value-icon">🔒</div>
              <h3>Trust & Security</h3>
              <p>Ensuring safe and transparent transactions</p>
            </div>
            <div className="value-card">
              <div className="value-icon">🌍</div>
              <h3>Global Impact</h3>
              <p>Supporting startups that make a difference worldwide</p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="team-section">
        <div className="section-container">
          <h2>Meet Our Team</h2>
          <div className="team-grid">
            {teamMembers.map((member, index) => (
              <div key={index} className="team-card">
                <img src={member.image} alt={member.name} className="team-member-image" />
                <h3>{member.name}</h3>
                <h4>{member.role}</h4>
                <p>{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact-section">
        <div className="section-container">
          <h2>Get in Touch</h2>
          <div className="contact-content">
            <p>Have questions about Fundeo? We'd love to hear from you!</p>
            <button className="contact-button">Contact Us</button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About; 