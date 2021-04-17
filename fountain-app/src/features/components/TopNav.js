import React from "react";
import {Link} from "react-router-dom";
import LoginButton from "./LoginButton.js"; 
import "../../css/nav.css"; 

export default function TopNav(){
    return (
        <div className = "top-nav">
            <img src = "https://i.imgur.com/rvpLbNz.png" alt="fountain logo" className = "logo"/>
            <div className = "left">
            <Link to="/" className="link">Fountain</Link>
            </div>
            <div className = "signup-button">
            <LoginButton/>
            </div>     
            <div className = "right">
                <Link to="/about" className="link">About</Link>
            </div>            
       
        </div>
    )
}   

