import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

import "../../css/profile.css";

export default function ProfileDetails({ profile, show, handleClose }) {
  const [_profile, updateProfile] = useState(profile);

  const onSaveHandler = () => {
    handleClose();
    //API call to update profile details
  };

  const onChangeHandler = (e) => {
    updateProfile({ ..._profile, [e.target.id]: e.target.value });
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header>
        <Modal.Title>User Profile</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form.Group controlId="username">
          <Form.Label>Username</Form.Label>
          <Form.Control
            as="textarea"
            rows="1"
            value={_profile.username}
            onChange={onChangeHandler}
          />
        </Form.Group>
        <Form.Group controlId="name">
          <Form.Label>Name</Form.Label>
          <Form.Control
            as="textarea"
            rows="1"
            value={_profile.name}
            onChange={onChangeHandler}
          />
        </Form.Group>
        <Form.Group controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control
            as="textarea"
            rows="1"
            value={_profile.email}
            onChange={onChangeHandler}
          />
        </Form.Group>
        <Form.Group controlId="phone">
          <Form.Label>Phone</Form.Label>
          <Form.Control
            as="textarea"
            rows="1"
            value={_profile.phone}
            onChange={onChangeHandler}
          />
        </Form.Group>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="primary" onClick={onSaveHandler}>
          {" "}
          Save Changes{" "}
        </Button>{" "}
        <Button variant="secondary" onClick={handleClose}>
          {" "}
          Close{" "}
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
