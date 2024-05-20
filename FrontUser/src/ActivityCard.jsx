import React, { useState, useEffect } from 'react';
import { FaClock, FaFire, FaPlus, FaCalendarAlt } from 'react-icons/fa';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './ActivityCard.css';
import { getCurrentUserId, request } from './utils/UserApi';

const ActivityCard = ({ activity, setActivity, initialSelectedDate }) => {
  const [showCalendar, setShowCalendar] = useState(false);
  const [selectedDate, setSelectedDate] = useState(initialSelectedDate);

  const showActivityDescription = () => {
    setActivity(activity);
  };

  const addActivity = async (e) => {
    e.stopPropagation();
    const userId = await getCurrentUserId();
    const url = `http://localhost:8080/myActivities/account/${userId}/activity/${activity.id}/add`;
    const sendRequest = async () => {
      try {
        const response = await request({
          url: url,
          method: 'GET',
        });
      } catch (error) {
        console.error('Failed to add activity', error);
      }
    };
    sendRequest();
  };

  const toggleCalendar = (e) => {
    e.stopPropagation();
    setShowCalendar(!showCalendar);
  };

  const handleDateChange = async (date) => {
    setSelectedDate(date);
    setShowCalendar(false);
    const userId = await getCurrentUserId();
    const formattedDate = date ? date.toISOString().split('T')[0] : null;
    const url = `http://localhost:8080/myActivities/account/${userId}/activity/${activity.id}/date/${formattedDate}/add`;
    console.log(url)
    const sendRequest = async () => {
      try {
        const response = await request({
          url: url,
          method: 'GET',
        });
      } catch (error) {
        console.error('Failed to add activity', error);
      }
    };
    sendRequest();
  };

  return (
    <div className="activity-card" onClick={showActivityDescription}>
      {activity.image && <img src={activity.image} alt={activity.name} className="activity-image" />}
      <div className="activity-details">
        <div className="activity-name">{activity.name}</div>
        <div className="activity-attribu"><FaClock /> {activity.duration} minutes</div>
        <div className="activity-attribu"><FaFire /> {activity.calories} KCAL</div>
      </div>
      <div className="button-container">
        <button className="calendar-button" onClick={toggleCalendar}>
          <FaCalendarAlt color="#fff" />
        </button>
        <button className="add-button" onClick={addActivity}>
          <FaPlus color="#fff" />
        </button>
      </div>
      {showCalendar && (
        <div className="calendar-container" onClick={(e) => e.stopPropagation()}>
          <DatePicker
            selected={selectedDate}
            onChange={handleDateChange}
            inline
            withPortal
            minDate={new Date()}
          />
        </div>
      )}
    </div>
  );
};

export default ActivityCard;
