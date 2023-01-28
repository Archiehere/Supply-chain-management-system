import Nav from "../../../navbar/navbar";
import Input from "../../../Authentication/components/authinput";
import { useState } from "react";
import { useEffect } from "react";
import BaseUrl from "../../../util/BaseUrl";
import ItemsComp from "../Items/ItemsComp";
import WarehouseBox from "../../../Warehouse/components/WarehouseBox";
import countries from '../../../countries.js'
import { useNavigate } from "react-router";

function SourceDest(){

  const Navhandler = useNavigate(); 
  const[source , setSource]= useState();

function handleapi(){
  Navhandler("/searchbuss");
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

function handleLocation(e){
  console.log(e.target.value) ;
  localStorage.setItem("sourceid" ,e.target.value )
  setSource(e.target.value)
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
<select onChange={handleLocation}  name="month" id="month" >
            
            <option value={undefined}>None</option>
          {
          experience.map((associ) => {
            return <option key={`associ${associ.location}`} value={associ.location}>{associ.name} , {associ.location}</option>
          })
         }
        </select>
    </div>
<Nav />
<h1 id='warehead'>Select Source Warehouses</h1>
<div id='createinp'>
<button id='SubmitBtn' onClick={handleapi} >Select</button>
</div>
</>)
}
export default SourceDest;