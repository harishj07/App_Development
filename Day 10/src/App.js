import React from 'react';
import Header from './components/header';
import Footer from './components/footer';
import Register from './pages/register';
import Home from './pages/Homepage';
import AboutUs from './pages/kanban';
import Profile from'./pages/profile';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/login';
import Dashboard from "./pages/dashboard"
import Schedule from './pages/schedule';
import Terms from './pages/terms';
import Faq from './pages/faq';
import Privacy from './pages/privacy';
import LandingPage from './pages/landing'; 
import Inventory from './pages/inventory';

function App() {
  
  const routesWithHeaderAndFooter = ['/register', '/','/aboutus']; 

 
  const shouldShowHeaderAndFooter = (pathname) => {
    return routesWithHeaderAndFooter.includes(pathname);
  };

  return (
    <Router>
      <div className="App">
        
        {shouldShowHeaderAndFooter(window.location.pathname) && <Header />}
        
        <main>
          <Routes>
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/homepage"element={<Home/>}/>
            <Route path="/profile"element={<Profile/>}/>
            <Route path="/schedule"element={<Schedule/>}/>
            <Route path="/terms" element={<Terms />} />
            <Route path="/faq" element={<Faq />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/" element={<LandingPage />} />
            <Route path="/inventory" element={<Inventory />} />




            <Route path="/kanban"element={<AboutUs/>}/>
            
          </Routes>
        </main>

        
        {shouldShowHeaderAndFooter(window.location.pathname) && <Footer />}
      </div>
    </Router>
  );
}

export default App;
