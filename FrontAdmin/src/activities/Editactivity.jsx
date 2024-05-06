import { useState, useEffect } from "react";
import { Form, Button } from "react-bootstrap";
import Swal from 'sweetalert2';
import { request } from "../utils/UserApi";


export default function Editactivity(props) {

  const [activity, setActivity] = useState({
    name: "",
    description: "",
    calories: 0,
    type: "",
    image: "",

  });

  const { name, description, calories, type, image } = activity;

  const onInputChange = (e) => {
    setActivity({ ...activity, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    fetchActivity();
  }, [props.id]);

  const fetchActivity = async () => {
      try {
        const response = await request({  // we use request function in our utils/userApi file
          url:`http://localhost:8080/activity/${props.id}`,
          method: 'GET'
        })
        console.log(response);
        setActivity(response.data);
        
      } catch (error) {
        console.error("Error fetching activity:", error);
      }
    };

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      await request({  // we use request function in our utils/userApi file
        url:`http://localhost:8080/activity/${props.id}`,
        method: 'PUT',
        data: activity
      })
      Swal.fire({
        icon: 'success',
        title: 'Success!',
        text: 'Activity updated successfully!',
        confirmButtonColor: '#28a745', // Green color for confirm button
        confirmButtonText: 'Ok',
        allowOutsideClick: false // Prevent closing the alert by clicking outside
      }).then((result) => {
        if (result.isConfirmed) {
          window.location.reload();// Navigate to home after clicking the confirm button
        }
      });
    } catch (error) {
      console.error("Error updating activity:", error);
      alert("An error occurred while updating activity data. Please try again later.");
    }
  };

  const isFormFilled = () => {
    // Implement your logic for checking if the form is filled
    return true;
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
        <Form.Text className="text-muted">Enter calories (e.g., 200)</Form.Text>
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
          type="text"
          placeholder="Activity Type *"
          name="type"
          value={type}
          onChange={(e) => onInputChange(e)}
          required
        >
        
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
      <Button variant="success" type="submit" disabled={!isFormFilled()} >
        Update
      </Button>
    </Form>
  );
}
