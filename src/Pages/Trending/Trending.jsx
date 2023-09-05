import React, {useEffect}   from "react";
import "./Trending.css";

import CarContainer from "../../Components/CarContainer/CarContainer";

import { BsArrowLeftShort, BsArrowRightShort } from "react-icons/bs";

import AudiA4 from "../../assets/AudiA4.png";
import thar from "../../assets/thar.jpeg";
import honda from "../../assets/honda.jpeg";

import Aos from "aos";
import "aos/dist/aos.css"; 

const Trending = () => {
  const cars = [
    {
      title: "Used 2019 Audi A4 Premium",
      miles: "20,000 miles",
      features: "AWD / 4 Cylinders",
      price: "$25,000",
      seller: "Best Seller",
      image: AudiA4,
    },

    {
      title: "Used 2019 Thar Premium",
      miles: "20,000 miles",
      features: "AWD / 4 Cylinders",
      price: "$20,000",
      seller: "Best Seller",
      image: thar,
    },

    {
      title: "Used 2019 Thar Premium",
      miles: "20,000 miles",
      features: "AWD / 4 Cylinders",
      price: "$20,000",
      seller: "Best Seller",
      image: honda,
    },
  ];

  useEffect(() => {
    Aos.init({duration: 3000});
  }, []);

  return (
    <div className="trending">
      <div className="secContainer container">
        <div data-aos='fade-up' className="secHeading flex">
          <h3 className="secTitle">Trending Near You</h3>

          <div className="navBtns flex">
            <BsArrowLeftShort className="icons leftIcon" />
            <BsArrowRightShort className="icons rightIcon" />
          </div>
        </div>

        <div className="carContainer grid">
          {cars.map((car, index) => (
            <CarContainer car={car} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Trending;
