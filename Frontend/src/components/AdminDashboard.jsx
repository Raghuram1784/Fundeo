import React, { useState } from 'react';
import './AdminDashboard.css';

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState('overview');

  // Dummy data - replace with real data later
  const investors = [
    {
      id: 1,
      name: "John Smith",
      email: "john@example.com",
      totalInvested: "$150,000",
      activeInvestments: 3,
      joinDate: "2024-01-15",
      status: "Active"
    },
    {
      id: 2,
      name: "Sarah Johnson",
      email: "sarah@example.com",
      totalInvested: "$275,000",
      activeInvestments: 4,
      joinDate: "2024-02-01",
      status: "Active"
    }
  ];

  const startups = [
    {
      id: 1,
      name: "EcoTech Solutions",
      sector: "Green Energy",
      fundingGoal: "$500,000",
      raised: "$325,000",
      investors: 12,
      status: "Active"
    },
    {
      id: 2,
      name: "HealthAI",
      sector: "Healthcare",
      fundingGoal: "$750,000",
      raised: "$600,000",
      investors: 8,
      status: "Active"
    }
  ];

  const recentTransactions = [
    {
      id: 1,
      investor: "John Smith",
      startup: "EcoTech Solutions",
      amount: "$50,000",
      date: "2024-03-15",
      status: "Completed"
    },
    {
      id: 2,
      investor: "Sarah Johnson",
      startup: "HealthAI",
      amount: "$75,000",
      date: "2024-03-14",
      status: "Pending"
    }
  ];

  const pendingApprovals = [
    {
      id: 1,
      type: "Investor Registration",
      name: "Michael Brown",
      date: "2024-03-16",
      status: "Pending"
    },
    {
      id: 2,
      type: "Startup Application",
      name: "TechStart Inc.",
      date: "2024-03-15",
      status: "Pending"
    }
  ];

  return (
    <div className="admin-dashboard">
      <div className="dashboard-header">
        <h1>Admin Dashboard</h1>
        <div className="quick-stats">
          <div className="stat-box">
            <h3>Total Investors</h3>
            <p>{investors.length}</p>
          </div>
          <div className="stat-box">
            <h3>Active Startups</h3>
            <p>{startups.length}</p>
          </div>
          <div className="stat-box">
            <h3>Pending Approvals</h3>
            <p>{pendingApprovals.length}</p>
          </div>
          <div className="stat-box">
            <h3>Total Investments</h3>
            <p>$925,000</p>
          </div>
        </div>
      </div>

      <div className="dashboard-tabs">
        <button 
          className={`tab-button ${activeTab === 'overview' ? 'active' : ''}`}
          onClick={() => setActiveTab('overview')}
        >
          Overview
        </button>
        <button 
          className={`tab-button ${activeTab === 'investors' ? 'active' : ''}`}
          onClick={() => setActiveTab('investors')}
        >
          Investors Management
        </button>
        <button 
          className={`tab-button ${activeTab === 'startups' ? 'active' : ''}`}
          onClick={() => setActiveTab('startups')}
        >
          Startups
        </button>
        <button 
          className={`tab-button ${activeTab === 'approvals' ? 'active' : ''}`}
          onClick={() => setActiveTab('approvals')}
        >
          Pending Approvals
        </button>
      </div>

      <div className="dashboard-content">
        {activeTab === 'overview' && (
          <div className="overview-section">
            <div className="section-grid">
              <div className="section-card">
                <h2>Recent Transactions</h2>
                <div className="transactions-list">
                  {recentTransactions.map(transaction => (
                    <div key={transaction.id} className="transaction-item">
                      <div className="transaction-info">
                        <h4>{transaction.investor} → {transaction.startup}</h4>
                        <p>{transaction.amount}</p>
                      </div>
                      <div className="transaction-meta">
                        <span className={`status-badge ${transaction.status.toLowerCase()}`}>
                          {transaction.status}
                        </span>
                        <p className="date">{transaction.date}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="section-card">
                <h2>Latest Approvals</h2>
                <div className="approvals-list">
                  {pendingApprovals.map(approval => (
                    <div key={approval.id} className="approval-item">
                      <div className="approval-info">
                        <h4>{approval.name}</h4>
                        <p>{approval.type}</p>
                      </div>
                      <div className="approval-actions">
                        <button className="approve-btn">Approve</button>
                        <button className="reject-btn">Reject</button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'investors' && (
          <div className="investors-section">
            <div className="section-header">
              <h2>Investors Management</h2>
              <div className="header-actions">
                <input 
                  type="text" 
                  placeholder="Search investors..." 
                  className="search-input"
                />
                <button className="add-btn">Add New Investor</button>
              </div>
            </div>

            <div className="investors-table">
              <table>
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Total Invested</th>
                    <th>Active Investments</th>
                    <th>Join Date</th>
                    <th>Status</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {investors.map(investor => (
                    <tr key={investor.id}>
                      <td>{investor.name}</td>
                      <td>{investor.email}</td>
                      <td>{investor.totalInvested}</td>
                      <td>{investor.activeInvestments}</td>
                      <td>{investor.joinDate}</td>
                      <td>
                        <span className={`status-badge ${investor.status.toLowerCase()}`}>
                          {investor.status}
                        </span>
                      </td>
                      <td className="action-buttons">
                        <button className="view-btn">View Details</button>
                        <button className="edit-btn">Edit</button>
                        <button className="suspend-btn">Suspend</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="investor-details-section">
              <h3>Investment Analytics</h3>
              <div className="analytics-grid">
                <div className="analytics-card">
                  <h4>Investment Distribution</h4>
                  {/* Add chart/graph component here */}
                  <div className="placeholder-chart">Chart Placeholder</div>
                </div>
                <div className="analytics-card">
                  <h4>Investment Growth</h4>
                  {/* Add chart/graph component here */}
                  <div className="placeholder-chart">Chart Placeholder</div>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'startups' && (
          <div className="startups-section">
            <div className="section-header">
              <h2>Startups Management</h2>
              <div className="header-actions">
                <input 
                  type="text" 
                  placeholder="Search startups..." 
                  className="search-input"
                />
                <button className="add-btn">Add New Startup</button>
              </div>
            </div>

            <div className="startups-grid">
              {startups.map(startup => (
                <div key={startup.id} className="startup-card">
                  <div className="startup-header">
                    <h3>{startup.name}</h3>
                    <span className="sector-badge">{startup.sector}</span>
                  </div>
                  <div className="startup-details">
                    <div className="detail-row">
                      <span>Funding Goal:</span>
                      <p>{startup.fundingGoal}</p>
                    </div>
                    <div className="detail-row">
                      <span>Raised:</span>
                      <p>{startup.raised}</p>
                    </div>
                    <div className="detail-row">
                      <span>Investors:</span>
                      <p>{startup.investors}</p>
                    </div>
                    <div className="progress-bar">
                      <div 
                        className="progress" 
                        style={{ 
                          width: `${(parseInt(startup.raised.replace(/\$|,/g, '')) / 
                          parseInt(startup.fundingGoal.replace(/\$|,/g, ''))) * 100}%` 
                        }}
                      ></div>
                    </div>
                  </div>
                  <div className="startup-actions">
                    <button className="view-btn">View Details</button>
                    <button className="edit-btn">Edit</button>
                    <button className="manage-btn">Manage Funding</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'approvals' && (
          <div className="approvals-section">
            <h2>Pending Approvals</h2>
            <div className="approvals-grid">
              {pendingApprovals.map(approval => (
                <div key={approval.id} className="approval-card">
                  <div className="approval-header">
                    <h3>{approval.name}</h3>
                    <span className="type-badge">{approval.type}</span>
                  </div>
                  <div className="approval-details">
                    <p>Submitted: {approval.date}</p>
                    <div className="approval-actions">
                      <button className="approve-btn">Approve</button>
                      <button className="reject-btn">Reject</button>
                      <button className="view-details-btn">View Details</button>
                    </div>
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

export default AdminDashboard; 