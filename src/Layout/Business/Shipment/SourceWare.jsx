import Nav from "../../../navbar/navbar";
import Input from "../../../Authentication/components/authinput";
import { useState } from "react";
import { useEffect } from "react";
import BaseUrl from "../../../util/BaseUrl";
import ItemsComp from "../Items/ItemsComp";
import WarehouseBox from "../../../Warehouse/components/WarehouseBox";
import countries from '../../../countries.js'
import { useNavigate } from "react-router-dom";

function SourceDest(){
const navigate = useNavigate();
const[source , setSource]= useState();
const[item , setItem]= useState();
const[arr , setArr]= useState([]);

function handleapi(){
navigate("/searchbuss")
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

// useEffect(()=>{

// },[])
// const cont=experience.location; const loc=countries[cont]; console.log(loc); 
// code={cont} ;
// location={loc};

function handleLocation(e){
  console.log(e.currentTarget.id) ;
  console.log(e.currentTarget.className) ;
  localStorage.setItem("sourceid" ,e.currentTarget.id )
  localStorage.setItem("itemid" ,e.currentTarget.className )
  document.getElementById("groupsdiv2").style.display="none";
  setSource(e.currentTarget.id);
  BaseUrl.get("/i/items?warehouseId=" + e.currentTarget.className  ,config)
  .then((res)=>{
     console.log(res);
     console.log(res.data.items);
     setArr(res.data.items);
    //  setreload(true);
  }
  )
  .catch((err)=>{
  console.log(err);
//   toast.error(err.response.data.msg);
  })
}

function handleLocation2(e){
    console.log(e.currentTarget.id) ;
    console.log(e.currentTarget.className) ;
    localStorage.setItem("quantity" ,e.currentTarget.id )
    localStorage.setItem("volume" , e.currentTarget.className)
    document.getElementById("groupsdiv3").style.display="none";
    setItem(e.currentTarget.id);
  }

function getGroup(arr){
return(
   <p id={arr.location} className={arr._id} onClick={handleLocation}>{arr.name} , {arr.location}</p>
)
}

function getItem(arr){
    return(
       <p id={arr.quantity} className={arr.volume} onClick={handleLocation2}>{arr.category} , {arr.price}</p>
    )
    }
function showdiv(){
    document.getElementById("groupsdiv2").style.display="block";
    document.getElementById("groupsdiv3").style.display="none";
}
function showdiv2(){
    document.getElementById("groupsdiv3").style.display="block";
    document.getElementById("groupsdiv2").style.display="none";
}
return(<>
{(experience.length)?<div id='groupsdiv2'>
{experience.map((rest)=>getGroup(rest))}
    </div>:null}

    {(arr.length)?<div id='groupsdiv2'>
{arr.map((rest)=>getItem(rest))}
    </div>:null}
<Nav />
<h1 id='warehead'>Select Source Warehouses</h1>
<div id='createinp'>
    <div id='padder'>
<input id='inputArr2' type='text' placeholder='--select--' value={source} required autoComplete="off"  onClick={showdiv}/>

<input id='inputArr2' type='text' placeholder='--select--' value={item} required autoComplete="off"  onClick={showdiv2}/>
</div>
<button id='SubmitBtn' onClick={handleapi} >Select</button>
</div>
</>)
}
export default SourceDest;