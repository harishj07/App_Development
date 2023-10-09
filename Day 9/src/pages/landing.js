import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/css/landing.css';
import Footer from '../components/footer'; 

function Landing() {
  return (
    <div className="landing-container">
      <nav className="navba">
        <div className="logo">LSM</div>
        <ul className="nav-link">

          <li><Link to="/register">Sign Up</Link></li>
          <li><Link to="/login">Login</Link></li>
        </ul>
      </nav>
      <div className="content">
        
        
      </div>

      
      <Footer />
    </div>
  );
}

export default Landing;
