import React from "react";
import {Link} from "react-router-dom";
import LoginButton from "./loginButton.js"; 
import "../../css/nav.css"; 

export default function TopNav(){
    return (
        <div className = "top-nav">
            <img src = "https://i.imgur.com/rvpLbNz.png" alt="fountain logo" className = "logo"/>
            <div className = "left">
            <Link to="/" className="link">FOUNTAIN</Link>
            </div>
            <div className = "signup-button">
            <LoginButton/>
            </div>            
        </div>
    )
}   

