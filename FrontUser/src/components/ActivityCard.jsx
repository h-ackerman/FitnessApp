import React from 'react';
import { FaClock, FaFire, FaPlus } from 'react-icons/fa';
import './ActivityCard.css';
import { getCurrentUserId, request } from '../utils/UserApi';

const ActivityCard = ({ activity, setActivity, addToSchedule }) => {

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
        // If addition is successful, add activity to schedule
        addToSchedule(activity);
      } catch (error) {
        console.error('Error:', error);
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
      <button className="add-button" onClick={addActivity}>
        <FaPlus color="#fff" />
      </button>
    </div>
  );
};

export default ActivityCard;

