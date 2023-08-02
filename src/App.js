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

function App() {
  useEffect(() => {
    if (window.location.pathname === "/tuiter") {
      window.location.href = "/tuiter/home";
    }
  }, []);

  return (
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
        <Route path="/tuiter/profile" element={<ProfileScreen />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
