import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import Swal from 'sweetalert2';
import { request } from "../utils/UserApi";

export default function Addactivity() {
  const [activity, setActivity] = useState({
    name: "",
    description: "",
    calories: 0,
    type: "",
    duration:"",
    image: "",

  });

  const { name, description, calories, duration, type, image } = activity;

  const onInputChange = (e) => {
    setActivity({ ...activity, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      await request({  // we use request function in our utils/userApi file
        url:"http://localhost:8080/activity/addActivity",
        method: 'POST',
        data: activity
      })
      // Show alert after successful submission
      Swal.fire({
        icon: 'success',
        title: 'Success!',
        text: 'Activity submitted successfully!',
        confirmButtonColor: '#28a745', // Green color for confirm button
        confirmButtonText: 'Ok',
        allowOutsideClick: false // Prevent closing the alert by clicking outside
      }).then((result) => {
        if (result.isConfirmed) {
          window.location.reload();// Navigate to home after clicking the confirm button
        }
      });
    } catch (error) {
      console.error("Error submitting Activity:", error);
      // Handle error as needed, e.g., display an error message to the user
    }
  };

  // Function to check if all fields are filled
  const isFormFilled = () => {
    return name !== "" && description !== "" && calories !== 0 && type !== "" ;
  };

  return (
    <Form onSubmit={onSubmit}>
      <Form.Group>
        <Form.Control
            type="text"
            placeholder="Your Activity Name *"
            name="name"
            value={name}
            onChange={(e) => onInputChange(e)}
            required
        />
      </Form.Group>
      <Form.Group>
        <Form.Control
            as="textarea"
            placeholder="Your Activity Description *"
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
            placeholder="Activity Type *"
            name="type"
            value={type}
            onChange={(e) => onInputChange(e)}
            required
        >
          <option value="">Select type</option>
          <option value="Walking">Walking</option>
          <option value="Running">Running</option>
          <option value="Strength Training">Strength Training</option>
        </Form.Control>
      </Form.Group>
      
      
      <Form.Group>
         <Form.Control
            type="text"
            placeholder="Enter url*"
            name="image"
            value={image}
            onChange={(e) => onInputChange(e)}
            required
        />
      </Form.Group>
      <Form.Group>
         <Form.Control
            type="number"
            placeholder="Enter duration*"
            name="duration"
            value={duration}
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
