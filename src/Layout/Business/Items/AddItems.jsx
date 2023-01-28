import Nav from "../../../navbar/navbar";
import Input from "../../../Authentication/components/authinput";
import { useState } from "react";
import './Items.css'

function AddItems(){
var accesstoken=localStorage.getItem("accesstoken");
const [name , setName] = useState('');
const [volm , setVolm] = useState('');
const [price , setPrice] = useState('');
const [quantity , setQuantity] = useState('');

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

function handleApi(){

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
value={price}
onchange={handlePrice}
type="text" lable='Price' placeholder='Enter Price per Item' />
</div>
<button id='SubmitBtn' onClick={handleApi}>Add</button>
</div>
</>)
}
export default AddItems;