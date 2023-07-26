import { BrowserRouter, Routes, Route, Link, Navigate } from "react-router-dom";
import Labs from "./labs";
import HelloWorld from "./labs/a3/hello-world";
import Tuiter from "./tuiter";
import HomeScreen from "./tuiter/navigation-sidebar/home-screen";
import BookmarksScreen from "./tuiter/navigation-sidebar/bookmarks-screen";
import ExploreScreen from "./tuiter/navigation-sidebar/explore-screen";
import ProfileScreen from "./tuiter/navigation-sidebar/profile-screen";

function App() {
  return (
    <BrowserRouter>
      <div className="container">
          <div>
            <Link to="/hello">http://localhost:3000/hello</Link><br/>
            Hello World!
          </div>
          <div>
            <Link to="/labs">http://localhost:3000/labs</Link> <br/>
            <h1>Assignment3</h1> <br/>
          </div>
          <div>
            <Link to="/tuiter">http://localhost:3000/tuiter</Link><br/>
            <h1>Tuiter</h1> <br/>
          </div>
        <Routes>
          <Route path="/" element={<Navigate to="/labs"/>}/>
          <Route path="/hello" element={<HelloWorld />} />
          <Route path="/labs" element={<Labs />} />
          <Route path="/tuiter" element={<Tuiter />} />
           <Route path="/tuiter/home" element={<HomeScreen />} />
            <Route path="/tuiter/explore" element={<ExploreScreen />} />
            <Route path="/tuiter/bookmarks" element={<BookmarksScreen />} />
            <Route path="/tuiter/profile" element={<ProfileScreen />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;