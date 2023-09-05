import React from "react";
import "./Auction.css";

import AuctionCarContainer from "../../Components/AuctionCarContainer/AuctionCarContainer";

import { BsArrowLeftShort, BsArrowRightShort } from "react-icons/bs";

import AudiA4 from "../../assets/AudiA4.png";
import thar from "../../assets/thar.jpeg";
import honda from "../../assets/honda.jpeg";

const Auction = () => {
  const cars = [
    {
      title: "Used 2019 Audi A4 Premium",
      miles: "20,000 miles",
      features: "AWD / 4 Cylinders",
      price: "$25,000",
      seller: "Buy Car",
      image: AudiA4,
    },

    {
      title: "Used 2019 Thar Premium",
      miles: "20,000 miles",
      features: "AWD / 4 Cylinders",
      price: "$20,000",
      seller: "Buy Car",
      image: thar,
    },

    {
      title: "Used 2019 Honda Premium",
      miles: "20,000 miles",
      features: "AWD / 4 Cylinders",
      price: "$20,000",
      seller: "Buy Car",
      image: honda,
    },
    {
      title: "Used 2019 Car4 Premium",
      miles: "20,000 miles",
      features: "AWD / 4 Cylinders",
      price: "$20,000",
      seller: "Buy Car",
      image: honda,
    },
    {
      title: "Used 2019 Car5 Premium",
      miles: "20,000 miles",
      features: "AWD / 4 Cylinders",
      price: "$20,000",
      seller: "Buy Car",
      image: AudiA4,
    },
    {
      title: "Used 2019 Car6 Premium",
      miles: "20,000 miles",
      features: "AWD / 4 Cylinders",
      price: "$20,000",
      seller: "Buy Car",
      image: thar,
    },
  ];

  return (
    <div className="auction section">
      <div className="secContainer container">
        <div className="secHeading flex">
          <h3 className="secTitle">Active Auction</h3>

          <div className="navBtns flex">
            <BsArrowLeftShort className="icons leftIcon" />
            <BsArrowRightShort className="icons rightIcon" />
          </div>
        </div>

        <div className="carContainer grid">
          {cars.map((car, index) => (
            <AuctionCarContainer
              car={car}
              key={index}
              className={index % 2 === 1 ? "singleCarActive" : ""}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Auction;
