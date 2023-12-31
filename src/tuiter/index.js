import { Routes, Route } from "react-router-dom";
import Nav from "../nav";
import NavigationSidebar from "./navigation-sidebar/index";
import HomeScreen from "./navigation-sidebar/home-screen";
import ExploreScreen from "./navigation-sidebar/explore-screen";
import BookmarksScreen from "./navigation-sidebar/bookmarks-screen";
import ProfileScreen from "./navigation-sidebar/profile-screen";
import WhoToFollowListItem
  from "./who-to-follow-list/who-to-follow-list-item";
import TuitSummaryList from "./tuit-summary-list/index"
import whoReducer from "./reducers/who-reducer";
import { configureStore } from '@reduxjs/toolkit';
import {Provider} from "react-redux";
import tuitsReducer from "./reducers/tuits-reducer";
import authReducer from "./reducers/auth-reducer";
import tuitsArray from './reducers/tuits.json';
import LoginScreen from './user/login-screen';
import RegisterScreen from './user/register';

const store = configureStore(
  {reducer: {who: whoReducer, tuits: tuitsReducer, user: authReducer}});
function Tuiter() {
 return (
  <Provider store={store}>
   <div>
     <Nav />
     <div className="row">
       <div className="col-2">
         <NavigationSidebar />
       </div>
       <div className="col-7">
         <Routes>
            <Route path="/home" element={<HomeScreen />} />
            <Route path="/explore" element={<ExploreScreen />} />
            <Route path="/bookmarks" element={<BookmarksScreen />} />
            <Route path="/profile" element={<ProfileScreen />} />

           <Route path="/login"    element={<LoginScreen    />} />
           <Route path="/register" element={<RegisterScreen />} />
           <Route path="/profile"  element={<ProfileScreen  />} />
         </Routes>
         <TuitSummaryList/>
       </div>
       <div className="col-3">
         <WhoToFollowListItem />
       </div>
     </div>
   </div>
   </Provider>
 );
}
export default Tuiter;