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
import SkillBar from 'react-skillbars';
// const edit= require('../images/edit.svg').default
import { ToastContainer, toast } from 'react-toastify';

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
toast.error(err.response.data.msg);
})
}

function editfunc(e){
console.log(e.currentTarget.value);
localStorage.setItem("ItemId" ,e.currentTarget.id );
navigate("/editwarehouse")
}

const Skills = [
  { type: 'Volume Left', level: parseFloat(100-(props.filled_volume/props.max_volume)*100).toFixed(2)  },
  
];

const colors = {
  bar: '#A950FB',
  title: {
    text: '#13131A',
    background: '#A950FB',
  },
};
    return <div className="expbox" id={props.id}>
        
        

        <p style={{ fontWeight: '700',fontSize: '1.7vw',color:"F5F5FA"}}>{props.name}</p>
        
        <p style={{display:"inline",fontWeight: '500',fontSize: '1.2vw',color:"#E6E6EB"}}>{ props.location }  </p>
        <img crossorigin="anonymous" style={{width:"2vw",height:"auto"}} src={`https://countryflagsapi.com/png/${props.code}`} alt="flag"></img>
        
        <p style={{fontWeight: '400',fontSize: '1vw',color:"#EBEBF0"}}>Max Volume-{props.max_volume} </p>
        <br/>
        <SkillBar skills={Skills}  colors={colors} height="2vh" width="2vw" fontSize="10px" />
        <img src={deleteimg} className='deleteimg' id={props.id} onClick={deletefunc}></img>
        <img src={editimg} className='deleteimg2' id={props.id} onClick={editfunc}></img>
        
        <FontAwesomeIcon
                  icon={faEye}
                  onClick={getItems}
                  id={props.id}
                  className='eyecloseimg'
                />
        <ToastContainer limit={1} position="top-center" theme="dark" />
        </div>
}

export default WarehouseBox;