import React, { useState, useEffect } from "react";
import { Modal, Form, Button } from "react-bootstrap";
import { toast } from "react-toastify";
import { EditSingleUser } from "../../api/Request"


const EditModal = ({ show, onClose, user, fetchUsers }) => {
  const [editedItem, setEditedItem] = useState(user);

  useEffect(() => {
    if (user) {
      setEditedItem(user);
    }
  }, [user]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setEditedItem({
      ...editedItem,
      [name]: value,
    });
  };

  const saveEdit = async () => {
    await EditSingleUser(editedItem.id, editedItem);
    toast.success("User edited successfully", { autoClose:1500 });
    fetchUsers();
    onClose();
  };

  return (
    <Modal show={show} onHide={onClose}>
      <Modal.Header closeButton>
        <Modal.Title>Edit User</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group>
            <Form.Label>Full Name</Form.Label>
            <Form.Control
              type="text"
              name="fullName"
              value={editedItem?.fullName || ""}
              onChange={handleInputChange}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              name="email"
              value={editedItem?.email || ""}
              onChange={handleInputChange}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Position</Form.Label>
            <Form.Control
              type="text"
              name="position"
              value={editedItem?.position || ""}
              onChange={handleInputChange}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Age</Form.Label>
            <Form.Control
              type="number"
              name="age"
              value={editedItem?.age || ""}
              onChange={handleInputChange}
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onClose}>
          Cancel
        </Button>
        <Button variant="primary" onClick={saveEdit}>
          Submit
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default EditModal;
