import React from "react";
import { useNavigate } from "react-router-dom";
// import './App.css';
// import logo from "../images/Profoliologo.svg";
// const logo = require("../images/Profoliologo.svg") as string;
const logo= require("../images/Profoliologo.svg").default;



function Heading() {  
  const NavHandler=useNavigate();
    return (
      <header>
        <img src={logo} alt="logo" />
        <p>व्यापार-E</p>
      </header>
    );
}
  
export default Heading;
  