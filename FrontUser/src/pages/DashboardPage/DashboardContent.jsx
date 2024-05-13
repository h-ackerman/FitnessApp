import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDumbbell, faUtensils, faShoePrints } from '@fortawesome/free-solid-svg-icons';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line } from 'recharts';

function Home() {

    const data = [
        {
          name: 'Monday',
          workoutTime: 45, // in minutes
          caloriesBurned: 600,
          steps: 8000,
        },
        {
          name: 'Tuesday',
          workoutTime: 60,
          caloriesBurned: 700,
          steps: 9000,
        },
        {
          name: 'Wednesday',
          workoutTime: 50,
          caloriesBurned: 650,
          steps: 8500,
        },
        {
          name: 'Thursday',
          workoutTime: 55,
          caloriesBurned: 680,
          steps: 8200,
        },
        {
          name: 'Friday',
          workoutTime: 70,
          caloriesBurned: 750,
          steps: 9500,
        },
        {
          name: 'Saturday',
          workoutTime: 60,
          caloriesBurned: 720,
          steps: 9200,
        },
        {
          name: 'Sunday',
          workoutTime: 40,
          caloriesBurned: 550,
          steps: 7500,
        },
      ];
     

  return (
    <main className='main-container'>
        <div className='main-title'>
            <h3>Welcome back!</h3>
        </div>

        <div className='main-cards'>
            <div className='card'>
                <div className='card-inner'>
                    <h3>Workout Time (min)</h3>
                    <FontAwesomeIcon icon={faDumbbell} />
                </div>
                <h1>{data.reduce((total, item) => total + item.workoutTime, 0)}</h1>
            </div>
            <div className='card'>
                <div className='card-inner'>
                    <h3>Calories Burned</h3>
                    <FontAwesomeIcon icon={faUtensils} />
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
        </div>

        <div className='charts'>
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

            <ResponsiveContainer width="100%" height="100%">
                <LineChart
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
                <Line type="monotone" dataKey="caloriesBurned" stroke="#8884d8" name="Calories Burned" />
                <Line type="monotone" dataKey="workoutTime" stroke="#82ca9d" name="Workout Time (min)" />
                </LineChart>
            </ResponsiveContainer>
        </div>
    </main>
  )
}

export default Home;
