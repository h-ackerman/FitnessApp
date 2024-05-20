import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDumbbell, faFire, faShoePrints, faBed } from '@fortawesome/free-solid-svg-icons';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line, AreaChart, Area } from 'recharts';
import { getCurrentUserId, request } from '../../utils/UserApi';
import { API_BASE_URL } from '../../utils/constants';

function Home() {
  const [data, setData] = useState([]);
  const [weightData, setWeightData] = useState([]);
  const [sleepData, setSleepData] = useState([]);

  // this function fetches daily user Stats data from database
  const getUserData = async () => {
    try {
      const id = await getCurrentUserId();
      const url = `${API_BASE_URL}/dailyStats/${id}`;
      const response = await request({
        url: url,
        method: 'GET'
      });
      setData(filterList(response));
      setWeightData(filterWeight(response));
      setSleepData(filterSleep(response));
    } catch (error) {
      console.error('Failed to fetch user data:', error);
    }
  };

  // this function extract the stats we want from user Stats data
  function filterList(userStats) {
    return userStats.map(item => {
      return {
        name: getDayName(item.dayOfWeek),
        workoutTime: item.workoutTime,
        caloriesBurned: item.caloriesBurned,
        steps: item.steps
      };
    });
  }

  // this function extract weight stats
  function filterWeight(userStats) {
    return userStats.map(item => {
      return {
        name: getDayName(item.dayOfWeek),
        weight: item.weight
      };
    });
  }

  // this function extract sleep stats
  function filterSleep(userStats) {
    return userStats.map(item => {
      return {
        name: getDayName(item.dayOfWeek),
        sleepHours: item.sleepHours
      };
    });
  }

  // this function takes a date with this format 2024-05-16 as input and return the day 
  function getDayName(dateString) {
    const date = new Date(dateString);
    const formatter = new Intl.DateTimeFormat('en-US', { weekday: 'short' });
    return formatter.format(date);
  }


  useEffect(() => {
    getUserData();
  }, []);

  // Handle case where data might be empty initially
  if (data.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <main className='main-container'>
      <div className='main-title'>
        <h3>Welcome back!</h3>
        <div>Here's your weekly summary:</div>
      </div>

      <div className='main-cards'>
        <div className='card'>
          <div className='card-inner'>
            <h3>Workout Time</h3>
            <FontAwesomeIcon icon={faDumbbell} />
          </div>
          <h1>{data.reduce((total, item) => total + item.workoutTime, 0) + ' min'}</h1>
        </div>
        <div className='card'>
          <div className='card-inner'>
            <h3>Calories Burned</h3>
            <FontAwesomeIcon icon={faFire} />
          </div>
          <h1>{data.reduce((total, item) => total + item.caloriesBurned, 0)}</h1>
        </div>
        <div className='card'>
          <div className='card-inner'>
            <h3>Steps</h3>
            <FontAwesomeIcon icon={faShoePrints} />
          </div>
          <h1>{data.reduce((total, item) => total + item.steps, 0)}</h1>
        </div>
        <div className='card'>
          <div className='card-inner'>
            <h3>Avg sleep</h3>
            <FontAwesomeIcon icon={faBed} />
          </div>
          <h1>{sleepData.reduce((total, item) => total + item.sleepHours, 0) / sleepData.length + ' Hours'}</h1>
        </div>
      </div>

      <div className='charts'>
        {/* calories burned/ workout time barchart */}
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            width={500}
            height={300}
            data={data}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="caloriesBurned" fill="#8884d8" name="Calories Burned" />
            <Bar dataKey="workoutTime" fill="#82ca9d" name="Workout Time (min)" />
          </BarChart>
        </ResponsiveContainer>

        {/* calories burned/ workout time LineChart */}
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            width={500}
            height={300}
            data={data}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            {/* <YAxis /> */}
            <Tooltip />
            <Legend />
            <Area type="monotone" dataKey="caloriesBurned" stroke="#8884d8" fill="#8884d8" name="Calories Burned" />
            <Area type="monotone" dataKey="workoutTime" stroke="#82ca9d" fill="#82ca9d" name="Workout Time (min)" />
          </AreaChart>
        </ResponsiveContainer>

        {/* evolution of weight over time line chart */}
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            width={500}
            height={300}
            data={weightData}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis label={{ value: 'Your weight', angle: -90, position: 'center', dx: -20 }} />
            <Tooltip />
            {/* <Legend /> */}
            <Line type="monotone" dataKey="weight" stroke="#82ca9d" name="Weight" />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </main>
  );
}

export default Home;
