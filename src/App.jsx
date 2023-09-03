import { useState } from "react";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar.jsx";
import Home from "./Components/Home/Home.jsx";
import Search from "./Components/Search/Search.jsx";
import Trending from "./Components/Trending/Trending";
import Sellers from "./Components/Sellers/Sellers";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Search />
      <Trending />
      <Sellers />
      
      {/* auctions */}
      {/* reviews */}
    </>
  );
}

export default App;
