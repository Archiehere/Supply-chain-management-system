import { useEffect, useState } from "react";
import BaseUrl from "../../../util/BaseUrl";
import axios from "axios";
import ItemsComp from "./ItemsComp"
import Nav from "../../../navbar/navbar";
import add from '../../../Warehouse/images/add.svg';
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
const voidimg = require('../../../Warehouse/images/void.svg').default

function ViewItems(){
    var accesstoken = localStorage.getItem("accesstoken");
    const config ={
    headers:{
  Authorization:`Bearer ${accesstoken}`,
    }
}
var id =localStorage.getItem("ItemId");

const [arr , setArr] = useState([]);
var [reload,setreload] = useState(false);
const Navhandler = useNavigate();

    useEffect(()=>{
         BaseUrl.get("/i/items?warehouseId=" +id ,config)
         .then((res)=>{
            console.log(res);
            console.log(res.data.items);
            setArr(res.data.items);
            setreload(true);

         }
         )
         .catch((err)=>{
         console.log(err);
         toast.error(err.response.data.msg);
         })
    },[])
  

return(<>
<div>
      <Nav />
      <div id="viewskill">
        <span>Warehouse's Items</span> <img className="action" id="add" src={add} alt='add' onClick={() => Navhandler("/additems")}></img>
        <div>
            {
                  ((reload && arr.length!==0) ? arr.map((box)=>{return <ItemsComp key={box._id} id={box._id} name={box.name} price={box.price} quantity={box.quantity} volume={box.volume}/>}) :<> <img className="voidimage" src={voidimg} /> <br /></>)
            }
        </div>
      </div>
        {/* <ToastContainer position="top-center" theme="dark" /> */}
        <ToastContainer limit={1} position="top-center" theme="dark" />
    </div>
</>)
}
export default ViewItems;