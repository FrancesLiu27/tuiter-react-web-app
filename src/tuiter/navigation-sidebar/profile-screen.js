import Nav from "../../nav";
import NavigationSidebar from ".";
import WhoToFollowListItem from "../who-to-follow-list/who-to-follow-list-item";
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { profileThunk, logoutThunk, updateUserThunk }
  from "../services/auth-thunks";

function ProfileScreen() {
 const { currentUser } = useSelector((state) => state.user);
 const [ profile, setProfile ] = useState(currentUser);
 const dispatch = useDispatch();
 const navigate = useNavigate();
 const save = async () => { 
  await dispatch(updateUserThunk(profile)); 
window.alert("Sucessfully saved!");};

   const handleLogin = () => {  
    navigate("/tuiter/login");
 };

    const handleRegister = () => {  
    navigate("/tuiter/register");
 };

 return (
  <div>
   <h1>Profile Screen</h1>
   {profile && (<div>
     <div>
      <label>First Name</label>
      <input type="text" value={profile.firstName}
       onChange={(event) => {
        const newProfile = {
         ...profile, firstName: event.target.value,
        };
        setProfile(newProfile);
       }}/>
     </div>
     <div>
      <label>Last Name</label>
      <input type="text" value={profile.lastName}
       onChange={(event) => {
        const newProfile = {
         ...profile, lastName: event.target.value,
        };
        setProfile(newProfile);
       }}/>
     </div></div>
   )}
   {profile? (
   <div>
   <button
    onClick={() => {
      dispatch(logoutThunk());
      window.alert("Sucessfully logged out!");
      navigate("/tuiter/login");
    }}>                   Logout</button>
   <button onClick={save}>Save  </button>
   </div>
   ):
   <h2>Please login or sign up first to edit profile</h2>
   }
    <button className="btn btn-primary mt-2"
           onClick={handleRegister}
           style={{ visibility: profile ? 'hidden' : 'visible' }}>
     Register
   </button>
      <br/>
    <button className="btn btn-primary mt-2"
           onClick={handleLogin}
           style={{ visibility: profile ? 'hidden' : 'visible' }}>
     Login
   </button>
   </div>
 );
}
export default ProfileScreen;