import React from 'react';
import "../../css/wish.css"; 
import Button from 'react-bootstrap/Button'; 

export default function DashboardWish({wish}){
    return(
        <div className = "dashboardwish">
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
             <Button variant="primary"> Edit </Button>
            </div>
        </div>
    )
}