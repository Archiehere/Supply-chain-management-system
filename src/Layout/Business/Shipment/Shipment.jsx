import Nav from "../../../navbar/navbar";
import Input from "../../../Authentication/components/authinput";

function Shipment(){

function handleapi(){

}
function handleSource(){

}
function handleDestination(){

}
return(<>
<Nav />
<h1 id='warehead'>Select Warehouses</h1>
<div id='createinp'>
    <div id='padder'>
<Input inp="inputArr" err_id="log" 
onchange={handleSource}
type="text" lable='Source Warehouse' placeholder='Select the Source Warehouse' autoComplete="off"/>
</div>
<div id='padder'>
<Input inp="inputArr" err_id="log" 
onchange={handleDestination}
type="text" lable='Destination Warehouse' placeholder='Enter Max-Volume' />
</div>
<button id='SubmitBtn' onClick={handleapi} >Create</button>
</div>
</>)
}
export default Shipment;