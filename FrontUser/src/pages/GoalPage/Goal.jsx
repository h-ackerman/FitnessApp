import React, { useState } from 'react';
import './Goal.css';
import { Link } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const GoalSelector = ({ goal, setGoal, saveData }) => {
    const expressions = ['Gain weight', 'Lose weight', 'Get fitter', 'Gain more flexible', 'Learn the basic'];

    const handleGoalSelection = (selectedGoal) => {
        setGoal(selectedGoal);
    };

    const handleFinish = () => {
        saveData();
        notify();
    };

    const notify = () => {
        let message = '';
        let autoCloseDuration = 11000; // Durée d'affichage en millisecondes (5 secondes)

        switch (goal) {
            case 'Gain weight':
                message = 'Awesome! Let\'s work on gaining healthy weight with proper nutrition and workouts.';
                break;
            case 'Lose weight':
                message = 'Great choice! Start your weight loss journey with our tailored plans.';
                break;
            case 'Get fitter':
                message = 'Fantastic! Get ready to become the fittest version of yourself.';
                break;
            case 'Gain more flexible':
                message = 'Flexibility is key! Begin your journey to become more flexible.';
                break;
            case 'Learn the basic':
                message = 'Basics are the foundation! Let\'s start with the fundamental exercises.';
                break;
            default:
                message = 'Set your fitness goals and get started!';
        }
        toast.success(message);
        autoClose: autoCloseDuration // Définir la durée d'affichage

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
                    <button className="buttonn" onClick={handleFinish}>Finish</button>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default GoalSelector;
