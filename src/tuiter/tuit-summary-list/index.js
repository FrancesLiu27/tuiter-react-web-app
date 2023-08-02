import React from "react";
import tuitsArray from './tuits.json';
import TuitStats from '../tuits/tuit-stats';

const TuitSummaryList = () => {
 return(
   <ul className="list-group">
     {
       tuitsArray.map(tuit =>
         <TuitSummaryItem2
           key={tuit._id} tuit={tuit}/> )
     }
   </ul>
 );
};

const TuitSummaryItem2 = (
 {
   tuit = {
     "topic": "Space",
     "userName": "SpaceX",
     "time": "2h",
     "title": `Tesla CyberTruck lands on Mars and
               picks up the Curiosity rover on its 6' bed`,
     "image": "tesla.png"
   }
 }
) => {
 return(
      <div className="list-group" style={{width:"650px", position:"relative"}}>
  <li className="list-group-item">
   <div className="row">
     <div className="col-10">
       <div>{tuit.userName} . {tuit.time}</div>
       <div className="fw-bolder">{tuit.topic}</div>
       <div>{tuit.title}</div>
     </div>
     <div className="col-2">
       <img width={70} alt="" className="float-end rounded-3" src={require(`./${tuit.image}`)}/>
     </div>
   </div>
    <TuitStats likes={tuit.likes} replies={tuit.replies} retuits={tuit.retuits} ifIsLiked={tuit.liked}/>
  </li>
  </div>
 );
};

export default TuitSummaryList;
