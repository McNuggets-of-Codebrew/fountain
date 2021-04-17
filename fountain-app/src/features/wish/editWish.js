import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";


import "../../css/wish.css";

export default function EditWish({ wish, show, handleClose }) {
  const [_wish, updateWish] = useState(wish);

  const onChangeHandler = (e) => {
    updateWish({ ..._wish, [e.target.id]: e.target.value });
  };

  const onSaveHandler = () => {
    //Some other API call here
  };

  const onResetHandler = () => {
      updateWish(wish); 
  };

  return (
    <Modal show={show} onHide={handleClose}>
    <Modal.Header>
      <Modal.Title>New Wish</Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <Form>
        <Form.Group controlId="title">
          <Form.Label>Title</Form.Label>
          <Form.Control
            type="text"
            value={_wish.title}
            onChange={onChangeHandler}
          />
        </Form.Group>
        <Form.Group controlId="title">
          <Form.Label>Location</Form.Label>
          <Form.Control
            type="text"
            value={_wish.location}
            onChange={onChangeHandler}
          />
        </Form.Group>
        <Form.Group controlId="cost">
          <Form.Label>Cost</Form.Label>
          <Form.Control
            type="text"
            value={_wish.cost}
            onChange={onChangeHandler}
          />
        </Form.Group>
        <Form.Group controlId="description">
          <Form.Label>Description</Form.Label>
          <Form.Control
            as="textarea"
            rows={5}
            value={_wish.description}
            onChange={onChangeHandler}
          />
        </Form.Group>
      </Form>
      </Modal.Body>
      <Modal.Footer>
      <Button variant="primary" onClick={onResetHandler}>
        {" "}
        Reset{" "}
      </Button>
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
