import Nav from "../../nav";
import NavigationSidebar from ".";
import WhoToFollowListItem from "../who-to-follow-list/who-to-follow-list-item";
import Tuits from "../tuits/tuits"
import WhatsHappening from "../whats-happening";
import { configureStore } from '@reduxjs/toolkit';
import {createTuit} from "../reducers/tuits-reducer" 
import { Provider } from "react-redux";
import authReducer from "../reducers/auth-reducer";
function ExploreScreen() {
const store = configureStore({
  reducer: {
    tuits: createTuit,
    user: authReducer
  },
});
 return (
    <Provider store={store}>
  <div>
     <Nav />
     <div className="row">
       <div className="col-2">
         <NavigationSidebar />
       </div>
       <div className="col-7">
       <WhatsHappening/>
        <Tuits/>
       </div>
       <div className="col-3">
         <WhoToFollowListItem />
       </div>
     </div>
   </div></Provider>
 );
}
export default ExploreScreen;