import React, { useState } from "react";
import './navbar.css'
import { useNavigate } from "react-router-dom";
import axios from "axios";
const logo = require("../Authentication/images/Profoliologo.svg").default;
const home = require("./icons/home.svg").default;
const msg = require("./icons/msg.svg").default;
const noti = require("./icons/noti.svg").default;
const network = require("./icons/network.svg").default;
const search = require("./icons/search.svg").default;
const job = require("./icons/job.svg").default;
const work = require("./icons/work.svg").default;
const signOut = require("./icons/signOut.svg").default;

const Nav = () => {
    var accesstoken=localStorage.getItem("accesstoken");
    const username = sessionStorage.getItem("username") || ""
    const viewusername = sessionStorage.getItem("viewusername") || ""
    const avatar = sessionStorage.getItem("avatar") || ""
    const config ={
        headers:{
          Authorization:`Bearer ${accesstoken}`,
        }
    }
    function refresh (){
        if (username!=viewusername)
        window.location.reload()
    }

    const Navhandler = useNavigate();
    return <div id="navbar">
        <div id="navlogo" className="navitem"><img id="navlogoimg" className="navimg" src={logo} alt="logo" />व्यापार-E</div>
        <div onClick={()=>{ Navhandler("/warehouse")}} className="navitem"><img className="navimg" src={home} alt="home" />Warehouse</div>
        {/* <div onClick={()=>{ Navhandler("/network/recieved")}} className="navitem"><img className="navimg" src={network} alt="network" />Networks</div> */}
        <div className="navitem"><img className="navimg" src={work} alt="job" />Shipment</div>
        <div className="navitem"><img className="navimg" src={msg} alt="msg" />Orders</div>
        {/* <div className="navitem"onClick={()=>{;Navhandler("/search")}}><img className="navimg" src={search} alt="search" />Search</div> */}
        {/* <div className="navitem"><img className="navimg" src={noti} alt="noti" />Notification</div> */}
        {/* <div className="navitem" onClick={()=>{sessionStorage.setItem('viewusername',username);Navhandler("/account")}} ><img id="accountimg" className="navimg" src={avatar} alt="ava" />My Account</div> */}
        <div className="navitem"><img className="navimg" src={job} alt="job" />History</div>
        <div className="navitem" onClick={()=>{localStorage.clear();sessionStorage.clear();Navhandler('/')}}><img className="navimg" src={signOut} alt="job" />Sign out</div>
    </div>
}

export default Nav;