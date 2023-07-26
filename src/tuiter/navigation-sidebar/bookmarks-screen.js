import Nav from "../../nav";
import NavigationSidebar from ".";
import WhoToFollowListItem from "../who-to-follow-list/who-to-follow-list-item";

function ExploreScreen() {
 return (
  <div>
     <Nav />
     <div className="row">
       <div className="col-2">
         <NavigationSidebar />
       </div>
       <div className="col-7">
        <h1>Bookmarks</h1>
       </div>
       <div className="col-3">
         <WhoToFollowListItem />
       </div>
     </div>
   </div>
 );
}
export default ExploreScreen;