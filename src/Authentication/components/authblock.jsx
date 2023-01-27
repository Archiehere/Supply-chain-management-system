import React from "react";


// type authprops ={
//     name:string
//     onclick?:any
// }

const Authblock = (props) => {
    return <button className="authbox" onClick={props.onclick} id = "authblock">{props.name}</button>
}

export default Authblock;