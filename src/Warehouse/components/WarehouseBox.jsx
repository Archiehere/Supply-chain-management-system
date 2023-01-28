import React from "react";
import '../view.css'
import countries from "../../countries";
const edit= require('../images/edit.svg').default

const WarehouseBox = (props) => {
function clickedFunc(e){
console.log(e.currentTarget.id);
}
    return <div className="expbox">
        <div className='boxes' id={props._id} onClick={clickedFunc}>
        <p style={{fontWeight: '700',fontSize: '1.7vw',color:"F5F5FA"}}>{props.name}</p>
        <p style={{fontWeight: '700',fontSize: '1.7vw',color:"F5F5FA"}}>{props._id}</p>
        <p style={{fontWeight: '700',fontSize: '1.2vw',color:"#E6E6EB"}}>{ props.location }  </p>
        <p style={{fontWeight: '400',fontSize: '1vw',color:"#EBEBF0"}}>{props.max_volume} </p>
        </div>
        {/* {(username===viewusername)?<img  className="editicon action" src={edit} />:null} */}
    </div>
}

export default WarehouseBox;