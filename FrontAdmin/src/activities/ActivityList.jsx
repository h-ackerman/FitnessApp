import React, { useEffect, useState } from "react";
import { Modal, Button,OverlayTrigger, Tooltip } from "react-bootstrap";
import { Form, InputGroup } from "react-bootstrap";
import AddActivity from "./Addactivity";
import Swal from "sweetalert2";
import "primeicons/primeicons.css";
import ViewActivity from "./Viewactivity";
import EditActivity from "./Editactivity";
import { request } from "../utils/UserApi";

export default function ActivityList() {
  const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false);
  const [activityToDeleteId, setActivityToDeleteId] = useState(null);
  const [activities, setActivities] = useState([]);
  const [selectedActivityId, setSelectedActivityId] = useState(null);
  const [selectedActivityToUpdate, setSelectedActivityToUpdate] = useState(null);

  const [show, setShow] = useState(false);
  const [showDescription, setShowDescription] = useState(false);
  const [showUpdate, setShowUpdate] = useState(false);

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  const handleShowDescription = () => setShowDescription(true);
  const handleCloseDescription = () => setShowDescription(false);

  const handleShowUpdate = () => setShowUpdate(true);
  const handleCloseUpdate = () => setShowUpdate(false);

  const handleViewActivity = (activityId) => {
    setSelectedActivityId(activityId);
    handleShowDescription();
  };

  const handleUpdateActivity = (activityId) => {
    setSelectedActivityToUpdate(activityId);
    handleShowUpdate();
  };

  useEffect(() => {
    loadActivities();
  }, []);

  const loadActivities = async () => {
    const url = "http://localhost:8080/activity/";
    try {
      const result = await request({  // we use request function in our utils/userApi file
        url:url,
        method: 'GET'
      })
      setActivities(result.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const deleteActivity = async () => {
    if (activityToDeleteId) {
      try {
        await request({  // we use request function in our utils/userApi file
          url:`http://localhost:8080/activity/${activityToDeleteId}`,
          method: 'DELETE'
        })
        loadActivities();
        setShowDeleteConfirmation(false);
        Swal.fire({
          icon: "success",
          title: "Success!",
          text: "Activity deleted successfully!",
          confirmButtonColor: "#28a745",
        });
      } catch (error) {
        console.error("Error deleting activity:", error);
        Swal.fire({
          icon: "error",
          title: "Error!",
          text: "Failed to delete activity. Please try again later.",
          confirmButtonColor: "#dc3545",
        });
      }
    }
  };

  const [search, setSearch] = useState("");

  return (
    <>
      <div className="container">
        <div className="py-4">
          <h4>Activity List:</h4>
          <Form>
            <InputGroup className="mb-3">
              <Form.Control
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search Activities"
              />
            </InputGroup>
          </Form>
          <Button onClick={handleShow}  className="btn" data-toggle="modal" style={{marginBottom: 25}}>
          <i  className="material-icons">&#xE147;</i>
          <span>Add new Activity</span>
          </Button>

          <table className="table">
            <thead>
              <tr>
                <th>#</th>
                <th>Image</th>
                <th>Name</th>
                <th>Description</th>
                <th>Duration</th>
                <th>Type</th>
                <th>Kcal</th>
              </tr>
            </thead>
            <tbody>
  {activities.filter((activity) => {
    return search.toLowerCase() === "" ? activity : activity.name.toLowerCase().includes(search.toLowerCase());
  }).map((activity, index) => (
    <tr key={activity.id}>
      {/* Provide a unique "key" prop */}
      <th scope="row">{index + 1}</th>
      <td>
        <img
          src={activity.image}
          alt=""
          style={{
            width: "55px",
            height: "55px",
            borderRadius: "50%",
          }}
        />
      </td>
      <td>{activity.name}</td>
      <td>
        {
          <OverlayTrigger
            overlay={<Tooltip id={`tooltip-top`}>View</Tooltip>}
          >
            <button
              className="btn text-primary"
              onClick={() => handleViewActivity(activity.id)}
              data-toggle="modal"
            >
              <i className="pi pi-eye"></i>
            </button>
          </OverlayTrigger>
        }
      </td>
     <td>{activity.duration}</td>
     <td>{activity.type}</td>
      <td>{activity.calories}</td>
      
      {/* You can adjust or add more columns as per your activity data */}
      <td>
        <OverlayTrigger
          overlay={<Tooltip id={`tooltip-top`}>Edit</Tooltip>}
        >
          <button
            onClick={() => handleUpdateActivity(activity.id)}
            className="btn btn-act"
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
              setActivityToDeleteId(activity.id);
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
          <Modal.Title>Add Activity</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <AddActivity refreshList={loadActivities} />
        </Modal.Body>
      </Modal>

      <Modal show={showDescription} onHide={handleCloseDescription}>
        <Modal.Header closeButton>
          <Modal.Title>Activity Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {selectedActivityId && <ViewActivity id={selectedActivityId} />}
        </Modal.Body>
      </Modal>

      <Modal show={showUpdate} onHide={handleCloseUpdate}>
        <Modal.Header closeButton>
          <Modal.Title>Update Activity</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {selectedActivityToUpdate && <EditActivity id={selectedActivityToUpdate} />}
        </Modal.Body>
      </Modal>

      <Modal show={showDeleteConfirmation} onHide={() => setShowDeleteConfirmation(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Confirm Deletion</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure you want to delete this activity?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowDeleteConfirmation(false)}>No</Button>
          <Button variant="danger" onClick={deleteActivity}>Yes</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

