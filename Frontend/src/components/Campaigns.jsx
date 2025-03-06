import React, { useState } from 'react';
import './Campaigns.css';

const Campaigns = () => {
  const [showAddForm, setShowAddForm] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  // Dummy data - replace with real data later
  const [campaigns, setCampaigns] = useState([
    {
      id: 1,
      name: "EcoTech Solutions",
      category: "Clean Tech",
      description: "Revolutionary sustainable energy storage solution for residential homes",
      fundingGoal: "$500,000",
      raised: "$325,000",
      deadline: "2024-05-15",
      image: "https://placehold.co/600x400",
      progress: 65
    },
    {
      id: 2,
      name: "HealthAI Assistant",
      category: "Healthcare",
      description: "AI-powered personal health monitoring and advisory system",
      fundingGoal: "$750,000",
      raised: "$600,000",
      deadline: "2024-06-01",
      image: "https://placehold.co/600x400",
      progress: 80
    },
    {
      id: 3,
      name: "Smart Urban Farming",
      category: "AgriTech",
      description: "Automated vertical farming solution for urban environments",
      fundingGoal: "$300,000",
      raised: "$150,000",
      deadline: "2024-04-30",
      image: "https://placehold.co/600x400",
      progress: 50
    }
  ]);

  const [newCampaign, setNewCampaign] = useState({
    name: '',
    category: 'Tech',
    description: '',
    fundingGoal: '',
    deadline: '',
    image: ''
  });

  const categories = ['All', 'Tech', 'Healthcare', 'Green', 'Finance', 'Education', 'AgriTech', 'Clean Tech'];

  const handleAddCampaign = (e) => {
    e.preventDefault();
    const campaign = {
      id: campaigns.length + 1,
      ...newCampaign,
      raised: "$0",
      progress: 0
    };
    setCampaigns([...campaigns, campaign]);
    setShowAddForm(false);
    setNewCampaign({
      name: '',
      category: 'Tech',
      description: '',
      fundingGoal: '',
      deadline: '',
      image: ''
    });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewCampaign({
      ...newCampaign,
      [name]: value
    });
  };

  const filteredCampaigns = campaigns.filter(campaign => {
    const matchesSearch = campaign.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         campaign.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || campaign.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="campaigns-page">
      <div className="campaigns-hero">
        <h1>Discover Innovative Startups</h1>
        <p>Support groundbreaking ideas and be part of the next big thing</p>
      </div>

      <div className="campaigns-controls">
        <div className="search-bar">
          <input
            type="text"
            placeholder="Search campaigns..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <div className="category-filters">
          {categories.map(category => (
            <button
              key={category}
              className={`category-button ${selectedCategory === category ? 'active' : ''}`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        {!showAddForm && (
          <button className="add-campaign-btn" onClick={() => setShowAddForm(true)}>
            Add New Campaign
          </button>
        )}
      </div>

      {showAddForm && (
        <div className="add-campaign-form">
          <h2>Create New Campaign</h2>
          <form onSubmit={handleAddCampaign}>
            <div className="form-group">
              <label>Campaign Name</label>
              <input
                type="text"
                name="name"
                value={newCampaign.name}
                onChange={handleInputChange}
                required
              />
            </div>

            <div className="form-group">
              <label>Category</label>
              <select
                name="category"
                value={newCampaign.category}
                onChange={handleInputChange}
                required
              >
                {categories.filter(cat => cat !== 'All').map(category => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
            </div>

            <div className="form-group">
              <label>Description</label>
              <textarea
                name="description"
                value={newCampaign.description}
                onChange={handleInputChange}
                required
              />
            </div>

            <div className="form-group">
              <label>Funding Goal</label>
              <input
                type="text"
                name="fundingGoal"
                placeholder="e.g. $500,000"
                value={newCampaign.fundingGoal}
                onChange={handleInputChange}
                required
              />
            </div>

            <div className="form-group">
              <label>Deadline</label>
              <input
                type="date"
                name="deadline"
                value={newCampaign.deadline}
                onChange={handleInputChange}
                required
              />
            </div>

            <div className="form-group">
              <label>Campaign Image URL</label>
              <input
                type="url"
                name="image"
                placeholder="https://example.com/image.jpg"
                value={newCampaign.image}
                onChange={handleInputChange}
                required
              />
            </div>

            <div className="form-actions">
              <button type="submit" className="submit-btn">Create Campaign</button>
              <button 
                type="button" 
                className="cancel-btn"
                onClick={() => setShowAddForm(false)}
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      )}

      <div className="campaigns-grid">
        {filteredCampaigns.map(campaign => (
          <div key={campaign.id} className="campaign-card">
            <div className="campaign-image">
              <img src={campaign.image} alt={campaign.name} />
              <span className="category-tag">{campaign.category}</span>
            </div>
            <div className="campaign-content">
              <h3>{campaign.name}</h3>
              <p className="campaign-description">{campaign.description}</p>
              <div className="funding-progress">
                <div className="progress-stats">
                  <span>Raised: {campaign.raised}</span>
                  <span>Goal: {campaign.fundingGoal}</span>
                </div>
                <div className="progress-bar">
                  <div 
                    className="progress" 
                    style={{ width: `${campaign.progress}%` }}
                  ></div>
                </div>
                <div className="progress-footer">
                  <span>{campaign.progress}% Funded</span>
                  <span>Deadline: {campaign.deadline}</span>
                </div>
              </div>
              <button className="view-details-btn">View Details</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Campaigns; 