import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

import "../../css/wish.css";

export default function CreateWish(){
  const [_wish, updateWish] = useState("");

  const onChangeHandler = (e) => {
    updateWish({ ..._wish, [e.target.id]: e.target.value });
  };

  const onSaveHandler = () => {
    //Some other API call here
  };

  return (
    <div className="editWish">
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
      <Button variant="primary" onClick={onSaveHandler}>
        {" "}
        Create{" "}
      </Button>{" "}
    </div>
  );
}
