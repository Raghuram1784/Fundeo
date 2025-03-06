import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  const features = [
    {
      title: "Easy Fundraising",
      description: "Launch your campaign and reach potential investors worldwide",
      icon: "💡"
    },
    {
      title: "Secure Investment",
      description: "Safe and transparent investment process with real-time tracking",
      icon: "🔒"
    },
    {
      title: "Expert Support",
      description: "Get guidance from industry experts and successful entrepreneurs",
      icon: "👥"
    }
  ];

  const stats = [
    {
      value: "500+",
      label: "Startups Funded"
    },
    {
      value: "$50M+",
      label: "Total Investment"
    },
    {
      value: "10K+",
      label: "Active Investors"
    }
  ];

  return (
    <div className="home">
      <section className="hero">
        <div className="hero-content">
          <h1>Empowering Startups, Enabling Dreams</h1>
          <p>Connect with investors who believe in your vision</p>
          <div className="hero-buttons">
            <Link to="/campaigns" className="primary-button">
              Explore Campaigns
            </Link>
            <Link to="/signup" className="secondary-button">
              Start Your Journey
            </Link>
          </div>
        </div>
      </section>

      <section className="stats">
        {stats.map((stat, index) => (
          <div key={index} className="stat-item">
            <h2>{stat.value}</h2>
            <p>{stat.label}</p>
          </div>
        ))}
      </section>

      <section className="features">
        {features.map((feature, index) => (
          <div key={index} className="feature-card">
            <span className="feature-icon">{feature.icon}</span>
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </div>
        ))}
      </section>

      <section className="cta">
        <div className="cta-content">
          <h2>Ready to Transform Your Idea into Reality?</h2>
          <p>Join our community of innovators and investors</p>
          <div className="cta-buttons">
            <Link to="/signup" className="primary-button">
              Get Started
            </Link>
            <Link to="/about" className="text-button">
              Learn More
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;