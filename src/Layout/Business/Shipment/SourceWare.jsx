import Nav from "../../../navbar/navbar";
import Input from "../../../Authentication/components/authinput";
import { useState } from "react";
import { useEffect } from "react";
import BaseUrl from "../../../util/BaseUrl";
import ItemsComp from "../Items/ItemsComp";
import WarehouseBox from "../../../Warehouse/components/WarehouseBox";
import countries from '../../../countries.js'

function SourceDest(){

const[source , setSource]= useState();

function handleapi(){

}
var accesstoken=localStorage.getItem("accesstoken");
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
},[])
// const cont=experience.location; const loc=countries[cont]; console.log(loc); 
// code={cont} ;
// location={loc};

function handleLocation(e){
  console.log(e.currentTarget.id) ;
  localStorage.setItem("sourceid" ,e.currentTarget.id )
  document.getElementById("groupsdiv").style.display="none";
  setSource(e.currentTarget.className)
}

function getGroup(arr){
return(
   <p id={arr.location} className={arr.name} onClick={handleLocation}>{arr.name} , {arr.location}</p>
)
}
function showdiv(){
    document.getElementById("groupsdiv").style.display="block";
}
return(<>
<div id='groupsdiv'>
{experience.map((rest)=>getGroup(rest))}
    </div>
<Nav />
<h1 id='warehead'>Select Source Warehouses</h1>
<div id='createinp'>
    <div id='padder'>
<input id='inputArr2' type='text' placeholder='--select--' value={source} required autoComplete="off"  onClick={showdiv}/>

</div>
<button id='SubmitBtn' onClick={handleapi} >Select</button>
</div>
</>)
}
export default SourceDest;