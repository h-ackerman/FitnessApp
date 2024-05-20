import React, { useState, useEffect } from 'react';
import './Meal.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faFire, faHourglass } from '@fortawesome/free-solid-svg-icons'; // Importez les icônes nécessaires
import MealCard from './MealCard';
import MealDescription from './MealDescription';
import Schedule from './Diet';
import { getCurrentUserId, request } from '../utils/UserApi';


const Meal = () => {
  const [meals, setMeals] = useState([]);
  const [userMeals, setUserMeals] = useState([]);
  const [meal, setMeal] = useState({
    name: "",
    description: "",
    calories: 0,
    type: "",
    protein: 0,
    carbs: 0,
    fats: 0,
    image: "",
  });


  useEffect(() => {
    // Fonction asynchrone pour récupérer les activités depuis votre API backend
    const fetchMeals = async () => {
      try {
        const data = await request({
          url: 'http://localhost:8080/meal/',
          method: 'GET'
        })
        setMeals(data); // Met à jour le state avec les données récupérées
      } catch (error) {
        console.error('Error fetching Meals:', error);
      }
    };

    fetchMeals(); // Appel de la fonction pour récupérer les activités lors du montage du composant
  }, []);

  
  useEffect(() => {
    // Fonction asynchrone pour récupérer les activités depuis votre API backend
    const getMealsOfUser = async () => {
      try {
        const userId = await getCurrentUserId()
        const data = await request({
          url: `http://localhost:8080/myMeals/user/${userId}/meals`,
          method: 'GET'
        })
        setUserMeals(data);
      } catch (error) {
        console.error('Error fetching Meals:', error);
      }
    };
    getMealsOfUser(); // Appel de la fonction pour récupérer les activités lors du montage du composant
  }, [userMeals]);

  return (
    <div className='Workout'>
      <div className="workout-container">
        <div className="banner">
          <h1 className='h1'>Start Your Diet From Today</h1>
          <p className='p1'> Let's cook something!</p>
          <div className="image-container">
            {/* Contenu de l'image */}
          </div>
        </div>
        <div className='workouts'>
          {/* Carré à gauche */}
          <div className="square-left-container-meal">
            <MealDescription meal={meal} />
          </div>
          {/* Carré à droite */}
          <div className="square-right-container-meal">
            {/* Liste des activités */}
            {meals.map(meal => (
              <MealCard key={meal.id} meal={meal} setMeal={setMeal} />
            ))}
          </div>
        </div>

      </div>
      <div className='Schedule'>
      <div className='myschedule'>My Diet</div>
        <Schedule userMeals={userMeals}/>
      </div>

    </div>
  );
};

export default Meal;


