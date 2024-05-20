import React from 'react';
import './MealDescription.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBurn, faAlignLeft } from '@fortawesome/free-solid-svg-icons'; // Import faSquare directly


const MealDescription = ({ meal }) => {
  return (
    <div className="activity-description">
      <div className='nameactivity'>{meal?.name}</div>
      <div className='flexing-image'>

        <div className='description-group'>
          <div className='type'>
            {meal?.type}
          </div>
          <div className='description'>
            <FontAwesomeIcon icon={faAlignLeft} /> {meal?.description ?? 'No description available'}
          </div>
          <div className='facts'>
            <div className='flex'><div>Calories:</div> <div style={{width: 100}}> {meal?.calories ?? '0'} KCAL </div></div>
            <div className='flex'><div>Protein:</div> <div style={{width: 100}}> {meal?.protein} g </div></div>
            <div className='flex'><div>Carbs:</div> <div style={{width: 100}}> {meal?.carbs} g </div></div>
            <div className='flex'><div>Fats:</div> <div style={{width: 100}}> {meal?.fats} g </div></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MealDescription;
