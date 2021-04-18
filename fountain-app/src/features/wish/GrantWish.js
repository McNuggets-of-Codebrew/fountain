import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

import "../../css/wish.css";

export default function GrantWish({show, handleClose }) {
  const [_wish, updateWish] = useState({});

  const onChangeHandler = (e) => {
    updateWish({ ..._wish, [e.target.id]: e.target.value });
  };

  const onSaveHandler = () => {
      //Submit to backend or something idk
    handleClose(); 
};

  return (
    <Modal show={show} onHide={handleClose}>
    <Modal.Header>
      <Modal.Title>Response</Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <Form>
      <Form.Group controlId="Name">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            value={_wish.name}
            onChange={onChangeHandler}
          />
        </Form.Group>
        <Form.Group controlId="title">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="text"
            value={_wish.email}
            onChange={onChangeHandler}
          />
        </Form.Group>
        <Form.Group controlId="details">
          <Form.Label>Details</Form.Label>
          <Form.Control
            as="textarea"
            rows={5}
            value={_wish.details}
            onChange={onChangeHandler}
          />
        </Form.Group>
      </Form>
      </Modal.Body>
      <Modal.Footer>
      <Button variant="primary" onClick={onSaveHandler}>
        {" "}
        Submit{" "}
      </Button>{" "}
      <Button variant="secondary" onClick={handleClose}>
        {" "}
        Close{" "}
      </Button>
      </Modal.Footer>
      </Modal>
  );
}
