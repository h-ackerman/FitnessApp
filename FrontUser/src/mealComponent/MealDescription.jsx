import React from 'react';
import './MealDescription.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faBurn, faAlignLeft  } from '@fortawesome/free-solid-svg-icons'; // Import faSquare directly


const MealDescription = ({ meal }) => {
  return (
    <div className="activity-description">
    <div className='nameactivity'>{meal?.name}</div>
    <div className='flexing-image'>
   
    <div className='description-group'>
   
    <div className='type'>
    {meal?.type } 
    </div>
    <div className='description'>

      <FontAwesomeIcon icon={faAlignLeft} /> Description: {meal?.description ?? 'No description available'}
    </div>
    <div className='calories'>
      <FontAwesomeIcon icon={faBurn} /> Calories: {meal?.calories ?? 'N/A'} KCAL
    </div>
    
    <div className='protein'>
   Protein: {meal?.protein } g 
      </div>
      <div> Carbs: {meal?.carbs } g</div>
     Fats: {meal?.fats } g


    </div>
    </div>
  </div>
  );
};

export default MealDescription;
