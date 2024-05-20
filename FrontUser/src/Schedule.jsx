import React from 'react';
import './Schedule.css';

const Schedule = ({ schedule }) => {
  return (
    <div className="schedule">
      {schedule.map((item, index) => (
        <div key={index} className="schedule-item">
          <div className='flexing'>
            <div className='schedule-details'>
              <div className='schedule-element1'>{item.date}</div>
              <div className='schedule-element2'>{item.activity.name}</div>
              <div className='schedule-element3'>{item.activity.duration} min</div>
            </div>
            <div className='sets'>{item.activity.calories} Kcal</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Schedule;
