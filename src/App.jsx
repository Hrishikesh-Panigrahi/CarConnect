import { useState } from "react";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar.jsx";
import Home from "./Components/Home/Home.jsx";
import Search from "./Components/Search/Search.jsx";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Search />
      {/* tredning */}
      {/* sellers */}
      {/* auctions */}
      {/* reviews */}
    </>
  );
}

export default App;
