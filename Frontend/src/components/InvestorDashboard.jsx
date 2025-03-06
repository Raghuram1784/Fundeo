import React, { useState } from 'react';
import './InvestorDashboard.css';

const InvestorDashboard = () => {
  // Dummy data - will be replaced with real data later
  const portfolio = [
    {
      id: 1,
      startupName: "EcoTech Solutions",
      investmentAmount: "$50,000",
      equity: "5%",
      status: "Active",
      returnRate: "+15%",
      lastUpdate: "2024-03-20"
    },
    {
      id: 2,
      startupName: "HealthAI",
      investmentAmount: "$75,000",
      equity: "7.5%",
      status: "Active",
      returnRate: "+8%",
      lastUpdate: "2024-03-18"
    }
  ];

  const opportunities = [
    {
      id: 1,
      name: "SmartFarm",
      sector: "Agriculture",
      seeking: "$300,000",
      equity: "10%",
      stage: "Seed",
      deadline: "2024-04-15",
      progress: 65
    },
    {
      id: 2,
      name: "CyberGuard",
      sector: "Cybersecurity",
      seeking: "$500,000",
      equity: "15%",
      stage: "Series A",
      deadline: "2024-04-20",
      progress: 40
    },
    {
      id: 3,
      name: "EdTech Pro",
      sector: "Education",
      seeking: "$250,000",
      equity: "8%",
      stage: "Pre-seed",
      deadline: "2024-04-10",
      progress: 85
    }
  ];

  const meetings = [
    {
      id: 1,
      with: "EcoTech Solutions",
      type: "Pitch Meeting",
      date: "2024-03-25",
      time: "14:00",
      status: "Scheduled"
    },
    {
      id: 2,
      with: "SmartFarm",
      type: "Due Diligence",
      date: "2024-03-27",
      time: "15:30",
      status: "Pending"
    }
  ];

  const [activeTab, setActiveTab] = useState('portfolio');

  return (
    <div className="investor-dashboard">
      <div className="dashboard-header">
        <h1>Investor Dashboard</h1>
        <div className="quick-stats">
          <div className="stat-box">
            <h3>Total Invested</h3>
            <p>$125,000</p>
          </div>
          <div className="stat-box">
            <h3>Active Investments</h3>
            <p>{portfolio.length}</p>
          </div>
          <div className="stat-box">
            <h3>Avg. Return Rate</h3>
            <p>+11.5%</p>
          </div>
        </div>
      </div>

      <div className="dashboard-tabs">
        <button 
          className={`tab-button ${activeTab === 'portfolio' ? 'active' : ''}`}
          onClick={() => setActiveTab('portfolio')}
        >
          Portfolio
        </button>
        <button 
          className={`tab-button ${activeTab === 'opportunities' ? 'active' : ''}`}
          onClick={() => setActiveTab('opportunities')}
        >
          Investment Opportunities
        </button>
        <button 
          className={`tab-button ${activeTab === 'meetings' ? 'active' : ''}`}
          onClick={() => setActiveTab('meetings')}
        >
          Scheduled Meetings
        </button>
      </div>

      <div className="dashboard-content">
        {activeTab === 'portfolio' && (
          <div className="portfolio-section">
            <h2>Your Investment Portfolio</h2>
            <div className="portfolio-grid">
              {portfolio.map(investment => (
                <div key={investment.id} className="portfolio-card">
                  <div className="card-header">
                    <h3>{investment.startupName}</h3>
                    <span className={`status-badge ${investment.status.toLowerCase()}`}>
                      {investment.status}
                    </span>
                  </div>
                  <div className="investment-details">
                    <div className="detail-item">
                      <span>Investment</span>
                      <p>{investment.investmentAmount}</p>
                    </div>
                    <div className="detail-item">
                      <span>Equity</span>
                      <p>{investment.equity}</p>
                    </div>
                    <div className="detail-item">
                      <span>Return Rate</span>
                      <p className="return-rate">{investment.returnRate}</p>
                    </div>
                  </div>
                  <div className="card-actions">
                    <button className="view-details-btn">View Details</button>
                    <button className="contact-startup-btn">Contact Startup</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'opportunities' && (
          <div className="opportunities-section">
            <h2>Investment Opportunities</h2>
            <div className="opportunities-grid">
              {opportunities.map(opportunity => (
                <div key={opportunity.id} className="opportunity-card">
                  <h3>{opportunity.name}</h3>
                  <div className="sector-badge">{opportunity.sector}</div>
                  <div className="opportunity-details">
                    <div className="detail-row">
                      <span>Seeking:</span>
                      <p>{opportunity.seeking}</p>
                    </div>
                    <div className="detail-row">
                      <span>Equity Offered:</span>
                      <p>{opportunity.equity}</p>
                    </div>
                    <div className="detail-row">
                      <span>Stage:</span>
                      <p>{opportunity.stage}</p>
                    </div>
                    <div className="progress-bar">
                      <div 
                        className="progress" 
                        style={{ width: `${opportunity.progress}%` }}
                      ></div>
                    </div>
                    <p className="deadline">Deadline: {opportunity.deadline}</p>
                  </div>
                  <div className="card-actions">
                    <button className="invest-btn">Invest Now</button>
                    <button className="schedule-call-btn">Schedule Call</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'meetings' && (
          <div className="meetings-section">
            <h2>Your Scheduled Meetings</h2>
            <div className="meetings-list">
              {meetings.map(meeting => (
                <div key={meeting.id} className="meeting-card">
                  <div className="meeting-info">
                    <h3>{meeting.with}</h3>
                    <p className="meeting-type">{meeting.type}</p>
                    <p className="meeting-datetime">
                      {meeting.date} at {meeting.time}
                    </p>
                  </div>
                  <div className="meeting-status">
                    <span className={`status-badge ${meeting.status.toLowerCase()}`}>
                      {meeting.status}
                    </span>
                  </div>
                  <div className="meeting-actions">
                    <button className="join-btn">Join Meeting</button>
                    <button className="reschedule-btn">Reschedule</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default InvestorDashboard; 