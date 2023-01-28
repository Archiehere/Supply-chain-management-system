import Nav from "../../../navbar/navbar";
import Input from "../../../Authentication/components/authinput";
import { useEffect, useState } from "react";
import './Items.css'
import BaseUrl from "../../../util/BaseUrl";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';

function AddItems(){
var accesstoken=localStorage.getItem("accesstoken");
const [commodity , setcommodity] = useState('');
const [volm , setVolm] = useState('');
const [price , setPrice] = useState('');
const [quantity , setQuantity] = useState('');
const [categories , setcategories] = useState([]);
const [commodities , setcommodities] = useState([]);
const [category , setcategory] = useState('');

// useEffect(()=>{BaseUrl.get("/i/categories")},[]);
var accesstoken = localStorage.getItem("accesstoken");
const config ={
headers:{
Authorization:`Bearer ${accesstoken}`,
}
}

useEffect(()=>{
    BaseUrl.get('/i/categories',config)
    .then((res)=>
    {
      console.log(res);
      setcategories(res.data.categories);
    //   setreload(true);
    })
    .catch((err)=>{
      console.log(err);
    })
  },[])


  useEffect(()=>{
    BaseUrl.get(`/i/commo?commodity=${category}`,config)
    .then((res)=>
    {
      console.log(res);
      setcommodities(res.data.commodities);
    //   setreload(true);
    })
    .catch((err)=>{
      console.log(err);
    })
  },[category])  
const Navhandler = useNavigate();

function handlecategory(e){
    setcategory(e.target.value);
}

function handlecommodity(e){
    setcommodity(e.target.value);
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

var id =localStorage.getItem("ItemId");
function handleApi(){
    BaseUrl.put("/i/?warehouseId=" +id , {
    commodity:commodity ,
    category:category, 
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
{/* <Input inp="inputArr" err_id="log" 
value={categories}
onchange={handleName}
type="text" lable='Item Name' placeholder='Enter Item Name' /> */}
<select onChange={handlecategory}  name="month" id="month" >
            
          {
          categories.map((associ,index) => {
            return <option key={index} value={associ}>{associ}</option>
          })
         }
        </select>
</div>
<div id='padder'>
{/* <Input inp="inputArr" err_id="log" 
value={categories}
onchange={handleName}
type="text" lable='Item Name' placeholder='Enter Item Name' /> */}
<select onChange={handlecommodity}  name="month" id="month" >
            
          {
          commodities.map((associ,index) => {
            return <option key={index} value={associ}>{associ}</option>
          })
         }
        </select>
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