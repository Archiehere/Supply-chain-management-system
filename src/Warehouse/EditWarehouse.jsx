import Nav from "../navbar/navbar";
import Input from "../Authentication/components/authinput";
import { useEffect, useState } from "react";
import BaseUrl from "../util/BaseUrl";
import { useNavigate } from "react-router";
import { ToastContainer, toast } from 'react-toastify';

function EditWarehouse(){

    const [arr , setArr] = useState([]);
    const [loading,setLoading] = useState(false)
    const Navhandler = useNavigate();
    let token= localStorage.getItem("accesstoken")
    const config ={
        headers:{
          Authorization:`Bearer ${token}`,
        }
      }

      let item = localStorage.getItem("ItemId");
useEffect(()=>{
BaseUrl.get(`/w/onewarehouse?warehouseId=${item}` , config)
.then((res)=>{
    console.log(res);
    console.log(res.data.warehouse.name);
    // setArr(res.data.warehouse);
    setName(res.data.warehouse.name)
    setVolm(res.data.warehouse.max_volume)
})
.catch((err)=>{
    console.log(err);
    toast.error(err.response.data.msg);
})
} ,[])

const [name , setName]= useState();
const [volm , setVolm] = useState();

function handleName(e){
    setName(e.target.value);
}

function handleVolm(e){
    setVolm(e.target.value);
}

function handleApi(){

    setLoading(true);
	
	
		BaseUrl.patch(`/w/warehouse?warehouseId=${item}`,{
			
				"name":name,
				"max_volume":volm
			    },config).then((res) => {
			console.log(res);
            setLoading(false);
			if (res.data.success === true) {
				// localStorage.clear();
				
				Navhandler("/warehouse");
				
			  } else {
				console.log("f");
			  }
			setLoading(false);
		  })
			.catch((err) => {
			  console.log(err);
			  setLoading(false);
              toast.error(err.response.data.msg);
			}
			);

}
return(
    <>
    <Nav />
    <h1 id='Itemhead'>Edit Warehouse</h1>
<div id='createinps'>
    <div id='padder'>
    <label>Warehouse Name</label>
<input type='text' value={name} onChange={handleName} id='inputArr2' placeholder="Enter Warehouse"></input>

</div>
<div id='padder'>
<label>Max Volume</label>
<input type='text' value={volm} onChange={handleVolm} id='inputArr2' placeholder="Enter Volume"></input>
</div>
<button id='SubmitBtn' onClick={handleApi}>Save Changes</button>
</div>
<ToastContainer limit={1} position="top-center" theme="dark" />
    </>
)
}
export default EditWarehouse;