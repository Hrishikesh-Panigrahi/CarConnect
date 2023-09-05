// SellerContainer.jsx
import React, {useEffect} from "react";
import "./SellerContainer.css"; // Create a CSS file for styling
import Aos from "aos";
import "aos/dist/aos.css"

const SellerContainer = ({ seller }) => {  
  
  useEffect(() => {
    Aos.init({duration: 3000});
  }, [])
  
  return (
    <div data-aos='fade-up' className= "singleSeller flex">
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
