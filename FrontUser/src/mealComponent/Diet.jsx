import React, { useState, useEffect } from 'react';
import { FaMinus } from 'react-icons/fa';
import Swal from 'sweetalert2';
import { getCurrentUserId, request } from '../utils/UserApi';
import { API_BASE_URL } from '../utils/constants';
import '../Schedule.css'

const Diet = ({ userMeals }) => {
  const totalCalories = userMeals.reduce((total, item) => total + item.calories, 0)
  const totalProtein = userMeals.reduce((total, item) => total + item.protein, 0)
  const totalCarbs = userMeals.reduce((total, item) => total + item.carbs, 0)
  const totalFat = userMeals.reduce((total, item) => total + item.fats, 0)

  const deleteMeal = async (mealId) => {
    try {
      const userId = await getCurrentUserId();
      await request({
        url: `${API_BASE_URL}/myMeals/account/${userId}/meal/${mealId}/delete`,
        method: 'DELETE'
      });
      Swal.fire({
        icon: 'success',
        title: 'Meal Deleted!',
        text: 'The meal has been successfully deleted.',
        confirmButtonColor: '#3085d6',
      });
    }
    catch (error) {
      console.error("Error deleting meal:", error);
      Swal.fire({
        icon: "error",
        title: "Error!",
        text: "An error occurred while deleting the meal. Please try again later.",
        confirmButtonColor: "#d33",
      });
    }
  };

  return (
    <div className="schedule">
      <div>Today's nutrition: </div>
      <div className='scheduleStats'>
        <div style={{ margin: 10 }}> <b>Calories</b> {totalCalories} cal</div>
        <div style={{ margin: 10 }}> <b>Protein</b> {totalProtein} G</div>
        <div style={{ margin: 10 }}> <b>Carbs</b> {totalCarbs} G</div>
        <div style={{ margin: 10 }}> <b>Fats</b> {totalFat} G</div>
      </div>
      {userMeals.map((item, index) => (
        <div key={index} className="schedule-item">
          <div className='flexing'>
            <div className='schedule-details'>
              <div className='schedule-element1'>{item.date}</div>
              <div className='schedule-element2'>{item.name}</div>
              <div className='schedule-element3'>{item.type}</div>
            </div>
            <div className='sets'>{item.calories} Kcal</div>
            {/* <button className="add-button" onClick={() => deleteMeal(item.id)}>
              <FaMinus color="#fff" />
            </button> */}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Diet;
