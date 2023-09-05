import React, {useEffect} from "react";
import "./Home.css";

import Aos from "aos";
import "aos/dist/aos.css";

import homepage from "../../assets/HomePage.png";
const Home = () => {

  useEffect(() => {
    Aos.init({duration: 3000});
  }, []);

  return (
    <div className="home">
      <div className="secContainer">
        <div  data-aos='fade-up' className="homeText">
          <span  className="homeSpan">Meet your new car</span>
          <h1 className="homeTitle">Honda civic type R</h1>
          <div className="btns flex">
            <button  data-aos='fade-right' className="btn">More details</button>
            <button  data-aos='fade-left' className="btn primaryBtn">Test drive</button>
          </div>
        </div>

        <div  data-aos='fade-down-right' className="homeImage">
          <img src={homepage} alt="Home Image" />
        </div>
      </div>
    </div>
  );
};

export default Home;
