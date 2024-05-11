import './Sex.css';
import React from 'react';
import { Link } from 'react-router-dom';

const Sex = ({ setSex }) => {
    const handleGenderSelection = (selectedGender) => {
        setSex(selectedGender);
    };

    return (
        <div className="cardZ">
            <div className="card-content">

            <h1>Tell us about yourself!</h1>
            <div>
                <button className="button-male" onClick={() => handleGenderSelection('Male')}>Male</button>
                <button className="button-female" onClick={() => handleGenderSelection('Female')}>Female</button>
            </div>
            <div className="buttons">
                <Link to="/age"><button className="buttonn">Next</button></Link>
            </div>
        </div>
        </div>
    );
};

export default Sex;