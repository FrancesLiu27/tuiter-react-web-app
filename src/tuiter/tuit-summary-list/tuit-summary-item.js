import React from "react";
const TuitSummaryItem = (
 {
   tuit = {
     "topic": "Space",
     "userName": "SpaceX",
     "time": "2h",
     "title": `Tesla CyberTruck lands on Mars and
               picks up the Curiosity rover on its 6' bed`,
     "image": "spaceX.png"
   },
   tuit2 = {
     "topic": "Tesla",
     "userName": "Tesla",
     "time": "2h",
     "title": `Tesla CyberTruck lands on Mars and
               picks up the Curiosity rover on its 6' bed`,
     "image": "tesla.png"
   },
    tuit3 = {
     "topic": "NASA",
     "userName": "NASA",
     "time": "2h",
     "title": `Tesla CyberTruck lands on Mars and
               picks up the Curiosity rover on its 6' bed`,
     "image": "NASA.png"
   }
 }
) => {
 return(
  <div className="list-group" style={{width:"auto", position:"relative"}}>
  <li className="list-group-item">
   <div className="row">
     <div className="col-10">
       <div>{tuit.userName} . {tuit.time}</div>
       <div className="fw-bolder">{tuit.topic}</div>
       <div>{tuit.title}</div>
     </div>
     <div className="col-2">
       <img width={70} alt="spaceX" className="float-end rounded-3" src={require(`./${tuit.image}`)}/>
     </div>
   </div>
  </li>

  <li className="list-group-item">
   <div className="row">
     <div className="col-10">
       <div>{tuit2.userName} . {tuit2.time}</div>
       <div className="fw-bolder">{tuit2.topic}</div>
       <div>{tuit2.title}</div>
     </div>
     <div className="col-2">
       <img width={70} alt="spaceX" className="float-end rounded-3" src={require(`./${tuit2.image}`)}/>
     </div>
   </div>
  </li>

    <li className="list-group-item">
   <div className="row">
     <div className="col-10">
       <div>{tuit3.userName} . {tuit3.time}</div>
       <div className="fw-bolder">{tuit3.topic}</div>
       <div>{tuit3.title}</div>
     </div>
     <div className="col-2">
       <img width={70} alt="spaceX" className="float-end rounded-3" src={require(`./${tuit3.image}`)}/>
     </div>
   </div>
  </li>

  </div>
 );
};
export default TuitSummaryItem;