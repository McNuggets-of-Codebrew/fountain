import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "../../css/profile.css"; 

export default function ProfileDetails({ profile }) {
  const [_profile, updateProfile] = useState(profile);

  const saveHandler = () => { 
      //API call to update profile details 
  }; 

  const onChangeHandler = (e) => {
    updateProfile({ ..._profile, [e.target.id]: e.target.value });
  }; 


  return (
    <div className="profile">
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
      <Button variant="primary" onClick ={saveHandler}> Save Changes </Button> 
      {" "} 
      <Button variant="primary"> Cancel </Button>
    </div>
  );
}
