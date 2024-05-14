import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';
import { getCurrentUserId } from '../services/authService';
import { request } from '../services/request';

// Create the context
export const MealContext = createContext();

export default function MealContextProvider({ children }) {
  const [userDiet, setUserDiet] = useState([]);
  const [sortedUserDiet, setSortedUserDiet] = useState([]);

  const sortUserDietByType = () => {
    const sortedDiet = userDiet.reduce((acc, item) => {
      const type = item.meal.type;
      acc[type] = acc[type] || [];
      acc[type].push(item);
      return acc;
    }, {});

    // Convert the object back to an array of objects
    const sortedDietArray = Object.keys(sortedDiet).map(type => ({
      title: type,
      data: sortedDiet[type].sort((a, b) => a.meal.name.localeCompare(b.meal.name))
    }));

    setSortedUserDiet(sortedDietArray);
  };

  // Function to load user meals
  const loadUserMeals = async () => {
    try {
      const response = await axios.get('http://localhost:8080/usermeal/');
      setUserDiet(response.data);
    } catch (error) {
      console.error('Error fetching usermeal:', error);
    }
  };

  useEffect(() => {
    // Load user meals when the component mounts
    loadUserMeals();
  }, []);

  useEffect(() => {
    sortUserDietByType();
  }, [userDiet]);


  const addToUserDiet = async (mealId) => {
    const userId = await getCurrentUserId();

    try {
      const response = await request({
        url: `http://localhost:8080/myMeals/account/${userId}/meal/${mealId}/add`,
        method: 'GET',
      });     
       const mealData = response.data;

      // Set the current date and time
      mealData.dateAndTime = new Date().toISOString();

      // Add the new meal to the userDiet state
      setUserDiet((prevUserDiet) => [...prevUserDiet, mealData]);
      console.log('Meal added to diet:', response.data);

    } catch (error) {
      console.error('Error adding meal to diet:', error);
    }
  };

  // const removeFromUserDiet = async (mealId) => {
  //   try {
  //     // Perform the deletion in the backend
  //     await axios.delete(`http://localhost:8080/usermeal/${mealId}`);

  //     // Remove the item from the userDiet state
  //     setUserDiet((prevUserDiet) => prevUserDiet.filter((item) => item.id !== mealId));

  //     console.log('Meal removed from diet:', mealId);
  //   } catch (error) {
  //     console.error('Error removing meal from diet:', error);
  //   }
  // };

  const contextValue = {
    addToUserDiet,
    removeFromUserDiet,
    userDiet,
    sortedUserDiet, 
    setSortedUserDiet
  };

  return (
    <MealContext.Provider value={contextValue}>
      {children}
    </MealContext.Provider>
  );
}
