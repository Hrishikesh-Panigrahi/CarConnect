import React, {useEffect}   from "react";
import "./Sellers.css";

import SellerContainer from "../../Components/SellerContainer/SellerContainer";

import toyota from "../../assets/toyota.jpeg";
import mercedes from "../../assets/mercedes.jpeg";

import Aos from "aos";
import "aos/dist/aos.css"; 

const Sellers = () => {
  const sellers = [
    {
      name: "Toyota",
      price: "$40k",
      image: toyota,
    },
    {
      name: "Mercedes",
      price: "$40k",
      image: mercedes,
    },
    {
      name: "Brand3",
      price: "$40k",
      image: mercedes,
    },
    {
      name: "Brand4",
      price: "$40k",
      image: mercedes,
    },
  ];  
  
  useEffect(() => {
    Aos.init({duration: 3000});
  }, []); 

  return (
    <div className="sellers section">
      <div className="secContainer container">
        <div data-aos='fade-up' className="secHeading grid">
          <h3 className="sectitle">Explore Top sellers in town</h3>

          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>

        <div className="sellerContainer grid">
          {sellers.map((seller, index) => (
            <SellerContainer key={index} seller={seller} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sellers;
