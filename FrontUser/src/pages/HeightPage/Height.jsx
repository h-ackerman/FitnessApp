import React, { useState } from 'react';
import './Height.css';
import { Link } from 'react-router-dom';

const HeightSelector = ({ height, setHeight }) => {
    const heights = Array.from({ length: 121 }, (_, i) => 130 + i);
    const handleHeightSelection = (selectedHeight) => {
        setHeight(selectedHeight);
    };
    

    return (
        <div className='cardZ'>
        <div className='card-content'>
            <h2>What's you height ?</h2>
            <p>This help us create you personalized plan</p>
            <div className="height-selector">
                {heights.map((h) => (
                    <div 
                        key={h}
                        className={`height-option ${h === height ? 'selected' : ''}`}
                        onClick={() => handleHeightSelection(h)}
                    >
                        {h} cm
                    </div>
                ))}
            </div>
            <div className="buttons">
                <Link to="/weight"><button className="buttonp">Previous</button></Link> {/* Use className instead of class */}
                <Link to="/goal"><button className="buttonn">Next</button></Link> {/* Use className instead of class */}
            </div>
        </div>
        </div>
    );
};

export default HeightSelector;
