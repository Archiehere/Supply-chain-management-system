import Heading from "../components/heading";
import splash from '../images/splash.svg';
import './Splash.css';
import Authblock from "../components/authblock";
import { useNavigate } from "react-router-dom";

function Splash(){
const Navhandler = useNavigate()
return(<>
<Heading />
<div id='buttondiv'>
<div id='flexdiv'>
<button id='splashbtn' onClick={()=>Navhandler('/login')}>Login</button>
<p id='splashpara'>Or</p>
<button id='splashbtn' onClick={()=>Navhandler('/signup')}>Signup</button>
</div>
<hr id='splashHr'></hr>
<h2 id='splashHead' onClick={()=>Navhandler('/customerPage')}>Track A Shipment ?</h2>
</div>
<img className='svgsetpass' id='svg3' src={splash} alt="" />
</>)
}
export default Splash;