import React from "react";
import '../view.css'
import countries from "../../countries";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEye,
  faEyeSlash,
} from "@fortawesome/fontawesome-free-solid";
import deleteimg from '../images/deleteimg.svg';
import editimg from '../images/edit.svg'
import { useNavigate } from "react-router-dom";
import BaseUrl from "../../util/BaseUrl";
// const edit= require('../images/edit.svg').default

const WarehouseBox = (props) => {
    let token= localStorage.getItem("accesstoken")
    const config ={
        headers:{
          Authorization:`Bearer ${token}`,
        }
      }

const navigate = useNavigate();
function getItems(e){
console.log(e.currentTarget.id);
navigate("/viewItems")
localStorage.setItem("ItemId" ,e.currentTarget.id );
}

function deletefunc(e){
console.log(e.currentTarget.id);
document.getElementById(e.currentTarget.id).style.display="none";
BaseUrl.delete("/w/warehouse?warehouseId="+e.currentTarget.id , config)
.then((res)=>{
    console.log(res);
})
.catch((err)=>{
console.log(err);
})
}

function editfunc(e){
console.log(e.currentTarget.value);
localStorage.setItem("ItemId" ,e.currentTarget.id );
navigate("/editwarehouse")
}
    return <div className="expbox" id={props.id}>
        
        
        <p style={{ fontWeight: '700',fontSize: '1.7vw',color:"F5F5FA"}}>{props.name}</p>
        <img crossorigin="anonymous" src={`https://countryflagsapi.com/png/${props.code}`} alt="flag"></img>
        <p style={{display:"inline",fontWeight: '500',fontSize: '1.2vw',color:"#E6E6EB"}}>{ props.location }  </p>
        <p style={{fontWeight: '400',fontSize: '1vw',color:"#EBEBF0"}}>Max Volume-{props.max_volume} </p>
        <img src={deleteimg} className='deleteimg' id={props.id} onClick={deletefunc}></img>
        <img src={editimg} className='deleteimg2' id={props.id} onClick={editfunc}></img>
        <FontAwesomeIcon
                  icon={faEye}
                  onClick={getItems}
                  id={props.id}
                  className='eyecloseimg'
                />
        </div>
}

export default WarehouseBox;