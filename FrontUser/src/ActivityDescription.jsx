import React from 'react';
import './ActivityDescription.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faBurn, faAlignLeft } from '@fortawesome/free-solid-svg-icons';


const ActivityDescription = ({ activity }) => {
  return (
    <div className="activity-description">
    <div className='nameactivity'>{activity?.name}</div>
    <div className='flexing-image'>
   
    <div className='description-group'>
    <div className='duration'>
      <FontAwesomeIcon icon={faClock} /> Duration: {activity?.duration ?? 'N/A'} minutes
    </div>
    <div className='calories'>
      <FontAwesomeIcon icon={faBurn} /> Calories: {activity?.calories ?? 'N/A'} KCAL
    </div>
    <div className='description'>
      <FontAwesomeIcon icon={faAlignLeft} /> Description: {activity?.description ?? 'No description available'}
    </div>

    </div>
    <img src={activity?.image} alt={`${activity?.name}`} className="activity-image" />
    </div>
  </div>
  );
};

export default ActivityDescription;
