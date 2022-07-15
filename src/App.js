import Login from "./pages/login/Login";
import Topbar from "./components/topbar/Topbar";
import Homepage from "./pages/homepage/Homepage";
import Write from "./pages/write/Write";
import Settings from "./pages/settings/Settings";
import Register from "./pages/register/Register";
import Single from "./pages/single/Single";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  const currentUser = false;
  return (
    <Router>
      <Topbar />
      <Routes>
        <Route exact path="/" element={<Homepage />} />
        <Route path="/posts" element={<Homepage />}/>
        <Route path="/register" element={currentUser ? <Homepage /> : <Register />}/>
        <Route path="/login" element={currentUser ? <Homepage /> : <Login />}/>
        <Route path="/post/:id" element={<Single />}/>
        <Route path="/write" element={currentUser ? <Write /> : <Login />}/>
        <Route path="/settings" element={currentUser ? <Settings /> : <Login />}/>
      </Routes>

    </Router>
  );
}

export default App;