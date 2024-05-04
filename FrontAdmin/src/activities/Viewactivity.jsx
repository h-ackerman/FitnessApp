// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from 'react-bootstrap/Card';

export default function Viewactivity(props) {
  const [activity, setActivity] = useState({
    name: "",
    description: "",
    calories: 0,
    type: "",
    image: "",

  });
  useEffect(() => {
    const fetchActivity = async () => {
      try {
        // eslint-disable-next-line react/prop-types
        const response = await axios.get(`http://localhost:8080/activity/${props.id}`);
        setActivity(response.data);
      } catch (error) {
        console.error("Error fetching activity:", error);
        alert("An error occurred while fetching activity data. Please try again later.");
      }
    };

    fetchActivity();
  // eslint-disable-next-line react/prop-types
  }, [props.id]);

  return (
    <div className="container">
      
         
        <Card>
        <div style={{ textAlign: 'center' }}>
          <Card.Img src={activity.image} style={{ width: '250px', height: '250px' }} />
        </div>

      <Card.Body>
        <Card.Text>
        <b>Name:</b> {activity.name}
                <br />
                <b>Description:</b> {activity.description}  
                 <br />
                <b>Calories:</b> {activity.calories}
                <br />
                <b>Type:</b> {activity.type}
                <br />
              
        </Card.Text>
       
      </Card.Body>
     </Card>

          
        </div>
    
  );
}
