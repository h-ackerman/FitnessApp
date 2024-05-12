import React from 'react';
import Swal from 'sweetalert2';
import { FaClock, FaFire, FaPlus } from 'react-icons/fa';
import '../ActivityCard.css';
import { getCurrentUserId, request } from '../utils/UserApi';

const MealCard = ({ meal, setMeal, addToSchedule }) => {

  const showMealDescription = () => {
    setMeal(meal);
  };

  const addMeal = async (e) => {
    e.stopPropagation();
    const userId = await getCurrentUserId();
    const url = `http://localhost:8080/myMeals/account/${userId}/meal/${meal.id}/add`;

    const sendRequest = async () => {
      try {
        const response = await request({
          url: url,
          method: 'GET',
        });
        // If addition is successful, add meal to schedule
        addToSchedule(meal);
        // Show SweetAlert modal
        Swal.fire({
          icon: 'success',
          title: 'Meal added!',
          text: 'The meal has been successfully added to your diet.',
          confirmButtonText: 'OK'
        });
      } catch (error) {
        console.error('Error:', error);
      }
    };

    // Show confirmation modal before sending the request
    Swal.fire({
      icon: 'question',
      text: 'Are you sure you want to add this meal to your diet?',
      showCancelButton: true,
      confirmButtonText: 'Yes',
      cancelButtonText: 'No'
    }).then((result) => {
      if (result.isConfirmed) {
        sendRequest();
      }
    });
  };

  return (
    <div className="activity-card" onClick={showMealDescription}>
      {meal.image && <img src={meal.image} alt={meal.name} className="activity-image" />}
      <div className="activity-details">
        <div className="activity-name">{meal.name}</div>
        <div className="activity-attribu"><FaFire /> {meal.calories} KCAL</div>
      </div>
      <button className="add-button" onClick={addMeal}>
        <FaPlus color="#fff" />
      </button>
    </div>
  );
};

export default MealCard;
