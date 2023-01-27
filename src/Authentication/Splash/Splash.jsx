import Heading from "../components/heading";
import splash from '../images/splash.svg';
import './Splash.css';
import Authblock from "../components/authblock";

function Splash(){
return(<>
<Heading />
{/* <img className='svgsetpass' id='svg4' src={splash} alt="" /> */}
<div id='buttondiv'>
<div id='flexdiv'>
<button id='splashbtn'>Login</button>
<p id='splashpara'>Or</p>
<button id='splashbtn'>Signup</button>
</div>
<hr id='splashHr'></hr>
<h2 id='splashHead'>Track A Shipment ?</h2>
</div>
<img className='svgsetpass' id='svg3' src={splash} alt="" />
</>)
}
export default Splash;