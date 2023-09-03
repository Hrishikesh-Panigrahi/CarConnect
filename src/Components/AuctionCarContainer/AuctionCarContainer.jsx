import React from "react";
import "./AuctionCarContainer.css";

const AuctionCarContainer = ({ car, className }) => {
  return (
    <div className={`singleAuctionCar grid ${className}`}>
      <div className="imgDiv">
        <img src={car.image} alt="Car Image" />
      </div>
      <h5 className="carTitle">{car.title}</h5>
      <span className="miles">{car.miles}</span>
      <span className="AWD">{car.features}</span>
      <div className="price_buyBtn flex">
        <span className="price">{car.price}</span>
        <span className="buyBtn">{car.seller}</span>
      </div>
    </div>
  );
};

export default AuctionCarContainer;
