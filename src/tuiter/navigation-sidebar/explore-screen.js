import Nav from "../../nav";
import NavigationSidebar from ".";
import WhoToFollowListItem from "../who-to-follow-list/who-to-follow-list-item";
import TuitSummaryItem from "../tuit-summary-list/tuit-summary-item";
import { AiOutlineSearch } from "react-icons/ai";
import { GoGear } from "react-icons/go";
import "./index.css";

function ExploreScreen() {
 return (
  <div>
     <Nav />
     <div className="row">
       <div className="col-2">
         <NavigationSidebar />
       </div>
       <div className="col-7">



        <div className="content-container">

     <div className="row" >
       <div className="col-11 position-relative">
         <input placeholder="Search Tuiter"
                className="form-control rounded-pill ps-5"/>
         <AiOutlineSearch className="fs-3 position-absolute 
                       wd-nudge-up"/>
       </div>
       <div className="col-1">
         <GoGear className="wd-top-4 float-end
                       fs-3 position-relative"/>
       </div>
     </div>
     <ul className="nav nav-pills mb-2 mt-2">
       <li className="nav-item">
         <a className="nav-link active">For You</a>
       </li>
       <li className="nav-item">
         <a className="nav-link">Trending</a>
       </li>
       <li className="nav-item">
         <a className="nav-link">News</a>
       </li>
     </ul>
     <div className="position-relative mb-2">
       <img src={require(`./cypertruck.png`)} className="w-100" style={{width:"auto"}}/>
       <h1 className="position-absolute wd-nudge-up text-white">
         CyperTruck CyperLife</h1>
     </div>

        </div>
        
        <TuitSummaryItem/>
       </div>
       <div className="col-3">
         <WhoToFollowListItem />
       </div>
     </div>
   </div>
 );
}
export default ExploreScreen;