import React, { useState } from "react";
import { Link } from "react-router-dom";
import LogoutButton from "./LogoutButton.js";
import Button from "react-bootstrap/Button";
import "../../css/nav.css";
import Profile from "../profile/Profile.js";
import CreateWish from "../wish/CreateWish.js";
import {dummyProfile} from "../profile/dummyProfile"; 

export default function TopNav() {
  const [showProfile, setShowProfile] = useState(false);
  const [showCreate, setShowCreate] = useState(false);
  const handleCloseProfile = () => setShowProfile(false);
  const handleShowProfile = () => setShowProfile(true);
  const handleCloseCreate = () => setShowCreate(false);
  const handleShowCreate = () => setShowCreate(true);

  const editProfile = () => {
    handleShowProfile();
  };

  const createWishHandler = () => {
    handleShowCreate();
  };

  return (
    <div className="top-nav">
      <CreateWish show={showCreate} handleClose={handleCloseCreate} />
      <Profile profile = {dummyProfile} show={showProfile} handleClose={handleCloseProfile} />
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
      <div className="signup-button">
        <Button variant="primary" onClick={createWishHandler}>
          Create Wish
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
