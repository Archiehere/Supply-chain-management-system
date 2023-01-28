import { useState } from "react";
import { useEffect } from "react";
import Nav from "../../../navbar/navbar";
import BaseUrl from "../../../util/BaseUrl";

function Shipping(){
var quantity = localStorage.getItem("quantity");
var volume = localStorage.getItem("volume");
var sourceid = localStorage.getItem("sourceid");
var destid = localStorage.getItem("destid");
var id=localStorage.getItem("itemid");
var price = localStorage.getItem("pricepredict");

const [arr , setArr] = useState([]);

var accesstoken = localStorage.getItem("accesstoken");
const config ={
headers:{
Authorization:`Bearer ${accesstoken}`,
}
}

useEffect(()=>{
    BaseUrl.get("/i/items?warehouseId=" +id ,config)
    .then((res)=>{
       console.log(res);
       console.log(res.data.items);
       setArr(res.data.items);
    //    setreload(true);
    }
    )
    .catch((err)=>{
    console.log(err);
    // toast.error(err.response.data.msg);
    })
},[])

function handleapi(){
BaseUrl.post("/w/shipment" , {
sourceId:sourceid , 
destinationId:destid , 
item_qty:quantity , 
item_vol:volume , 
item_commodity:arr.commodity , 
item_category:arr.category,
predicted_price:price
} , config)
}

return(<>
<Nav />
<h1 id='warehead'>Shipment</h1>
<div id='createinp'>
    <div id='padder'>

        <h1>Predicted Price : {price}</h1>
{/* <input id='inputArr2' type='text' placeholder='--select--' value={source} required autoComplete="off"  onClick={showdiv}/> */}

{/* <input id='inputArr2' type='text' placeholder='--select--' value={item} required autoComplete="off"  onClick={showdiv2}/> */}
</div>
<button id='SubmitBtn' onClick={handleapi} >Confirm Shipment</button>
</div>
</>)
}
export default Shipping;