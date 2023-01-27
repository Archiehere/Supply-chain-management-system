import React from "react";
import axios from "axios";

export default axios.create({
    baseURL:"https://snuh-back.onrender.com/"
    // baseURL:"https://f5b0-2a09-bac1-3680-68-00-ca-151.in.ngrok.io/"
})