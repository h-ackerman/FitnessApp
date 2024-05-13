import React from 'react';
import './Dashboard.css'

const Dashboard = () => {
  return (
    <div style={{marginTop: 50}}>
      <h1>Fitness App Admin Dashboard</h1>
      <div className="summary">
        <h2>Summary</h2>
        <p>Total Users: 4</p>
        <p>Total Workouts Logged: 5</p>
        <p>Total Calories Burned: 2500</p>
      </div>
      <div className="statistics">
        <h2>Statistics</h2>
        <div className="workout-stats">
          <h3>Workout Statistics</h3>
          <p>Running: 10 workouts</p>
          <p>Cycling: 5 workouts</p>
          <p>Swimming: 10 workouts</p>
        </div>
        <div className="calories-stats">
          <h3>Calories Burned Statistics</h3>
          <p>Running: 12000 calories</p>
          <p>Cycling: 8000 calories</p>
          <p>Swimming: 5000 calories</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
