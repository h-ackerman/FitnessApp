import React, { useEffect, useState } from "react";
import Card from 'react-bootstrap/Card';
import { request } from "../utils/UserApi";

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
        const response = await request({  // we use request function in our utils/userApi file
          url:`http://localhost:8080/activity/${props.id}`,
          method: 'GET'
        })
        setActivity(response.data);
      } catch (error) {
        console.error("Error fetching activity:", error);
        alert("An error occurred while fetching activity data. Please try again later.");
      }
    };

    fetchActivity();
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
