import axios from "axios";
// import { toNamespacedPath } from "node:path/win32";
// import { config } from "process";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import Nav from '../navbar/navbar.jsx'
import { ToastContainer, toast } from 'react-toastify';
import './view.css'
import WarehouseBox from "./components/WarehouseBox";
import BaseUrl from "../util/BaseUrl";
import countries from "../countries.js";

const left = require('./images/leftarrow.svg').default
const add = require('./images/add.svg').default
const edit = require('./images/edit.svg').default
const voidimg = require('./images/void.svg').default

const Warehouse = () => {
  const Navhandler= useNavigate();
  const activestyle={
    color:'#A950FB' ,
    borderLeft:'3px solid #A950FB',
   
}
// const username = sessionStorage.getItem("username") || ""
var accesstoken=localStorage.getItem("accesstoken");
// var viewusername = sessionStorage.getItem("viewusername");

const config ={
  headers:{
    Authorization:`Bearer ${accesstoken}`,
  }
}

let [experience,setexp] = useState([]);
var [reload,setreload] = useState(false);

useEffect(()=>{
  BaseUrl.get('/w/warehouse',config)
  .then((res)=>
  {
    console.log(res);
    setexp(res.data.warehouses);
    setreload(true);
  })
  .catch((err)=>{
    console.log(err);
  })
},)
// useEffect(()=>handlexp(),[])
// console.log(countries.ABW);
// if(username!=viewusername)
//     {
//         var cols=document.getElementsByClassName('action')
//         for(var i = 0; i < cols.length; i++) {
//             cols[i].style.visibility = 'hidden';
//         }
//     }

// },[])
  
// console.log(countries.ABW);
  return (

    
    <div>
      <Nav />
      <div id="viewskill">
        {/* <img src={left} alt='back' onClick={() => Navhandler("/account")}/>  */}
        <span>Warehouses</span> <img className="action" id="add" src={add} alt='add' onClick={() => Navhandler("/createwarehouse/")}></img>
        <div>
            {
                  ((reload && experience.length!==0) ?  experience.map((box)=>{
                    const cont=box.location; const loc=countries[cont]; console.log(loc); 
                    
                    return <WarehouseBox key={box._id} id={box._id} name={box.name} code={cont} location={ loc} filled_volume={box.filled_volume} max_volume={box.max_volume} />
                    }) : <> <img className="voidimage" src={voidimg} /> <br /></>)
            }
        </div>
      </div>
        <ToastContainer position="top-center" theme="dark" />
    </div>
  );
};

export default Warehouse;
