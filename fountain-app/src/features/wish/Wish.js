import React, {useState} from 'react';
import "../../css/wish.css"; 
import StripeCheckout from 'react-stripe-checkout'; 
import Button from "react-bootstrap/Button"; 




export default function Wish({wish}){

    const [product, setProduct] = useState({
        name: "React from FB",
        price: 10,
        productBy: "facebook"
      })
    
      const makePayment = token => {
        const body = {
          token, 
          product
        }
        const headers = {
          "Content-Type": "application/json"
        }
    
        return fetch('http://localhost:3001/payment', {
          method: "POST",
          headers,
          body: JSON.stringify(body)
        }).then(response => {
          console.log("RESPONSE", response)
          const {status} = response
          console.log("STATS", status)
        })
        .catch(error => {
          console.log(error)
        })
      }


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
            {wish.type === "grant" && <div> <Button variant="primary"> Grant Wish </Button> <StripeCheckout stripeKey= 'pk_test_51Ih9sJFg5jYmbghIaQ6eWUiTzceW2HYOd7ZHE52ZgKI9jYAqUziulxm49GUm5lWRhQMgFZsGitKRitSEsHzznZ3Z00tlvTapms' token= {makePayment} name="Donate" amount={product.price * 100}>
                <Button variant="primary">Donate ${product.price} to this cause</Button>
            </StripeCheckout> </div>}
            {wish.type === "offer" && <Button variant="primary"> Contact </Button>}
            </div>

        </div>
    )
}