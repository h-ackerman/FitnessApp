import React, { useState, useEffect } from 'react';
import { FaMinus } from 'react-icons/fa';
import Swal from 'sweetalert2';
import { getCurrentUserId, request } from '../utils/UserApi';

const Diet = ({ schedule }) => {
  const [totalCalories, setTotalCalories] = useState(0);
  const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split('T')[0]);

  useEffect(() => {
    const currentDate = new Date().toISOString().split('T')[0];
    fetchTotalCalories(currentDate);
}, []);

  const fetchTotalCalories = async (date) => {
    try {
      const userId = await getCurrentUserId();
      const data = await request({
        url: `http://localhost:8080/myMeals/account/${userId}/totalCalories?date=${date}`,
        method: 'GET'
      });
      setTotalCalories(data);
    } catch (error) {
      console.error('Error fetching total calories:', error);
    }
  };

  const deleteMeal = async (mealId) => {
    try {
      const userId = await getCurrentUserId();
      await request({
        url: `myMeals/account/${userId}/meal/${mealId}/delete`,
        method: 'DELETE'
      });
      fetchTotalCalories(selectedDate);
      Swal.fire({
        icon: 'success',
        title: 'Meal Deleted!',
        text: 'The meal has been successfully deleted.',
        confirmButtonColor: '#3085d6',
      });
    } catch (error) {
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
      <div>
        <input
          type="date"
          value={selectedDate}
          onChange={(e) => setSelectedDate(e.target.value)}
        />
        Total Calories: {totalCalories}
      </div>
      {schedule.map((item, index) => (
        <div key={index} className="schedule-item">
          <div className='flexing'>
            <div className='schedule-details'>
              <div className='schedule-element1'>{item.date}</div>
              <div className='schedule-element2'>{item.name}</div>
              <div className='schedule-element3'>{item.type}</div>
            </div>
            <div className='sets'>{item.calories} Kcal</div>
            <button className="add-button" onClick={() => deleteMeal(item.id)}>
              <FaMinus color="#fff" />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Diet;
