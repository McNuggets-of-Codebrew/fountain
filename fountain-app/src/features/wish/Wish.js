import React from 'react';
import "../../css/wish.css"; 
import Button from 'react-bootstrap/Button'; 

export default function Wish({wish}){
    return(
        <div className = "wish">
            <div className = "title">
                {wish.title}
            </div>
            <hr/>
            <div className = "subtitle">
                {wish.location}
            </div>
            <div className ="subtitle">
            {wish.poster}, ${wish.cost}
            </div>
            <br/>
            <div className = "description">
                {wish.description}
            </div>
            <br/>
            <div className = "button">
            {wish.type === "grant" && <div> <Button variant="primary"> Grant Wish </Button> <Button variant="primary"> Donate </Button> </div>}
            {wish.type === "offer" && <Button variant="primary"> Contact </Button>}
            </div>
        </div>
    )
}