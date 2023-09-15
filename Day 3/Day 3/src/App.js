import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'; 
import './App.css';
import LoginPage from './LoginPage';
import SignupPage from './SignupPage';

function App() {
  return (
    <Router>
      <div className="App">
        
        <main>
          <Routes>
            <Route path="/login" element={<LoginPage />} /> 
            <Route path="/signup" element={<SignupPage />} /> 
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
