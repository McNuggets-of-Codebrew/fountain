import React, { useState } from "react";
import "../../css/wish.css";
import Button from "react-bootstrap/Button";
import EditWish from "./EditWish.js";

export default function DashboardWish({ wish }) {
  const [showWish, setShowWish] = useState(false);
  const handleCloseWish = () => setShowWish(false);
  const handleShowWish = () => setShowWish(true);

  const handleClick = () => { 
      handleShowWish(); 
  }
  return (
    <div className="dashboardwish">
      <EditWish wish={wish} show={showWish} handleClose={handleCloseWish} />
      <div className="title">{wish.title}</div>
      <hr />
      <div className="subtitle">{wish.location}</div>
      <div className="subtitle">
        {wish.poster}, ${wish.cost}
      </div>
      <br />
      <div className="description">{wish.description}</div>
      <br />
      <div className="button">
        <Button variant="primary" onClick={handleClick}>
          {" "}
          Edit{" "}
        </Button>
      </div>
    </div>
  );
}
