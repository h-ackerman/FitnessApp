import React, { useState } from 'react';
import './Goal.css';
import { Link } from 'react-router-dom';

const GoalSelector = ({ goal, setGoal, saveData }) => {
    const expressions = ['Gain weight', 'Lose weight', 'Get fitter', 'Increase Physical Activity:', 'Strength Training', 'Nutrition', 'Flexibility'];

    const handleGoalSelection = (selectedGoal) => {
        setGoal(selectedGoal);
    };

    return (
        <div className='cardZ'>
        <div className='card-content'>
            <h2>What's your Goal ?</h2>
            <p>This help us create you personalized plan</p>
            <div className="goal-selector">
                {expressions.map((expression) => (
                    <div 
                        key={expression}
                        className={`goal-option ${expression === goal ? 'selected' : ''}`}
                        onClick={() => handleGoalSelection(expression)}
                    >
                        {expression}
                    </div>
                ))}
            </div>
            <div className="buttons">
                <Link to="/height"><button className="buttonp">Previous</button></Link>
                <button className="buttonn" onClick={saveData}>Finish</button>
            </div>
        </div>
        </div>
    );
};

export default GoalSelector;
