import React from 'react';
import './Home.css'; 
import { Link } from 'react-router-dom'; 

const Home = ({authenticated}) => {
  return (
    <div className="welcome-container backgroundImageClass">
      <h1>Welcome back</h1>
      {authenticated ? (
        <Link to="/sex" className="get-started-button">Configure my profile</Link>
      ) : (
        <Link to="/login" className="get-started-button">Login</Link>
      )}
    </div>
  );
};

export default Home;
