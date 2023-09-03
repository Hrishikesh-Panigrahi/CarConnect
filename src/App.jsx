import { useState } from "react";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar.jsx";
import Home from "./Pages/Home/Home.jsx";
import Search from "./Components/Search/Search.jsx";
import Trending from "./Pages/Trending/Trending";
import Sellers from "./Pages/Sellers/Sellers";
import Auction from "./Pages/Auction/Auction";
import Review from "./Pages/Review/Review";
import Footer from "./Pages/Footer/Footer"
function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Search />
      <Trending />
      <Sellers />
      <Auction />
      <Review />
      <Footer/>
      
    </>
  );
}

export default App;
