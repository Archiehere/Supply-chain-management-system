import Nav from "../../../navbar/navbar";
import Input from "../../../Authentication/components/authinput";
import { useState } from "react";
import './Items.css'
import BaseUrl from "../../../util/BaseUrl";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';

function AddItems(){
var accesstoken=localStorage.getItem("accesstoken");
const [name , setName] = useState('');
const [volm , setVolm] = useState('');
const [price , setPrice] = useState('');
const [quantity , setQuantity] = useState('');

const Navhandler = useNavigate();

function handleName(e){
    setName(e.target.value);
}

function handleVolm(e){
    setVolm(e.target.value);
}

function handlePrice(e){
    setPrice(e.target.value);
}

function handleQuantity(e){
    setQuantity(e.target.value);
}
var accesstoken = localStorage.getItem("accesstoken");
const config ={
headers:{
Authorization:`Bearer ${accesstoken}`,
}
}
var id =localStorage.getItem("ItemId");
function handleApi(){
    BaseUrl.put("/i/?warehouseId=" +id , {
    name:name , 
    price:price,
    quantity:quantity ,
    volume:volm
    },config)
    .then((res)=>{
       console.log(res);
       Navhandler("/viewItems");
    }
    )
    .catch((err)=>{
    console.log(err);
    toast.error(err.response.data.msg);
    })
}

return(<>
<Nav />
<h1 id='Itemhead'>Add Items</h1>
<div id='createinps'>
    <div id='padder'>
<Input inp="inputArr" err_id="log" 
value={name}
onchange={handleName}
type="text" lable='Item Name' placeholder='Enter Item Name' />
</div>
<div id='padder'>
<Input inp="inputArr" err_id="log" 
value={volm}
onchange={handleVolm}
type="text" lable='Item Volume' placeholder='Enter Volume of an item' />
</div>
<div id='padder'>
<Input inp="inputArr" err_id="log" 
value={price}
onchange={handlePrice}
type="text" lable='Price' placeholder='Enter Price per Item' />
</div>
<div id='padder'>
<Input inp="inputArr" err_id="log" 
value={quantity}
onchange={handleQuantity}
type="text" lable='Quantity' placeholder='Enter Quantity of Item' />
</div>
<button id='SubmitBtn' onClick={handleApi}>Add</button>
<ToastContainer limit={1} position="top-center" theme="dark" />
</div>
</>)
}
export default AddItems;