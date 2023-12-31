import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Labs from "./labs";
import HelloWorld from "./labs/a3/hello-world";
import Tuiter from "./tuiter";
import HomeScreen from "./tuiter/navigation-sidebar/home-screen";
import BookmarksScreen from "./tuiter/navigation-sidebar/bookmarks-screen";
import ExploreScreen from "./tuiter/navigation-sidebar/explore-screen";
import ProfileScreen from "./tuiter/navigation-sidebar/profile-screen";
import Assignment3 from "./labs/a3";
import Assignment4 from "./labs/a4";
import { Provider } from "react-redux";
import { configureStore } from '@reduxjs/toolkit';
import tuitsReducer from "./tuiter/reducers/tuits-reducer";
import whoReducer from "./tuiter/reducers/who-reducer";
import LoginScreen from "./tuiter/user/login-screen";
import RegisterScreen from "./tuiter/user/register";
import authReducer from "./tuiter/reducers/auth-reducer";
function App() {
  const store = configureStore(
  {reducer: {who: whoReducer, tuits: tuitsReducer, user: authReducer}});
  useEffect(() => {
    if (window.location.pathname === "/tuiter") {
      window.location.href = "/tuiter/home";
    }
  }, []);

  return (
    <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/labs" />} />
        <Route path="/hello" element={<HelloWorld />} />
        <Route path="/labs" element={<Labs />} />
        <Route path="/labs/a3" element={<Assignment3 />} />
        <Route path="/labs/a4" element={<Assignment4 />} />
        <Route path="/tuiter" element={<Tuiter />} />
        <Route path="/tuiter/home" element={<HomeScreen />} />
        <Route path="/tuiter/explore" element={<ExploreScreen />} />
        <Route path="/tuiter/bookmarks" element={<BookmarksScreen />} />
        <Route path="/tuiter/login" element={<LoginScreen />} />
        <Route path="/tuiter/register" element={<RegisterScreen />} />
        <Route path="/tuiter/profile" element={<ProfileScreen />} />
      </Routes>
    </BrowserRouter>
    </Provider>
  );
}

export default App;
