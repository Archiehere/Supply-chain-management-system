import Nav from "../../../navbar/navbar";
import Input from "../../../Authentication/components/authinput";
import { useState } from "react";
import { useEffect } from "react";
import BaseUrl from "../../../util/BaseUrl";
import ItemsComp from "../Items/ItemsComp";
import WarehouseBox from "../../../Warehouse/components/WarehouseBox";
import countries from '../../../countries.js';
import { useNavigate } from "react-router-dom";

function SearchBuss(){

const[search , setSearch]= useState();
const navigate = useNavigate();

var accesstoken=localStorage.getItem("accesstoken");
const config ={
  headers:{
    Authorization:`Bearer ${accesstoken}`,
  }
}

let [experience,setexp] = useState([]);
var [reload,setreload] = useState(false);

function handleapi(e){
  BaseUrl.get('/w/search?find='+ e.target.value ,config)
  .then((res)=>
  {
    console.log(res);
    setexp(res.data.businesses);
    setreload(true);
  })
  .catch((err)=>{
    console.log(err);
  })
}
// const cont=experience.location; const loc=countries[cont]; console.log(loc); 
// code={cont} ;
// location={loc};

function handleId(e){
  console.log(e.currentTarget.id) ;
  localStorage.setItem("businessid" ,e.currentTarget.id );
  navigate('/destware');
}

function getGroup(arr){
return(
    <div className='borderpara'>
   <p id={arr._id} className={arr.business_name} onClick={handleId}>{arr.business_name}</p>
   </div>
)
}

return(<>

{(experience.length)?<div id='groupsdiv2'>{experience.map((rest)=>getGroup(rest))}</div>:null}
{/* {(reload)?experience.map((rest)=>getGroup(rest)):null} */}

<Nav />
<h1 id='warehead'>Search Another Bussiness</h1>
<div id='createinp'>
    <div id='padder'>
<input id='inputArr3' type='text' placeholder='Search Another Bussiness' required autoComplete="off"  onChange={handleapi}/>
</div>
{/* <button id='SubmitBtn' onClick={handleapi} >Select</button> */}
</div>
</>)
}
export default SearchBuss;