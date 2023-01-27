
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProtectedRoute from './util/protectedroute';
import Login from "./Authentication/login/LoginApp";
import SignUp from "./Authentication/Signup/SignUpApp";
import Otp from "./Authentication/otp/emailotpapp";
import Forgot from "./Authentication/forgot/forgotAPP";
import Resetpass from "./Authentication/reset password/resetPassApp"
import Setpass from "./Authentication/set password/setPassApp"
import Splash from "./Authentication/Splash/Splash";
import Idpage from "./Layout/Customer/Idpage";
// import Warehouse from "./Warehouse/warehouse";
import Warehouse from './Warehouse/Warehouse.jsx'
import CreateWarehouse from "./Warehouse/CreateWarehouse";

const App = () => {
  return <BrowserRouter>
  <Routes>
    <Route path="/" element={<Splash />} ></Route>
    <Route path="/login" element={<Login />} ></Route>
    <Route path="/signup" element={<SignUp />}></Route>
    
    <Route path="/otp" element={<Otp />}></Route>
  
    <Route path="/forgot_password" element={<Forgot />}></Route>
    <Route path="/reset_password" element={<Resetpass />}></Route>
    <Route path="/set_password" element={<Setpass />}></Route>

    <Route path="/id_page" element={<Idpage />}></Route>
   
    <Route path="/warehouse" element={<ProtectedRoute><Warehouse /></ProtectedRoute>}></Route>
    <Route path="/createwarehouse" element={<ProtectedRoute><CreateWarehouse /></ProtectedRoute>}></Route>

  </Routes>
</BrowserRouter>;;
};



export default App;
