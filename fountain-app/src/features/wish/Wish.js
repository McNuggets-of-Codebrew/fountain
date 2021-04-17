import React from 'react';
import "../../css/wish.css"; 
import Button from 'react-bootstrap/Button'; 

export default function Wish({wish}){
    return(
        <div class = "wish">
            <div class = "title">
                {wish.title}
            </div>
            <hr/>
            <div class = "subtitle">
                {wish.location}
            </div>
            <div class="subtitle">
            {wish.poster}, ${wish.cost}
            </div>
            <br/>
            <div class = "description">
                {wish.description}
            </div>
            <br/>
            <div class = "button">
            {wish.type === "grant" && <div> <Button variant="primary"> Grant Wish </Button> <Button variant="primary"> Donate </Button> </div>}
            {wish.type === "offer" && <Button variant="primary"> Contact </Button>}
            </div>
        </div>
    )
}