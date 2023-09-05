import React, {useEffect} from "react";
import "./Search.css";
import { AiOutlineSearch } from "react-icons/ai";

import Aos from "aos";
import "aos/dist/aos.css"; 

const Search = () => {

  useEffect(() => {
    Aos.init({duration: 3000});
  }, []);

  return (
    <div className="search">
      <div className="secContainer container">
        <h3 data-aos='fade-up' className="title">Which vehicles are you looking for?</h3>
        <div className="searchdiv grid">
          <input data-aos='fade-up' type="text" placeholder="Search" />
          <input data-aos='fade-up' type="number" placeholder="Year" />
          <input data-aos='fade-up' type="text" placeholder="Model" />
          <input data-aos='fade-up' type="number" placeholder="Price" />
          <button className="btn primaryBtn flex">
            <AiOutlineSearch className="icon" />
            <span>Search</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Search;
