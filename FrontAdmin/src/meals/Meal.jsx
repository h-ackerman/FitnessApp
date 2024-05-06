// This component shows the list of all meals 
// It also contains the loading of the meals list and delete implementation
import React, { useEffect, useState } from "react";
import { Modal, Button, OverlayTrigger, Tooltip } from "react-bootstrap";
import { Form, InputGroup } from "react-bootstrap";
import AddMeal from "./AddMeal";
import Swal from "sweetalert2";
import "primeicons/primeicons.css";
import ViewMeal from "./ViewMeal";
import EditMeal from "./EditMeal";
import { request } from "../utils/UserApi";



export default function Meal() {
  const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false);
  const [mealToDeleteId, setMealToDeleteId] = useState(null);
  const [meals, setMeals] = useState([]);
  const [selectedMealId, setSelectedMealId] = useState(null); //for the id
  const [selectedMealToUpdate, setSelectedMealToUpdate] = useState(null); //for the id

  const [show, setShow] = useState(false); //to show the modal
  const [showDescription, setShowDescription] = useState(false);
  const [showUpdate, setShowUpdate] = useState(false);

  const handleShow = () => setShow(true); //to close and open the modal
  const handleClose = () => setShow(false);

  const handleShowDescription = () => setShowDescription(true);
  const handleCloseDescription = () => setShowDescription(false);

  const handleShowUpdate = () => setShowUpdate(true);
  const handleCloseUpdate = () => setShowUpdate(false);

  const handleViewMeal = (mealId) => {
    setSelectedMealId(mealId);
    handleShowDescription();
  };

  const handleUpdateMeal = (mealId) => {
    //for the button injection
    setSelectedMealToUpdate(mealId);
    handleShowUpdate();
  };

  useEffect(() => {
    loadMeals();
  }, []);

  const loadMeals = async () => {
    const url = "http://localhost:8080/meal/";
    console.log("Fetching data from:", url);
    try {
      const result = await request({  // we use request function in our utils/userApi file
        url:url,
        method: 'GET'
      })
      setMeals(result.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const deleteMeal = async () => {
    if (mealToDeleteId) {
      try {
        await request({  // we use request function in our utils/userApi file
          url:`http://localhost:8080/meal/${mealToDeleteId}`,
          method: 'DELETE'
        })
        loadMeals();
        setShowDeleteConfirmation(false);
        // Show SweetAlert for successful deletion
        Swal.fire({
          icon: "success",
          title: "Success!",
          text: "Meal deleted successfully!",
          confirmButtonColor: "#28a745",
          onClose: () => window.location.reload(), // Reload the page after closing the alert
        });
      } catch (error) {
        console.error("Error deleting meal:", error);
        // Show SweetAlert for error
        Swal.fire({
          icon: "error",
          title: "Error!",
          text: "Failed to delete meal. Please try again later.",
          confirmButtonColor: "#dc3545",
        });
      }
    }
  };

  const [search, setSearch] = useState("");
  console.log(search);

  return (
    <>
      <div className="container">
        <div className="py-4">
          <div className="list">Meal List:</div>
          <div className="list">
            <Form>
              <InputGroup className="mb-3">
                <Form.Control
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Search"
                />
              </InputGroup>
            </Form>
            <Button onClick={handleShow} className="btn" data-toggle="modal">
              <i className="material-icons">&#xE147;</i>
              <span>Add new meal</span>
            </Button>
          </div>

          <table className="table">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Image</th>
                <th scope="col">Name</th>
                <th scope="col">Description</th>
                <th scope="col">Calories</th>
                <th scope="col">Type</th>
                <th scope="col">protein</th>
                <th scope="col">carbs</th>
                <th scope="col">fats</th>
                <th scope="col">Action</th>
              </tr>
            </thead>

            <tbody>
              {meals.filter((index) => {
                return search.toLowerCase() === "" ? index : index.name.toLowerCase().includes(search.toLowerCase());
              }).map((meal, index) => (
                <tr key={meal.id}>
                  {/* Provide a unique "key" prop */}
                  <th scope="row">{index + 1}</th>
                  <td>
                    <img
                      src={meal.image}
                      alt=""
                      style={{
                        width: "55px",
                        height: "55px",
                        borderRadius: "50%",
                      }}
                    />
                  </td>
                  <td>{meal.name}</td>
                  <td>
                    {
                      <OverlayTrigger
                        overlay={<Tooltip id={`tooltip-top`}>View</Tooltip>}
                      >
                        <button
                          className="btn text-primary"
                          onClick={() => handleViewMeal(meal.id)}
                          data-toggle="modal"
                        >
                          <i className="pi pi-eye"></i>
                        </button>
                      </OverlayTrigger>
                    }
                  </td>
                  <td>{meal.calories}</td>
                  <td>{meal.type}</td>
                  <td>{meal.protein}</td>
                  <td>{meal.carbs}</td>
                  <td>{meal.fats}</td>
                  <td>
                    <OverlayTrigger
                      overlay={<Tooltip id={`tooltip-top`}>Edit</Tooltip>}
                    >
                      <button
                        onClick={() => handleUpdateMeal(meal.id)}
                        className="btn  btn-act"
                        data-toggle="modal"
                      >
                        <i className="material-icons icon2">&#xE254;</i>
                      </button>
                    </OverlayTrigger>
                    <OverlayTrigger
                      overlay={<Tooltip id={`tooltip-top`}>Delete</Tooltip>}
                    >
                      <button
                        onClick={() => {
                          setShowDeleteConfirmation(true);
                          setMealToDeleteId(meal.id);
                        }}
                        className="btn text-danger btn-act icon3"
                      >
                        <i className="material-icons">&#xE872;</i>
                      </button>
                    </OverlayTrigger>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Meal</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <AddMeal />
        </Modal.Body>
      </Modal>

      <Modal show={showDescription} onHide={handleCloseDescription}>
        <Modal.Header closeButton>
          <Modal.Title>Meal Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {selectedMealId && <ViewMeal id={selectedMealId} />}
        </Modal.Body>
      </Modal>

      <Modal show={showUpdate} onHide={handleCloseUpdate}>
        <Modal.Header closeButton>
          <Modal.Title>Update Meal</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {selectedMealToUpdate && <EditMeal id={selectedMealToUpdate} />}
        </Modal.Body>
      </Modal>

      <Modal
        show={showDeleteConfirmation}
        onHide={() => setShowDeleteConfirmation(false)}
      >
        <Modal.Header closeButton>
          <Modal.Title>Confirm Deletion</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure you want to delete this meal?</Modal.Body>
        <Modal.Footer>
          <Button
            variant="secondary"
            onClick={() => setShowDeleteConfirmation(false)}
          >
            No
          </Button>
          <Button variant="danger" onClick={deleteMeal}>
            Yes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
