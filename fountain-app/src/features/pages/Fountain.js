import React, { useState } from "react";

import Carousel from 'react-bootstrap/Carousel'

import TopNav from "../components/TopNav";
import Wish from "../wish/Wish";
import { dummyWish } from "../wish/dummyWish";
import "../../css/fountain.css";

export default function Fountain() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <div>
      <TopNav />
      <div className = "scroll-menu">
      <Carousel activeIndex={index} onSelect={handleSelect}>
          {dummyWish.map((wish, index) => <Carousel.Item> <div className="wishItem"><Wish wish={wish} key={index} /></div><br/></Carousel.Item>)}
      </Carousel>
      </div>
      <div className = "about">
          <img className = "image" src = "https://i.imgur.com/rvpLbNz.png" alt = " fountain logo"></img>
          <div className = "header">
              FOUNTAIN
              </div>
          <div className = "text">
              <p>
              Designed to help connect those in need with those who are able give. 
              </p>
              <p>
              Start by throwing a wish into Fountain today!
              </p>
              <p>
                  Able to help? Start by creating a post or granting a wish! 
                </p>
              </div>
      </div>
    </div>
  );
}
