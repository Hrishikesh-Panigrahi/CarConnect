import React from "react";
import "./Home.css";
import homepage from "../../assets/homepage.png";
const Home = () => {
  return (
    <div className="home">
      <div className="secContainer">
        <div className="homeText">
          <span className="homeSpan">Meet your new car</span>
          <h1 className="homeTitle">Honda civic type R</h1>
          <div className="btns flex">
            <button className="btn">More details</button>
            <button className="btn primaryBtn">Test drive</button>
          </div>
        </div>

        <div className="homeImage">
          <img src={homepage} alt="Home Image" />
        </div>
      </div>
    </div>
  );
};

export default Home;
