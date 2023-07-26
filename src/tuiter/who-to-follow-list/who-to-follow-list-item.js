import React from "react";

const WhoToFollowListItem = (
 {
   NASA = { userName: 'NASA', handle: 'NASA', avatarIcon: 'nasa.png' },
   tesla = {userName: 'Tesla', handle: 'Tesla', avatarIcon: 'tesla.png'},
   spaceX = {userName: 'SpaceX', handle: 'SpaceX', avatarIcon: 'spaceX.png'}
 }
) => {
 return(
     <div className="list-group" style={{width: "280px"}}>
     <li className="list-group-item" style={{ pointerEvents: "none", userSelect: "none" }}><h3>Who to follow</h3></li>
  <li className="list-group-item" style={{padding: "5px"}}>
   <div className="row">
     <div className="col-2">
       <img className="rounded-circle" height={48} src={require(`./${NASA.avatarIcon}`)}/>
     </div>
     <div className="col-7">
       <div className="fw-bold">{NASA.userName}</div>
       <div>@{NASA.handle}</div>
     </div>
     <div className="col-2">
       <button className="btn btn-primary rounded-pill float-end">Follow</button>
     </div>
   </div>
  </li>

    <li className="list-group-item" style={{padding: "5px"}}>
   <div className="row">
     <div className="col-2">
       <img className="rounded-circle" height={48} src={require(`./${tesla.avatarIcon}`)}/>
     </div>
     <div className="col-7">
       <div className="fw-bold">{tesla.userName}</div>
       <div>@{tesla.handle}</div>
     </div>
     <div className="col-2">
       <button className="btn btn-primary rounded-pill float-end">Follow</button>
     </div>
   </div>
  </li>

    <li className="list-group-item" style={{padding: "5px"}}>
   <div className="row">
     <div className="col-2">
       <img className="rounded-circle" height={48} src={require(`./${spaceX.avatarIcon}`)}/>
     </div>
     <div className="col-7">
       <div className="fw-bold">{spaceX.userName}</div>
       <div>@{spaceX.handle}</div>
     </div>
     <div className="col-2">
       <button className="btn btn-primary rounded-pill float-end">Follow</button>
     </div>
   </div>
  </li>

  </div>
 );
};
export default WhoToFollowListItem;