import axios from "axios";
import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import Swal from 'sweetalert2';

export default function AddMeal() {
  const [meal, setMeal] = useState({
    name: "",
    description: "",
    calories: 0,
    type: "",
    protein: 0,
    carbs: 0,
    fats: 0
  });

  const { name, description, calories, type, protein, carbs, fats } = meal;

  const onInputChange = (e) => {
    setMeal({ ...meal, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log(meal);
      await axios.post("http://localhost:8080/meal/addMeal", meal);
      // Show alert after successful submission
      Swal.fire({
        icon: 'success',
        title: 'Success!',
        text: 'Meal submitted successfully!',
        confirmButtonColor: '#28a745', // Green color for confirm button
        confirmButtonText: 'Ok',
        allowOutsideClick: false // Prevent closing the alert by clicking outside
      }).then((result) => {
        if (result.isConfirmed) {
          window.location.reload();// Navigate to home after clicking the confirm button
        }
      });
    } catch (error) {
      console.error("Error submitting meal:", error);
      // Handle error as needed, e.g., display an error message to the user
    }
  };

  // Function to check if all fields are filled
  const isFormFilled = () => {
    return name !== "" && description !== "" && calories !== 0 && type !== "" && protein !== 0 && carbs !== 0 && fats !== 0;
  };

  return (
    <Form onSubmit={onSubmit}>
      <Form.Group>
        <Form.Control
            type="text"
            placeholder="Your Meal Name *"
            name="name"
            value={name}
            onChange={(e) => onInputChange(e)}
            required
        />
      </Form.Group>
      <Form.Group>
        <Form.Control
            as="textarea"
            placeholder="Your Meal Description *"
            rows={3}
            name="description"
            value={description}
            onChange={(e) => onInputChange(e)}
            required
        />
      </Form.Group>
      <Form.Group>
        <Form.Text className="text-muted">
            Enter calories (e.g., 200)
        </Form.Text>
        <Form.Control
            type="number"
            placeholder="Enter calories *"
            name="calories"
            value={calories}
            onChange={(e) => onInputChange(e)}
            required
        />
      </Form.Group>
      <Form.Group>
        <Form.Control
            as="select"
            placeholder="Meal Type *"
            name="type"
            value={type}
            onChange={(e) => onInputChange(e)}
            required
        >
          <option value="">Select type</option>
          <option value="BREAKFAST">Breakfast</option>
          <option value="LUNCH">Lunch</option>
          <option value="DINNER">Dinner</option>
        </Form.Control>
      </Form.Group>
      <Form.Group>
        <Form.Text className="text-muted">
            Enter protein (e.g., 20)
        </Form.Text>
        <Form.Control
            type="number"
            placeholder="Enter protein *"
            name="protein"
            value={protein}
            onChange={(e) => onInputChange(e)}
            required
        />
      </Form.Group>
      <Form.Group>
        <Form.Text className="text-muted">
            Enter carbs (e.g., 30)
        </Form.Text>
        <Form.Control
            type="number"
            placeholder="Enter carbs *"
            name="carbs"
            value={carbs}
            onChange={(e) => onInputChange(e)}
            required
        />
      </Form.Group>
      <Form.Group>
        <Form.Text className="text-muted">
            Enter fats
        </Form.Text>
        <Form.Control
            type="number"
            placeholder="Enter fats *"
            name="fats"
            value={fats}
            onChange={(e) => onInputChange(e)}
            required
        />
      </Form.Group>
      <Button variant="success" type="submit" disabled={!isFormFilled()} >
          Submit
      </Button>
    </Form>
  );
}
