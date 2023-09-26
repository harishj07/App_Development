import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logoutUser } from '../app/actions';
import '../assets/css/dashboard.css';

const Dashboard = () => {
  const username = useSelector((state) => state.user.username);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logoutUser());
    navigate('/');
  };

  return (
    <div className="dashboard-container">
      
      <aside className="sidebar">
        <ul className="sidebar-nav">
          <li>
            <button onClick={() => navigate('/dashboard')}>Dashboard</button>
          </li>
          <li>
            <button onClick={() => navigate('/profile')}>Profile</button>
          </li>
          <li>
            <button onClick={() => navigate('/inventory')}>Inventory</button>
          </li>
          <li>
            <button onClick={() => navigate('/shipping')}>Shipping&Tracking</button>
          </li>
          <li>
            <button onClick={() => navigate('/schedule')}>schedule</button>
          </li>
          <li>
            <button onClick={() => navigate('/kanban')}>Kanban</button>
          </li>
          
        </ul>
      </aside>

       
        <main className="main-content">
          <h1>Welcome, <span className="user-name">{username}</span></h1>
          <p className="welcome-text">Let's begin your journey with us!</p>
          <p className="sub-text">Are you searching for event planning? We provide.</p>

          
          <div className="chart">
            <h2>Bar Chart Income Loss</h2>
            <div className="bar">
              <div className="bar-fill" style={{ width: '80%' }}></div>
            </div>
          </div>

          
          <div className="chart">
            <h2>Pie Chart Product </h2>
            <div className="pie">
              <div className="slice" style={{ transform: 'rotate(45deg)' }}></div>
              <div className="slice" style={{ transform: 'rotate(135deg)' }}></div>
              <div className="slice" style={{ transform: 'rotate(225deg)' }}></div>
              <div className="slice" style={{ transform: 'rotate(315deg)' }}></div>
            </div>
          </div>

          
          <div className="chart">
            <h2>Pyramid Chart </h2>
            <div className="pyramid">
              <div className="layer" style={{ width: '100%', height: '10px' }}></div>
              <div className="layer" style={{ width: '80%', height: '20px' }}></div>
              <div className="layer" style={{ width: '60%', height: '30px' }}></div>
              <div className="layer" style={{ width: '40%', height: '40px' }}></div>
              <div className="layer" style={{ width: '20%', height: '50px' }}></div>
            </div>
          </div>

          
        </main>


    </div>
  );
};

export default Dashboard;
