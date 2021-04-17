import React from "react";
import { Link } from "react-router-dom";
import LogoutButton from "./LogoutButton.js";
import Button from "react-bootstrap/Button";
import "../../css/nav.css";

export default function TopNav() {
  const editProfile = () => {
    //Go to profile page
  };
  return (
    <div className="top-nav">
      <img
        src="https://i.imgur.com/rvpLbNz.png"
        alt="fountain logo"
        className="logo"
      />
      <div className="left">
        <Link to="/" className="link">
          FOUNTAIN
        </Link>
      </div>
      <div className="signup-button">
        <LogoutButton />
      </div>
      <div className="signup-button">
        <Button variant="primary" onClick={editProfile}>
          User Profile
        </Button>
      </div>
      <div className="right">
        <Link to="/dashboard" className="link">
          Home
        </Link>
      </div>
    </div>
  );
}
