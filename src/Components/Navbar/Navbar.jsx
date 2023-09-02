import React from "react";
import "./Navbar.css";
import logo from "../../assets/logo.png";

import { IoIosCloseCircle } from "react-icons/io";
import { TbGridDots } from "react-icons/tb";

const Navbar = () => {
  return (
    <div className="header">
      <div className="logodiv">
        <img className="logo" src={logo} alt="logo" />
      </div>

      <div className="navbar">
        <div className="menu">
          <li className="listitem">
            <a href="#" className="link">
              Used Cars
            </a>
          </li>

          <li className="listitem">
            <a href="#" className="link">
              New Cars
            </a>
          </li>

          <li className="listitem">
            <a href="#" className="link">
              Auctions
            </a>
          </li>

          <li className="listitem">
            <a href="#" className="link">
              Sell Car
            </a>
          </li>
        </div>
        <IoIosCloseCircle className="icon closeIcon" />
      </div>

      <div className="signUp flex">
        <div className="text">Sign Up</div>
        <TbGridDots className="icon toggleNavbarIcon" />
      </div>
    </div>
  );
};

export default Navbar;
