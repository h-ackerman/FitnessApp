import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from 'react-bootstrap/Card';

export default function ViewMeal(props) {
  const [meal, setMeal] = useState({
    name: "",
    description: "",
    calories: 0,
    type: "",
    protein: 0,
    carbs: 0,
    fats: 0
  });

  useEffect(() => {
    const fetchMeal = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/meal/${props.id}`);
        setMeal(response.data);
      } catch (error) {
        console.error("Error fetching meal:", error);
        alert("An error occurred while fetching meal data. Please try again later.");
      }
    };

    fetchMeal();
  }, [props.id]);

  return (
    <div className="container">
      
         
        <Card>
        <Card.Img variant="center" src="/assets/BREAKFAST.jpg"  />


      <Card.Body>
        <Card.Text>
        <b>Name:</b> {meal.name}
                <br />
                <b>Description:</b> {meal.description}  
                 <br />
                <b>Calories:</b> {meal.calories}
                <br />
                <b>Type:</b> {meal.type}
                <br />
                <b>Protein:</b> {meal.protein}
                <br />
                <b>Carbs:</b> {meal.carbs}
                <br />
                <b>Fats:</b> {meal.fats}
        </Card.Text>
       
      </Card.Body>
     </Card>

          
        </div>
    
  );
}
