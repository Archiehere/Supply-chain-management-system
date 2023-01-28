import React from "react";
// import '../view.css'
// import countries from "../../countries";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEye,
  faEyeSlash,
} from "@fortawesome/fontawesome-free-solid";
import deleteimg from '../..//../Warehouse/images/deleteimg.svg';
// import editimg from '../images/edit.svg'
import { useNavigate } from "react-router-dom";

const ItemsComp = (props) => {
console.log(props);

    return <div className="expbox" id={props.id}>
        <p style={{fontWeight: '700',fontSize: '1.7vw',color:"F5F5FA"}}>{props.commodity}</p>
        <p style={{fontWeight: '700',fontSize: '1.3vw',color:"F5F5FA"}}>{props.category}</p>
        <p style={{fontWeight: '700',fontSize: '1.2vw',color:"#E6E6EB"}}>Price : { props.price } </p>
        <p style={{fontWeight: '400',fontSize: '1vw',color:"#EBEBF0"}}>Quantity : {props.quantity} </p>
        <p style={{fontWeight: '400',fontSize: '1vw',color:"#EBEBF0"}}>Volume : {props.volume} </p>
        <img src={deleteimg} className='deleteimg'></img>
        {/* <img src={editimg} className='deleteimg2'></img> */}
        </div>
}

export default ItemsComp;