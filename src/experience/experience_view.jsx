import axios from "axios";
import { toNamespacedPath } from "node:path/win32";
import { config } from "process";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import Nav from "../../../navbar/navbar";
import { ToastContainer, toast } from 'react-toastify';
import '../view.css'
import ExperienceBox from "../components/experience";
import BaseUrl from "../../../BaseUrl";
const left = require('../images/leftarrow.svg').default
const add = require('../images/add.svg').default
const edit = require('../images/edit.svg').default

const Experience_View = () => {
  const Navhandler= useNavigate();
  const activestyle={
    color:'#A950FB' ,
    borderLeft:'3px solid #A950FB',
   
}
const username = sessionStorage.getItem("username") || ""
var accesstoken=localStorage.getItem("accesstoken");
var viewusername = sessionStorage.getItem("viewusername");

const config ={
  headers:{
    Authorization:`Bearer ${accesstoken}`,
  }
}

var [experience,setexp] = useState([])

function handlexp (){
  BaseUrl.get('/profile/experience/?username='+viewusername,config)
  .then((res)=>
  {
    console.log(res);
    setexp(res.data);
  })
  .catch((err)=>{
    console.log(err);
  })
}
useEffect(()=>handlexp(),[])

if(username!=viewusername)
    {
        var cols=document.getElementsByClassName('action')
        for(var i = 0; i < cols.length; i++) {
            cols[i].style.visibility = 'hidden';
        }
    }

  return (
    <div>
      <Nav />
      <div id="viewskill">
        <img src={left} alt='back' onClick={() => Navhandler("/account")}/> <span>Experience</span> <img className="action" id="add" src={add} alt='add' onClick={() => Navhandler("/account/experience")}></img>
        <div>
            {
            experience.map((box)=>{return <ExperienceBox key={box.id} box={box} />})
            }
        </div>
      </div>
        <ToastContainer position="top-center" theme="dark" />
    </div>
  );
};

export default Experience_View;