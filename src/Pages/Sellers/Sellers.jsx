import React from "react";
import "./Sellers.css";

import SellerContainer from "../../Components/SellerContainer/SellerContainer";

import toyota from "../../assets/toyota.jpeg";
import mercedes from "../../assets/mercedes.jpeg";

const Sellers = () => {
  const sellers = [
    {
      name: "Toyota",
      price: "$40k",
      image: toyota,
    },
    {
      name: "mercedes",
      price: "$40k",
      image: mercedes,
    },
  ];

  return (
    <div className="sellers section">
      <div className="secContainer container">
        <div className="secHeading grid">
          <h3 className="sectitle">Explore Top sellers in town</h3>

          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>

        <div className="sellerContainer">
          {sellers.map((seller, index) => (
            <SellerContainer key={index} seller={seller} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sellers;
