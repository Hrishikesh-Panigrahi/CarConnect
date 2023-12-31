// CarContainer.jsx
import React, {useEffect}   from "react";
import "./CarContainer.css"; // Create a CSS file for styling

import Aos from "aos";
import "aos/dist/aos.css";  

const CarContainer = ({ car }) => {
  useEffect(() => {
    Aos.init({duration: 3000});
  }, []); 

  return (
    <div data-aos='fade-up' className="singleCar grid">
      <div className="imgDiv">
        <img src={car.image} alt="Car Image" />
      </div>
      <h5 className="carTitle">{car.title}</h5>
      <span className="miles">{car.miles}</span>
      <span className="AWD">{car.features}</span>
      <div className="price_seller flex">
        <span className="price">{car.price}</span>
        <span className="seller">{car.seller}</span>
      </div>
    </div>
  );
};

export default CarContainer;
