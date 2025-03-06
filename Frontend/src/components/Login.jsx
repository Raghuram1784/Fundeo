import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaEnvelope, FaLock, FaEye, FaEyeSlash, FaGoogle } from 'react-icons/fa';
import './Login.css';

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [userType, setUserType] = useState('investor');
  const [showPassword, setShowPassword] = useState(false);

  const handleUserTypeChange = (type) => {
    // Clear form data when changing user type
    setFormData({
      email: '',
      password: ''
    });
    setUserType(type);
    setShowPassword(false); // Also reset password visibility
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Check for admin credentials
    if (userType === 'admin' && 
        formData.email === 'admin@fundeo.com' && 
        formData.password === 'admin123') {
      navigate('/admin-dashboard');
      return;
    }

    // Redirect based on user type
    if (userType === 'startup') {
      navigate('/campaigns');
    } else if (userType === 'investor') {
      navigate('/investor-dashboard');
    }
  };

  const handleGoogleLogin = () => {
    // Google login logic will be implemented later
    console.log('Google login clicked');
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h2>Welcome Back</h2>
        <p className="subtitle">
          {userType === 'admin' ? 'Admin Login' : 
           userType === 'startup' ? 'Login to manage your campaign' : 
           'Login to explore investment opportunities'}
        </p>

        <div className="user-type-selector">
          <button
            className={`type-btn ${userType === 'investor' ? 'active' : ''}`}
            onClick={() => handleUserTypeChange('investor')}
          >
            Investor
          </button>
          <button
            className={`type-btn ${userType === 'startup' ? 'active' : ''}`}
            onClick={() => handleUserTypeChange('startup')}
          >
            Startup
          </button>
          <button
            className={`type-btn ${userType === 'admin' ? 'active' : ''}`}
            onClick={() => handleUserTypeChange('admin')}
          >
            Admin
          </button>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit" className="login-btn">
            Login
          </button>

          <div className="divider">or</div>

          <button type="button" className="google-btn">
            Continue with Google
          </button>

          <p className="signup-link">
            Don't have an account? <a href="/signup">Sign up</a>
          </p>
        </form>

        {/* Helper text for demo credentials */}
        {(userType === 'investor' || userType === 'admin') && (
          <p className="helper-text" style={{ marginTop: '1rem', fontSize: '0.8rem', color: '#666' }}>
            {userType === 'investor' ? 'Demo Investor Login: investor@fundeo.com / investor123' : 
             userType === 'admin' ? 'Demo Admin Login: admin@fundeo.com / admin123' : ''}
          </p>
        )}
      </div>
    </div>
  );
};

export default Login; 