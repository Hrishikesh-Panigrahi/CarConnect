// SellerContainer.jsx
import React from "react";
import "./SellerContainer.css"; // Create a CSS file for styling

const SellerContainer = ({ seller }) => {
  return (
    <div className="singleSeller flex">
      <div className="imgDiv flex">
        <img src={seller.image} alt="" className="img" />
      </div>
      <span className="info">
        <h4 className="name">{seller.name}</h4>
        <p>from {seller.price}</p>
      </span>
    </div>
  );
};

export default SellerContainer;
