import React, { useState } from 'react';
import { FaClock, FaFire, FaPlus, FaCalendarAlt } from 'react-icons/fa';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './ActivityCard.css';
import { getCurrentUserId, request } from '../utils/UserApi';

const ActivityCard = ({ activity, setActivity, addToSchedule }) => {
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);

  const showActivityDescription = () => {
    setActivity(activity);
  };

  const addActivity = async () => {
    const userId = await getCurrentUserId();
    const url = `http://localhost:8080/myActivities/account/${userId}/activity/${activity.id}/add`;

    try {
      const response = await request({
        url: url,
        method: 'GET',
      });
      addToSchedule(activity);
    } catch (error) {
      console.error('Error:', error);
    }
  };
  const addAccountActivity = async (date) => {
    const formattedDate = date.toISOString().split('T')[0]; // Format ISO YYYY-MM-DD
    const userId = await getCurrentUserId();
    const url = `http://localhost:8080/myActivities/account/${userId}/activity/${activity.id}/date/${formattedDate}/add`;
  
    try {
      const response = await request({
        url: url,
        method: 'GET',
      });
      addToSchedule(activity);
    } catch (error) {
      console.error('Error:', error);
    }
  };
  
  
  const handleDateChange = (date) => {
    setSelectedDate(date);
    addAccountActivity(date); // Appeler addAccountActivity avec la date sélectionnée
    setShowDatePicker(false); // Cacher le DatePicker après la sélection
  
    // Afficher la date sélectionnée dans la console
    console.log('Date sélectionnée :', date);
  };
  

  const toggleDatePicker = () => {
    setShowDatePicker(!showDatePicker);
  };

  return (
    <div className="activity-card" onClick={showActivityDescription}>
      {activity.image && <img src={activity.image} alt={activity.name} className="activity-image" />}
      <div className="activity-details">
        <div className="activity-name">{activity.name}</div>
        <div className="activity-attribu"><FaClock /> {activity.duration} minutes</div>
        <div className="activity-attribu"><FaFire /> {activity.calories} KCAL</div>
      </div>
      <button className="calendar-button" onClick={(e) => { e.stopPropagation(); toggleDatePicker(); }}>
        <FaCalendarAlt color="#fff" />
      </button>
      <button className="add-button" onClick={addActivity}>
        <FaPlus color="#fff" />
      </button>
      {showDatePicker && (
        <DatePicker
          selected={selectedDate}
          onChange={handleDateChange} // Utiliser handleDateChange pour gérer les changements de date
          inline
          showWeekNumbers
          onClickOutside={() => setShowDatePicker(false)}
        />
      )}
    </div>
  );
};

export default ActivityCard;
