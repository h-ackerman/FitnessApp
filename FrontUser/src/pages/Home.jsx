import React from 'react';
import './Home.css'; 
import { Link } from 'react-router-dom'; 

const Home = () => {
  return (
    <div className="welcome-container">
      <h1>Welcome to Fitness Tracker</h1>
      <p>Your ultimate destination for tracking your fitness journey!</p>
      <Link to="/sex" className="get-started-button">Configure my profile</Link>
    </div>
  );
};

export default Home;
