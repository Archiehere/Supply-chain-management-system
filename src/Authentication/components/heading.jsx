import React from "react";
// import './App.css';
// import logo from "../images/Profoliologo.svg";
// const logo = require("../images/Profoliologo.svg") as string;
const logo= require("../images/Profoliologo.svg").default;

function Heading() {  
    return (
      <header>
        <img src={logo} alt="logo" />
      FR8
      </header>
    );
}
  
export default Heading;
  