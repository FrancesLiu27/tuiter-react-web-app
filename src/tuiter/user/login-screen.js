import React, { useState } from "react";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { loginThunk } from "../services/auth-thunks";
function LoginScreen() {
 const [username, setUsername] = useState("");
 const [password, setPassword] = useState("");
 const navigate = useNavigate();
 const dispatch = useDispatch();
 const handleLogin = async () => {
        if(username===undefined || username===null || username==="" || password===undefined || password===null || password==="") {
        window.alert("Please enter both username and password"); 
        return;   
    }
    const response = await dispatch(loginThunk({ username, password }));
    if(response.error?.code === "ERR_BAD_REQUEST") {
        window.alert("Credentials are not matched!");
    }
    else{
        window.alert("Login Successfully!");    
        navigate("/tuiter/profile");
    }
 };

  const handleRegister = () => {  
    navigate("/tuiter/register");
 };
 return (
   <div>
   <h1>Login Screen</h1>
   <div className="mt-2">
    <label>Username</label>
    <input className="form-control" type="text" value={username}
     onChange={(event) => setUsername(event.target.value)}/>
   </div>
   <div className="mt-2">
     <label>Password</label>
     <input className="form-control" type="password" value={password}
       onChange={(event) => setPassword(event.target.value)}/>
   </div>
   <button className="btn btn-primary mt-2"
           onClick={handleLogin}>
     Login
   </button>
   <br/>
    <button className="btn btn-primary mt-2"
           onClick={handleRegister}>
     Register
   </button>
  </div>
   );
}
export default LoginScreen;