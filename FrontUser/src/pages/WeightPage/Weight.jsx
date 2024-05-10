import React, { useState } from 'react';
import './Weight.css';
import { Link } from 'react-router-dom';

const WeightSelector = ({weight,setWeight}) => {
    const weights = Array.from({ length: 121 }, (_, i) => 30 + i);

    const handleWeightSelection = (selectedWeight) => {
        setWeight(selectedWeight);
      };
    
     

    return (
        <div>
            <h2>Quel est votre poids ?</h2>
            <p>Vous pouvez toujours changer cela plus tard</p>
            <div className="weight-selector">
                {weights.map((w) => (
                    <div 
                        key={w}
                        className={`weight-option ${w === weight ? 'selected' : ''}`}
                        onClick={() => handleWeightSelection(w)}
                    >
                        {w} kg
                    </div>
                ))}
            </div>
            <div className="buttons">
                <Link to="/age"><button className="buttonp">Previous</button></Link> {/* Use className instead of class */}
                <Link to="/height"><button className="buttonn">Next</button></Link> {/* Use className instead of class */}
            </div>
        </div>
    );
};

export default WeightSelector;
