import React, { useState } from 'react';
import './Age.css';
import { Link } from 'react-router-dom';

const AgeSelector = ({ age, setAge }) => {
    const ages = Array.from({ length: 100 }, (_, i) => 11 + i);
    
    const handleAgeSelection = (selectedAge) => {
        setAge(selectedAge);
    };

    return (
        <div>
            <h2>How old are you?</h2>
            <p>This helps us create your personalized plan</p>
            <div className="age-selector">
                {ages.map((a) => (
                    <div 
                        key={a}
                        className={`age-option ${a === age ? 'selected' : ''}`}
                        onClick={() => handleAgeSelection(a)} // Pass the selected age to handleAgeSelection
                    >
                        {a} 
                    </div>
                ))}
            </div>
            <div className="buttons">
                <Link to="/sex"><button className="buttonp">Previous</button></Link> {/* Use className instead of class */}
                <Link to="/weight"><button className="buttonn">Next</button></Link> {/* Use className instead of class */}
            </div>
        </div>
    );
};

export default AgeSelector;
