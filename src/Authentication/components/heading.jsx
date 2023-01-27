import React from "react";
import { Link } from "react-router-dom";
// import './App.css';
// import logo from "../images/Profoliologo.svg";
// const logo = require("../images/Profoliologo.svg") as string;
const logo= require("../images/Profoliologo.svg").default;



function Heading() {  
    return (
      <header>
        <img src={logo} alt="logo" />
        <Link to ='/'>व्यापार-E</Link>
      </header>
    );
}
  
export default Heading;
  