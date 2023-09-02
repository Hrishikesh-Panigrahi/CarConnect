import React, {useState} from "react";
import "./Navbar.css";
import logo from "../../assets/logo.png";

import { IoIosCloseCircle } from "react-icons/io";
import { TbGridDots } from "react-icons/tb";

const Navbar = () => {
  
  const[navbar, Setnavbar] = useState('navbar')

  const showNavbar = () => {
    Setnavbar('navbar showNavbar')
  }
  
  const removeNavbar = () => {
    Setnavbar('navbar')
  }
  
  return (

    <div className="header">
      <div className="logodiv">
        <img className="logo" src={logo} alt="logo" />
      </div>

      <div className={navbar}>
        <div className="menu">
          <li onClick={removeNavbar} className="listitem">
            <a href="#" className="link">
              Used Cars
            </a>
          </li>

          <li onClick={removeNavbar} className="listitem">
            <a href="#" className="link">
              New Cars
            </a>
          </li>

          <li onClick={removeNavbar} className="listitem">
            <a href="#" className="link">
              Auctions
            </a>
          </li>

          <li onClick={removeNavbar} className="listitem">
            <a href="#" className="link">
              Sell Car
            </a>
          </li>
        </div>
        <IoIosCloseCircle className="icon closeIcon" onClick={removeNavbar}/>
      </div>

      <div className="signUp flex">
        <div className="text">Sign Up</div>
        <TbGridDots className="icon toggleNavbarIcon" onClick={showNavbar} />
      </div>
    </div>
  );
};

export default Navbar;
