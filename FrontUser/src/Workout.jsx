import React, { useState, useEffect } from 'react';
import './Workout.css';
import ActivityCard from './ActivityCard';
import ActivityDescription from './ActivityDescription';
import Schedule from './Schedule';
import { getCurrentUserId, request } from './utils/UserApi';

const Workout = () => {
  const [activities, setActivities] = useState([]);
  const [userActivities, setUserActivities] = useState([]);
  const [activity, setActivity] = useState({
    name: 'Workout',
    image: 'https://cdn-icons-png.flaticon.com/512/5845/5845448.png',
    duration: '00',
    calories: '00',
    description: '',
  });

  useEffect(() => {
    // Fonction asynchrone pour récupérer les activités depuis votre API backend
    const fetchActivities = async () => {
      try {
        const data = await request({
          url: 'http://localhost:8080/activity/',
          method: 'GET'
        });
        setActivities(data); // Met à jour le state avec les données récupérées
      } catch (error) {
        console.error('Error fetching activities:', error);
      }
    };

    fetchActivities(); // Appel de la fonction pour récupérer les activités lors du montage du composant
  }, []);

  useEffect(() => {
    // Fonction asynchrone pour récupérer les activités depuis votre API backend
    const getActivitiesOfUser = async () => {
      try {
        const userId = await getCurrentUserId();
        const data = await request({
          url: `http://localhost:8080/myActivities/user/${userId}/activities`,
          method: 'GET'
        });
        setUserActivities(data);
      } catch (error) {
        console.error('Error fetching activities:', error);
      }
    };
    getActivitiesOfUser(); // Appel de la fonction pour récupérer les activités lors du montage du composant
  }, [userActivities]);



  return (
    <div className='Workout'>
      <div className="workout-container">
        <div className="banner">
          <h1 className='h1'>Start Your Workout From Today</h1>
          <p className='p1'> Let's go for some exercise!</p>
          <div className="image-container">
            {/* Contenu de l'image */}
          </div>
        </div>
        <div className='workouts'>
          {/* Carré à gauche */}
          <div className="square-left-container">
            <ActivityDescription activity={activity} />
          </div>
          {/* Carré à droite */}
          <div className="square-right-container">
            {/* Liste des activités */}
            {activities.map(activity => (
              <ActivityCard key={activity.id} activity={activity} setActivity={setActivity} />
            ))}
          </div>
        </div>
      </div>
      <div className='Schedule'>
        <div className='myschedule'>My schedule</div>
        <Schedule schedule={userActivities} />
      </div>
    </div>
  );
};

export default Workout;
