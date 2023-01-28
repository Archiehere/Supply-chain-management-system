import { useEffect, useState } from "react";
import BaseUrl from "../../../util/BaseUrl";
import axios from "axios";
import ItemsComp from "./ItemsComp"
import Nav from "../../../navbar/navbar";
import add from '../../../Warehouse/images/add.svg';
import { useNavigate } from "react-router-dom";

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
         })
    },[])
  

return(<>
<div>
      <Nav />
      <div id="viewskill">
        <span>Warehouses Items</span> <img className="action" id="add" src={add} alt='add' onClick={() => Navhandler("/additems")}></img>
        <div>
            {
                  (reload? arr.map((box)=>{return <ItemsComp key={box._id} id={box._id} name={box.name} price={box.price} quantity={box.quantity} volume={box.volume}/>}) : null)
            }
        </div>
      </div>
        {/* <ToastContainer position="top-center" theme="dark" /> */}
    </div>
</>)
}
export default ViewItems;