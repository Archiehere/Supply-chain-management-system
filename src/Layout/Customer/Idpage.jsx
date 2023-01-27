import Heading from "../../Authentication/components/heading";
import idpageimg from './images/Idpage.svg';
import Input from "../../Authentication/components/authinput";
import Authblock from "../../Authentication/components/authblock";
import Switch from "../../Authentication/components/authswitch";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState } from "react";
import Loader from "../../loader";

function Idpage(){
const Navhandler = useNavigate();
const[Id , setId] = useState("");
const [loading , setLoading] = useState(false);

function handleId(e){
setId(e.target.value)
}
return(<>
<div>
      {loading ? (
        <Loader />
      ) : 

        <div>
          <Heading />
          <img className="illustration" src={idpageimg} alt="" />
          <div id="signup">
          <h1 className='topline'>Track Shipment</h1>
          <p className='middle'>Wanna Track a shipment ?</p>
            <Input
              onchange={handleId}
              type="text"
              lable="Shipping I'd"
              placeholder="Enter Shipping I'd"
            //   message="Enter Valid Email Address"
            //   err_id="sign"
              inp="signb"
            />
            <Authblock 
            // onclick={handleapi} 
            name="Track" />
            <Switch
              status="Already"
              action="Log In"
              destination={() => Navhandler("/login")}
            />
          </div>
          <ToastContainer limit={1} position="top-center" theme="dark" />
        </div>
    } 
    </div>
</>)
}
export default Idpage;