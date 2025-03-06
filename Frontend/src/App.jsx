import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ThemeProvider } from './context/ThemeContext'
import Navigation from './components/Navigation'
import Home from './Home'
import Campaigns from './components/Campaigns'
import About from './components/About'
import SignUp from './components/SignUp'
import Login from './components/Login'
import AdminDashboard from './components/AdminDashboard'
import InvestorDashboard from './components/InvestorDashboard'
import './App.css'

function App() {
  return (
    <ThemeProvider>
      <Router>
        <div className="app">
          <Navigation />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/campaigns" element={<Campaigns />} />
              <Route path="/about" element={<About />} />
              <Route path="/signup" element={<SignUp />} />
              <Route path="/login" element={<Login />} />
              <Route path="/admin-dashboard" element={<AdminDashboard />} />
              <Route path="/investor-dashboard" element={<InvestorDashboard />} />
            </Routes>
          </main>
        </div>
      </Router>
    </ThemeProvider>
  )
}

export default App